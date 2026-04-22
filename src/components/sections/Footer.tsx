"use client";

import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-black/50 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-gradient">
            Vansh Jasuja
          </span>
          <span className="text-sm font-medium text-white/40">© 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/VanshJasuja-1602" className="text-white/50 hover:text-white transition-colors hoverable">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/vansh-jasuja-93544a344" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors hoverable">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/vanshjasuja_16/" className="text-white/50 hover:text-white transition-colors hoverable">
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://drive.google.com/file/d/1D_WgaeuQog-CS9aNqrYY8dMf1gzDCyH1/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/50 hover:text-white transition-colors hoverable text-sm font-medium"
            title="Resume"
          >
            Resume
          </a>
        </div>

        <div className="text-right">
          <p className="text-sm text-white/50"> Data Scientist</p>
        </div>
      </div>
    </footer>
  );
};
