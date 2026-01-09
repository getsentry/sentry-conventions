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
      <mark>{key.slice(index, index + query.length)}</mark>
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
    <div className="search-overlay" onClick={() => setIsOpen(false)}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search attributes (e.g., sentry.op, http.)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="escape-hint">ESC</kbd>
        </div>
        
        <div className="search-results" ref={resultsRef}>
          {isLoading && (
            <div className="search-loading">Searching...</div>
          )}
          
          {noResults && (
            <div className="search-empty">
              No results found for "{query}"
            </div>
          )}
          
          {/* Attribute results */}
          {!isLoading && attributeResults.length > 0 && (
            <div className="results-section">
              <div className="section-header">Attributes</div>
              {attributeResults.map((attr, index) => (
                <button
                  key={attr.key}
                  className={`search-result attribute-result ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => navigateToAttribute(attr)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="attribute-result-header">
                    <code className="attribute-key">{highlightMatch(attr.key, query)}</code>
                    <div className="attribute-badges">
                      <span className="type-badge">{attr.type}</span>
                      <span className="category-badge">{attr.category}</span>
                      {attr.deprecated && <span className="deprecated-badge">deprecated</span>}
                    </div>
                  </div>
                  <span className="result-excerpt">{attr.brief}</span>
                </button>
              ))}
            </div>
          )}
          
          {/* Page results from Pagefind */}
          {!isLoading && pageResults.length > 0 && (
            <div className="results-section">
              <div className="section-header">Pages</div>
              {pageResults.map((result, index) => {
                const actualIndex = attributeResults.length + index;
                return (
                  <button
                    key={result.id}
                    className={`search-result ${actualIndex === selectedIndex ? 'selected' : ''}`}
                    onClick={() => navigateToResult(result)}
                    onMouseEnter={() => setSelectedIndex(actualIndex)}
                  >
                    <span className="result-title">{result.title}</span>
                    <span 
                      className="result-excerpt" 
                      dangerouslySetInnerHTML={{ __html: result.excerpt }}
                    />
                  </button>
                );
              })}
            </div>
          )}
          
          {!query && (
            <div className="search-hints">
              <p>Search for attributes by name or browse documentation.</p>
              <div className="search-examples">
                <span>Try: </span>
                <code>sentry.</code>
                <code>http.request</code>
                <code>db.system</code>
              </div>
              <div className="keyboard-hints">
                <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
                <span><kbd>↵</kbd> to select</span>
                <span><kbd>esc</kbd> to close</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        .search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10vh;
        }
        
        .search-modal {
          width: 100%;
          max-width: 640px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        
        .search-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          border-bottom: 1px solid var(--color-border);
        }
        
        .search-icon {
          color: var(--color-text-muted);
          flex-shrink: 0;
        }
        
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: var(--text-lg);
          color: var(--color-text-primary);
          font-family: var(--font-sans);
        }
        
        .search-input::placeholder {
          color: var(--color-text-muted);
        }
        
        .escape-hint {
          padding: var(--space-1) var(--space-2);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-family: var(--font-sans);
        }
        
        .search-results {
          max-height: 450px;
          overflow-y: auto;
        }
        
        .search-loading,
        .search-empty {
          padding: var(--space-8);
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-sm);
        }
        
        .results-section {
          border-bottom: 1px solid var(--color-border);
        }
        
        .results-section:last-child {
          border-bottom: none;
        }
        
        .section-header {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          background: var(--color-bg-elevated);
          border-bottom: 1px solid var(--color-border);
        }
        
        .search-result {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          width: 100%;
          padding: var(--space-3) var(--space-4);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border);
          text-align: left;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        
        .search-result:last-child {
          border-bottom: none;
        }
        
        .search-result:hover,
        .search-result.selected {
          background: var(--color-bg-hover);
        }
        
        .search-result.selected {
          background: var(--color-accent-soft);
        }
        
        .attribute-result-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3);
          flex-wrap: wrap;
        }
        
        .attribute-key {
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-accent);
          background: none;
          padding: 0;
          border: none;
        }
        
        .attribute-key mark {
          background: var(--color-accent-soft);
          color: var(--color-accent);
          padding: 0 2px;
          border-radius: 2px;
          font-weight: 600;
        }
        
        .search-result.selected .attribute-key {
          color: var(--color-accent);
        }
        
        .attribute-badges {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        
        .type-badge,
        .category-badge,
        .deprecated-badge {
          font-size: var(--text-xs);
          padding: 2px var(--space-2);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
        }
        
        .type-badge {
          background: var(--color-bg-elevated);
          color: var(--color-text-muted);
        }
        
        .category-badge {
          background: var(--color-bg-elevated);
          color: var(--color-text-secondary);
        }
        
        .deprecated-badge {
          background: rgba(244, 67, 54, 0.15);
          color: var(--color-error);
        }
        
        .result-title {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-text-primary);
        }
        
        .search-result.selected .result-title {
          color: var(--color-accent);
        }
        
        .result-excerpt {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .result-excerpt mark {
          background: var(--color-accent-soft);
          color: var(--color-accent);
          padding: 0 2px;
          border-radius: 2px;
        }
        
        .search-hints {
          padding: var(--space-8) var(--space-4);
          text-align: center;
        }
        
        .search-hints p {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          margin-bottom: var(--space-4);
        }
        
        .search-examples {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          margin-bottom: var(--space-4);
        }
        
        .search-examples code {
          padding: var(--space-1) var(--space-2);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-accent);
          cursor: pointer;
        }
        
        .search-examples code:hover {
          background: var(--color-accent-soft);
          border-color: var(--color-accent);
        }
        
        .keyboard-hints {
          display: flex;
          justify-content: center;
          gap: var(--space-6);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
        }
        
        .keyboard-hints kbd {
          padding: var(--space-1) var(--space-1);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          min-width: 20px;
          display: inline-block;
          text-align: center;
        }
        
        @media (max-width: 640px) {
          .search-overlay {
            padding: var(--space-4);
            padding-top: var(--space-4);
          }
          
          .keyboard-hints {
            display: none;
          }
          
          .attribute-result-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-2);
          }
        }
      `}</style>
    </div>
  );
}
