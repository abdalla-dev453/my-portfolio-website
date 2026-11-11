import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Project {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  imageUrl: string;
  github?: string;
  liveDemo?: string;
}

const projects: Project[] = [
  {
    slug: 'samaki-soko',
    title: 'Samaki Soko',
    description: 'A marketplace platform for coastal fishermen to market their catch and support accessible discovery.',
    outcome: 'A clearer route from local supply to buyer visibility.',
    tech: ['JavaScript', 'REST APIs', 'CSS', 'HTML'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    github: 'https://github.com/abdalla-dev453/samaki-sokoapp',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'A personal finance web application for recording and understanding day-to-day spending.',
    outcome: 'A cleaner, more consistent way to track everyday financial decisions.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85',
    github: 'https://github.com/abdalla-dev453/expensetracker',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A fast, responsive portfolio built with a content-first user experience.',
    outcome: 'A stronger personal brand and clearer story for opportunity discovery.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85',
    github: 'https://github.com/abdalla-dev453/my-portfolio-website',
    liveDemo: '#case-study/portfolio-website',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="border-t border-line">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects built for real use.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-stone-400">
          Each project is approached with clarity, maintainability, and a focus on actual user value.
        </p>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex min-h-[380px] flex-col rounded-2xl border border-line bg-card p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-6"
          >
            <div className="mb-5 overflow-hidden rounded-xl border border-line bg-slate-100 dark:bg-slate-800">
              <img
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                className="h-44 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex items-start justify-between">
              <span className="font-mono text-xs font-semibold text-accent">0{index + 1}</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-line text-muted">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold tracking-tight text-paper">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">{project.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">Outcome</p>
              <p className="mt-1 text-sm leading-6 text-paper">{project.outcome}</p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line bg-secondary-bg px-2.5 py-1 text-[11px] font-semibold text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-6 border-t border-line mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper hover:text-accent transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> Source
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  onClick={(event) => {
                    if (project.liveDemo?.startsWith('#case-study/')) {
                      event.preventDefault();
                      window.location.hash = `case-study/${project.slug}`;
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-blue-700 transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />{' '}
                  {project.slug === 'portfolio-website' ? 'Case study' : 'Live demo'}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
