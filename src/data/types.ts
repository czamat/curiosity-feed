export type FeedCategory = 'philosophy' | 'physics' | 'math' | 'psychology' | 'misc';

export type FeedCardKind = 'quote' | 'fact' | 'idea' | 'concept';

/** All categories, stable order for UI and storage. */
export const FEED_CATEGORIES: readonly FeedCategory[] = [
  'philosophy',
  'physics',
  'math',
  'psychology',
  'misc',
] as const;

export interface FeedItem {
  id: string;
  category: FeedCategory;
  /** Display mode: quote uses attribution styling when set; others use body styling. */
  kind: FeedCardKind;
  text: string;
  /** Short context: why the quote matters, or what the fact means in plain language. */
  explanation: string;
  /** Shortest, plainest gloss — “explain like I’m five.” */
  eli5: string;
  attribution?: string;
}
