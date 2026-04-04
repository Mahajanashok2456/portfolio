import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import ValidatedExpertise from '@/components/ValidatedExpertise';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
    title: "Experience & Certifications | Mahajan Ashok",
    description: "Explore Mahajan Ashok's career milestones, work experience in AI Engineering and Full Stack Development, and validated certifications.",
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
