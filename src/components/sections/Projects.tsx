"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Database, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'DeathByAI',
    description: 'An AI-powered Bias Detection Tool that analyzes healthcare and demographic datasets for fairness. Detects disparities in gender, age, and approval rates, generating detailed fairness reports and heatmaps to ensure ethical AI deployment.',
    image: '/projects/deathbyai.png',
    tags: ['Python', 'Streamlit', 'ML Fairness', 'Data Analysis', 'Ethics'],
    link: '#',
    github: 'https://github.com/VanshJasuja-1602/deadthByAI'
  },
  {
    title: 'Beyond Borders',
    description: 'A full-stack travel booking web application allowing users to explore destinations, view packages, and book trips interactively using a complete MERN environment.',
    image: '/project.jpg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML/CSS/JS'],
    link: '#',
    github: 'https://github.com/VanshJasuja-1602/Beyond-Borders'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            Featured <span className="text-white/50">Projects</span>
          </h2>
          <p className="text-white/60 max-w-xl text-lg">

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col group p-0 overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-white/60 flex-1 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                    <a href={project.link} className="flex items-center text-sm font-medium hover:text-white/70 transition-colors gap-2 hoverable">
                      Live Preview <ExternalLink size={16} />
                    </a>
                    <a href={project.github} className="flex items-center text-sm font-medium hover:text-white/70 transition-colors gap-2 hoverable">
                      Source Code <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
