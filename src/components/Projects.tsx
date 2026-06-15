import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product management, cart functionality, and secure checkout.',
    problem: 'Small businesses lacked an affordable, customizable online selling platform.',
    solution: 'Built a scalable e-commerce platform with RESTful API backend and responsive React frontend.',
    tech: ['React', 'Flask', 'PostgreSQL', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates and team features.',
    problem: 'Teams needed a lightweight, intuitive project tracker without enterprise pricing.',
    solution: 'Developed a real-time task board with role-based access and activity tracking.',
    tech: ['React', 'Node.js', 'SQLite', 'REST API'],
    image: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application providing real-time forecasts and location-based data.',
    problem: 'Users needed accurate, localized weather data in a clean, accessible interface.',
    solution: 'Created a dashboard integrating weather APIs with interactive maps and alerts.',
    tech: ['JavaScript', 'REST APIs', 'CSS', 'HTML'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React, featuring animations and dark mode design.',
    problem: 'Needed a professional web presence to showcase projects and skills to recruiters.',
    solution: 'Designed and developed this portfolio with Framer Motion animations and SEO optimization.',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-secondary-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group rounded-2xl bg-card/50 border border-white/5 overflow-hidden card-hover"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-text-secondary text-sm mb-4">{project.description}</p>

              <div className="space-y-2 mb-5">
                <div>
                  <span className="text-xs font-semibold text-primary-accent uppercase tracking-wider">Problem</span>
                  <p className="text-sm text-text-secondary/70">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-secondary-accent uppercase tracking-wider">Solution</span>
                  <p className="text-sm text-text-secondary/70">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium text-primary-accent bg-primary-accent/10 border border-primary-accent/20 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={project.github} className="flex items-center gap-1.5 px-4 py-2 text-sm text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href={project.demo} className="flex items-center gap-1.5 px-4 py-2 text-sm text-primary-accent bg-primary-accent/10 hover:bg-primary-accent/20 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
