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

const ICONS = {
  // Languages
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Java': FaJava,
  'C++': SiCplusplus,
  'SQL': Database,

  // Frontend
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Redux': SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'ShadCN UI': SiShadcnui,
  'Material UI': SiMui,

  // Backend
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'NestJS': SiNestjs,
  'REST APIs': Network,
  'Prisma': SiPrisma,
  'BullMQ': Layers,
  'Socket.IO': SiSocketdotio,

  // AI / LLM
  'LLaMA': SiMeta,
  'RAG': Brain,
  'Function Calling': Zap,
  'LLM Integration': Sparkles,

  // Databases
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Firebase': SiFirebase,

  // DevOps & Tools
  'Docker': SiDocker,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Linux': SiLinux,
  'Postman': SiPostman,

  // Project-specific
  'Swiss Ephemeris': Sparkles,
  'HLS': Video,
};

export default function TechIcon({ name, size = 12, className = '' }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return (
    <Icon
      size={size}
      aria-hidden="true"
      className={`shrink-0 opacity-80 ${className}`}
    />
  );
}
