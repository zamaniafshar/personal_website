'use client';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Articles } from '@/components/sections/articles';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Work } from '@/components/sections/work';

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
