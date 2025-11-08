'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,128,0.05)_0%,_transparent_70%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Hello! I&apos;m{' '}
            <span className="text-green-500 inline-block">
              Lavanya S
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-white font-semibold">
            Full Stack Developer in the making - turning ideas into scalable and efficient web solutions.
          </span>
        </motion.p>

        <motion.a
          href="https://drive.google.com/file/d/1SA1ZIOw8z34VVPT86oUXiGcFGkHB5nqi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-bold rounded-sm uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(0,255,128,0.6)]"
        >
          View Resume
          <ArrowUpRight className="w-5 h-5" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-green-500/30 font-mono text-base"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
