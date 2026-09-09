import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import IdBadgeCard from '@/components/IdBadgeCard';
import TechTicker from '@/components/TechTicker';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 relative font-sans overflow-x-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar />

      <main id="home" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center overflow-x-hidden">
        <div className="order-2 lg:order-1 lg:col-span-7 min-w-0">
          <Hero />
        </div>
        <div className="order-1 lg:order-2 lg:col-span-5 min-w-0 w-full">
          <IdBadgeCard />
        </div>
      </main>

      <TechTicker />
      <About />
      <Experience />
      <Projects />
      <Education />

      <Footer />

    </div>
  );
}