'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Python',
    'FastAPI',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Git',
    'Docker',
    'Supabase',
    'Oracle APEX',
    'Power BI',
    'C++',
    'Java',
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="border border-green-500/40 px-4 py-2 rounded-sm bg-[#0f0f0f] hover:bg-green-500/10 transition-all cursor-default font-mono text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
