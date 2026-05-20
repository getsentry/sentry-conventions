<script lang="ts">
import { onMount, tick } from 'svelte';

interface WindowWithAttributeIndex {
  attributeIndex?: AttributeIndexEntry[];
}

interface AttributeIndexEntry {
  key: string;
  brief: string;
  type: string;
  category: string;
  url: string;
  deprecated: boolean;
  pii: 'true' | 'maybe' | 'false';
  visibility: 'public' | 'internal';
  is_in_otel: boolean;
}

interface Props {
  mode: 'cards' | 'sections';
  category?: string;
  totalCount?: number;
}

const PII_VALUES = ['true', 'maybe', 'false'] as const;
const VISIBILITY_VALUES = ['public', 'internal'] as const;
const OTEL_VALUES = ['true', 'false'] as const;

const { mode, totalCount = 0 }: Props = $props();

let piiFilter = $state('');
let visibilityFilter = $state('');
let otelFilter = $state('');

let visibleCount = $state(0);
let visibleCardCount = $state(0);
let visibleSectionCount = $state(0);
let emptyStateEl: HTMLElement | null = null;
let attributeListEl: HTMLElement | null = null;

const hasActiveFilters = $derived(piiFilter !== '' || visibilityFilter !== '' || otelFilter !== '');

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const pii = params.get('pii') ?? '';
  // `vis` avoids clashing with CSS/DOM visibility; accept legacy `visibility` param
  const visibility = params.get('vis') ?? params.get('visibility') ?? '';
  const otel = params.get('otel') ?? '';

  piiFilter = PII_VALUES.includes(pii as (typeof PII_VALUES)[number]) ? pii : '';
  visibilityFilter = VISIBILITY_VALUES.includes(visibility as (typeof VISIBILITY_VALUES)[number]) ? visibility : '';
  otelFilter = OTEL_VALUES.includes(otel as (typeof OTEL_VALUES)[number]) ? otel : '';
}

function syncUrl() {
  const url = new URL(window.location.href);

  if (piiFilter) {
    url.searchParams.set('pii', piiFilter);
  } else {
    url.searchParams.delete('pii');
  }

  if (visibilityFilter) {
    url.searchParams.set('vis', visibilityFilter);
  } else {
    url.searchParams.delete('vis');
    url.searchParams.delete('visibility');
  }

  if (otelFilter) {
    url.searchParams.set('otel', otelFilter);
  } else {
    url.searchParams.delete('otel');
  }

  history.replaceState(null, '', url);
}

function matchesFilters(pii: string, visibility: string, otel: string) {
  if (piiFilter && pii !== piiFilter) return false;
  if (visibilityFilter && visibility !== visibilityFilter) return false;
  if (otelFilter && otel !== otelFilter) return false;
  return true;
}

function getCardFilterValues(card: HTMLElement) {
  return {
    pii: card.dataset.filterPii ?? card.getAttribute('data-filter-pii') ?? '',
    visibility: card.dataset.filterVisibility ?? card.getAttribute('data-filter-visibility') ?? '',
    otel: card.dataset.filterOtel ?? card.getAttribute('data-filter-otel') ?? '',
  };
}

function cardMatches(card: HTMLElement) {
  const { pii, visibility, otel } = getCardFilterValues(card);
  return matchesFilters(pii, visibility, otel);
}

function isElementVisible(el: HTMLElement) {
  return !el.hidden && !el.classList.contains('hidden');
}

function isDefaultHidden(el: HTMLElement) {
  return el.dataset.filterDefaultHidden === 'true';
}

function setElementVisible(el: HTMLElement, show: boolean) {
  el.hidden = !show;
  el.classList.toggle('hidden', !show);
}

function getFilterRoot(): ParentNode {
  return attributeListEl ?? document;
}

function applyCardFilters(): number {
  const root = getFilterRoot();
  const cards = root.querySelectorAll<HTMLElement>('[data-attribute-card]');
  let visible = 0;

  for (const card of cards) {
    const show = hasActiveFilters ? cardMatches(card) : !isDefaultHidden(card);
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
    if (deprecatedBlock) setElementVisible(deprecatedBlock, showDefaultHidden || !isDefaultHidden(deprecatedBlock));
  }
}

async function applySectionFilters() {
  if (!hasActiveFilters) {
    resetSectionVisibility();
    visibleCardCount = applyCardFilters();
    visibleSectionCount = getFilterRoot().querySelectorAll('[data-category-section]').length;
    visibleCount = visibleSectionCount;
    return;
  }

  // Show all sections first so card filters run against every rendered card
  resetSectionVisibility(true);
  visibleCardCount = applyCardFilters();
  visibleSectionCount = updateCategorySectionVisibility();
  visibleCount = visibleSectionCount;
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
  await tick();

  if (!attributeListEl) {
    attributeListEl = document.getElementById('attribute-list');
  }

  syncUrl();

  if (mode === 'sections') {
    await applySectionFilters();
    updateEmptyState(visibleSectionCount);
  } else {
    visibleCardCount = applyCardFilters();
    visibleCount = visibleCardCount;
    updateEmptyState(visibleCount);
  }
}

function clearFilters() {
  piiFilter = '';
  visibilityFilter = '';
  otelFilter = '';
}

function handlePopState() {
  readFiltersFromUrl();
}

onMount(() => {
  readFiltersFromUrl();
  emptyStateEl = document.getElementById('attribute-filter-empty');
  attributeListEl = document.getElementById('attribute-list');
  applyFilters();

  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
});

$effect(() => {
  piiFilter;
  visibilityFilter;
  otelFilter;
  applyFilters();
});

const resultLabel = $derived.by(() => {
  if (mode === 'cards') {
    if (hasActiveFilters) {
      return `Showing ${visibleCount} of ${totalCount} attributes`;
    }
    return `${totalCount} attributes`;
  }

  if (hasActiveFilters) {
    return `Showing ${visibleCardCount} attributes across ${visibleSectionCount} categories`;
  }
  return null;
});
</script>

<div class="mb-6 p-4 bg-bg-secondary border border-border rounded-lg">
  <div class="flex flex-wrap items-end gap-3">
    <label class="flex flex-col gap-1 min-w-[140px]">
      <span class="text-xs text-text-muted uppercase tracking-wider">PII</span>
      <select
        class="form-input py-2"
        bind:value={piiFilter}
        aria-label="Filter by PII"
      >
        <option value="">All</option>
        <option value="true">True</option>
        <option value="maybe">Maybe</option>
        <option value="false">False</option>
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
