'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
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
          Education
        </h2>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 border border-green-500/30 rounded-2xl bg-[#0f0f0f] shadow-[0_0_25px_rgba(0,255,120,0.35)] hover:shadow-[0_0_35px_rgba(0,255,120,0.6)] transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <GraduationCap className="w-8 h-8 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2">Bachelor of Engineering in Computer Science</h3>
              <p className="text-green-500 font-semibold mb-2 text-lg">SRM Easwari Engineering College</p>
              <div className="flex items-center gap-4 text-gray-400 text-lg">
                <span>2023 – 2027</span>
                <span>•</span>
                <span className="text-white font-semibold">GPA: 8.77 / 10</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
