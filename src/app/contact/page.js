import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: "Contact | Mahajan Ashok - Hire AI Engineer & Full Stack Developer",
    description: "Get in touch with Mahajan Ashok for AI development, Full Stack web apps, or freelance consulting. Available for contract and freelance projects worldwide.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen selection:bg-white selection:text-black bg-black overflow-x-hidden">
            <Navbar />

            <div className="relative z-10 pt-24">
                <Contact />
            </div>

            <Footer />
            <Chatbot />
        </main>
    );
}
