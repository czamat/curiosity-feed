import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  type FeedCategory,
  type FeedItem,
  FEED_CATEGORIES,
  takeNextBatch,
} from './data/content';

const CATEGORY_STORAGE_KEY = 'curiosity-feed.categories';

function loadSavedCategories(): FeedCategory[] {
  try {
    const raw = localStorage.getItem(CATEGORY_STORAGE_KEY);
    if (!raw) return [...FEED_CATEGORIES];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [...FEED_CATEGORIES];
    const valid = parsed.filter((c): c is FeedCategory =>
      (FEED_CATEGORIES as readonly string[]).includes(c as string),
    );
    if (valid.length === 0) return [...FEED_CATEGORIES];
    return valid;
  } catch {
    return [...FEED_CATEGORIES];
  }
}

const MOBILE_MAX = '639px';

const scrollCuePulse = keyframes`
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100dvh;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-optical-sizing: auto;
    background: #0c0e12;
    color: #e8eaef;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100dvh;
  }

  @media (max-width: ${MOBILE_MAX}) {
    html,
    body,
    #root {
      height: 100%;
      max-height: 100%;
      overflow: hidden;
    }
  }
`;

const CATEGORY_LABEL: Record<FeedItem['category'], string> = {
  philosophy: 'Philosophy',
  physics: 'Physics',
  math: 'Math',
  psychology: 'Psychology',
  misc: 'Curiosity',
};

const CATEGORY_ACCENT: Record<FeedItem['category'], string> = {
  philosophy: '#c9a227',
  physics: '#5eb8e8',
  math: '#a78bfa',
  psychology: '#f0abfc',
  misc: '#6ee7b7',
};

const Shell = styled.div`
  min-height: 100dvh;
  background: radial-gradient(120% 80% at 50% -20%, #1a2233 0%, #0c0e12 45%, #08090c 100%);

  @media (max-width: ${MOBILE_MAX}) {
    height: 100dvh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: max(12px, env(safe-area-inset-top)) 20px 16px;
  background: linear-gradient(to bottom, rgb(12 14 18 / 0.94), rgb(12 14 18 / 0));
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgb(255 255 255 / 0.06);
  flex-shrink: 0;

  @media (max-width: ${MOBILE_MAX}) {
    position: relative;
    padding: max(10px, env(safe-area-inset-top)) 16px 12px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 640px;
  margin: 0 auto;
`;

const TopicsLabel = styled.p`
  margin: 14px 0 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(232 234 239 / 0.45);
`;

const TopicChips = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 640px;
`;

const TopicChip = styled.button<{ $selected: boolean; $accent: string }>`
  appearance: none;
  margin: 0;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid
    ${(p) => (p.$selected ? p.$accent : 'rgb(255 255 255 / 0.14)')};
  background: ${(p) =>
    p.$selected ? `color-mix(in srgb, ${p.$accent} 22%, rgb(12 14 18 / 0.85))` : 'rgb(12 14 18 / 0.35)'};
  color: ${(p) => (p.$selected ? p.$accent : 'rgb(232 234 239 / 0.75)')};
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${(p) => p.$accent};
    color: ${(p) => p.$accent};
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.$accent};
    outline-offset: 2px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #f2f4f8;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: rgb(232 234 239 / 0.65);

  @media (max-width: ${MOBILE_MAX}) {
    font-size: 0.75rem;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Feed = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 8px 20px max(32px, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: ${MOBILE_MAX}) {
    flex: 1;
    min-height: 0;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0 16px max(8px, env(safe-area-inset-bottom));
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    overscroll-behavior-y: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const Card = styled.article<{ $accent: string }>`
  position: relative;
  padding: 28px 0 40px;
  border-bottom: 1px solid rgb(255 255 255 / 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 28px;
    bottom: 36px;
    width: 3px;
    border-radius: 999px;
    background: ${(p) => p.$accent};
    opacity: 0.85;
  }

  @media (max-width: ${MOBILE_MAX}) {
    flex-shrink: 0;
    min-height: 100%;
    padding: 20px 0 12px;
    border-bottom: none;
    box-shadow: inset 0 -1px 0 rgb(255 255 255 / 0.06);
    scroll-snap-align: start;
    scroll-snap-stop: always;
    justify-content: flex-start;
    align-items: center;

    &::before {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      top: 0;
      bottom: auto;
      width: 44px;
      height: 3px;
    }
  }
`;

const CardInner = styled.div`
  padding-left: 18px;

  @media (max-width: ${MOBILE_MAX}) {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    width: 100%;
    max-width: 26rem;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
  }
`;

const CardContentWrap = styled.div`
  @media (max-width: ${MOBILE_MAX}) {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const CardBody = styled.div`
  @media (max-width: ${MOBILE_MAX}) {
    width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    text-align: center;
  }
`;

const Badge = styled.span<{ $accent: string }>`
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.$accent};
  margin-bottom: 12px;

  @media (max-width: ${MOBILE_MAX}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Quote = styled.blockquote`
  margin: 0;
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  line-height: 1.45;
  font-weight: 400;
  color: #f5f6f9;

  @media (max-width: ${MOBILE_MAX}) {
    text-align: center;
    text-wrap: balance;
  }
`;

const FactIdeaBody = styled.p`
  margin: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.05rem, 3.2vw, 1.25rem);
  line-height: 1.5;
  font-weight: 500;
  color: #f0f2f7;

  @media (max-width: ${MOBILE_MAX}) {
    text-align: center;
    text-wrap: balance;
  }
`;

const Attribution = styled.cite`
  display: block;
  margin-top: 16px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  color: rgb(232 234 239 / 0.5);

  @media (max-width: ${MOBILE_MAX}) {
    text-align: center;
  }
`;

const ExplanationLabel = styled.p`
  margin: 20px 0 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(232 234 239 / 0.4);

  @media (max-width: ${MOBILE_MAX}) {
    text-align: center;
  }
`;

const Explanation = styled.p`
  margin: 8px 0 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.9375rem;
  line-height: 1.55;
  font-weight: 400;
  color: rgb(232 234 239 / 0.78);

  @media (max-width: ${MOBILE_MAX}) {
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: center;
    text-wrap: balance;
  }
`;

const Eli5Row = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${MOBILE_MAX}) {
    justify-content: center;
  }
`;

const Eli5Button = styled.button<{ $accent: string }>`
  appearance: none;
  margin: 0;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.$accent};
  background: rgb(12 14 18 / 0.5);
  color: ${(p) => p.$accent};
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.$accent} 14%, rgb(12 14 18 / 0.65));
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.$accent};
    outline-offset: 2px;
  }
`;

const Eli5Block = styled.div`
  margin-top: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgb(255 255 255 / 0.04);
  border: 1px solid rgb(255 255 255 / 0.08);

  @media (max-width: ${MOBILE_MAX}) {
    text-align: center;
  }
`;

const Eli5Label = styled.p`
  margin: 0 0 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(232 234 239 / 0.45);
`;

const Eli5Text = styled.p`
  margin: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  color: rgb(232 234 239 / 0.88);
  text-wrap: balance;
`;

const ScrollCue = styled.div`
  display: none;

  @media (max-width: ${MOBILE_MAX}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    margin-top: auto;
    padding-top: 16px;
    flex-shrink: 0;
    color: rgb(232 234 239 / 0.42);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    user-select: none;
    pointer-events: none;
  }
`;

const ScrollCueIcon = styled.span`
  @media (max-width: ${MOBILE_MAX}) {
    display: block;
    font-size: 1.125rem;
    line-height: 1;
    opacity: 0.75;
    animation: ${scrollCuePulse} 1.75s ease-in-out infinite;
  }
`;

const Sentinel = styled.div`
  height: 1px;
  width: 100%;
`;

const LoadingHint = styled.p`
  margin: 24px auto 40px;
  text-align: center;
  font-size: 0.8125rem;
  color: rgb(232 234 239 / 0.45);

  @media (max-width: ${MOBILE_MAX}) {
    margin: 16px auto 24px;
    padding-bottom: env(safe-area-inset-bottom);
    scroll-snap-align: end;
    font-size: 0.75rem;
  }
`;

function FeedCard({ item }: { item: FeedItem }) {
  const accent = CATEGORY_ACCENT[item.category];
  const label = CATEGORY_LABEL[item.category];
  const [eli5Open, setEli5Open] = useState(false);
  const eli5PanelId = `eli5-${item.id}`;
  return (
    <Card $accent={accent} aria-label={`${label}: ${item.text.slice(0, 80)}`}>
      <CardInner>
        <CardContentWrap>
          <CardBody>
            <Badge $accent={accent}>{label}</Badge>
            {item.kind === 'quote' ? <Quote>{item.text}</Quote> : <FactIdeaBody>{item.text}</FactIdeaBody>}
            {item.kind === 'quote' && item.attribution ? <Attribution>— {item.attribution}</Attribution> : null}
            <ExplanationLabel>What this means</ExplanationLabel>
            <Explanation>{item.explanation}</Explanation>
            <Eli5Row>
              <Eli5Button
                type="button"
                $accent={accent}
                aria-expanded={eli5Open}
                aria-controls={eli5PanelId}
                onClick={() => setEli5Open((v) => !v)}
              >
                {eli5Open ? 'Hide ELI5' : 'ELI5'}
              </Eli5Button>
            </Eli5Row>
            {eli5Open ? (
              <Eli5Block id={eli5PanelId} role="region" aria-label="Explain like I’m five">
                <Eli5Label>Even simpler</Eli5Label>
                <Eli5Text>{item.eli5}</Eli5Text>
              </Eli5Block>
            ) : null}
          </CardBody>
        </CardContentWrap>
        <ScrollCue aria-hidden>
          <span>Scroll for more</span>
          <ScrollCueIcon>↓</ScrollCueIcon>
        </ScrollCue>
      </CardInner>
    </Card>
  );
}

type Row = { key: number; item: FeedItem };

export function App() {
  const nextKeyRef = useRef(0);
  const [selectedCategories, setSelectedCategories] = useState<FeedCategory[]>(() => loadSavedCategories());
  const [rows, setRows] = useState<Row[]>(() =>
    takeNextBatch({ categories: loadSavedCategories() }).map((item) => ({
      key: nextKeyRef.current++,
      item,
    })),
  );
  const feedRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  const categoriesHydratedRef = useRef(false);

  useEffect(() => {
    try {
      localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(selectedCategories));
    } catch {
      /* ignore quota / private mode */
    }
  }, [selectedCategories]);

  useEffect(() => {
    if (!categoriesHydratedRef.current) {
      categoriesHydratedRef.current = true;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    feedRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    nextKeyRef.current = 0;
    setRows(
      takeNextBatch({ categories: selectedCategories }).map((item) => ({
        key: nextKeyRef.current++,
        item,
      })),
    );
  }, [selectedCategories]);

  const toggleCategory = useCallback((cat: FeedCategory) => {
    setSelectedCategories((prev) => {
      const next = prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat];
      if (next.length === 0) return [...FEED_CATEGORIES];
      return next;
    });
  }, []);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    const next = takeNextBatch({ categories: selectedCategories }).map((item) => ({
      key: nextKeyRef.current++,
      item,
    }));
    setRows((prev) => [...prev, ...next]);
    queueMicrotask(() => {
      loadingRef.current = false;
    });
  }, [selectedCategories]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) loadMore();
      },
      { root: null, rootMargin: '400px 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <GlobalStyle />
      <Shell>
        <TopBar>
          <TitleRow>
            <Title>Curiosity Feed</Title>
            <Subtitle>
              Scroll instead of doomscroll — pick topics you like; the feed never runs out.
            </Subtitle>
            <TopicsLabel id="topics-label">Topics</TopicsLabel>
            <TopicChips role="group" aria-labelledby="topics-label">
              {FEED_CATEGORIES.map((cat) => {
                const selected = selectedCategories.includes(cat);
                const accent = CATEGORY_ACCENT[cat];
                const label = CATEGORY_LABEL[cat];
                return (
                  <TopicChip
                    key={cat}
                    type="button"
                    $selected={selected}
                    $accent={accent}
                    aria-pressed={selected}
                    onClick={() => toggleCategory(cat)}
                  >
                    {label}
                  </TopicChip>
                );
              })}
            </TopicChips>
          </TitleRow>
        </TopBar>
        <Feed ref={feedRef}>
          {rows.map((row) => (
            <FeedCard key={row.key} item={row.item} />
          ))}
          <Sentinel ref={sentinelRef} aria-hidden />
          <LoadingHint>Keep scrolling — more is always loading.</LoadingHint>
        </Feed>
      </Shell>
    </>
  );
}
