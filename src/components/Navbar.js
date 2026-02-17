'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaXmark } from 'react-icons/fa6';
import { clsx } from 'clsx';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contacts', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                scrolled ? "bg-black/90 backdrop-blur-md py-4 md:py-6 shadow-2xl" : "bg-transparent"
            )}
        >
            <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                {/* Brand */}
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white z-[1001]">
                    MAHAJAN<span className="font-light">ashok</span>
                </Link>

                {/* Desktop Links & Socials */}
                <div className="hidden lg:flex items-center gap-16">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6 text-white/70 border-l border-white/10 pl-6 ml-6">
                        {/* Freelance Status Indicator */}
                        <div className="hidden xl:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full transition-colors hover:bg-white/10 hover:border-white/20 cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[0.6rem] font-bold text-white uppercase tracking-widest whitespace-nowrap">Available for Freelance</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <a href="https://www.instagram.com/mahajan_2456/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg"><FaInstagram /></a>
                            <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white text-2xl z-[1001] p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[1000] flex flex-col justify-center items-center p-8 lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-8 mb-12">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-4xl font-black text-white uppercase tracking-tighter"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-8 text-white/70 border-t border-white/10 pt-12 w-full justify-center">
                            <a href="https://www.instagram.com/mahajan_2456/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl"><FaInstagram /></a>
                            <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl"><FaLinkedin /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
