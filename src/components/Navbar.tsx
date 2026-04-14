"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tech Stack", href: "#tech" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#02040A]/60 backdrop-blur-2xl border-b border-white/5 py-3" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
           <div className="font-black text-xl md:text-2xl tracking-[0.2em] text-white font-montserrat flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.4)]">
               <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
             </span>
             DIGIADS <span className="opacity-40 font-light">WEB</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              {/* Highlight bar */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00d9ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a 
            href="mailto:info@digiads.gr"
            className="group relative px-6 py-2 border border-white/10 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#00d9ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-xs font-mono text-white tracking-widest uppercase">
              Deploy
            </span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#02040A]/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-[0.2em] uppercase text-slate-300 hover:text-[#00d9ff] transition-colors w-full text-center"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
