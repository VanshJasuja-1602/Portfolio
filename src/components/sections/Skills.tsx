"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { SiPython, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiCplusplus, SiNumpy, SiJavascript } from 'react-icons/si';
import { Database, BarChart3, BrainCircuit } from 'lucide-react'; 

const skills = [
  { name: 'Python', icon: <SiPython size={32} />, color: '#3776AB' },
  { name: 'SQL & DBs', icon: <Database size={32} />, color: '#00758F' },
  { name: 'Tableau', icon: <BarChart3 size={32} />, color: '#E97627' },
  { name: 'Scikit-learn', icon: <BrainCircuit size={32} />, color: '#F7931E' },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, color: '#4DB33D' },
  { name: 'Express.js', icon: <SiExpress size={32} />, color: '#808080' },
  { name: 'React.js', icon: <SiReact size={32} />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933' },
  { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#F7DF1E' },
  { name: 'C++', icon: <SiCplusplus size={32} />, color: '#00599C' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/60 mx-auto max-w-xl text-lg mb-10">
            My toolbelt for data science, analytical modeling, and full-stack web development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-16">
            {['Data Analysis & Visualization — 85%', 'Python Programming — 80%', 'SQL & Database Management — 75%', 'Machine Learning Fundamentals — 70%', 'MERN Stack Development — 80%', 'Data Structures & Algorithms — 75%'].map(skill => (
              <span key={skill} className="bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <GlassCard className="flex flex-col items-center justify-center p-6 gap-4 hover:-translate-y-2 transition-all duration-300 h-full group">
                <div 
                  className="relative z-10 transition-all duration-300 transform group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {/* Subtle glow effect on hover */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div className="relative">
                    {skill.icon}
                  </div>
                </div>
                <span className="font-medium text-sm text-center text-white/70 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
