"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail, ArrowUpRight, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <GlassCard className="p-12 md:p-20 text-center overflow-hidden relative border-white/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-tight">
              Ready to <br />
              <span className="text-white/50">create impact.</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              I am actively seeking Data Science or Data Analyst internship opportunities where I can apply my analytical and technical skills to solve real-world problems. Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:vanshjasuja394@gmail.com">
                <MagneticButton className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                  Send an Email
                </MagneticButton>
              </a>
              <a href="https://linkedin.com/in/vansh-jasuja-93544a344" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors hoverable font-medium bg-white/5 px-6 py-4 rounded-full border border-white/10 hover:border-white/30">
                Connect on LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <MapPin size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-white/60">Jaipur, India</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <Phone size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-white/60">+91-7014514568</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  <Mail size={20} className="text-white/70" />
                </div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-white/60 text-sm md:text-base break-words">vanshjasuja394<br className="sm:hidden" />@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
};
