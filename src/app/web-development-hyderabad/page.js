import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Link from 'next/link';

export const metadata = {
    title: 'Web Developer Hyderabad | Freelance Web Development India',
    description: 'Freelance web developer in Hyderabad, Telangana. Custom websites, Next.js, React, e-commerce for small businesses in India.',
    alternates: { canonical: 'https://mahajanashok.in/web-development-hyderabad' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mahajanashok.in/web-development-hyderabad',
        siteName: 'Mahajan Ashok Portfolio',
        title: 'Web Developer Hyderabad | Freelance Web Development India',
        description: 'Freelance web developer in Hyderabad, Telangana. Custom websites for small businesses in India.',
        images: [{ url: '/store-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Web Developer Hyderabad' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Developer Hyderabad | Freelance Web Development India',
        description: 'Freelance web developer in Hyderabad, Telangana.',
        images: ['/store-preview.png']
    },
};

export default function WebDevelopmentHyderabadPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
            <Navbar />
            <div className="relative z-10 pt-32 md:pt-48 px-6 md:px-16 max-w-7xl mx-auto">
                <section className="mb-24">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Web Developer in Hyderabad
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl">
                        Freelance web development for small businesses in Hyderabad, Telangana, and across India.
                        Custom websites, e-commerce, and modern web applications.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-black text-white px-10 py-4 text-lg font-bold hover:bg-gray-800 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </section>

                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-black mb-12">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 p-8">
                            <h3 className="text-2xl font-bold mb-4">Custom Websites</h3>
                            <p className="text-gray-600">
                                Bespoke websites tailored to your business needs, built with modern technologies like Next.js and React.
                            </p>
                        </div>
                        <div className="border border-gray-200 p-8">
                            <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
                            <p className="text-gray-600">
                                Online stores to help you sell products and services online, with secure payment integration.
                            </p>
                        </div>
                        <div className="border border-gray-200 p-8">
                            <h3 className="text-2xl font-bold mb-4">Web Applications</h3>
                            <p className="text-gray-600">
                                Full-stack web applications with FastAPI backends and React/Next.js frontends.
                            </p>
                        </div>
                        <div className="border border-gray-200 p-8">
                            <h3 className="text-2xl font-bold mb-4">Performance & SEO</h3>
                            <p className="text-gray-600">
                                Fast, SEO-optimized websites that rank well on search engines and provide great user experiences.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-black mb-12">Industries Served</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
                            <p className="text-gray-600 text-sm">Clinic websites, appointment booking</p>
                        </div>
                        <div className="bg-gray-50 p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">Retail & E-commerce</h3>
                            <p className="text-gray-600 text-sm">Online stores, product catalogs</p>
                        </div>
                        <div className="bg-gray-50 p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">Local Businesses</h3>
                            <p className="text-gray-600 text-sm">Restaurants, salons, services</p>
                        </div>
                    </div>
                </section>

                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-black mb-12">Let's Build Your Website</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Ready to get started? Let's discuss your project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-black text-white px-10 py-4 text-lg font-bold hover:bg-gray-800 transition-colors"
                    >
                        Contact Me
                    </Link>
                </section>
            </div>
            <Footer />
            <Chatbot />
        </main>
    );
}
