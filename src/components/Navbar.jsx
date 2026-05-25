import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { navItems, profile } from '../data/profile';

const sectionIds = navItems.map((n) => n.id);

export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a subtle backdrop shadow once the user scrolls past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after clicking a link.
  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300
        ${scrolled
          ? 'border-b border-subtle bg-surface-light/80 backdrop-blur-md dark:bg-surface-dark/70'
          : 'border-b border-transparent bg-transparent'}`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2"
          aria-label="Go to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-sm font-semibold text-white shadow-subtle transition-transform duration-200 group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200
                    ${isActive
                      ? 'text-neutral-900 dark:text-neutral-50'
                      : 'text-muted hover:text-neutral-900 dark:hover:text-neutral-50'}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-subtle text-neutral-700 transition-colors duration-200 hover:text-accent-700 dark:text-neutral-300 dark:hover:text-accent-300 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu sheet */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="overflow-hidden border-t border-subtle bg-surface-light/95 backdrop-blur-md dark:bg-surface-dark/95 md:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-accent-500/10 text-accent-700 dark:text-accent-300'
                      : 'text-muted hover:bg-neutral-100 dark:hover:bg-white/[0.04]'}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
}
