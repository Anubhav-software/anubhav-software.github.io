import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, FolderGit2 } from 'lucide-react';
import { profile } from '../data/profile';
import TechOrbit from '../components/TechOrbit';

/**
 * Hero — the first impression. Restrained gradient mesh + grain texture,
 * confident typography, three clean CTAs. No flashy effects.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-mesh"
    >
      {/* Subtle grain layer — adds premium texture without busy-ness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.35] dark:opacity-[0.55]"
      />

      {/* Faint vertical guide lines — depth without ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="container-page relative h-full">
          <div className="absolute inset-y-0 left-6 w-px bg-neutral-200/60 dark:bg-white/[0.04] sm:left-8 lg:left-10" />
          <div className="absolute inset-y-0 right-6 w-px bg-neutral-200/60 dark:bg-white/[0.04] sm:right-8 lg:right-10" />
        </div>
      </div>

      <div className="container-page relative z-10 grid w-full grid-cols-1 items-center gap-12 pt-28 pb-20 lg:grid-cols-12 lg:gap-10">
        {/* ── Left column: copy + CTAs ── */}
        <div className="lg:col-span-7">
        {/* Status pill — quick intro before the headline sequence */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-light-elevated/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur dark:bg-surface-dark-elevated/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </motion.div>

        {/* ── Sequence: 1. Name → 2. Title → 3. Tagline → 4. CTAs.
             Each line waits for the previous to land, so the reveal reads
             top-to-bottom like a typewriter rather than a single fade. ── */}

        {/* 1. Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl xl:text-7xl"
        >
          <span className="block">{profile.name.split(' ')[0]}</span>
          <span className="block text-balance bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-50 dark:to-neutral-400">
            {profile.name.split(' ').slice(1).join(' ')}.
          </span>
        </motion.h1>

        {/* 2. Role */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg font-medium text-neutral-700 dark:text-neutral-300 sm:text-xl"
        >
          {profile.title}
        </motion.p>

        {/* 3. Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        {/* 4. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            <FolderGit2 size={16} strokeWidth={2} aria-hidden="true" />
            View Projects
          </a>
          {/* TODO: replace href with resume URL in src/data/profile.js */}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Download size={16} strokeWidth={2} aria-hidden="true" />
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
            Contact
          </a>
        </motion.div>

        {/* Quiet scroll hint — appears last, after the sequence settles */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mt-20 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-subtle transition-colors hover:text-accent-600 dark:hover:text-accent-400"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
            className="inline-flex"
          >
            <ArrowDown size={14} strokeWidth={2} />
          </motion.span>
        </motion.a>
        </div>

        {/* ── Right column: floating tech orbit (desktop only) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}
