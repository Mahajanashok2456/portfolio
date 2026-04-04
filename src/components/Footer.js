'use client';

import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="py-24 md:py-48 bg-white border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase text-black">MAHAJAN ASHOK</h3>
                
                <p className="text-black/40 text-[0.6rem] md:text-xs uppercase tracking-[0.5em] font-bold mb-16">
                    AI Engineer <span className="mx-2 text-black/10">/</span> Full Stack Developer
                </p>

                <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-8 mb-24">
                    {['Home', 'Projects', 'Experience', 'About', 'Contact'].map((item) => (
                        <Link 
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                            className="text-xs font-bold uppercase tracking-[0.3em] hover:text-black transition-colors text-black/40"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center gap-12 mb-24">
                    <a href="https://github.com/Mahajanashok2456" target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-black transition-colors text-2xl"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mahajanashok78/" target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-black transition-colors text-2xl"><FaLinkedin /></a>
                </div>

                <p className="text-[0.6rem] text-black/20 font-bold uppercase tracking-[0.5em]">
                    © {new Date().getFullYear()} ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
