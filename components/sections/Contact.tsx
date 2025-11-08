'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-3">
          <span className="text-green-500 text-5xl">▍</span>
          Get In Touch
        </h2>
        <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="mailto:lavanyas4074@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-6 py-3 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all font-mono text-lg"
          >
            <Mail className="w-5 h-5" />
            Email: lavanyas4074@gmail.com
          </motion.a>

          <motion.a
            href="tel:+919345450934"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-6 py-3 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all font-mono text-lg"
          >
            <Phone className="w-5 h-5" />
            Phone: +91 93454 50934
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/lavanya-s-995770320"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-6 py-3 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all font-mono text-lg"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/Lavanya13-S"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-6 py-3 border border-green-500/40 rounded-sm hover:bg-green-500/10 transition-all font-mono text-lg"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
