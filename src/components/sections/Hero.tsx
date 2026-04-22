"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowRight, FileText } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="text-sm font-medium text-white/80">Available for Internships</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-[family-name:var(--font-space-grotesk)] mb-4 text-gradient"
        >
          Vansh Jasuja
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-medium text-white/90 mb-6 font-[family-name:var(--font-space-grotesk)]"
        >
          Data Science & AI/ML Student
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mb-12"
        >
          Turning Data into Insights and Ideas into Intelligent Solutions. I am passionate about transforming raw data into meaningful insights and building intelligent applications using data analytics, visualization tools, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects">
            <MagneticButton className="flex items-center gap-2 bg-white text-black hover:bg-white/90">
              View Work
            </MagneticButton>
          </a>
          <a href="#contact">
            <MagneticButton className="flex items-center gap-2">
              Contact Me
            </MagneticButton>
          </a>
          <a 
            href="https://drive.google.com/file/d/1D_WgaeuQog-CS9aNqrYY8dMf1gzDCyH1/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MagneticButton className="flex items-center gap-2">
              Resume
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
