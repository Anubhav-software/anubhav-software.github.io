import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechIcon from '../components/TechIcon';
import { projects } from '../data/profile';

/**
 * Projects — the centerpiece. Premium cards with a subtle hover lift,
 * border glow, and an accent vignette. No bouncy effects.
 */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: 0.05 * (index % 2), ease: 'easeOut' }}
      className="surface-card group relative flex flex-col overflow-hidden rounded-2xl p-7
        transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card-hover"
    >
      {/* Accent vignette on hover — quiet, single-color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(99,102,241,0.08), transparent 70%)',
        }}
      />

      <header className="relative flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            <span aria-hidden="true" className="h-px w-5 bg-accent-500/60" />
            {project.highlight}
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-2xl">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={20}
          strokeWidth={1.75}
          aria-hidden="true"
          className="mt-1 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-500"
        />
      </header>

      <p className="relative mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
        {project.summary}
      </p>

      {/* Tech tags */}
      <ul className="relative mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li key={t}>
            <span className="chip">
              <TechIcon name={t} size={12} />
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Actions — placeholder hrefs, replace in src/data/profile.js */}
      <footer className="relative mt-7 flex items-center gap-2 pt-5 border-t border-subtle/70">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-accent-700 transition-colors hover:bg-accent-500/10 dark:text-accent-400"
        >
          <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
          Live Demo
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/[0.04] dark:hover:text-neutral-100"
        >
          <Github size={14} strokeWidth={1.75} aria-hidden="true" />
          GitHub
        </a>
      </footer>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've shipped to production."
          intro="A mix of enterprise systems, AI-powered tooling, and real-time platforms — each built end-to-end."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
