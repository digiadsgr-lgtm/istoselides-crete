import { Footer } from "@/components/Footer";
import { Target, TrendingUp, BarChart, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads & Meta Ads (Facebook/Instagram) Management Κρήτη | DIGIADS",
  description:
    "Μεγιστοποίηση κερδοφορίας και ROAS μέσα από Performance Marketing στην Κρήτη. Στοχευμένες διαφημίσεις σε Google Ads, Facebook, Instagram & TikTok με Server-Side GA4 Tracking.",
  keywords: [
    "Google Ads Ρέθυμνο",
    "Google Ads Κρήτη",
    "Διαφήμιση Facebook Instagram",
    "Meta Ads Κρήτη",
    "Performance Marketing DIGIADS",
  ],
  alternates: {
    canonical: "https://istoselides-crete.gr/digital-marketing/google-meta-ads-management",
  },
  openGraph: {
    title: "Performance Marketing — Google Ads & Meta Ads Κρήτη | DIGIADS",
    description:
      "Data-driven διαφημιστικές καμπάνιες με +127% μέση αύξηση τζίρου και διαφανές ROAS reporting.",
    url: "https://istoselides-crete.gr/digital-marketing/google-meta-ads-management",
    type: "website",
  },
};

export default function PerformanceAdsPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E91E63]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E91E63]/30 bg-[#E91E63]/10 text-[#E91E63] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>Google Ads · Meta Advantage+ · TikTok Ads</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            PERFORMANCE <br />
            <span className="bg-gradient-to-r from-white via-[#E91E63] to-[#FFBF00] bg-clip-text text-transparent">
              MARKETING &amp; ROAS
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Δεν αγοράζουμε απλώς κλικ — αγοράζουμε μετρήσιμους πελάτες, κρατήσεις και παραγγελίες. Με την κεντρική υποδομή{" "}
            <a
              href="https://www.digiads.gr/digital-marketing/performance-marketing"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Performance Marketing της DIGIADS
            </a>{" "}
            και εξειδικευμένη{" "}
            <a
              href="https://www.digiads.gr/social-media/diafimisi-facebook-instagram"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Διαφήμιση σε Facebook &amp; Instagram
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E91E63] text-white rounded-full font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs font-mono"
            >
              Δωρεάν Audit Λογαριασμού <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/digital-marketing/performance-marketing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Performance Hub @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 relative z-10">
        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#E91E63]/50 transition-all shadow-xl">
          <Target className="text-[#E91E63] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">AI-Driven Precision Targeting</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Συνδυάζουμε High-Intent Google Search &amp; Performance Max καμπάνιες με Meta Advantage+ Shopping &amp; Lead Generation funnels.
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all shadow-xl">
          <TrendingUp className="text-[#00d9ff] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Landing Page CRO</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Χάρη στις{" "}
            <a href="https://www.digiads.gr/kataskevi-istoselidon" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              αστραπιαίες σελίδες προορισμού (Next.js/Astro)
            </a>
            , πετυχαίνουμε 9/10–10/10 Quality Score και έως 35% χαμηλότερο κόστος ανά κλικ (CPC).
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all shadow-xl">
          <BarChart className="text-[#FFBF00] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Server-Side GA4 &amp; CAPI</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Πλήρης εγκατάσταση{" "}
            <a href="https://www.digiads.gr/blog/ga4-tracking-conversions" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              GA4, Google Tag Manager &amp; Meta Conversions API
            </a>{" "}
            για 100% διαφάνεια στο ROAS.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#070C1F] to-[#04060E] border border-white/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-montserrat mb-6">
            Οδηγοί &amp; Πόροι Performance Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Google Ads ή Meta Ads (Facebook/Instagram) στην Κρήτη;",
                href: "/arthra/google-ads-i-meta-ads-facebook-instagram-kriti",
                external: false,
              },
              {
                title: "GA4 Conversion Tracking & Email Marketing ROI",
                href: "/arthra/ga4-conversion-tracking-email-marketing-roi",
                external: false,
              },
              {
                title: "Performance Marketing Agency — DIGIADS.GR",
                href: "https://www.digiads.gr/digital-marketing/performance-marketing",
                external: true,
              },
              {
                title: "Διαφήμιση σε Facebook & Instagram — DIGIADS.GR",
                href: "https://www.digiads.gr/social-media/diafimisi-facebook-instagram",
                external: true,
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d9ff]/50 transition-all text-sm font-semibold text-white hover:text-[#00d9ff]"
              >
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FFBF00] shrink-0" />
                  {item.title}
                </span>
                <ArrowRight size={15} className="shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
