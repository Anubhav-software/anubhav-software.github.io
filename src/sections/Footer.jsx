import { Linkedin, Github, Code, Mail } from 'lucide-react';
import { navItems, profile } from '../data/profile';

const year = new Date().getFullYear();

const footerSocials = [
  { name: 'Email',      href: `mailto:${profile.email}`,  icon: Mail     },
  { name: 'LinkedIn',   href: profile.links.linkedin,     icon: Linkedin },
  { name: 'GitHub',     href: profile.links.github,       icon: Github   },
  { name: 'LeetCode',   href: profile.links.leetcode,     icon: Code     },
];

export default function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="container-page py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand + copyright */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-xs font-semibold text-white">
              {profile.initials}
            </span>
            <p className="text-sm text-muted">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Quick nav */}
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="link-underline text-muted transition-colors hover:text-accent-700 dark:hover:text-accent-300"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-1.5">
            {footerSocials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-accent-700 dark:hover:text-accent-300"
              >
                <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
