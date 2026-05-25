import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/profile';

/**
 * Skills — grouped pill layout. Quiet hover state keeps each chip
 * feeling tactile without becoming a distraction.
 */
export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolkit"
          title="Languages, frameworks, and tools I build with."
          intro="Picked for fit, not novelty — same stack I reach for when something has to work in production."
        />

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.04 * gi, ease: 'easeOut' }}
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="chip transition-all duration-200 hover:border-accent-500/50 hover:bg-accent-500/5 hover:text-accent-700 dark:hover:text-accent-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
