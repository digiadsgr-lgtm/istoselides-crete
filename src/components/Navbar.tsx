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
    { name: "Υπηρεσίες", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "AI Audit", href: "#audit" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#02040A]/70 backdrop-blur-2xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00d9ff] rounded-full blur-[12px] opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
          <span className="font-black text-xl tracking-[0.2em] text-white font-montserrat">
            DIGIADS
          </span>
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
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00d9ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="mailto:info@digiads.gr"
            className="group relative px-7 py-2.5 rounded-full overflow-hidden border border-[#00d9ff]/30 hover:border-[#00d9ff] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-[#00d9ff] translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
            <span className="relative z-10 text-xs font-mono text-white group-hover:text-black tracking-widest uppercase transition-colors duration-400">
              Επικοινωνία
            </span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#02040A]/98 backdrop-blur-3xl border-b border-white/5 p-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-mono tracking-[0.2em] uppercase text-slate-300 hover:text-[#00d9ff] transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <a
              href="mailto:info@digiads.gr"
              className="mt-4 text-center py-4 bg-[#00d9ff] text-black rounded-full font-bold text-sm tracking-widest uppercase"
            >
              Επικοινωνία
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
