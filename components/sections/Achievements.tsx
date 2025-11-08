'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  { title: 'Top 10 Finalist – Xcelerate 2025 (Oracle APEX Hackathon)', date: '2025' },
  { title: 'Special Mention – Codein Clash 2025', date: '2025' },
  { title: 'Bytewars', date: '07 Nov 2025' },
  { title: 'Paranox 2.0 Hackathon', date: '31 Oct 2025' },
  { title: 'Snaplocal Innovation Challenge', date: '13 Oct 2025' },
  { title: 'Tutedude Web Dev Hackathon', date: '25–27 Jul 2025' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 border border-green-500/30 rounded-xl bg-[#0f0f0f] hover:shadow-[0_0_30px_rgba(0,255,120,0.5)] shadow-[0_0_20px_rgba(0,255,120,0.25)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Trophy className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{achievement.title}</h3>
                  <p className="text-gray-400 text-base">{achievement.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
