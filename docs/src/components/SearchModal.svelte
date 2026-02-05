<script lang="ts">
import DOMPurify from 'dompurify';

interface WindowWithPagefind {
  pagefind?: {
    search: (query: string) => Promise<PagefindSearchResponse>;
    init: () => Promise<void>;
  };
  attributeIndex?: AttributeIndex[];
}

interface PagefindResult {
  id: string;
  data: () => Promise<{
    url: string;
    meta: {
      title?: string;
    };
    excerpt: string;
    content: string;
  }>;
}

interface PagefindSearchResponse {
  results: PagefindResult[];
}

interface SearchResult {
  id: string;
  url: string;
  title: string;
  excerpt: string;
}

interface AttributeIndex {
  key: string;
  brief: string;
  type: string;
  category: string;
  url: string;
  deprecated: boolean;
}

let isOpen = $state(false);
let query = $state('');
let attributeResults = $state<AttributeIndex[]>([]);
let pageResults = $state<SearchResult[]>([]);
let selectedIndex = $state(0);
let isLoading = $state(false);
let inputEl: HTMLInputElement | undefined = $state();
let resultsEl: HTMLDivElement | undefined = $state();
let usingKeyboard = $state(false);

let totalResults = $derived(attributeResults.length + pageResults.length);
let hasResults = $derived(attributeResults.length > 0 || pageResults.length > 0);
let noResults = $derived(query && !isLoading && !hasResults);

async function loadAttributeIndex() {
  const windowWithPagefind = window as WindowWithPagefind;
  if (windowWithPagefind.attributeIndex) {
    return;
  }

  try {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${baseUrl}api/attributes.json`);
    windowWithPagefind.attributeIndex = await response.json();
  } catch (e) {
    console.error('Failed to load attribute index:', e);
    windowWithPagefind.attributeIndex = [];
  }
}

async function loadPagefind() {
  const windowWithPagefind = window as WindowWithPagefind;
  if (windowWithPagefind.pagefind) {
    return;
  }

  try {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const pagefindPath = `${baseUrl}pagefind/pagefind.js`;
    // @vite-ignore tells Vite not to analyze this import (pagefind is generated at build time)
    const pagefind = await import(/* @vite-ignore */ pagefindPath);
    await pagefind.init();
    windowWithPagefind.pagefind = pagefind;
  } catch (e) {
    console.error('Failed to load pagefind:', e);
  }
}

function handleGlobalKeyDown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    isOpen = true;
  }
  if (e.key === 'Escape') {
    isOpen = false;
  }
}

function handleTriggerClick() {
  isOpen = true;
}

// Setup global event listeners
$effect(() => {
  document.addEventListener('keydown', handleGlobalKeyDown);
  const trigger = document.getElementById('search-trigger');
  trigger?.addEventListener('click', handleTriggerClick);

  return () => {
    document.removeEventListener('keydown', handleGlobalKeyDown);
    trigger?.removeEventListener('click', handleTriggerClick);
  };
});

// Handle modal open
$effect(() => {
  if (isOpen) {
    loadAttributeIndex();
    loadPagefind();
    query = '';
    attributeResults = [];
    pageResults = [];
    selectedIndex = 0;
    setTimeout(() => inputEl?.focus(), 0);
  }
});

// Search effect
let searchTimeout: ReturnType<typeof setTimeout>;

$effect(() => {
  const currentQuery = query;

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    const trimmedQuery = currentQuery.trim().toLowerCase();

    if (!trimmedQuery) {
      attributeResults = [];
      pageResults = [];
      return;
    }

    isLoading = true;

    // Search attributes (instant, client-side)
    const windowWithPagefind = window as WindowWithPagefind;
    if (windowWithPagefind.attributeIndex) {
      const matches = windowWithPagefind.attributeIndex
        .filter((attr) => {
          const key = attr.key.toLowerCase();
          return key.includes(trimmedQuery);
        })
        .sort((a, b) => {
          const aKey = a.key.toLowerCase();
          const bKey = b.key.toLowerCase();
          const aStartsWith = aKey.startsWith(trimmedQuery);
          const bStartsWith = bKey.startsWith(trimmedQuery);

          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;

          const aIndex = aKey.indexOf(trimmedQuery);
          const bIndex = bKey.indexOf(trimmedQuery);
          if (aIndex !== bIndex) return aIndex - bIndex;

          return a.key.localeCompare(b.key);
        })
        .slice(0, 10);

      attributeResults = matches;
    }

    // Search pages with Pagefind (async)
    if (windowWithPagefind.pagefind) {
      try {
        const response = await windowWithPagefind.pagefind.search(currentQuery);
        const searchResults = await Promise.all(
          response.results.slice(0, 5).map(async (result) => {
            const data = await result.data();
            return {
              id: result.id,
              url: data.url,
              title: data.meta?.title || 'Untitled',
              excerpt: data.excerpt,
            };
          }),
        );
        pageResults = searchResults;
      } catch (e) {
        console.error('Search failed:', e);
        pageResults = [];
      }
    }

    isLoading = false;
  }, 100);
});

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    usingKeyboard = true;
    selectedIndex = Math.min(selectedIndex + 1, totalResults - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    usingKeyboard = true;
    selectedIndex = Math.max(selectedIndex - 1, 0);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    navigateToSelected();
  }
}

function handleMouseEnter(index: number) {
  if (!usingKeyboard) {
    selectedIndex = index;
  }
}

function handleMouseMove() {
  usingKeyboard = false;
}

function navigateToSelected() {
  if (selectedIndex < attributeResults.length) {
    const attr = attributeResults[selectedIndex];
    isOpen = false;
    window.location.href = attr.url;
  } else {
    const pageIndex = selectedIndex - attributeResults.length;
    const result = pageResults[pageIndex];
    if (result) {
      isOpen = false;
      window.location.href = result.url;
    }
  }
}

function navigateToAttribute(attr: AttributeIndex) {
  isOpen = false;
  window.location.href = attr.url;
}

function navigateToResult(result: SearchResult) {
  isOpen = false;
  window.location.href = result.url;
}

// Scroll selected item into view
$effect(() => {
  if (resultsEl && selectedIndex >= 0) {
    const selectedElement = resultsEl.querySelector('.selected') as HTMLElement;
    selectedElement?.scrollIntoView({ block: 'nearest' });
  }
});

function highlightMatch(key: string, searchQuery: string): { before: string; match: string; after: string } | null {
  const lowerKey = key.toLowerCase();
  const lowerQuery = searchQuery.toLowerCase();
  const index = lowerKey.indexOf(lowerQuery);

  if (index === -1) return null;

  return {
    before: key.slice(0, index),
    match: key.slice(index, index + searchQuery.length),
    after: key.slice(index + searchQuery.length),
  };
}
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div 
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-start justify-center pt-[10vh]"
    onclick={() => isOpen = false}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div 
      class="w-full max-w-2xl bg-bg-secondary border border-border rounded-lg shadow-lg overflow-hidden mx-4"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="flex items-center gap-3 p-4 border-b border-border">
        <svg class="text-text-muted flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          bind:this={inputEl}
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-lg text-text-primary font-sans placeholder:text-text-muted"
          placeholder="Search attributes (e.g., sentry.op, http.)"
          bind:value={query}
          onkeydown={handleKeyDown}
        />
        <kbd class="px-2 py-1 bg-bg-elevated border border-border rounded-sm text-xs text-text-muted font-sans">ESC</kbd>
      </div>
      
      <div class="max-h-[450px] overflow-y-auto" bind:this={resultsEl}>
        {#if isLoading}
          <div class="py-8 text-center text-text-muted text-sm">Searching...</div>
        {/if}
        
        {#if noResults}
          <div class="py-8 text-center text-text-muted text-sm">
            No results found for "{query}"
          </div>
        {/if}
        
        <!-- Attribute results -->
        {#if !isLoading && attributeResults.length > 0}
          <div class="border-b border-border last:border-b-0">
            <div class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-elevated border-b border-border">
              Attributes
            </div>
            {#each attributeResults as attr, index}
              {@const highlighted = highlightMatch(attr.key, query)}
              <button
                class="flex flex-col gap-1 w-full px-4 py-3 bg-transparent border-none border-b border-border last:border-b-0 text-left cursor-pointer transition-all duration-fast border-l-2 {index === selectedIndex ? 'bg-accent/15 border-l-accent selected shadow-[inset_0_0_0_1px_rgba(149,128,255,0.2)]' : 'border-l-transparent hover:bg-bg-hover hover:border-l-border-light'}"
                onclick={() => navigateToAttribute(attr)}
                onmouseenter={() => handleMouseEnter(index)}
                onmousemove={handleMouseMove}
              >
                <div class="flex items-center justify-between gap-3 flex-wrap">
                  <code class="font-mono text-sm font-medium bg-transparent p-0 border-none text-accent">
                    {#if highlighted}
                      {highlighted.before}<mark class="bg-accent-soft text-accent px-0.5 rounded-sm font-semibold">{highlighted.match}</mark>{highlighted.after}
                    {:else}
                      {attr.key}
                    {/if}
                  </code>
                  <div class="flex items-center gap-2">
                    <span class="text-xs px-2 py-0.5 rounded-sm font-sans bg-bg-elevated text-text-muted">{attr.type}</span>
                    <span class="text-xs px-2 py-0.5 rounded-sm font-sans bg-bg-elevated text-text-secondary">{attr.category}</span>
                    {#if attr.deprecated}
                      <span class="text-xs px-2 py-0.5 rounded-sm font-sans bg-error/15 text-error">deprecated</span>
                    {/if}
                  </div>
                </div>
                <span class="text-xs text-text-muted leading-relaxed line-clamp-2">{attr.brief}</span>
              </button>
            {/each}
          </div>
        {/if}
        
        <!-- Page results from Pagefind -->
        {#if !isLoading && pageResults.length > 0}
          <div class="border-b border-border last:border-b-0">
            <div class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-elevated border-b border-border">
              Pages
            </div>
            {#each pageResults as result, index}
              {@const actualIndex = attributeResults.length + index}
              <button
                class="flex flex-col gap-1 w-full px-4 py-3 bg-transparent border-none border-b border-border last:border-b-0 text-left cursor-pointer transition-all duration-fast border-l-2 {actualIndex === selectedIndex ? 'bg-accent/15 border-l-accent selected shadow-[inset_0_0_0_1px_rgba(149,128,255,0.2)]' : 'border-l-transparent hover:bg-bg-hover hover:border-l-border-light'}"
                onclick={() => navigateToResult(result)}
                onmouseenter={() => handleMouseEnter(actualIndex)}
                onmousemove={handleMouseMove}
              >
                <span class="text-sm font-medium {actualIndex === selectedIndex ? 'text-accent' : 'text-text-primary'}">
                  {result.title}
                </span>
                <span 
                  class="text-xs text-text-muted leading-relaxed line-clamp-2 [&_mark]:bg-accent-soft [&_mark]:text-accent [&_mark]:px-0.5 [&_mark]:rounded-sm"
                >
                  {@html DOMPurify.sanitize(result.excerpt, { ALLOWED_TAGS: ['mark'] })}
                </span>
              </button>
            {/each}
          </div>
        {/if}
        
        {#if !query}
          <div class="py-8 px-4 text-center">
            <p class="text-text-muted text-sm mb-4">Search for attributes by name or browse documentation.</p>
            <div class="flex items-center justify-center gap-2 text-sm text-text-muted mb-4">
              <span>Try: </span>
              <code class="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">sentry.</code>
              <code class="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">http.request</code>
              <code class="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">db.system</code>
            </div>
            <div class="flex justify-center gap-6 text-xs text-text-muted">
              <span><kbd class="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↑</kbd><kbd class="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↓</kbd> to navigate</span>
              <span><kbd class="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↵</kbd> to select</span>
              <span><kbd class="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">esc</kbd> to close</span>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
