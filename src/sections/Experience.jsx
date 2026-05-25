import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/profile';

/**
 * Experience — clean vertical timeline. Single accent line, small dots,
 * scannable bullets. No alternating zig-zag layouts.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Career"
          title="Where I've built things."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-neutral-200 to-transparent dark:via-surface-dark-border md:left-[19px]"
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: 'easeOut' }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-subtle bg-surface-light-elevated text-accent-600 shadow-subtle dark:bg-surface-dark-elevated dark:text-accent-400 md:h-10 md:w-10"
                >
                  <Briefcase size={14} strokeWidth={1.75} />
                </span>

                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-accent-700 dark:text-accent-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-subtle">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500/70"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
