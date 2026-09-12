import { Github, GitPullRequest, CalendarDays } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { siteConfig } from '../data/site';

const featuredProjects = 3;

export default function SocialProof() {
  const githubUsername = siteConfig.github.split('/').pop();

  return <SectionWrapper id="proof" className="border-y border-line"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Open-source activity</p><h2 className="section-title">Work you can inspect.</h2><p className="mt-6 max-w-md text-sm leading-7 text-stone-400">The contribution graph and source code below are tied to the public GitHub profile, while the portfolio stats reflect the work displayed on this site.</p><a href={siteConfig.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-forest hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Github className="h-4 w-4" /> View GitHub profile</a></div><div><div className="grid gap-4 sm:grid-cols-3"><ProofCard icon={CalendarDays} value="2026" label="Full-stack engineering programme" /><ProofCard icon={GitPullRequest} value={`${featuredProjects}`} label="Featured projects shipped" /><ProofCard icon={Github} value="Public" label="GitHub source to review" /></div><div className="mt-4 border border-line bg-card p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-stone-500">GitHub contribution activity</p><img src={`https://ghchart.rshah.org/1B4835/${githubUsername}`} alt="GitHub contribution activity for Abdalla Msema" width="720" height="120" loading="lazy" className="mt-5 h-auto w-full" /></div></div></div></SectionWrapper>;
}

function ProofCard({ icon: Icon, value, label }: { icon: typeof Github; value: string; label: string }) { return <div className="border border-line bg-card p-6"><Icon className="h-5 w-5 text-accent" aria-hidden="true" /><p className="mt-12 text-2xl font-bold text-paper">{value}</p><p className="mt-2 text-xs leading-5 text-stone-400">{label}</p></div>; }
