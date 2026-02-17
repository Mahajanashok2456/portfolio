'use client';

import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="py-16 md:py-24 bg-black text-center relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter uppercase whitespace-nowrap">MAHAJAN ASHOK</h3>
                <p className="text-white/40 text-[0.6rem] md:text-sm uppercase tracking-[0.3em] font-black mb-10 md:mb-16">
                    Architecting the Future of AI & Web
                </p>

                <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-6 mb-10 md:mb-16">
                    <Link href="/" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">HOME</Link>
                    <Link href="/projects" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">PROJECTS</Link>
                    <Link href="/about" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">ABOUT</Link>
                    <Link href="/contact" className="text-[0.65rem] md:text-sm font-black uppercase tracking-widest hover:text-white transition-colors text-white/50">CONTACT</Link>
                </div>

                <div className="flex justify-center gap-6 mb-10 md:mb-16">
                    <a href="https://www.instagram.com/mahajan_2456/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xl"><FaInstagram /></a>
                    <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xl"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xl"><FaLinkedin /></a>
                </div>

                <div className="hidden">
                    <span>Best Web Developer in Hyderabad</span>
                    <span>Freelance AI Engineer</span>
                    <span>Top Rated Tech Consultant</span>
                    <span>Next.js Expert India</span>
                    <span>Low Price Web Developer</span>
                    <span>Affordable Website Design</span>
                    <span>Budget Friendly Developer</span>
                    <span>Web Development Services</span>
                </div>

                <p className="text-[0.5rem] md:text-[0.6rem] text-white/20 font-black uppercase tracking-[0.4em]">
                    © {new Date().getFullYear()} CRAFTED BY MAHAJAN ASHOK.
                </p>
            </div>
        </footer>
    );
}
