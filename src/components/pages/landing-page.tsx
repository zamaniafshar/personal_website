'use client';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Articles } from '@/components/sections/articles';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { Work } from '@/components/sections/work';

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Experience /> */}
        <Testimonials />
        <Articles />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
