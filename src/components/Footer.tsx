"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#010205] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d9ff] rounded-full blur-[300px] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-[0.2em] text-white font-montserrat">Istoselides Rethymno</span>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-md mb-8">
              Premium Web Design &amp; Local SEO υπηρεσίες στο Ρέθυμνο. Μέλος του ευρύτερου δικτύου της {" "}
              <a href="https://www.digiads.gr" target="_blank" rel="noopener" className="text-[#00d9ff] hover:underline font-bold">
                Κορυφαίας Εταιρείας Digital Marketing &amp; Κατασκευής Ιστοσελίδων στην Κρήτη (DIGIADS)
              </a>.
            </p>
            <div className="flex gap-4">
              {/* Social links */}
              {[
                { href: "https://www.facebook.com/Digiads.gr", label: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { href: "https://www.instagram.com/digiads.gr", label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
                { href: "https://gr.linkedin.com/company/digiads-gr", label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00d9ff]/50 hover:bg-[#00d9ff]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-slate-400 hover:text-[#00d9ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wider uppercase mb-6">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {[
                "Performance Ads",
                "Web Design & E-shop",
                "Tourism Marketing",
                "SEO & Local SEO",
                "Brand Strategy",
                "Photo & Drone",
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-sm text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wider uppercase mb-6">Επικοινωνία</h4>
            <ul className="space-y-4">
              <li className="text-sm text-slate-400 font-light">
                📍 Κολοκοτρώνη 34, Ρέθυμνο, Κρήτη
              </li>
              <li>
                <a href="tel:+306987602707" className="text-sm text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  📞 +30 698 760 2707
                </a>
              </li>
              <li>
                <a href="mailto:info@digiads.gr" className="text-sm text-slate-400 hover:text-[#00d9ff] transition-colors font-light">
                  ✉️ info@digiads.gr
                </a>
              </li>
              <li className="text-sm text-slate-400 font-light">
                🕐 Δευ-Παρ 09:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-mono tracking-wider">
            © {new Date().getFullYear()} Istoselides Rethymno. Proudly Powered by <a href="https://www.digiads.gr" target="_blank" rel="noopener" className="hover:text-slate-400 text-slate-500">DIGIADS</a>.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-mono">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-mono">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
