import { useCallback, useEffect, useRef, useState } from 'react';

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

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<PagefindSearchResponse>;
      init: () => Promise<void>;
    };
    attributeIndex?: AttributeIndex[];
  }
}

// Highlight the matching portion of the attribute key
function highlightMatch(key: string, query: string): React.ReactNode {
  const lowerKey = key.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerKey.indexOf(lowerQuery);
  
  if (index === -1) return key;
  
  return (
    <>
      {key.slice(0, index)}
      <mark className="bg-accent-soft text-accent px-0.5 rounded-sm font-semibold">{key.slice(index, index + query.length)}</mark>
      {key.slice(index + query.length)}
    </>
  );
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [attributeResults, setAttributeResults] = useState<AttributeIndex[]>([]);
  const [pageResults, setPageResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Total number of results for keyboard navigation
  const totalResults = attributeResults.length + pageResults.length;

  // Load attribute index
  const loadAttributeIndex = useCallback(async () => {
    if (window.attributeIndex) return;
    
    try {
      const baseUrl = import.meta.env.BASE_URL || '/';
      const response = await fetch(`${baseUrl}api/attributes.json`);
      window.attributeIndex = await response.json();
    } catch (e) {
      console.error('Failed to load attribute index:', e);
      window.attributeIndex = [];
    }
  }, []);

  // Load Pagefind on first open
  const loadPagefind = useCallback(async () => {
    if (window.pagefind) return;
    
    try {
      const baseUrl = import.meta.env.BASE_URL || '/';
      const pagefindPath = `${baseUrl}pagefind/pagefind.js`;
      const importFn = new Function('path', 'return import(path)');
      const pagefind = await importFn(pagefindPath);
      await pagefind.init();
      window.pagefind = pagefind;
    } catch (e) {
      console.error('Failed to load pagefind:', e);
    }
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      loadAttributeIndex();
      loadPagefind();
      inputRef.current?.focus();
      setQuery('');
      setAttributeResults([]);
      setPageResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen, loadAttributeIndex, loadPagefind]);

  // Search when query changes
  useEffect(() => {
    const search = async () => {
      const trimmedQuery = query.trim().toLowerCase();
      
      if (!trimmedQuery) {
        setAttributeResults([]);
        setPageResults([]);
        return;
      }

      setIsLoading(true);

      // Search attributes (instant, client-side)
      if (window.attributeIndex) {
        const matches = window.attributeIndex
          .filter(attr => {
            const key = attr.key.toLowerCase();
            // Prioritize prefix matches, but also include substring matches
            return key.includes(trimmedQuery);
          })
          .sort((a, b) => {
            const aKey = a.key.toLowerCase();
            const bKey = b.key.toLowerCase();
            const aStartsWith = aKey.startsWith(trimmedQuery);
            const bStartsWith = bKey.startsWith(trimmedQuery);
            
            // Prefix matches come first
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            
            // Then by position of match (earlier = better)
            const aIndex = aKey.indexOf(trimmedQuery);
            const bIndex = bKey.indexOf(trimmedQuery);
            if (aIndex !== bIndex) return aIndex - bIndex;
            
            // Then alphabetically
            return a.key.localeCompare(b.key);
          })
          .slice(0, 10);
        
        setAttributeResults(matches);
      }

      // Search pages with Pagefind (async)
      if (window.pagefind) {
        try {
          const response = await window.pagefind.search(query);
          const searchResults = await Promise.all(
            response.results.slice(0, 5).map(async (result) => {
              const data = await result.data();
              return {
                id: result.id,
                url: data.url,
                title: data.meta?.title || 'Untitled',
                excerpt: data.excerpt,
              };
            })
          );
          setPageResults(searchResults);
        } catch (e) {
          console.error('Search failed:', e);
          setPageResults([]);
        }
      }

      setIsLoading(false);
    };

    const debounce = setTimeout(search, 100);
    return () => clearTimeout(debounce);
  }, [query]);

  // Handle keyboard navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, totalResults - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      navigateToSelected();
    }
  };

  const navigateToSelected = () => {
    if (selectedIndex < attributeResults.length) {
      const attr = attributeResults[selectedIndex];
      setIsOpen(false);
      window.location.href = attr.url;
    } else {
      const pageIndex = selectedIndex - attributeResults.length;
      const result = pageResults[pageIndex];
      if (result) {
        setIsOpen(false);
        window.location.href = result.url;
      }
    }
  };

  const navigateToAttribute = (attr: AttributeIndex) => {
    setIsOpen(false);
    window.location.href = attr.url;
  };

  const navigateToResult = (result: SearchResult) => {
    setIsOpen(false);
    window.location.href = result.url;
  };

  // Scroll selected result into view
  useEffect(() => {
    const selectedElement = resultsRef.current?.querySelector('.selected') as HTMLElement;
    selectedElement?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  // Also allow opening from the search trigger button
  useEffect(() => {
    const trigger = document.getElementById('search-trigger');
    const handleClick = () => setIsOpen(true);
    trigger?.addEventListener('click', handleClick);
    return () => trigger?.removeEventListener('click', handleClick);
  }, []);

  if (!isOpen) return null;

  const hasResults = attributeResults.length > 0 || pageResults.length > 0;
  const noResults = query && !isLoading && !hasResults;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-start justify-center pt-[10vh]"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="w-full max-w-2xl bg-bg-secondary border border-border rounded-lg shadow-lg overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <svg className="text-text-muted flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-lg text-text-primary font-sans placeholder:text-text-muted"
            placeholder="Search attributes (e.g., sentry.op, http.)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded-sm text-xs text-text-muted font-sans">ESC</kbd>
        </div>
        
        <div className="max-h-[450px] overflow-y-auto" ref={resultsRef}>
          {isLoading && (
            <div className="py-8 text-center text-text-muted text-sm">Searching...</div>
          )}
          
          {noResults && (
            <div className="py-8 text-center text-text-muted text-sm">
              No results found for "{query}"
            </div>
          )}
          
          {/* Attribute results */}
          {!isLoading && attributeResults.length > 0 && (
            <div className="border-b border-border last:border-b-0">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-elevated border-b border-border">
                Attributes
              </div>
              {attributeResults.map((attr, index) => (
                <button
                  key={attr.key}
                  className={`flex flex-col gap-1 w-full px-4 py-3 bg-transparent border-none border-b border-border last:border-b-0 text-left cursor-pointer transition-colors duration-fast ${
                    index === selectedIndex ? 'bg-accent-soft selected' : 'hover:bg-bg-hover'
                  }`}
                  onClick={() => navigateToAttribute(attr)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <code className={`font-mono text-sm font-medium bg-transparent p-0 border-none ${
                      index === selectedIndex ? 'text-accent' : 'text-accent'
                    }`}>
                      {highlightMatch(attr.key, query)}
                    </code>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-sm font-sans bg-bg-elevated text-text-muted">{attr.type}</span>
                      <span className="text-xs px-2 py-0.5 rounded-sm font-sans bg-bg-elevated text-text-secondary">{attr.category}</span>
                      {attr.deprecated && <span className="text-xs px-2 py-0.5 rounded-sm font-sans bg-error/15 text-error">deprecated</span>}
                    </div>
                  </div>
                  <span className="text-xs text-text-muted leading-relaxed line-clamp-2">{attr.brief}</span>
                </button>
              ))}
            </div>
          )}
          
          {/* Page results from Pagefind */}
          {!isLoading && pageResults.length > 0 && (
            <div className="border-b border-border last:border-b-0">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-elevated border-b border-border">
                Pages
              </div>
              {pageResults.map((result, index) => {
                const actualIndex = attributeResults.length + index;
                return (
                  <button
                    key={result.id}
                    className={`flex flex-col gap-1 w-full px-4 py-3 bg-transparent border-none border-b border-border last:border-b-0 text-left cursor-pointer transition-colors duration-fast ${
                      actualIndex === selectedIndex ? 'bg-accent-soft selected' : 'hover:bg-bg-hover'
                    }`}
                    onClick={() => navigateToResult(result)}
                    onMouseEnter={() => setSelectedIndex(actualIndex)}
                  >
                    <span className={`text-sm font-medium ${actualIndex === selectedIndex ? 'text-accent' : 'text-text-primary'}`}>
                      {result.title}
                    </span>
                    <span 
                      className="text-xs text-text-muted leading-relaxed line-clamp-2 [&_mark]:bg-accent-soft [&_mark]:text-accent [&_mark]:px-0.5 [&_mark]:rounded-sm" 
                      dangerouslySetInnerHTML={{ __html: result.excerpt }}
                    />
                  </button>
                );
              })}
            </div>
          )}
          
          {!query && (
            <div className="py-8 px-4 text-center">
              <p className="text-text-muted text-sm mb-4">Search for attributes by name or browse documentation.</p>
              <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-4">
                <span>Try: </span>
                <code className="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">sentry.</code>
                <code className="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">http.request</code>
                <code className="px-2 py-1 bg-bg-elevated border border-border rounded-sm font-mono text-xs text-accent cursor-pointer hover:bg-accent-soft hover:border-accent">db.system</code>
              </div>
              <div className="flex justify-center gap-6 text-xs text-text-muted">
                <span><kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↑</kbd><kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↓</kbd> to navigate</span>
                <span><kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">↵</kbd> to select</span>
                <span><kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded-sm font-sans min-w-[20px] inline-block text-center">esc</kbd> to close</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
