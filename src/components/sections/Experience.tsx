"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    role: "(BCA)Specialization in Data Science",
    entity: "Manipal University Jaipur",
    period: "Expected 2027",
    description: "Currently pursuing a degree with a stellar 9.8 CGPA. Core learning involves Data Science Fundamentals, Statistics, Database Management Systems, and Machine Learning."
  },
  {
    role: "Full-Stack Developer",
    entity: "Personal & Academic Projects",
    period: "2023 - Present",
    description: "Built end-to-end applications utilizing the MERN stack while focusing on responsive design, modern web architecture, and clean user interfaces."
  },
  {
    role: "Data Enthusiast",
    entity: "Continuous Learning",
    period: "Ongoing",
    description: "Actively working on real-world datasets for exploratory data analysis (EDA), cleaning, and visualization using Python, Pandas, and Tableau."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Academic & <span className="text-white/50">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors group-hover:bg-white group-hover:text-black">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-colors hover:bg-white/10 hover:border-white/20">
                <div className="flex flex-col sm:flex-row justify-between mb-3 items-start sm:items-center">
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <span className="text-sm font-medium text-white/50 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0">{item.period}</span>
                </div>
                <h4 className="text-white/80 font-medium mb-4">{item.entity}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
