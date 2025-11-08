'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ChevronDown, ChevronUp, Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    title: 'SchemeFinder',
    subtitle: 'Government Welfare Scheme Finder',
    description: 'Full-stack web application that enables citizens to search, filter, and apply for government welfare schemes based on personalized eligibility criteria.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'React Router', 'Lucide React'],
    github: 'https://github.com/Lavanya13-S/SchemeFinder',
    demo: undefined,
    image: undefined,
  },
  {
    title: 'GridNova',
    subtitle: 'Real-time Power Monitoring System',
    description: 'A comprehensive power monitoring solution built with React, TypeScript, Tailwind CSS, Supabase, and Recharts for real-time data visualization.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Recharts'],
    github: 'https://github.com/Lavanya13-S/GridNova',
    demo: undefined,
    image: undefined,
  },
  {
    title: 'AyushAahar',
    subtitle: 'AI Diet Planner',
    description: 'An intelligent diet planning application leveraging AI to provide personalized nutrition recommendations using React, FastAPI, and MongoDB.',
    tech: ['React', 'FastAPI', 'MongoDB', 'AI/ML'],
    github: 'https://github.com/Lavanya13-S/AyushAahar',
    demo: undefined,
    image: undefined,
  },
  {
    title: 'LearnPulse',
    subtitle: 'AI Driven Academic Analytics',
    description: 'An advanced academic analytics platform built with Oracle APEX and Cohere API to provide intelligent insights into learning patterns.',
    tech: ['Oracle APEX', 'Cohere API', 'Analytics'],
    github: undefined,
    demo: undefined,
    image: undefined,
  },
  {
    title: 'StreetConnect',
    subtitle: 'Vendor Supplier Platform',
    description: 'A platform connecting street vendors with suppliers, streamlining the supply chain for small businesses.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Lavanya13-S/StreetFood-Connect',
    demo: undefined,
    image: undefined,
  },
  {
    title: 'MindMaze',
    subtitle: 'Empathy Storytelling App',
    description: 'An interactive storytelling application designed to build empathy through immersive narratives and user engagement.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: undefined,
    demo: 'https://mind-maze-dusky.vercel.app/',
    image: undefined,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          Projects
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
                  <Code2 className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-1">{projects[currentIndex].title}</h3>
                  <p className="text-green-500 font-semibold mb-4 text-lg">{projects[currentIndex].subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">{projects[currentIndex].description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-green-500/40 px-3 py-1 rounded-sm text-base font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {projects[currentIndex].github && (
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {projects[currentIndex].demo && (
                      <a
                        href={projects[currentIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black font-semibold rounded-sm hover:shadow-[0_0_20px_rgba(0,255,128,0.5)] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {projects[currentIndex].image === 'workspace-project' && (
                      <span className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-sm text-gray-400">
                        <ImageIcon className="w-4 h-4" />
                        Image Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all"
              aria-label="Previous project"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green-500 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all"
              aria-label="Next project"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
