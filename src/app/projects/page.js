import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import ProjectGallery from '@/components/ProjectGallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: 'Projects & Portfolio | Mahajan Ashok',
    description: 'Explore AI, RAG, and full-stack web projects by Mahajan Ashok. Next.js, FastAPI, LLMs, and more.',
    alternates: { canonical: 'https://mahajanashok.in/projects' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mahajanashok.in/projects',
        siteName: 'Mahajan Ashok Portfolio',
        title: 'Projects & Portfolio | Mahajan Ashok',
        description: 'AI, RAG, and full-stack web projects by Mahajan Ashok.',
        images: [{ url: '/contenttora-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Projects' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects & Portfolio | Mahajan Ashok',
        description: 'AI, RAG, and full-stack web projects.',
        images: ['/contenttora-preview.png']
    },
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
