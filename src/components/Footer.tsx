"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#010205] border-t border-white/10 pt-24 pb-10 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00d9ff] rounded-full blur-[320px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Parent Org Backlink (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d9ff] via-blue-600 to-[#FFBF00] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <span className="font-black text-lg tracking-[0.18em] text-white font-montserrat block leading-none">
                  ISTOSELIDES RETHYMNO
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#FFBF00] uppercase">
                  by DIGIADS · Web Architecture
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md mb-6">
              Εξειδικευμένη κατασκευή ιστοσελίδων, e-shop (Next.js / Astro) και Local SEO στο Ρέθυμνο, στα Χανιά, στο Ηράκλειο και στο Λασίθι. Επίσημος τεχνολογικός βραχίονας της{" "}
              <a
                href="https://www.digiads.gr"
                target="_blank"
                rel="noopener"
                className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold transition-colors"
              >
                DIGIADS — Κορυφαίας Εταιρείας Digital Marketing &amp; Κατασκευής Ιστοσελίδων στην Κρήτη
              </a>
              .
            </p>

            <div className="space-y-2 text-xs text-slate-400 font-mono mb-6">
              <div>📍 Κολοκοτρώνη 34, Ρέθυμνο 74132, Κρήτη</div>
              <div>
                📞{" "}
                <a href="tel:+306987602707" className="hover:text-[#00d9ff]">
                  +30 698 760 2707
                </a>{" "}
                ·{" "}
                <a href="tel:+302831131647" className="hover:text-[#00d9ff]">
                  +30 28311 31647
                </a>
              </div>
              <div>
                ✉️{" "}
                <a href="mailto:info@digiads.gr" className="hover:text-[#00d9ff]">
                  info@digiads.gr
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/Digiads.gr",
                  label: "Facebook",
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  href: "https://www.instagram.com/digiads.gr",
                  label: "Instagram",
                  icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z",
                },
                {
                  href: "https://gr.linkedin.com/company/digiads-gr",
                  label: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00d9ff]/50 hover:bg-[#00d9ff]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-slate-400 hover:text-[#00d9ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Internal Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs font-mono tracking-[0.2em] uppercase mb-6">
              Υπηρεσίες
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/web-design" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  Web Design &amp; E-shop
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  SEO &amp; Local SEO Maps
                </Link>
              </li>
              <li>
                <Link href="/tourism-marketing" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  Tourism &amp; Villa Marketing
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing/google-meta-ads-management" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  Google &amp; Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/social-media-management" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  Social Media &amp; Reels
                </Link>
              </li>
              <li>
                <Link href="/drone-video-photography" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  4K Drone &amp; Photography
                </Link>
              </li>
              <li>
                <Link href="/arthra" className="text-[#00d9ff] hover:text-white transition-colors font-medium">
                  Όλα τα Άρθρα &amp; Οδηγοί →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official DIGIADS.GR Ecosystem Backlinks (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[#FFBF00] text-xs font-mono tracking-[0.2em] uppercase mb-6">
              Οικοσύστημα DIGIADS.GR
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "DIGIADS — Κεντρική Ιστοσελίδα", url: "https://www.digiads.gr" },
                { label: "Κατασκευή Ιστοσελίδων & E-shop", url: "https://www.digiads.gr/kataskevi-istoselidon" },
                { label: "Digital Marketing στο Ρέθυμνο", url: "https://www.digiads.gr/digital-marketing-rethymno" },
                { label: "Τουριστικό Marketing & Βίλες", url: "https://www.digiads.gr/touristiko-marketing" },
                { label: "Performance Marketing (Google/Meta)", url: "https://www.digiads.gr/digital-marketing/performance-marketing" },
                { label: "SEO & Local SEO Google Maps", url: "https://www.digiads.gr/digital-marketing/seo-local-seo" },
                { label: "Διαφήμιση Facebook & Instagram", url: "https://www.digiads.gr/social-media/diafimisi-facebook-instagram" },
                { label: "TikTok & Reels Marketing", url: "https://www.digiads.gr/social-media/tiktok-reels" },
                { label: "Drone Video & Φωτογράφιση Κρήτη", url: "https://www.digiads.gr/photo-services/drone-services" },
              ].map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#FFBF00] transition-colors font-light"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="text-[#FFBF00]/70 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular SEO Guides (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs font-mono tracking-[0.2em] uppercase mb-6">
              Δημοφιλείς Οδηγοί 2026
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/arthra/poso-kostizei-kataskevi-istoselidas-rethymno" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light block">
                  Κόστος Κατασκευής Ιστοσελίδας στο Ρέθυμνο
                </Link>
              </li>
              <li>
                <Link href="/arthra/giati-to-wordpress-se-kovei-sti-google-headless-nextjs" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light block">
                  Next.js &amp; Astro vs WordPress: Ταχύτητα &amp; SEO
                </Link>
              </li>
              <li>
                <Link href="/arthra/local-seo-rethymno-kriti-google-maps-odigos" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light block">
                  Local SEO Ρέθυμνο &amp; Google Maps 3-Pack
                </Link>
              </li>
              <li>
                <Link href="/arthra/direct-bookings-xenodocheia-villes-kriti" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light block">
                  Direct Bookings για Ξενοδοχεία &amp; Βίλες Κρήτη
                </Link>
              </li>
              <li>
                <Link href="/arthra/kataskevi-eshop-kriti-odigos-epitychias" className="text-slate-400 hover:text-[#00d9ff] transition-colors font-light block">
                  Οδηγός Κατασκευής E-shop στην Κρήτη
                </Link>
              </li>
            </ul>

            <button
              onClick={() => {
                const btn = document.querySelector<HTMLButtonElement>('[aria-label="Άνοιξε τον DIGI chat"]');
                btn?.click();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00d9ff] hover:text-black hover:bg-[#00d9ff] border border-[#00d9ff]/40 rounded-full px-5 py-2.5 transition-all duration-300 font-bold"
            >
              💬 Μίλα με τον DIGI AI Agent
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} Istoselides Rethymno &amp; Crete. Official Web Architecture Hub of{" "}
            <a href="https://www.digiads.gr" target="_blank" rel="noopener" className="text-[#FFBF00] hover:underline font-bold">
              DIGIADS.GR
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.digiads.gr/privacy-policy"
              target="_blank"
              rel="noopener"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono"
            >
              Πολιτική Απορρήτου
            </a>
            <Link href="/arthra" className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono">
              Knowledge Hub
            </Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
