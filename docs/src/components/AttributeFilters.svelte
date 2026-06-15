<script lang="ts">
import { onMount, tick } from 'svelte';

interface CategoryFilterCount {
  category: string;
  total: number;
  attributes: Array<{
    scrubbing: 'auto' | 'manual' | 'never';
    visibility: 'public' | 'internal';
    otel: 'true' | 'false';
  }>;
}

interface Props {
  mode: 'cards' | 'sections';
  totalCount?: number;
  categoryFilterCounts?: CategoryFilterCount[];
}

const SCRUBBING_VALUES = ['auto', 'manual', 'never'] as const;
const VISIBILITY_VALUES = ['public', 'internal'] as const;
const OTEL_VALUES = ['true', 'false'] as const;

const { mode, totalCount = 0, categoryFilterCounts = [] }: Props = $props();

let scrubbingFilter = $state('');
let visibilityFilter = $state('');
let otelFilter = $state('');

let visibleCardCount = $state(0);
let visibleSectionCount = $state(0);
let emptyStateEl: HTMLElement | null = null;
let attributeListEl: HTMLElement | null = null;
let filtersInitializedFromUrl = false;
let latestApplyFiltersRun = 0;

const hasActiveFilters = $derived(scrubbingFilter !== '' || visibilityFilter !== '' || otelFilter !== '');

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const scrubbing = params.get('scrubbing') ?? '';
  // `vis` avoids clashing with CSS/DOM visibility
  const visibility = params.get('vis') ?? '';
  const otel = params.get('otel') ?? '';

  scrubbingFilter = SCRUBBING_VALUES.includes(scrubbing as (typeof SCRUBBING_VALUES)[number]) ? scrubbing : '';
  visibilityFilter = VISIBILITY_VALUES.includes(visibility as (typeof VISIBILITY_VALUES)[number]) ? visibility : '';
  otelFilter = OTEL_VALUES.includes(otel as (typeof OTEL_VALUES)[number]) ? otel : '';
}

function syncUrl() {
  const url = new URL(window.location.href);

  if (scrubbingFilter) {
    url.searchParams.set('scrubbing', scrubbingFilter);
  } else {
    url.searchParams.delete('scrubbing');
  }

  if (visibilityFilter) {
    url.searchParams.set('vis', visibilityFilter);
  } else {
    url.searchParams.delete('vis');
  }

  if (otelFilter) {
    url.searchParams.set('otel', otelFilter);
  } else {
    url.searchParams.delete('otel');
  }

  history.replaceState(null, '', url);
}

function matchesFilters(scrubbing: string, visibility: string, otel: string) {
  if (scrubbingFilter && scrubbing !== scrubbingFilter) return false;
  if (visibilityFilter && visibility !== visibilityFilter) return false;
  if (otelFilter && otel !== otelFilter) return false;
  return true;
}

function formatAttributeCount(count: number) {
  return `${count} attribute${count === 1 ? '' : 's'}`;
}

function formatCategoryCount(count: number) {
  return `${count} categor${count === 1 ? 'y' : 'ies'}`;
}

function getCardFilterValues(card: HTMLElement) {
  return {
    scrubbing: card.dataset.filterScrubbing ?? card.getAttribute('data-filter-scrubbing') ?? '',
    visibility: card.dataset.filterVisibility ?? card.getAttribute('data-filter-visibility') ?? '',
    otel: card.dataset.filterOtel ?? card.getAttribute('data-filter-otel') ?? '',
  };
}

function cardMatches(card: HTMLElement) {
  const { scrubbing, visibility, otel } = getCardFilterValues(card);
  return matchesFilters(scrubbing, visibility, otel);
}

function isElementVisible(el: HTMLElement) {
  return !el.hidden && !el.classList.contains('hidden');
}

function isDefaultHidden(el: HTMLElement) {
  return el.dataset.filterDefaultHidden === 'true';
}

function getHashAnchorId() {
  const hash = window.location.hash.slice(1);
  if (!hash) return '';
  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}

function isHashTarget(card: HTMLElement) {
  const anchorId = getHashAnchorId();
  return anchorId !== '' && card.id === anchorId;
}

function getHashTargetCard(): HTMLElement | null {
  const anchorId = getHashAnchorId();
  if (!anchorId) return null;

  const target = getFilterRoot().querySelector<HTMLElement>(`#${CSS.escape(anchorId)}`);
  return target?.matches('[data-attribute-card]') ? target : null;
}

function revealHashTarget() {
  if (hasActiveFilters) return;

  const target = getHashTargetCard();
  if (!target) return;

  const deprecatedBlock = target.closest<HTMLElement>('[data-category-deprecated]');
  if (deprecatedBlock) {
    setElementVisible(deprecatedBlock, true);
    setDetailsOpen(deprecatedBlock, true);
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({ block: 'start' });
  });
}

function setElementVisible(el: HTMLElement, show: boolean) {
  el.hidden = !show;
  el.classList.toggle('hidden', !show);
}

function setDetailsOpen(el: HTMLElement, open: boolean) {
  if (el instanceof HTMLDetailsElement) {
    el.open = open;
  }
}

function getFilterRoot(): ParentNode {
  return attributeListEl ?? document;
}

function updateCategoryLinkUrls() {
  const root = getFilterRoot();
  const links = root.querySelectorAll<HTMLAnchorElement>('[data-category-filter-link]');

  const query = new URLSearchParams([
    ...(scrubbingFilter ? [['scrubbing', scrubbingFilter]] : []),
    ...(visibilityFilter ? [['vis', visibilityFilter]] : []),
    ...(otelFilter ? [['otel', otelFilter]] : []),
  ]).toString();

  for (const link of links) {
    const originalHref = link.dataset.categoryOriginalHref ?? link.getAttribute('href') ?? '';
    link.dataset.categoryOriginalHref = originalHref;

    const url = new URL(originalHref, window.location.href);
    url.search = query;
    link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
  }
}

function resetCategoryCountLabels() {
  const root = getFilterRoot();
  const labels = root.querySelectorAll<HTMLElement>('[data-category-count-label]');

  for (const label of labels) {
    const total = Number(label.dataset.categoryTotal ?? 0);
    label.textContent = formatAttributeCount(total);
  }
}

function updateCategoryCountLabels() {
  const labels = getFilterRoot().querySelectorAll<HTMLElement>('[data-category-count-label]');

  const counts = new Map(
    categoryFilterCounts.map(({ category, total, attributes }) => [
      category,
      {
        total,
        visible: attributes.filter((attribute) =>
          matchesFilters(attribute.scrubbing, attribute.visibility, attribute.otel),
        ).length,
      },
    ]),
  );

  for (const label of labels) {
    const category = label.dataset.categoryCountLabel;
    if (!category) continue;

    const count = counts.get(category);
    if (!count) continue;

    label.textContent = `${count.visible}/${count.total} attribute${count.total === 1 ? '' : 's'}`;
  }
}

function applyCardFilters(): number {
  const root = getFilterRoot();
  const cards = root.querySelectorAll<HTMLElement>('[data-attribute-card]');
  let visible = 0;

  for (const card of cards) {
    const show = hasActiveFilters ? cardMatches(card) : !isDefaultHidden(card) || isHashTarget(card);
    setElementVisible(card, show);
    if (show) visible++;
  }

  if (mode === 'cards') {
    const sections = root.querySelectorAll<HTMLElement>('[data-attribute-section]');
    for (const section of sections) {
      const sectionCards = section.querySelectorAll<HTMLElement>('[data-attribute-card]');
      const hasVisible = Array.from(sectionCards).some(isElementVisible);
      setElementVisible(section, hasVisible);
    }
  }

  return visible;
}

function updateCategorySectionVisibility(): number {
  const root = getFilterRoot();
  const sections = root.querySelectorAll<HTMLElement>('[data-category-section]');
  let visibleSections = 0;

  for (const section of sections) {
    const cards = section.querySelectorAll<HTMLElement>('[data-attribute-card]');
    const hasVisibleCard = Array.from(cards).some(isElementVisible);

    setElementVisible(section, hasVisibleCard);
    if (hasVisibleCard) visibleSections++;

    const viewAllLink = section.querySelector<HTMLElement>('[data-category-view-all]');
    if (viewAllLink) {
      const stableGrid = section.querySelector<HTMLElement>('[data-category-stable-grid]');
      const hasVisibleStable =
        stableGrid !== null &&
        Array.from(stableGrid.querySelectorAll<HTMLElement>('[data-attribute-card]')).some(isElementVisible);
      setElementVisible(viewAllLink, hasVisibleStable);
    }

    const deprecatedBlock = section.querySelector<HTMLElement>('[data-category-deprecated]');
    if (deprecatedBlock) {
      const hasVisibleDeprecated = Array.from(
        deprecatedBlock.querySelectorAll<HTMLElement>('[data-attribute-card]'),
      ).some(isElementVisible);
      setElementVisible(deprecatedBlock, hasVisibleDeprecated);
      setDetailsOpen(deprecatedBlock, hasVisibleDeprecated);
    }
  }

  return visibleSections;
}

function resetSectionVisibility(showDefaultHidden = false) {
  const root = getFilterRoot();
  const sections = root.querySelectorAll<HTMLElement>('[data-category-section]');

  for (const section of sections) {
    setElementVisible(section, true);
    const viewAllLink = section.querySelector<HTMLElement>('[data-category-view-all]');
    if (viewAllLink) setElementVisible(viewAllLink, true);
    const deprecatedBlock = section.querySelector<HTMLElement>('[data-category-deprecated]');
    if (deprecatedBlock) {
      setElementVisible(deprecatedBlock, showDefaultHidden || !isDefaultHidden(deprecatedBlock));
      setDetailsOpen(deprecatedBlock, false);
    }
  }
}

function applySectionFilters() {
  updateCategoryLinkUrls();

  if (!hasActiveFilters) {
    resetSectionVisibility();
    resetCategoryCountLabels();
    visibleCardCount = applyCardFilters();
    revealHashTarget();
    visibleSectionCount = getFilterRoot().querySelectorAll('[data-category-section]').length;
    return;
  }

  // Show all sections first so card filters run against every rendered card
  resetSectionVisibility(true);
  visibleCardCount = applyCardFilters();
  visibleSectionCount = updateCategorySectionVisibility();
  updateCategoryCountLabels();
}

function updateEmptyState(visible: number) {
  if (emptyStateEl) {
    emptyStateEl.hidden = visible > 0 || !hasActiveFilters;
    emptyStateEl.classList.toggle('hidden', emptyStateEl.hidden);
  }
  if (attributeListEl && mode === 'cards') {
    const hideList = visible === 0 && hasActiveFilters;
    attributeListEl.hidden = hideList;
    attributeListEl.classList.toggle('hidden', hideList);
  }
}

async function applyFilters() {
  const applyFiltersRun = ++latestApplyFiltersRun;
  await tick();

  if (applyFiltersRun !== latestApplyFiltersRun) {
    return;
  }

  if (!attributeListEl) {
    attributeListEl = document.getElementById('attribute-list');
  }

  syncUrl();

  if (mode === 'sections') {
    applySectionFilters();
    updateEmptyState(visibleSectionCount);
  } else {
    visibleCardCount = applyCardFilters();
    updateEmptyState(visibleCardCount);
  }
}

function clearFilters() {
  scrubbingFilter = '';
  visibilityFilter = '';
  otelFilter = '';
}

function handlePopState() {
  readFiltersFromUrl();
}

function handleHashChange() {
  void applyFilters();
}

onMount(() => {
  readFiltersFromUrl();
  filtersInitializedFromUrl = true;
  emptyStateEl = document.getElementById('attribute-filter-empty');
  attributeListEl = document.getElementById('attribute-list');
  void applyFilters();

  window.addEventListener('popstate', handlePopState);
  window.addEventListener('hashchange', handleHashChange);
  return () => {
    window.removeEventListener('popstate', handlePopState);
    window.removeEventListener('hashchange', handleHashChange);
  };
});

$effect(() => {
  scrubbingFilter;
  visibilityFilter;
  otelFilter;
  if (!filtersInitializedFromUrl) return;
  void applyFilters();
});

const resultLabel = $derived.by(() => {
  if (mode === 'cards') {
    if (hasActiveFilters) {
      return `Showing ${visibleCardCount} of ${formatAttributeCount(totalCount)}`;
    }
    return formatAttributeCount(totalCount);
  }

  if (hasActiveFilters) {
    return `Showing ${formatAttributeCount(visibleCardCount)} across ${formatCategoryCount(visibleSectionCount)}`;
  }
  return null;
});
</script>

<div class="mb-6 p-3 bg-bg-secondary border border-border rounded-lg">
  <div class="flex flex-wrap items-end gap-3">
    <label class="flex flex-col gap-1 min-w-[140px]">
      <span class="text-xs text-text-muted uppercase tracking-wider">Scrubbing</span>
      <select
        class="form-input py-2"
        bind:value={scrubbingFilter}
        aria-label="Filter by scrubbing mode"
      >
        <option value="">All</option>
        <option value="auto">Auto</option>
        <option value="manual">Manual</option>
        <option value="never">Never</option>
      </select>
    </label>

    <label class="flex flex-col gap-1 min-w-[140px]">
      <span class="text-xs text-text-muted uppercase tracking-wider">Visibility</span>
      <select
        class="form-input py-2"
        bind:value={visibilityFilter}
        aria-label="Filter by visibility"
      >
        <option value="">All</option>
        <option value="public">Public</option>
        <option value="internal">Internal</option>
      </select>
    </label>

    <label class="flex flex-col gap-1 min-w-[140px]">
      <span class="text-xs text-text-muted uppercase tracking-wider">OTel</span>
      <select
        class="form-input py-2"
        bind:value={otelFilter}
        aria-label="Filter by OpenTelemetry"
      >
        <option value="">All</option>
        <option value="true">In OTel</option>
        <option value="false">Not in OTel</option>
      </select>
    </label>

    {#if hasActiveFilters}
      <button
        type="button"
        class="text-sm text-accent hover:text-accent-hover px-2 py-2"
        onclick={clearFilters}
      >
        Clear filters
      </button>
    {/if}
  </div>

  {#if resultLabel}
    <p class="text-sm text-text-muted mt-3 mb-0">{resultLabel}</p>
  {/if}
</div>
