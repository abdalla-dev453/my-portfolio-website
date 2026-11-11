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
    <SectionWrapper id="projects" className="border-y border-line">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects built for real use.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-stone-400">
          Each project is approached with clarity, maintainability, and a focus on actual user value.
        </p>
      </div>

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ y: 24, rotateX: -4 }}
            whileInView={{ y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.12, duration: 0.7, type: 'spring', stiffness: 90 }}
            whileHover={{ y: -10, rotateX: 1, rotateY: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
            whileTap={{ scale: 0.985 }}
            style={{ transformPerspective: 1000 }}
            className="group flex min-h-[380px] flex-col rounded-[1.75rem] border border-line bg-card p-4 shadow-[0_18px_40px_rgba(27,72,53,0.05)] transition duration-300 sm:p-6 hover:-translate-y-1 hover:border-accent hover:shadow-[0_22px_52px_rgba(27,72,53,0.12)]"
          >
            <div className="mb-6 overflow-hidden rounded-[1.25rem] border border-line bg-ink">
              <img
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                className="h-40 w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:saturate-125"
                loading="lazy"
              />
            </div>

            <div className="flex items-start justify-between">
              <span className="font-mono text-xs font-bold tracking-[0.16em] text-accent">0{index + 1}</span>
              <motion.span
                whileHover={{ rotate: 90, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 240, damping: 12 }}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-forest transition-colors group-hover:border-accent group-hover:bg-sun"
              >
                <Globe2 className="h-4 w-4" aria-hidden="true" />
              </motion.span>
            </div>

            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl font-bold tracking-[-.035em] text-paper sm:text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-400">{project.description}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-accent">Outcome</p>
              <p className="mt-2 text-sm leading-6 text-forest/80">{project.outcome}</p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.li
                  key={tech}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  className="border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-400 transition-colors hover:border-accent hover:bg-sun hover:text-forest"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest hover:text-accent">
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
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest hover:text-accent"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> {project.slug === 'portfolio-website' ? 'Case study' : 'Live demo'}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
