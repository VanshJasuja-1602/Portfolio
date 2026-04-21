"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Hackathon Metaverse 2.0 Participation Certificate',
    organization: "St. Xavier's College Jaipur (Xavier Institute of Management & Informatics)",
    year: '2026',
    description: 'Participated in the Hackathon at Metaverse 2.0, demonstrating innovation and collaborative problem-solving in a high-pressure environment.',
    skills: ['Hackathon', 'Problem Solving', 'Teamwork', 'Rapid Development'],
  },
  {
    title: 'Data Analytics Job Simulation',
    organization: 'Deloitte (Forage)',
    year: '2026',
    description: 'Completed a virtual job simulation focused on real-world data analytics tasks, including data analysis and forensic technology.',
    skills: ['Data Analysis', 'Problem Solving', 'Analytical Thinking'],

  },
  {
    title: 'Programming in Java (Elite Certification)',
    organization: 'NPTEL (IIT Kharagpur)',
    year: 'Jul–Oct 2025',
    description: 'Successfully completed an advanced programming course with strong performance in both assignments and proctored examination.',
    skills: ['Java Programming', 'Problem Solving', 'Data Structures Basics'],
    extra: 'Score: 91%'
  },
  {
    title: 'ASCI 2025 Conference',
    organization: 'Manipal University Jaipur',
    year: '2025',
    description: 'Presented a research paper titled “Reimagining Reality” at the International Conference on Applied Scientific Computational Intelligence using Digital Twins.',
    skills: ['Research & Presentation', 'Technical Communication', 'Analytical Thinking']
  },
  {
    title: 'Certificate of Appreciation — Pixel 2 Project',
    organization: 'Manipal University Jaipur (Centaurus Arena Club)',
    year: '2025',
    description: 'Recognized for outstanding performance in a competitive technical project event, securing 2nd Position.',
    skills: ['Team Collaboration', 'Project Development', 'Problem Solving'],
    extra: 'Secured 2nd Position'
  },
  {
    title: 'Certificate of Merit — NTCE 2025',
    organization: 'Thinkwonders',
    year: '2025',
    description: 'Recognized for exceptional performance in a national-level competitive exam.',
    skills: ['Logical Reasoning', 'Aptitude', 'Analytical Skills'],
    extra: '94.53 Percentile'
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            Certifications & <span className="text-white/50">Achievements</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg">
            A track record of continuous learning, competitive achievements, and specialized certifications verifying my technical capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col p-8 group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Award className="text-white/70 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">{cert.title}</h3>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="text-white/80 font-medium mb-1">{cert.organization}</h4>
                  <p className="text-white/40 text-sm mb-4">{cert.year}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  {cert.extra && (
                    <div className="inline-block px-3 py-1 bg-white/10 text-white/90 font-medium text-xs rounded-full border border-white/20 mb-4">
                      {cert.extra}
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h5 className="text-xs uppercase tracking-wider text-white/50 mb-3 font-semibold">Skills Gained</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="flex items-center gap-1.5 text-xs font-medium text-white/70">
                        <CheckCircle size={12} className="text-white/40" /> {skill}
                      </span>
                    ))}
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
