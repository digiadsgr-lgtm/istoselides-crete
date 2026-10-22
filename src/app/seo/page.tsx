import { Footer } from "@/components/Footer";
import { Search, MapPin, Cpu, TrendingUp, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Local SEO στο Ρέθυμνο & την Κρήτη | 1η Σελίδα Google & Google Maps | DIGIADS",
  description:
    "Εξειδικευμένες υπηρεσίες SEO, Local SEO (Google Maps 3-Pack), Technical SEO και AI/LLM Optimization (GEO) για επιχειρήσεις, ξενοδοχεία και e-shop στο Ρέθυμνο και την Κρήτη.",
  keywords: [
    "SEO Ρέθυμνο",
    "Local SEO Ρέθυμνο",
    "SEO Κρήτη",
    "Προώθηση Ιστοσελίδων Google",
    "Google Maps 3-Pack Κρήτη",
    "DIGIADS SEO",
  ],
  alternates: {
    canonical: "https://istoselides-rethymno.gr/seo",
  },
  openGraph: {
    title: "SEO & Local SEO Ρέθυμνο & Κρήτη | Κυριαρχία στη Google με την DIGIADS",
    description:
      "Οργανική ανάπτυξη, Technical SEO 100/100 και κατάταξη στην 1η τριάδα του Google Maps στην Κρήτη.",
    url: "https://istoselides-rethymno.gr/seo",
    type: "website",
  },
};

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ec4899]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 text-[#ec4899] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>Organic Search · Google Maps · AI GEO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            SEO &amp; LOCAL SEO <br />
            <span className="bg-gradient-to-r from-[#00d9ff] via-white to-[#ec4899] bg-clip-text text-transparent">
              DOMINANCE
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Κατακτήστε την <strong>1η σελίδα της Google</strong> και το <strong>Google Maps 3-Pack</strong> σε Ρέθυμνο, Χανιά, Ηράκλειο και Λασίθι. Συνδυάζουμε Headless Technical SEO με την κεντρική τεχνογνωσία{" "}
            <a
              href="https://www.digiads.gr/digital-marketing/seo-local-seo"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              SEO &amp; Local SEO της DIGIADS
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d9ff] text-black rounded-full font-bold hover:bg-white transition-all uppercase tracking-widest text-xs font-mono"
            >
              Ζητήστε Δωρεάν SEO Audit <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/digital-marketing/seo-local-seo"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Κεντρικός Κόμβος SEO @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 relative z-10">
        <div className="bg-[#050814] p-8 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all">
          <MapPin className="text-[#00d9ff] w-10 h-10 mb-5" />
          <h2 className="text-xl font-bold text-white font-montserrat mb-3">Google Maps 3-Pack</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Πλήρης βελτιστοποίηση{" "}
            <a
              href="https://www.digiads.gr/blog/google-business-profile"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] underline"
            >
              Google Business Profile
            </a>
            , τοπικών αναφορών (NAP Citations) και Geo-Schema για κυριαρχία στις τοπικές αναζητήσεις της Κρήτης.
          </p>
        </div>

        <div className="bg-[#050814] p-8 rounded-3xl border border-white/10 hover:border-[#ec4899]/50 transition-all">
          <Cpu className="text-[#ec4899] w-10 h-10 mb-5" />
          <h2 className="text-xl font-bold text-white font-montserrat mb-3">Technical SEO 100/100</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Μηδενικά σφάλματα crawlability, Core Web Vitals &lt; 0.8s με{" "}
            <a
              href="https://www.digiads.gr/kataskevi-istoselidon"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] underline"
            >
              Next.js &amp; Astro Web Design
            </a>{" "}
            και αυτοματοποιημένα JSON-LD Schemas.
          </p>
        </div>

        <div className="bg-[#050814] p-8 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all">
          <TrendingUp className="text-[#FFBF00] w-10 h-10 mb-5" />
          <h2 className="text-xl font-bold text-white font-montserrat mb-3">Topical Content &amp; Backlinks</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Στρατηγική{" "}
            <a
              href="https://www.digiads.gr/blog/seo-odigos-google"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] underline"
            >
              Pillar Content &amp; Authority Link Building
            </a>{" "}
            που χτίζει θεματική αυθεντία και εκτοξεύει το Domain Rating σας.
          </p>
        </div>

        <div className="bg-[#050814] p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all">
          <Search className="text-emerald-400 w-10 h-10 mb-5" />
          <h2 className="text-xl font-bold text-white font-montserrat mb-3">AI &amp; LLM SEO (GEO)</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Βελτιστοποίηση για εμφάνιση στις απαντήσεις των ChatGPT, Google Gemini, Perplexity και Google AI Overviews.
          </p>
        </div>
      </section>

      {/* Deep Backlink Synergy Block */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#070C1F] to-[#04060E] border border-white/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-montserrat mb-6">
            Ολοκληρωμένο Οικοσύστημα Οργανικής Ανάπτυξης με την DIGIADS
          </h2>
          <p className="text-slate-300 font-light leading-relaxed mb-8">
            Το SEO αποδίδει στο μέγιστο όταν συνδυάζεται με ταχύτατη ιστοσελίδα και στοχευμένες καμπάνιες. Ανακαλύψτε τους εξειδικευμένους οδηγούς μας:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Ο Απόλυτος Οδηγός SEO για την 1η Σελίδα της Google",
                href: "/arthra/seo-odigos-google-1i-selida-2026",
                external: false,
              },
              {
                title: "Local SEO στο Ρέθυμνο & Google Maps 3-Pack",
                href: "/arthra/local-seo-rethymno-kriti-google-maps-odigos",
                external: false,
              },
              {
                title: "Υπηρεσίες SEO & Local SEO — DIGIADS.GR",
                href: "https://www.digiads.gr/digital-marketing/seo-local-seo",
                external: true,
              },
              {
                title: "Digital Marketing στο Ρέθυμνο & την Κρήτη — DIGIADS.GR",
                href: "https://www.digiads.gr/digital-marketing-rethymno",
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
