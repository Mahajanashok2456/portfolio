import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: 'Contact | Mahajan Ashok',
    description: 'Contact Mahajan Ashok for freelance web development projects in India, remote AI engineering contracts, or full-time fresher opportunities.',
    alternates: { canonical: 'https://mahajanashok.in/contact' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mahajanashok.in/contact',
        siteName: 'Mahajan Ashok Portfolio',
        title: 'Contact | Mahajan Ashok',
        description: 'Contact Mahajan Ashok for freelance projects or full-time opportunities.',
        images: [{ url: '/ai-guru-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Contact' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact | Mahajan Ashok',
        description: 'Contact Mahajan Ashok for projects or opportunities.',
        images: ['/ai-guru-preview.png']
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-32 md:pt-48">
                <Contact />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
