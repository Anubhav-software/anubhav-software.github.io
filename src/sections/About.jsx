import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs } from '../data/profile';

// Three quiet highlights — same accent, no rainbow.
const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack at depth',
    body: 'Building production MERN / Node.js systems end-to-end — from schema to UI.',
  },
  {
    icon: Cpu,
    title: 'AI-native engineer',
    body: 'RAG pipelines, LLaMA-powered agents, function calling — shipped, not just demoed.',
  },
  {
    icon: Sparkles,
    title: 'Strong fundamentals',
    body: '250+ DSA problems solved, 5★ on HackerRank, with a bias for clean, scalable design.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Software engineer with an AI lean."
          intro="I build the boring infrastructure and the interesting AI features — and care about both."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="space-y-5">
              {aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: 'easeOut' }}
                  className="surface-card group rounded-xl p-5 transition-all duration-300 hover:border-accent-500/40 hover:shadow-card"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {h.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
