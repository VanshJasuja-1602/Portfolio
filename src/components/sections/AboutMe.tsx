"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              Exploring Data. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                Building Technology.
              </span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I am an aspiring Data Scientist currently pursuing a Bachelor of Computer Applications (BCA) with a specialization in Data Science at Manipal University Jaipur.
              </p>
              <p>
                My academic journey has helped me develop a strong foundation in statistics, data analysis, machine learning fundamentals, and data structures. I enjoy working with real-world datasets, identifying patterns, and converting complex information into meaningful insights using Python, SQL, and Tableau.
              </p>
              <p>
                Alongside data science, I also build full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). This allows me to develop modern, scalable, and interactive applications.
              </p>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-4/5 sm:w-2/3 lg:w-3/4 mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mx-auto">
              <img
                src="/vansh.png"
                alt="Vansh Jasuja Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-10 pointer-events-none" />
            </div>
            {/* Soft glow behind the image */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
