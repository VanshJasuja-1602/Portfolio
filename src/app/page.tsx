import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { EventsAchievements } from "@/components/sections/EventsAchievements";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-white/30 selection:text-white">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <EventsAchievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
