import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../data/site';

const links = [
  { icon: Github, label: 'GitHub', href: siteConfig.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.linkedin, external: true },
  { icon: Mail, label: 'Email', href: `mailto:${siteConfig.email}`, external: false },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="font-display text-xl font-bold text-paper">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} · Full-Stack Software Engineer · {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={label}
              className="grid h-8 w-8 place-items-center rounded-lg border border-line text-muted transition hover:border-slate-300 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-paper hover:text-accent transition-colors"
          >
            Top <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
