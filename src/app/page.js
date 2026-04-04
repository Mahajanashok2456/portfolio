'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Dynamically import components below the fold
const Clients = dynamic(() => import('@/components/Clients'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const ValidatedExpertise = dynamic(() => import('@/components/ValidatedExpertise'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-50" />
});
const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Clients />
        <Projects />
        <Testimonials />
        <ValidatedExpertise />
        <Experience />
        <About />
        <FAQ />
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
