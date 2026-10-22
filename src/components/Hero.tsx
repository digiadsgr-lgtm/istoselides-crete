"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

const HeroCanvas = dynamic(() => import("./Three/HeroCanvas"), { ssr: false });

const headlines = [
  "WEB DESIGN.",
  "E-COMMERCE.",
  "LOCAL SEO #1.",
  "DIRECT BOOKINGS.",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#010205] pt-28 pb-16">
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Layered Gradient Overlays */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#010205_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010205] via-transparent to-[#010205]/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-[2] container mx-auto px-6">
        <div
          className={`flex flex-col items-center text-center transform transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Official DIGIADS Network Badge */}
          <motion.a
            href="https://www.digiads.gr"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FFBF00]/30 bg-white/[0.04] hover:bg-[#FFBF00]/10 hover:border-[#FFBF00] backdrop-blur-md mb-8 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d9ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d9ff]" />
            </span>
            <span className="text-[11px] font-mono tracking-[0.22em] text-slate-200 uppercase">
              Official Web Architecture Hub of{" "}
              <strong className="text-[#FFBF00] font-bold">DIGIADS.GR</strong> · Κρήτη
            </span>
            <ArrowUpRight size={13} className="text-[#FFBF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Primary SEO H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[104px] font-black tracking-tighter leading-[0.95] mb-3 font-montserrat text-white">
            ΚΑΤΑΣΚΕΥΗ ΙΣΤΟΣΕΛΙΔΩΝ
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4 font-montserrat">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              ΡΕΘΥΜΝΟ · ΧΑΝΙΑ · ΗΡΑΚΛΕΙΟ · ΚΡΗΤΗ
            </span>
          </p>

          {/* Animated rotating specialization */}
          <div className="h-[54px] sm:h-[72px] md:h-[96px] lg:h-[120px] overflow-hidden relative my-1">
            <motion.div
              key={headlineIndex}
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.95] font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-cyan-300 to-[#FFBF00]"
            >
              {headlines[headlineIndex]}
            </motion.div>
          </div>

          {/* Rich Value Proposition with Contextual Backlinks */}
          <motion.p
            className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-light mt-6 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Δημιουργούμε αστραπιαίες ιστοσελίδες, e-shop και συστήματα απευθείας κρατήσεων σε{" "}
            <strong className="text-white font-semibold">Next.js &amp; Astro (100/100 Google Lighthouse)</strong>. Με την υπογραφή της{" "}
            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline underline-offset-4 font-medium transition-colors"
            >
              DIGIADS — Digital Marketing &amp; Web Design Agency στην Κρήτη
            </a>
            , μετατρέπουμε την ψηφιακή σας παρουσία σε μετρήσιμη κερδοφορία.
          </motion.p>

          {/* Key Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs font-mono text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <CheckCircle2 size={14} className="text-[#00d9ff]" /> 100/100 PageSpeed Score
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <CheckCircle2 size={14} className="text-[#FFBF00]" /> #1 Local SEO &amp; Google Maps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-400" /> +340% Direct Bookings Βιλών/Ξενοδοχείων
            </span>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="/contact"
              className="group relative px-9 py-4.5 bg-[#00d9ff] text-black rounded-full font-bold text-xs sm:text-sm font-mono tracking-[0.15em] uppercase overflow-hidden hover:shadow-[0_10px_40px_rgba(0,217,255,0.45)] hover:bg-white transition-all duration-300"
            >
              Ζητήστε Δωρεάν Προσφορά
            </Link>
            <a
              href="#audit"
              className="inline-flex items-center gap-2 px-8 py-4.5 border border-white/15 bg-white/[0.03] text-white rounded-full font-mono text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-white/10 hover:border-[#00d9ff]/50 transition-all duration-300"
            >
              <Sparkles size={15} className="text-[#00d9ff]" /> Free AI Site Audit
            </a>
            <Link
              href="/arthra"
              className="inline-flex items-center gap-2 px-7 py-4.5 border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] rounded-full font-mono text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#FFBF00] hover:text-black transition-all duration-300"
            >
              Οδηγοί &amp; Τιμές 2026 →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
