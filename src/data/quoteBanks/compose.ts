import type { FeedCategory } from '../types';
import { FEED_CATEGORIES } from '../types';
import type { QuoteRow } from '../curatedQuotes';
import { CURATED_QUOTES } from '../curatedQuotes';
import inspo from '../vendor/inspirational-quotes.json';
import { bestCategory, scoreFor } from './classify';
import { genericGloss } from './gloss';
import { syntheticRow } from './syntheticPhrases';

type Inspo = { text: string; from: string };

const RAW: Inspo[] = inspo as Inspo[];
const PER_TOPIC = 1000;

function normalize(t: string): string {
  return t.trim().toLowerCase().replace(/\s+/g, ' ');
}

function addUnique(seen: Set<string>, out: QuoteRow[], row: QuoteRow): void {
  const k = normalize(row.text);
  if (seen.has(k)) return;
  seen.add(k);
  out.push(row);
}

function buildCategory(cat: FeedCategory): readonly QuoteRow[] {
  const seen = new Set<string>();
  const out: QuoteRow[] = [];

  for (const row of CURATED_QUOTES[cat]) {
    addUnique(seen, out, row);
  }

  const candidates = RAW.map((q) => ({
    q,
    s: bestCategory(q) === cat ? scoreFor(q, cat) : -1,
  }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => b.s - a.s);

  for (const { q } of candidates) {
    if (out.length >= PER_TOPIC) break;
    addUnique(seen, out, {
      text: q.text,
      attribution: q.from,
      ...genericGloss(q.text, q.from, cat),
    });
  }

  let k = 0;
  while (out.length < PER_TOPIC) {
    if (k > 32_000) {
      throw new Error(`synthetic aphorism fill failed for ${cat}`);
    }
    const before = out.length;
    const row = syntheticRow(cat, k);
    k += 1;
    addUnique(seen, out, row);
    if (out.length === before) {
      /* Extremely rare collision with a prior quote; try the next aphorism index. */
    }
  }

  return out.slice(0, PER_TOPIC) as readonly QuoteRow[];
}

const banks: Record<FeedCategory, readonly QuoteRow[]> = {
  philosophy: buildCategory('philosophy'),
  physics: buildCategory('physics'),
  math: buildCategory('math'),
  psychology: buildCategory('psychology'),
  misc: buildCategory('misc'),
};

for (const c of FEED_CATEGORIES) {
  if (banks[c].length !== PER_TOPIC) {
    throw new Error(`quote bank for ${c} has ${banks[c].length}, expected ${PER_TOPIC}`);
  }
}

export const EXPANDED_QUOTE_BANK: Record<FeedCategory, readonly QuoteRow[]> = banks;
