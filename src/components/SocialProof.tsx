import { Github, GitPullRequest, CalendarDays } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { siteConfig } from '../data/site';

const featuredProjects = 3;

export default function SocialProof() {
  const githubUsername = siteConfig.github.split('/').pop();

  return (
    <SectionWrapper id="proof" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Open-source activity</p>
          <h2 className="section-title">Work you can inspect.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
            The contribution graph and source code below reflect public activity on GitHub, with full commit histories and inspectable architectures.
          </p>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-700"
          >
            <Github className="h-4 w-4" /> View GitHub profile
          </a>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-3">
            <ProofCard icon={CalendarDays} value="2026" label="Full-stack engineering programme" />
            <ProofCard icon={GitPullRequest} value={`${featuredProjects}`} label="Featured projects shipped" />
            <ProofCard icon={Github} value="Public" label="GitHub source to review" />
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">GitHub contribution activity</p>
            <img
              src={`https://ghchart.rshah.org/2563EB/${githubUsername}`}
              alt="GitHub contribution activity for Abdalla Msema"
              width="720"
              height="120"
              loading="lazy"
              className="mt-4 h-auto w-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProofCard({ icon: Icon, value, label }: { icon: typeof Github; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5 shadow-sm">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-accent dark:bg-blue-950/50">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <p className="mt-6 text-2xl font-bold tracking-tight text-paper">{value}</p>
      <p className="mt-1 text-xs text-stone-400">{label}</p>
    </div>
  );
}
