import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: 'Mahajan Ashok | About',
    description: 'Final-year B.Tech CSE (Data Science) student, AI Product Engineer, with Data Scientist and AI Engineer internship experience. Oracle OCI Generative AI Professional & Salesforce Agentforce Specialist certified.',
    alternates: { canonical: 'https://mahajanashok.in/about' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mahajanashok.in/about',
        siteName: 'Mahajan Ashok Portfolio',
        title: 'Mahajan Ashok | About',
        description: 'Final-year B.Tech CSE (Data Science) student, AI Product Engineer, with internship experience and industry certifications.',
        images: [{ url: '/ai-guru-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — About' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mahajan Ashok | About',
        description: 'Final-year B.Tech CSE (Data Science) student, AI Product Engineer, with internship experience.',
        images: ['/ai-guru-preview.png']
    },
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
