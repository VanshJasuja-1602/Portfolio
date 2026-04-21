"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Modal } from '../ui/Modal';
import { 
  Trophy, 
  Rocket, 
  Globe, 
  Cpu, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

interface EventItem {
  id: string;
  type: 'featured' | 'event' | 'achievement';
  title: string;
  organization: string;
  date: string;
  location?: string;
  images: string[];
  description: string;
  highlights: string[];
  tags: string[];
  badge: string;
  accentColor: string;
  icon: React.ReactNode;
}

const events: EventItem[] = [
  {
    id: 'metaverse-hackathon',
    type: 'featured',
    title: '1st Place Winner – Hackathon Metaverse 2.0',
    organization: "St. Xavier's College Jaipur (Xavier Institute of Management & Informatics)",
    date: 'March 2026',
    images: ['/images/events/hackathon-stage.jpg', '/images/events/hackathon-presentation.png'],
    description: "Won 1st place at Hackathon Metaverse 2.0 with 'Ayurvaidya'—a multi-modal platform for modern medicine and holistic care. Developed and pitched a comprehensive tech solution in a competitive environment, showcasing full-stack capabilities and strategic innovation.",
    highlights: [
      'Developed "Ayurvaidya", an innovative health-tech platform for holistic care',
      'Secured 1st position among 40+ competitive teams across the region',
      'Awarded the winner’s trophy and certificate at St. Xavier’s College Jaipur (XIMI)'
    ],
    tags: ['Hackathon', 'Winner', 'Innovation'],
    badge: '🏆 Winner',
    accentColor: '#fbbf24', // Amber/Gold
    icon: <Trophy className="text-amber-400" size={28} />
  },
  {
    id: 'pre-incubation',
    type: 'featured',
    title: 'Pre-Incubation Selection – E-Cell Manipal',
    organization: 'E-Cell, Manipal University Jaipur',
    date: 'September 2025',
    images: ['/images/events/pre-incubation-stage.png', '/images/events/pre-incubation-pitch.png'],
    description: 'Selected for pre-incubation on Pitch Day (September 18, 2025) at E-Cell Manipal University Jaipur. Presented a startup idea to a panel of distinguished academic-entrepreneurs and received official selection to move forward with the venture.',
    highlights: [
      'Successfully pitched the startup model during the EA2IPR Pitch Day',
      'Selected for pre-incubation under the mentorship of E-Cell MUJ leadership',
      'Received official selection letter from Director Dr. Anand Pandey and Dean Dr. Kuldeep Singh Sangwar'
    ],
    tags: ['Startup', 'Pitching', 'Pre-Incubation'],
    badge: '🚀 Startup',
    accentColor: '#818cf8', // Indigo
    icon: <Rocket className="text-indigo-400" size={28} />
  },
  {
    id: 'ai-summit',
    type: 'event',
    title: 'AI Impact Summit 2026 – Industry Exposure',
    organization: 'AI Impact Summit Bharat',
    location: 'New Delhi',
    date: '2026',
    images: ['/images/events/ai-summit-branding.jpg', '/images/events/ai-summit-robot.jpg'],
    description: "Attended the AI Impact Summit 2026 in New Delhi, a premier gathering of AI researchers, tech giants, and robotics innovators. Witnessed the latest advancements in humanoid robotics and industrial automation from companies like Addverb.",
    highlights: [
      'Explored state-of-the-art industrial and humanoid robots from Addverb',
      'Engaged with the latest Generative AI and automation trends at Bharat 2026',
      'Gained insights into the future of AI-driven industrial ecosystems in India'
    ],
    tags: ['AI', 'Networking', 'Robotics'],
    badge: '📍 Summit',
    accentColor: '#2dd4bf', // Teal
    icon: <Globe className="text-teal-400" size={22} />
  },
  {
    id: 'gen-ai-workshop',
    type: 'event',
    title: 'Generative AI Workshop – Hands-on Learning',
    organization: 'AICTE & CTE',
    location: 'AICTE Innovation Center, Jaipur',
    date: 'December 19, 2025',
    images: ['/images/events/gen-ai-workshop.jpg'],
    description: 'Participated in a specialized program on "Unlock Generative AI: Transformative Tools For Start-up Innovation & Scale"—a joint initiative of AICTE & Consortium for Technical Education (CTE).',
    highlights: [
      'Mastered transformative AI tools designed for start-up innovation',
      'Explored multi-modal LLM applications for real-world scalability',
      'Gained hands-on experience at the AICTE Innovation Center, Jaipur'
    ],
    tags: ['AI', 'Workshop', 'GenAI'],
    badge: '🛠️ Workshop',
    accentColor: '#a78bfa', // Violet
    icon: <Cpu className="text-violet-400" size={22} />
  },
  {
    id: 'ideathon-deathbyai',
    type: 'event',
    title: 'Ideathon – Pitching DeathByAI',
    organization: 'Technical Symposium',
    location: 'Innovation Hub',
    date: 'April 2026',
    images: ['/images/events/ideathon-presentation.jpg'],
    description: "Presented 'DeathByAI', an AI fairness and bias auditing tool, to a panel of expert judges during a regional Ideathon. Articulated the critical need for ethical AI and demonstrated the tool's impact on reducing algorithmic bias.",
    highlights: [
      'Successfully pitched the "DeathByAI" auditor concept to industry experts',
      'Defended the technical framework and fairness metrics in a high-pressure Q&A',
      'Received recognition for addressing real-world ethical gaps in healthcare AI'
    ],
    tags: ['Ideathon', 'Pitching', 'Ethical AI'],
    badge: '💡 Pitch',
    accentColor: '#34d399', // Emerald
    icon: <Rocket className="text-emerald-400" size={22} />
  },
  {
    id: 'deans-list',
    type: 'achievement',
    title: 'Dean’s List Award – Academic Excellence',
    organization: 'Manipal University Jaipur',
    date: 'October 2025',
    images: ['/images/events/deans-list.jpg'],
    description: 'Recognized for outstanding academic performance and consistent excellence during the academic session. Awarded "Excellence in Academics" by the University leadership, representing a commitment to high standards of discipline and knowledge.',
    highlights: [
      'Top-tier academic performance in the department',
      'Awarded the Dean’s List certificate for exceptional consistency',
      'Maintained academic excellence while balanced with technical projects'
    ],
    tags: ['Academic Achievement'],
    badge: '🎓 Academic',
    accentColor: '#f472b6', // Pink
    icon: <GraduationCap className="text-pink-400" size={24} />
  }
];

export const EventsAchievements = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const featuredEvents = events.filter(e => e.type === 'featured');
  const regularEvents = events.filter(e => e.type === 'event');
  const achievementBlock = events.find(e => e.type === 'achievement');

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            Events & <span className="text-white/50">Achievements</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            A journey of growth, moving from exploring technology to executing ideas and achieving excellence in competitive environments.
          </p>
        </motion.div>

        <div className="space-y-10">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <GlassCard 
                onClick={() => setSelectedEvent(event)}
                className={`group h-full p-0 flex flex-col md:flex-row cursor-pointer hover:border-white/20 hover:shadow-indigo-500/10 ${
                  event.type === 'achievement' ? 'border-pink-500/20' : ''
                }`}
              >
                <div className="relative w-full md:w-1/3 lg:w-1/4 min-h-[240px] overflow-hidden">
                  <Image 
                    src={event.images[0]} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 text-xs font-bold text-white tracking-wide ${
                      event.type === 'achievement' ? 'bg-pink-500/40 border-pink-500/30' : 'bg-black/50'
                    }`}>
                      {event.badge}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-2 rounded-xl border border-white/10 ${
                        event.type === 'achievement' ? 'bg-pink-500/10' : 'bg-white/5'
                      }`}>
                        {event.icon}
                      </div>
                      <div className="h-px w-8 bg-white/10" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/60 line-clamp-2 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    {event.location && (
                      <p className="text-white/40 text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4">
                        <MapPin size={12} /> {event.location}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex gap-2">
                      {event.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-white/20 px-2 py-1 bg-white/5 rounded border border-white/5 text-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className={`text-xs font-bold group-hover:text-white flex items-center gap-1.5 transition-all ${
                      event.type === 'achievement' ? 'text-pink-400' : 'text-white/70'
                    }`}>
                      View Story <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
      >
        {selectedEvent && (
          <div className="space-y-8 pb-4">
            {/* Image Gallery */}
            <div className={`grid gap-4 ${selectedEvent.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {selectedEvent.images.map((img, i) => (
                <div key={i} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <Image 
                    src={img} 
                    alt={`${selectedEvent.title} - image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-white/30 font-bold mb-3">Context & Story</h5>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="text-sm uppercase tracking-widest text-white/30 font-bold">Key Highlights</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedEvent.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                        <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                        <span className="text-white/80 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <div>
                    <h6 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Organization</h6>
                    <p className="text-white/90 font-medium text-sm">{selectedEvent.organization}</p>
                  </div>
                  {selectedEvent.location && (
                    <div>
                      <h6 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Location</h6>
                      <p className="text-white/90 font-medium text-sm">{selectedEvent.location}</p>
                    </div>
                  )}
                  <div>
                    <h6 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Timeline</h6>
                    <p className="text-white/90 font-medium text-sm">{selectedEvent.date}</p>
                  </div>
                </div>

                <div>
                  <h6 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-3 px-1">Tags</h6>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
