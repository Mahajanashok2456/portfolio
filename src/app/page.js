import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black bg-black overflow-x-hidden">
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Clients />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </div>

      <footer className="py-20 md:py-32 bg-black text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter uppercase whitespace-nowrap">MAHAJAN ASHOK</h3>
          <p className="text-white/40 text-[0.6rem] md:text-sm uppercase tracking-[0.3em] font-black mb-12 md:mb-20">
            Architecting the Future of AI & Web
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-6 mb-12 md:mb-20">
            <a href="#projects" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">PROJECTS</a>
            <a href="#skills" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">TECH STACK</a>
            <a href="#about" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">ABOUT</a>
            <a href="#contact" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">CONTACT</a>
          </div>

          <div className="hidden">
            <span>Best Web Developer in Hyderabad</span>
            <span>Freelance AI Engineer</span>
            <span>Top Rated Tech Consultant</span>
            <span>Next.js Expert India</span>
            <span>Low Price Web Developer</span>
            <span>Affordable Website Design</span>
            <span>Budget Friendly Developer</span>
            <span>Web Development Services</span>
          </div>

          <p className="text-[0.5rem] md:text-[0.6rem] text-white/20 font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} CRAFTED BY MAHAJAN ASHOK.
          </p>
        </div>
      </footer>

      <Chatbot />
    </main>
  );
}
