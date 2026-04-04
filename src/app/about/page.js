import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: "About | Mahajan Ashok - AI Engineer & Full Stack Developer",
    description: "Learn about Mahajan Ashok — an innovative AI Engineer and Full Stack Developer specializing in RAG pipelines, Generative AI, and scalable web applications.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-32 md:pt-48">
                <About />
                <Education />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
