<script lang="ts">
let isDark = $state(false);

// Initialize theme state from document
$effect(() => {
  isDark = document.documentElement.classList.contains('dark');
});

// Listen for system preference changes
$effect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function handleChange(e: MediaQueryListEvent) {
    // Only apply system preference if user hasn't set a manual preference
    if (!localStorage.getItem('theme')) {
      isDark = e.matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
  }

  mediaQuery.addEventListener('change', handleChange);

  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
});

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
</script>

<button
  onclick={toggleTheme}
  class="flex items-center justify-center w-9 h-9 bg-bg-elevated border border-border rounded-md text-text-secondary cursor-pointer transition-all duration-fast hover:border-border-light hover:text-text-primary"
  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if isDark}
    <!-- Sun icon (shown in dark mode to switch to light) -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  {:else}
    <!-- Moon icon (shown in light mode to switch to dark) -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {/if}
</button>
