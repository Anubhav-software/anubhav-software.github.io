/**
 * ─────────────────────────────────────────────────────────────────
 *  Profile data — single source of truth for all site content.
 *  Edit links, copy, and details here without touching components.
 *  All external URLs are placeholders ("#") — replace with real ones.
 * ─────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Anubhav Rawat',
  title: 'Software Engineer | Full-Stack Developer (MERN / Node.js) + AI',
  tagline: 'Building scalable, AI-powered web applications end-to-end.',
  initials: 'AR',

  // ───── Contact ─────
  email: 'rawatanubhav085@gmail.com',
  phone: '+91-7303186984',
  location: 'Ghaziabad, India',

  // ───── External Links ─────
  links: {
    resume: '#',     // TODO: replace with resume URL (PDF or Google Doc share link)
    linkedin: 'https://linkedin.com/in/anubhav-rawat',
    github: 'https://github.com/anubhavrawat',
    leetcode: 'https://leetcode.com/anubhavrawat',
    hackerrank: 'https://hackerrank.com/anubhavrawat',
  },
};

// ───── Navigation sections (must match section ids) ─────
export const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

// ───── About copy ─────
export const aboutParagraphs = [
  "I'm a Software Engineer with 2+ years of experience building production-grade web applications using the MERN stack, Node.js, and modern TypeScript tooling. I enjoy designing systems that are reliable in the small and scale gracefully in the large.",
  "Beyond traditional full-stack work, I specialize in integrating AI and LLMs into real products — building RAG pipelines, function-calling agents, and LLaMA-powered features that move beyond demos into something users actually rely on. Outside of shipping, I've solved 250+ DSA problems and hold a 5★ rating on HackerRank.",
];

// ───── Stats (count-up section) ─────
export const stats = [
  { value: 2,   suffix: '+',  label: 'Years of Experience' },
  { value: 4,   suffix: '+',  label: 'Production Projects' },
  { value: 250, suffix: '+',  label: 'DSA Problems Solved' },
  { value: 5,   suffix: '★',  label: 'HackerRank Rating' },
];

// ───── Skills (grouped) ─────
export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'ShadCN UI', 'Material UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Prisma', 'BullMQ', 'Socket.IO'],
  },
  {
    title: 'AI / LLM',
    items: ['LLaMA', 'RAG', 'Function Calling', 'LLM Integration'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'Postman'],
  },
];

// ───── Projects — each gets a premium card ─────
// TODO: replace href "#" placeholders with real demo/GitHub URLs.
export const projects = [
  {
    name: 'Panipat ERP',
    summary:
      'Enterprise Resource Planning system managing 15,000+ products with POS billing, vendor management, expense tracking, analytics dashboards, and asset management. Features an AI chatbot powered by LLaMA with function-calling tools and a RAG pipeline.',
    tech: ['React.js', 'Node.js', 'NestJS', 'PostgreSQL', 'LLaMA', 'RAG', 'Redis', 'Docker'],
    demo: '#',
    repo: '#',
    highlight: '15,000+ products',
  },
  {
    name: 'MsgBuddy',
    summary:
      'WhatsApp marketing & campaign platform with bulk contact/media upload, audience segmentation, campaign automation on targeted segments, and a WhatsApp template builder. Uses BullMQ + Redis for reliable high-volume message dispatch.',
    tech: ['Next.js', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ', 'Redis'],
    demo: '#',
    repo: '#',
    highlight: 'High-volume dispatch',
  },
  {
    name: 'BNI Buddy',
    summary:
      'Business networking platform serving 1,000+ members with role-based access (Regional Admins, Chapter Admins, Members), payment gateway integration, and auto-generated invoices.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Redis'],
    demo: '#',
    repo: '#',
    highlight: '1,000+ members',
  },
  {
    name: 'Cosmoriya Astrology',
    summary:
      'A fully dynamic LMS + CMS astrology platform with secure HLS-based video streaming — classes uploaded as encrypted HLS chunks to prevent unauthorized downloads. Generates Kundli and Panchang via the Swiss Ephemeris library, paired with a dynamic CMS that lets non-technical users edit services, blogs, and site content without code changes.',
    tech: ['React.js', 'Node.js', 'Swiss Ephemeris', 'HLS', 'PostgreSQL'],
    demo: '#',
    repo: '#',
    highlight: 'Encrypted streaming',
  },
];

// ───── Experience timeline ─────
export const experiences = [
  {
    role: 'Node.js Developer',
    company: 'Mind Aviator Group',
    period: 'Jan 2025 — Present',
    bullets: [
      'Architecting backend services in Node.js / NestJS for the Panipat ERP platform, including the AI chatbot powered by LLaMA with function-calling tools and a RAG pipeline.',
      'Designing PostgreSQL schemas and Redis-backed caching layers to keep the catalog of 15,000+ products and POS workflows responsive at scale.',
      'Owning end-to-end feature delivery: from API design to deployment via Docker, with a focus on reliability and developer ergonomics.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'KGI Services',
    period: 'Jan 2024 — Dec 2024',
    bullets: [
      'Built and shipped full-stack features across the MERN stack for client-facing products, including BNI Buddy serving 1,000+ members.',
      'Implemented payment gateway integration, role-based access control, and automated invoice generation.',
      'Collaborated closely with design and product to translate requirements into clean, accessible interfaces.',
    ],
  },
];
