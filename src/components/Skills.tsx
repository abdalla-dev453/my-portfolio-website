import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Palette, ServerCog, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Palette,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 87 },
      { name: 'React', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'TailwindCSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 75 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'PyCharm', level: 80 },
      { name: 'Postman', level: 80 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    skills: [
      { name: 'Network Security', level: 70 },
      { name: 'Web Security', level: 75 },
      { name: 'Secure Coding', level: 75 },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-paper">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-line">
      <div className="mb-12 text-center">
        <p className="eyebrow">Expertise</p>
        <h2 className="section-title mx-auto text-center">
          Technical <span className="text-accent">Skills</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-400">
          Core technologies and tools I use to build modern, reliable, and secure web products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08 }}
            className="rounded-2xl border border-line bg-card p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-accent dark:bg-blue-950/50">
                <category.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-paper">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={catIdx * 0.08 + skillIdx * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
