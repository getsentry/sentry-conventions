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

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<PagefindSearchResponse>;
      init: () => Promise<void>;
    };
  }
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load Pagefind on first open
  const loadPagefind = useCallback(async () => {
    if (window.pagefind) return;
    
    try {
      // Pagefind is loaded dynamically at runtime
      // Use Function constructor to bypass Vite's static import analysis
      const baseUrl = import.meta.env.BASE_URL || '/';
      const pagefindPath = `${baseUrl}pagefind/pagefind.js`;
      
      // Dynamic import that Vite won't analyze
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
      // Open modal on cmd+k or ctrl+k
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Close on escape
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
      loadPagefind();
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen, loadPagefind]);

  // Search when query changes
  useEffect(() => {
    const search = async () => {
      if (!query.trim() || !window.pagefind) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await window.pagefind.search(query);
        const searchResults = await Promise.all(
          response.results.slice(0, 10).map(async (result) => {
            const data = await result.data();
            return {
              id: result.id,
              url: data.url,
              title: data.meta?.title || 'Untitled',
              excerpt: data.excerpt,
            };
          })
        );
        setResults(searchResults);
        setSelectedIndex(0);
      } catch (e) {
        console.error('Search failed:', e);
        setResults([]);
      }
      setIsLoading(false);
    };

    const debounce = setTimeout(search, 150);
    return () => clearTimeout(debounce);
  }, [query]);

  // Handle keyboard navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      navigateToResult(results[selectedIndex]);
    }
  };

  const navigateToResult = (result: SearchResult) => {
    setIsOpen(false);
    // Use the base URL from the environment
    window.location.href = result.url;
  };

  // Scroll selected result into view
  useEffect(() => {
    const selectedElement = resultsRef.current?.children[selectedIndex] as HTMLElement;
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
            placeholder="Search attributes, names..."
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
          
          {!isLoading && query && results.length === 0 && (
            <div className="search-empty">
              No results found for "{query}"
            </div>
          )}
          
          {!isLoading && results.map((result, index) => (
            <button
              key={result.id}
              className={`search-result ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => navigateToResult(result)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="result-title">{result.title}</span>
              <span 
                className="result-excerpt" 
                dangerouslySetInnerHTML={{ __html: result.excerpt }}
              />
            </button>
          ))}
          
          {!query && (
            <div className="search-hints">
              <p>Start typing to search attributes and documentation.</p>
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
          max-width: 600px;
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
          max-height: 400px;
          overflow-y: auto;
        }
        
        .search-loading,
        .search-empty {
          padding: var(--space-8);
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-sm);
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
        }
      `}</style>
    </div>
  );
}
