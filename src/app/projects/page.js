import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import ProjectGallery from '@/components/ProjectGallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: "Projects & Portfolio | Mahajan Ashok",
    description: "Explore AI and Full Stack projects by Mahajan Ashok. SaaS prototypes, RAG pipelines, AI chatbots, and more.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-32 md:pt-48">
                <Skills />
                <ProjectGallery />
                <Testimonials />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
