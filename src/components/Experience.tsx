import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Experience {
  type: 'work' | 'education';
  role: string;
  org: string;
  duration: string;
  responsibilities: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    type: 'work',
    role: 'Full-Stack Software Engineer',
    org: 'Company Name',
    duration: '2025 – Present',
    responsibilities: [
      'Built scalable web applications serving end users',
      'Developed RESTful APIs for data-driven features',
      'Implemented responsive user interfaces with React',
      'Collaborated with cross-functional teams on product roadmap',
      'Improved application performance and load times',
    ],
    tech: ['React', 'Flask', 'PostgreSQL', 'TailwindCSS'],
  },
  {
    type: 'education',
    role: 'Software Engineering Student',
    org: 'Moringa School',
    duration: '2024 – 2025',
    responsibilities: [
      'Developed full-stack projects from concept to deployment',
      'Worked in Agile teams with daily standups and sprints',
      'Built real-world applications as part of curriculum',
      'Practiced software development best practices and code reviews',
    ],
    tech: ['Python', 'Flask', 'React', 'PostgreSQL'],
  },
];

const focusAreas = [
  'Full-Stack Development',
  'Mobile Applications',
  'Cybersecurity',
  'Product Development',
  'Software Architecture',
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-accent via-secondary-accent to-transparent" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary-accent flex items-center justify-center z-10">
              {exp.type === 'work' ? (
                <Briefcase className="w-4 h-4 text-primary-accent" />
              ) : (
                <GraduationCap className="w-4 h-4 text-secondary-accent" />
              )}
            </div>

            {/* Card */}
            <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
              <div className="p-6 rounded-2xl bg-card/50 border border-white/5 card-hover">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    exp.type === 'work'
                      ? 'text-primary-accent bg-primary-accent/10'
                      : 'text-secondary-accent bg-secondary-accent/10'
                  }`}>
                    {exp.type === 'work' ? 'Professional' : 'Education'}
                  </span>
                  <span className="text-xs text-text-secondary/50 font-mono">{exp.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-white mt-2">{exp.role}</h3>
                <p className="text-primary-accent text-sm mb-4">{exp.org}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-accent/60 mt-1.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                {exp.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs text-text-secondary/60 bg-white/5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Focus */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-center mb-6">
          Professional <span className="gradient-text">Focus</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 text-sm font-medium text-text-secondary glass rounded-xl hover:text-white hover:border-primary-accent/30 transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
