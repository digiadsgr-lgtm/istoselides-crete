"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "web-design",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Κατασκευή Ιστοσελίδων & E-shop",
    subtitle: "Next.js · Astro · Headless",
    description:
      "Ψηφιακά αρχιτεκτονικά αριστουργήματα στο Ρέθυμνο και την Κρήτη. Κατασκευή ιστοσελίδων & ηλεκτρονικών καταστημάτων με 100/100 Lighthouse, CRO optimization και αστραπιαία φόρτωση.",
    metrics: ["100/100", "Lighthouse"],
    color: "#00d9ff",
    href: "/web-design",
    digiadsUrl: "https://www.digiads.gr/kataskevi-istoselidon",
    digiadsLabel: "Προδιαγραφές Web Design @ DIGIADS.GR",
  },
  {
    id: "seo",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO & Local SEO (Google Maps)",
    subtitle: "Organic #1 · Maps 3-Pack · AI GEO",
    description:
      "Κυριαρχία στην 1η σελίδα της Google και στο Google Maps 3-Pack. Technical SEO, Schema.org, Authority Backlinks και βελτιστοποίηση για AI Search (ChatGPT, Gemini).",
    metrics: ["#1", "Google Rankings"],
    color: "#ec4899",
    href: "/seo",
    digiadsUrl: "https://www.digiads.gr/digital-marketing/seo-local-seo",
    digiadsLabel: "SEO & Local SEO @ DIGIADS.GR",
  },
  {
    id: "tourism",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tourism & Villa Marketing",
    subtitle: "Villas · Boutique Hotels · Direct Bookings",
    description:
      "Εξειδίκευση στον τουριστικό τομέα της Κρήτης. Αυτόνομα συστήματα απευθείας κρατήσεων (Direct Bookings) για βίλες και ξενοδοχεία χωρίς προμήθειες Booking/Airbnb.",
    metrics: ["+340%", "Direct Bookings"],
    color: "#FFBF00",
    href: "/tourism-marketing",
    digiadsUrl: "https://www.digiads.gr/touristiko-marketing",
    digiadsLabel: "Τουριστικό Marketing @ DIGIADS.GR",
  },
  {
    id: "performance-ads",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Performance Ads (Google & Meta)",
    subtitle: "Google Ads · Facebook · Instagram · TikTok",
    description:
      "Data-driven διαφημιστικές καμπάνιες με Server-Side GA4 tracking, AI-optimized bidding και Omnichannel Retargeting funnels που μεγιστοποιούν το ROAS.",
    metrics: ["+127%", "Μέσος ROI"],
    color: "#a855f7",
    href: "/digital-marketing/google-meta-ads-management",
    digiadsUrl: "https://www.digiads.gr/digital-marketing/performance-marketing",
    digiadsLabel: "Performance Marketing @ DIGIADS.GR",
  },
  {
    id: "branding",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Social Media, Reels & Branding",
    subtitle: "TikTok · Instagram Reels · Identity",
    description:
      "Τοποθετούμε το Brand σας ως τον ηγέτη της αγοράς σας. Παραγωγή viral TikTok & Reels, διαχείριση Social Media και ανασχεδιασμός εταιρικής ταυτότητας.",
    metrics: ["200+", "5-Star Reviews"],
    color: "#22c55e",
    href: "/social-media-management",
    digiadsUrl: "https://www.digiads.gr/digital-marketing/social-media-management",
    digiadsLabel: "Social Media Hub @ DIGIADS.GR",
  },
  {
    id: "photo-drone",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Photo & 4K Drone Production",
    subtitle: "Aerial · Architectural HDR · Video",
    description:
      "Παραγωγή high-end φωτογραφικού και εναέριου οπτικοακουστικού υλικού στην Κρήτη. Αδειοδοτημένες πτήσεις Drone 4K/60fps και φωτογράφιση βιλών & ξενοδοχείων.",
    metrics: ["4K/60fps", "Cinematic"],
    color: "#06b6d4",
    href: "/drone-video-photography",
    digiadsUrl: "https://www.digiads.gr/photo-services/drone-services",
    digiadsLabel: "Drone & Photo @ DIGIADS.GR",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl overflow-hidden bg-[#050814] border border-white/10 hover:border-[#00d9ff]/50 transition-all duration-500 flex flex-col justify-between p-8 md:p-10 shadow-xl"
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[90px] opacity-0 group-hover:opacity-35 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: service.color }}
      />

      <div>
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 border transition-all duration-500 group-hover:scale-110"
          style={{
            backgroundColor: `${service.color}15`,
            borderColor: `${service.color}30`,
            color: service.color,
          }}
        >
          {service.icon}
        </div>

        {/* Title & Subtitle */}
        <Link href={service.href}>
          <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat mb-2 group-hover:text-[#00d9ff] transition-colors">
            {service.title}
          </h3>
        </Link>
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: service.color }}>
          {service.subtitle}
        </p>
        <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">{service.description}</p>
      </div>

      <div>
        {/* Metric Badge + Internal Link */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-white font-montserrat">{service.metrics[0]}</span>
            <span className="text-xs font-mono tracking-wider uppercase text-slate-400">{service.metrics[1]}</span>
          </div>
          <Link
            href={service.href}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#00d9ff] text-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all"
          >
            Αναλυτικά →
          </Link>
        </div>

        {/* Direct Contextual Dofollow Backlink to DIGIADS.GR */}
        <a
          href={service.digiadsUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-between w-full text-xs font-mono text-slate-400 hover:text-[#FFBF00] transition-colors"
        >
          <span>{service.digiadsLabel}</span>
          <ArrowUpRight size={14} className="text-[#FFBF00]" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section id="services" className="py-32 relative bg-[#010205] overflow-hidden" ref={sectionRef}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00d9ff]" />
            <h2 className="text-[#00d9ff] font-mono text-sm tracking-[0.4em] uppercase">
              360° Growth Engine · DIGIADS
            </h2>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00d9ff]" />
          </div>
          <p className="text-4xl md:text-6xl font-black text-white font-montserrat tracking-tight leading-tight mb-6">
            Κάθε υπηρεσία, ένα <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-white to-[#FFBF00]">
              σύστημα ανάπτυξης.
            </span>
          </p>
          <p className="text-lg text-slate-400 font-light">
            Συνδυάζουμε την εξειδικευμένη κατασκευή ιστοσελίδων του{" "}
            <strong className="text-white">istoselides-crete.gr</strong> με την πλήρη διαφημιστική ισχύ της{" "}
            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-medium"
            >
              DIGIADS στην Κρήτη
            </a>
            .
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
