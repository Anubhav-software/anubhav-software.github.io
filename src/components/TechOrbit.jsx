import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiTailwindcss,
  SiNestjs,
} from 'react-icons/si';
import { profile } from '../data/profile';

/**
 * TechOrbit — a calm constellation of tech logos arranged around a central
 * identity card. Used on the right side of the Hero on lg+ screens.
 *
 * IMPORTANT — why each chip has THREE nested elements:
 *   Framer Motion controls the `transform` property when animating `scale`,
 *   `y`, etc. If we also rely on Tailwind's `-translate-x-1/2 -translate-y-1/2`
 *   utilities on the SAME element, Motion overrides them and the chip ends up
 *   shifted off its intended center. We therefore separate concerns:
 *     1. Outer  <div>       → absolute positioning + center-anchor translate
 *     2. Inner  <motion.div> → entry animation (opacity + scale)
 *     3. Inner2 <motion.div> → continuous float (y oscillation)
 *
 * Edit the `techs` array below to add/remove logos.
 */

// ── Tech logos in the orbit (positions are % of the container).
//    Adjust `top`/`left` to re-arrange; `delay` staggers the float animation.
const techs = [
  { name: 'React',      Icon: SiReact,        top: '4%',  left: '50%', delay: 0.0 },
  { name: 'TypeScript', Icon: SiTypescript,   top: '18%', left: '84%', delay: 0.3 },
  { name: 'Node.js',    Icon: SiNodedotjs,    top: '50%', left: '94%', delay: 0.6 },
  { name: 'PostgreSQL', Icon: SiPostgresql,   top: '82%', left: '84%', delay: 0.9 },
  { name: 'Docker',     Icon: SiDocker,       top: '96%', left: '50%', delay: 1.2 },
  { name: 'MongoDB',    Icon: SiMongodb,      top: '82%', left: '16%', delay: 0.45 },
  { name: 'Next.js',    Icon: SiNextdotjs,    top: '50%', left: '4%',  delay: 0.75 },
  { name: 'Tailwind',   Icon: SiTailwindcss,  top: '18%', left: '16%', delay: 1.05 },
  // A couple of "near" chips that sit closer to the core for depth
  { name: 'Redis',      Icon: SiRedis,        top: '30%', left: '72%', delay: 0.15, near: true },
  { name: 'NestJS',     Icon: SiNestjs,       top: '70%', left: '28%', delay: 0.55, near: true },
];

function TechChip({ name, Icon, top, left, delay, near }) {
  return (
    // Outer: absolute positioning + center-on-point. No motion here.
    <div
      className="absolute"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
    >
      {/* Entry animation layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 + delay * 0.15, ease: 'easeOut' }}
      >
        {/* Continuous gentle float — different timings prevent unison */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + (delay % 1.2),
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="group/chip relative"
        >
          <div
            className={`surface-card relative flex items-center justify-center rounded-2xl
              backdrop-blur-md transition-all duration-300
              ${near ? 'h-12 w-12' : 'h-14 w-14'}
              hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-glow`}
            aria-label={name}
          >
            <Icon
              size={near ? 22 : 26}
              aria-hidden="true"
              className="text-neutral-700 transition-colors duration-300 group-hover/chip:text-accent-600 dark:text-neutral-300 dark:group-hover/chip:text-accent-300"
            />
          </div>
          {/* Tooltip-style label, appears on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md
              border border-subtle bg-surface-light-elevated px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider
              text-muted opacity-0 shadow-subtle transition-opacity duration-200
              group-hover/chip:opacity-100 dark:bg-surface-dark-elevated"
          >
            {name}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function TechOrbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[480px] xl:max-w-[520px]"
    >
      {/* Soft radial glow behind the core — single accent, low opacity */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18), transparent 55%)',
        }}
      />

      {/* Faint concentric rings — adds depth without becoming ornament. */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-neutral-300/40 dark:border-white/[0.05]" />
      <div className="pointer-events-none absolute inset-[24%] rounded-full border border-dashed border-neutral-300/30 dark:border-white/[0.03]" />

      {/* Center identity card — same 3-layer pattern as chips */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Soft accent halo behind the center card */}
            <div
              className="absolute -inset-3 rounded-3xl opacity-70 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)',
              }}
            />
            <div className="surface-card relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl shadow-card xl:h-32 xl:w-32">
              <span className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 xl:text-4xl">
                {profile.initials}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
                Engineer
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Orbiting tech logos */}
      {techs.map((t) => (
        <TechChip key={t.name} {...t} />
      ))}
    </div>
  );
}
