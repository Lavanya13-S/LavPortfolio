'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  { title: 'Introduction to Cyber Security', url: 'https://drive.google.com/file/d/1b2869qY8129RZq6Eapj6uJRbbqhxVgRN/view?usp=sharing' },
  { title: 'Network Addressing and Basic Troubleshooting', url: 'https://drive.google.com/file/d/1tAezLJfhCC5bB3UCaVfH92bfRDb6xLGr/view?usp=sharing' },
  { title: 'Python Essentials', url: 'https://drive.google.com/file/d/1npKGvTWgi0y0hfTsHsE5Oj__oaS4Kggh/view?usp=sharing' },
  { title: 'Web Development Fundamentals', url: 'https://drive.google.com/file/d/1bSUo8ovxjtGs5Boo8_r8NqfiSEdcrhIS/view?usp=sharing' },
  { title: 'C++ Fundamentals', url: 'https://drive.google.com/file/d/1RV2UyjRxiRVYiJZ1N2C-b3m-mNQquwOx/view?usp=sharing' },
  { title: 'HTML5 - The Language', url: 'https://drive.google.com/file/d/1i3Hlo4dB1XWyehFqfan9YYxly-_wKN6N/view?usp=sharing' },
  { title: 'CSS3', url: 'https://drive.google.com/file/d/1eJFcEtjQioX9qMf6hlIVfwQmtE3zhtCq/view?usp=sharing' },
  { title: 'Java Essentials', url: 'https://drive.google.com/file/d/1N-udZTYIATGr-xHqf31c0H9BgbA_jp61/view?usp=sharing' },
  { title: 'Software Engineering', url: 'https://drive.google.com/file/d/1lTkWnaVuRP9jnLLt9gVr1IZMo2RJVtgT/view?usp=sharing' },
];

export default function Certificates() {
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
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 border border-green-500/30 rounded-xl bg-[#0f0f0f] hover:shadow-[0_0_30px_rgba(0,255,120,0.5)] shadow-[0_0_20px_rgba(0,255,120,0.25)] transition-all flex flex-col items-start gap-4"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <span className="text-green-400 text-lg font-light tracking-wide cursor-pointer hover:text-green-300 transition-all">
                  View Certificate
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
