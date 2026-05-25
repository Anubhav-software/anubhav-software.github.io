import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/profile';

/**
 * Stats — four numbers with a gentle count-up when they enter view.
 * Sits between About and Skills as a quiet credibility marker.
 */

function StatCell({ value, suffix, label, index }) {
  const [count, ref] = useCountUp(value, { duration: 1400 + index * 100 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.05 * index, ease: 'easeOut' }}
      className="flex flex-col items-center text-center sm:items-start sm:text-left"
    >
      <div className="flex items-baseline gap-0.5 font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>
          {count}
        </span>
        <span className="text-accent-500" aria-hidden="true">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-subtle">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Quick stats" className="border-y border-subtle bg-neutral-50/60 dark:bg-white/[0.015]">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatCell key={s.label} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
