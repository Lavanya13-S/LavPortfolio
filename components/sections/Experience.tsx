'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'Front End Web Development Intern',
    company: 'IBM SkillsBuild',
    duration: 'Aug – Sep 2025',
    description: 'Built responsive website using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal user experience.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'VLOG Innovations LLP',
    duration: 'Jun – Jul 2025',
    description: 'Created Power BI dashboards for data visualization and insights, enabling data-driven decision making.',
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          Experience
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="p-8 border border-green-500/30 rounded-2xl bg-[#0f0f0f] shadow-[0_0_25px_rgba(0,255,120,0.35)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{experiences[currentIndex].title}</h3>
                  <p className="text-green-500 font-semibold mb-2 text-lg">{experiences[currentIndex].company}</p>
                  <p className="text-gray-400 text-base">{experiences[currentIndex].duration}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{experiences[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all"
              aria-label="Previous experience"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green-500 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all"
              aria-label="Next experience"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
