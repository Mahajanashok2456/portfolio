import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black bg-black overflow-x-hidden">
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Clients />
        <FAQ />
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
