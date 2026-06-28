import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import ValidatedExpertise from '@/components/ValidatedExpertise';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: 'Experience & Certifications | Mahajan Ashok',
    description: 'Professional experience, internships, and certifications of Mahajan Ashok — AI Product Engineer, Data Scientist Intern, AI Engineer Intern. OCI Generative AI & Salesforce Agentforce certified.',
    alternates: { canonical: 'https://mahajanashok.in/experience' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mahajanashok.in/experience',
        siteName: 'Mahajan Ashok Portfolio',
        title: 'Experience & Certifications | Mahajan Ashok',
        description: 'Professional experience, internships, and industry certifications of Mahajan Ashok.',
        images: [{ url: '/ai-guru-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Experience' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Experience & Certifications | Mahajan Ashok',
        description: 'Professional experience and certifications of Mahajan Ashok.',
        images: ['/ai-guru-preview.png']
    },
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-32 md:pt-48">
                <Experience />
                <ValidatedExpertise />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
