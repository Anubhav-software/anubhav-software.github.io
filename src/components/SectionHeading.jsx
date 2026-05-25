import { motion } from 'framer-motion';

/**
 * SectionHeading — consistent eyebrow + heading + (optional) intro across sections.
 * Uses Framer Motion's whileInView for a subtle one-shot fade-up.
 */
export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
          <span aria-hidden="true" className="h-px w-6 bg-accent-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="text-balance text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </motion.div>
  );
}
