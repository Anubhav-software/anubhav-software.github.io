import { useCallback, useEffect, useState } from 'react';

/**
 * useTheme — manages 'light' | 'dark' theme with localStorage persistence.
 * First-visit default is picked by viewport in index.html: dark on mobile
 * (<768px), light on desktop. This hook just syncs React state with the
 * class the pre-paint script already set on <html>.
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
