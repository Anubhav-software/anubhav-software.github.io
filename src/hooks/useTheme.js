import { useCallback, useEffect, useState } from 'react';

/**
 * useTheme — manages 'light' | 'dark' theme with localStorage persistence.
 * Dark mode is the default for first-time visitors.
 *
 * NOTE: the initial class is set inline in index.html (pre-paint) to avoid
 * a flash of the wrong theme. This hook syncs React state with that.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors (private mode, etc.)
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
