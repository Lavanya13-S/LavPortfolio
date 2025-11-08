'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-visible">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] font-black opacity-10 select-none pointer-events-none whitespace-nowrap">
        LAVANYA S
      </div>

      <div className="max-w-5xl mx-auto relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-green-500">
            &gt;_ Crafted with passion and code
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
