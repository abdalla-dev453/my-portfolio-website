import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../data/site';

const links = [
  { icon: Github, label: 'GitHub', href: siteConfig.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.linkedin, external: true },
  { icon: Mail, label: 'Email', href: `mailto:${siteConfig.email}`, external: false },
] as const;

export default function Footer() {
  return <footer className="border-t border-line"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-24 pt-10 sm:px-8 md:flex-row md:items-end md:justify-between md:py-10 lg:px-12"><div><p className="font-display text-3xl text-paper">{siteConfig.name}</p><p className="mt-2 text-xs text-stone-500">© {new Date().getFullYear()} · {siteConfig.location}</p></div><div className="flex items-center gap-5">{links.map(({ icon: Icon, label, href, external }) => <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={label} className="text-stone-400 transition-colors hover:text-accent"><Icon className="h-4 w-4" /></a>)}<a href="#home" className="ml-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-300 hover:text-paper">Top <ArrowUpRight className="h-4 w-4" /></a></div></div></footer>;
}
