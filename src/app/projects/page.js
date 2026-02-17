import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: "Projects & Portfolio | Mahajan Ashok",
    description: "Explore AI and Full Stack projects by Mahajan Ashok. SaaS prototypes, RAG pipelines, AI chatbots, and more.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen selection:bg-white selection:text-black bg-black overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-24">
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Certifications />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
