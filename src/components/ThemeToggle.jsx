import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

/**
 * ThemeToggle — minimal sun/moon switch.
 * The icon swap uses a small fade+rotate for a tasteful, non-distracting feel.
 */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg
        border border-subtle bg-transparent text-neutral-700 dark:text-neutral-300
        transition-colors duration-200
        hover:border-accent-500/60 hover:text-accent-700 dark:hover:text-accent-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -30, scale: 0.85 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <Moon size={16} strokeWidth={1.75} aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 30, scale: 0.85 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <Sun size={16} strokeWidth={1.75} aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
