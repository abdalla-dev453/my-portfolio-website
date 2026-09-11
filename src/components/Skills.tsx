import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'bg-accent',
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
    icon: '⚙️',
    color: 'bg-stone-400',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'bg-stone-500',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 75 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: 'bg-stone-300',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Pycharm', level: 80 },
      { name: 'Postman', level: 80 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '🔒',
    color: 'bg-accent',
    skills: [
      { name: 'Network Security', level: 70 },
      { name: 'Web Security', level: 75 },
      { name: 'Secure Coding', level: 75 },
    ],
  },
];

function SkillBar({ skill, color, delay }: { skill: Skill; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">{skill.name}</span>
        <span className="text-text-secondary/50 font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="p-6 rounded-2xl bg-card/50 border border-white/5 card-hover"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={category.color}
                  delay={catIdx * 0.1 + skillIdx * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
