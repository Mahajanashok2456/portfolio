'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaXmark } from 'react-icons/fa6';
import { clsx } from 'clsx';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Web Dev Hyderabad', href: '/web-development-hyderabad' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-[1000] px-6 md:px-16 py-6 md:py-8 transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md py-4 md:py-6 border-b border-black/5" : "bg-transparent"
            )}
        >
            <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                {/* Brand */}
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-black z-[1001]">
                    MAHAJAN<span className="font-light text-gray-400">ashok</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-16">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        "text-xs font-bold transition-colors uppercase tracking-[0.2em] relative group",
                                        pathname === item.href ? "text-black" : "text-black/40 hover:text-black"
                                    )}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-black"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6 text-black border-l border-black/10 pl-6 ml-6">
                        <div className="flex items-center gap-5">
                            <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="hover:text-black/60 transition-colors text-lg"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="hover:text-black/60 transition-colors text-lg"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-black text-2xl z-[1001] p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-[1000] flex flex-col justify-center items-center p-8 lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-8 mb-12">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-3xl font-black text-black uppercase tracking-tighter"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-8 text-black/40 border-t border-black/10 pt-12 w-full justify-center">
                            <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-2xl"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-2xl"><FaLinkedin /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
