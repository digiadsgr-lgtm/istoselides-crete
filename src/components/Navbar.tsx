"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Web Design", href: "/web-design" },
    { name: "SEO & Maps", href: "/seo" },
    { name: "Tourism", href: "/tourism-marketing" },
    { name: "Υπηρεσίες", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Άρθρα", href: "/arthra" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#02040A]/85 backdrop-blur-2xl border-b border-white/10 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-[#010205]/90 to-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00d9ff] rounded-full blur-[12px] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d9ff] via-blue-600 to-[#FFBF00] flex items-center justify-center ring-1 ring-white/20">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-[0.18em] text-white font-montserrat leading-none">
                ISTOSELIDES<span className="text-[#00d9ff]">.</span>GR
              </span>
              <span className="text-[9px] font-mono tracking-[0.22em] text-[#FFBF00] uppercase mt-1">
                by DIGIADS · Κρήτη
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-[0.18em] uppercase text-slate-300 hover:text-white transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-[#00d9ff] to-[#FFBF00] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <a
            href="https://www.digiads.gr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-300"
            title="Επίσημη Ιστοσελίδα DIGIADS — Digital Marketing & Web Design Agency Κρήτη"
          >
            <span>DIGIADS.GR</span>
            <ArrowUpRight size={13} />
          </a>

          <Link
            href="/contact"
            className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-[#00d9ff] text-black hover:bg-white transition-colors duration-300 font-mono text-xs font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(0,217,255,0.3)]"
          >
            Επικοινωνία
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 relative z-50"
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
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-[#02040A]/98 backdrop-blur-3xl border-b border-white/10 p-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-mono tracking-[0.2em] uppercase text-slate-200 hover:text-[#00d9ff] transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full border border-[#FFBF00]/40 bg-[#FFBF00]/10 text-[#FFBF00] font-mono font-bold text-xs tracking-widest uppercase"
            >
              <span>Επίσημος Κόμβος DIGIADS.GR</span>
              <ArrowUpRight size={14} />
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-4 bg-[#00d9ff] text-black rounded-full font-bold text-xs font-mono tracking-widest uppercase"
            >
              Επικοινωνία &amp; Προσφορά
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
