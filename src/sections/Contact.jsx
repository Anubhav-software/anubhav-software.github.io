import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Code } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

/**
 * Contact — direct contact info on the left, minimal form on the right.
 * The form opens the user's email client via `mailto:` (no backend needed).
 */

const socials = [
  { name: 'LinkedIn',   href: profile.links.linkedin,   icon: Linkedin },
  { name: 'GitHub',     href: profile.links.github,     icon: Github   },
  { name: 'LeetCode',   href: profile.links.leetcode,   icon: Code     },
  { name: 'HackerRank', href: profile.links.hackerrank, icon: Code     },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto: hand-off — opens the user's default mail client.
    // For a server-backed form, swap this for a fetch() to your API.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Hi Anubhav,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onChange = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something good."
          intro="Open to full-time roles, interesting contracts, and conversations about AI-native products."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* ── Direct contact info ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="surface-card group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:border-accent-500/40 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Mail size={18} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">Email</p>
                    <p className="truncate text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent-700 dark:text-neutral-100 dark:group-hover:text-accent-300">
                      {profile.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                  className="surface-card group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:border-accent-500/40 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Phone size={18} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">Phone</p>
                    <p className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent-700 dark:text-neutral-100 dark:group-hover:text-accent-300">
                      {profile.phone}
                    </p>
                  </div>
                </a>
              </li>
              <li className="surface-card flex items-center gap-4 rounded-xl p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <MapPin size={18} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-subtle">Location</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {profile.location}
                  </p>
                </div>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ name, href, icon: Icon }) => (
                  /* TODO: replace href in src/data/profile.js */
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-subtle text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-700 dark:text-neutral-300 dark:hover:text-accent-300"
                  >
                    <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Minimal form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="surface-card rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-subtle">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange('name')}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-subtle bg-transparent px-3.5 py-2.5 text-sm
                    text-neutral-900 placeholder-neutral-400 transition-colors
                    focus:border-accent-500/70 focus:outline-none
                    dark:text-neutral-100 dark:placeholder-neutral-600"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-subtle">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange('email')}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-subtle bg-transparent px-3.5 py-2.5 text-sm
                    text-neutral-900 placeholder-neutral-400 transition-colors
                    focus:border-accent-500/70 focus:outline-none
                    dark:text-neutral-100 dark:placeholder-neutral-600"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-subtle">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={onChange('message')}
                placeholder="A few words about the role or project…"
                className="w-full resize-y rounded-lg border border-subtle bg-transparent px-3.5 py-2.5 text-sm
                  text-neutral-900 placeholder-neutral-400 transition-colors
                  focus:border-accent-500/70 focus:outline-none
                  dark:text-neutral-100 dark:placeholder-neutral-600"
              />
            </div>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-subtle">
                This opens your email client — no data is sent through a server.
              </p>
              <button type="submit" className="btn-primary">
                <Send size={15} strokeWidth={2} aria-hidden="true" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
