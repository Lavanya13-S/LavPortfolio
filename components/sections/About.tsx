'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          About Me
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          I&apos;m a passionate developer with a keen interest in building interactive and efficient web applications.
          My journey in computer science has equipped me with a strong foundation in full-stack development,
          and I&apos;m constantly exploring new technologies to create innovative solutions that make a real impact.
        </p>
      </motion.div>
    </section>
  );
}
