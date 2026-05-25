import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiMeta,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
  Database,
  Network,
  Layers,
  Brain,
  Zap,
  Sparkles,
  Video,
} from 'lucide-react';

/**
 * Each entry is { icon, color? }.
 * Omit `color` when the brand is black / very dark — those would
 * disappear in dark mode; let them inherit the chip's text color.
 */
const ICONS = {
  // Languages
  'JavaScript':   { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript':   { icon: SiTypescript, color: '#3178C6' },
  'Java':         { icon: FaJava,       color: '#ED8B00' },
  'C++':          { icon: SiCplusplus,  color: '#00599C' },
  'SQL':          { icon: Database },

  // Frontend
  'React.js':     { icon: SiReact,       color: '#61DAFB' },
  'Next.js':      { icon: SiNextdotjs },
  'Redux':        { icon: SiRedux,       color: '#764ABC' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'ShadCN UI':    { icon: SiShadcnui },
  'Material UI':  { icon: SiMui,         color: '#007FFF' },

  // Backend
  'Node.js':    { icon: SiNodedotjs,  color: '#339933' },
  'Express.js': { icon: SiExpress },
  'NestJS':     { icon: SiNestjs,     color: '#E0234E' },
  'REST APIs':  { icon: Network },
  'Prisma':     { icon: SiPrisma },
  'BullMQ':     { icon: Layers },
  'Socket.IO':  { icon: SiSocketdotio },

  // AI / LLM
  'LLaMA':            { icon: SiMeta, color: '#0467DF' },
  'RAG':              { icon: Brain },
  'Function Calling': { icon: Zap },
  'LLM Integration':  { icon: Sparkles },

  // Databases
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB':    { icon: SiMongodb,    color: '#47A248' },
  'Redis':      { icon: SiRedis,      color: '#DC382D' },
  'Firebase':   { icon: SiFirebase,   color: '#FFCA28' },

  // DevOps & Tools
  'Docker':  { icon: SiDocker, color: '#2496ED' },
  'Git':     { icon: SiGit,    color: '#F05032' },
  'GitHub':  { icon: SiGithub },
  'Linux':   { icon: SiLinux,  color: '#FCC624' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },

  // Project-specific
  'Swiss Ephemeris': { icon: Sparkles },
  'HLS':             { icon: Video },
};

export default function TechIcon({ name, size = 12, className = '' }) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { icon: Icon, color } = entry;
  return (
    <Icon
      size={size}
      aria-hidden="true"
      style={color ? { color } : undefined}
      className={`shrink-0 ${className}`}
    />
  );
}
