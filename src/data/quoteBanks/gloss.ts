import type { FeedCategory } from '../types';

const LABEL: Record<FeedCategory, string> = {
  philosophy: 'philosophy',
  physics: 'physics and the natural world',
  math: 'mathematics',
  psychology: 'how minds, habits, and relationships work',
  misc: 'general life, work, and learning',
};

function firstWords(s: string, n: number): string {
  const w = s.trim().split(/\s+/);
  return w.slice(0, n).join(' ') || s.slice(0, 40);
}

/** Explanations for “mass collection” one-liners where we don’t hand-curate a note. */
export function genericGloss(
  text: string,
  attribution: string,
  category: FeedCategory
): { explanation: string; eli5: string } {
  const lead = firstWords(text, 8);
  return {
    explanation: `A line widely reprinted in popular quote roundups, often under “${attribution}.” In ${LABEL[category]}-flavored reading it works as a compact hook — a starting point, not a complete argument. (Mass-market attributions are often shaky, so read as folklore rather than as careful scholarship.)`,
    eli5: `A well-known one-liner about “${lead}…”. The app files it in ${category} to mix more different voices and cuts down on the same few quotes showing up on repeat.`,
  };
}
