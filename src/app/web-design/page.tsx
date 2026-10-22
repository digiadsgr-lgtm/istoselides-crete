import { Footer } from "@/components/Footer";
import { MonitorSmartphone, Search, Cpu, ShoppingBag, ShieldCheck, Zap, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Κατασκευή Ιστοσελίδων & E-shop στο Ρέθυμνο & Κρήτη | Next.js & Astro | DIGIADS",
  description:
    "Custom κατασκευή ιστοσελίδων και e-shop στο Ρέθυμνο, Χανιά, Ηράκλειο και Λασίθι με 100/100 Google Lighthouse. Headless Next.js & Astro Web Design από την DIGIADS.",
  keywords: [
    "Κατασκευή Ιστοσελίδων Ρέθυμνο",
    "Κατασκευή E-shop Ρέθυμνο",
    "Κατασκευή Ιστοσελίδων Κρήτη",
    "Web Design Ρέθυμνο",
    "Headless Next.js Astro",
    "DIGIADS Web Design",
  ],
  alternates: {
    canonical: "https://istoselides-rethymno.gr/web-design",
  },
  openGraph: {
    title: "Κατασκευή Ιστοσελίδων & E-shop Κρήτη | 100/100 Lighthouse | DIGIADS",
    description:
      "Αστραπιαίες ιστοσελίδες και e-shop με Next.js & Astro για επιχειρήσεις, βίλες και ξενοδοχεία στην Κρήτη.",
    url: "https://istoselides-rethymno.gr/web-design",
    type: "website",
  },
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      {/* Hero */}
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d9ff]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d9ff]/30 bg-[#00d9ff]/10 text-[#00d9ff] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>Next.js 16 · Astro 6 · 100/100 Lighthouse</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            HIGH-PERFORMANCE <br />
            <span className="bg-gradient-to-r from-white via-[#00d9ff] to-[#FFBF00] bg-clip-text text-transparent">
              WEB DESIGN &amp; E-SHOP
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Σχεδιάζουμε και προγραμματίζουμε custom ιστοσελίδες και ηλεκτρονικά καταστήματα με{" "}
            <strong className="text-white">χρόνο φόρτωσης κάτω από 0.8 δευτερόλεπτα</strong>, κορυφαίο UI/UX και εγγενές Technical SEO. Μέλος του επίσημου οικοσυστήματος{" "}
            <a
              href="https://www.digiads.gr/kataskevi-istoselidon"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Κατασκευής Ιστοσελίδων της DIGIADS στην Κρήτη
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d9ff] text-black rounded-full font-bold hover:bg-white transition-all uppercase tracking-widest text-xs font-mono"
            >
              Ζητήστε Κοστολόγηση Project <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/kataskevi-istoselidon"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Προδιαγραφές Web Design @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 6 Technical Pillars */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 relative z-10">
        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all">
          <MonitorSmartphone className="text-[#00d9ff] w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">Mobile-First Luxury UI/UX</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Σχεδιασμός προσαρμοσμένος στο 82% των χρηστών που πλοηγούνται από smartphone, με fluid micro-interactions και υψηλό Conversion Rate.
          </p>
        </div>

        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all">
          <Cpu className="text-[#FFBF00] w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">Next.js &amp; Astro Headless</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Ξεχάστε τα αργά WordPress themes. Χρησιμοποιούμε{" "}
            <Link href="/arthra/giati-to-wordpress-se-kovei-sti-google-headless-nextjs" className="text-[#00d9ff] underline">
              Headless Edge Architecture
            </Link>{" "}
            για 100/100 Lighthouse Performance.
          </p>
        </div>

        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-[#ec4899]/50 transition-all">
          <Search className="text-[#ec4899] w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">SEO &amp; AI Crawler Ready</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Πλήρης ενσωμάτωση JSON-LD Schema.org, δυναμικού Sitemap,{" "}
            <a href="https://www.digiads.gr/digital-marketing/seo-local-seo" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Local SEO δομής
            </a>{" "}
            και αρχείου <code>llms.txt</code> για AI Search Engines.
          </p>
        </div>

        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all">
          <ShoppingBag className="text-emerald-400 w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">Custom E-shop &amp; ERP Sync</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Ηλεκτρονικά καταστήματα με One-Page Checkout, Skroutz/BestPrice XML, Box Now, Apple/Google Pay και διασύνδεση αποθήκης. Δείτε τον{" "}
            <Link href="/arthra/kataskevi-eshop-kriti-odigos-epitychias" className="text-[#00d9ff] underline">
              οδηγό κατασκευής E-shop
            </Link>
            .
          </p>
        </div>

        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all">
          <Zap className="text-purple-400 w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">Direct Booking Engines</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Εξειδικευμένες ιστοσελίδες για{" "}
            <a href="https://www.digiads.gr/touristiko-marketing" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              ξενοδοχεία και luxury βίλες στην Κρήτη
            </a>{" "}
            με ενσωμάτωση WebHotelier, PrimalRES και Channel Managers.
          </p>
        </div>

        <div className="bg-[#050814] p-9 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all">
          <ShieldCheck className="text-cyan-400 w-11 h-11 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-3">Serverless Security &amp; AI Chat</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Απροσπέλαστη ασφάλεια Cloud-Native χωρίς εκτεθειμένες βάσεις δεδομένων και δυνατότητα ενσωμάτωσης 24/7 AI Sales Agent.
          </p>
        </div>
      </section>

      {/* Related Guides & DIGIADS Links */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#070C1F] to-[#04060E] border border-white/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-montserrat mb-4">
            Χρήσιμοι Οδηγοί &amp; Κόμβοι Web Development
          </h2>
          <p className="text-slate-400 font-light mb-8">
            Διαβάστε τις αναλυτικές μας μελέτες πριν ξεκινήσετε την κατασκευή ή ανακατασκευή της ιστοσελίδας σας:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Πόσο Κοστίζει η Κατασκευή Ιστοσελίδας στο Ρέθυμνο & την Κρήτη (2026)",
                href: "/arthra/poso-kostizei-kataskevi-istoselidas-rethymno",
                external: false,
              },
              {
                title: "Headless Next.js & Astro vs WordPress: Γιατί η Ταχύτητα Κρίνει την 1η Θέση",
                href: "/arthra/giati-to-wordpress-se-kovei-sti-google-headless-nextjs",
                external: false,
              },
              {
                title: "Κατασκευή Ιστοσελίδων & E-shop στην Κρήτη — DIGIADS.GR",
                href: "https://www.digiads.gr/kataskevi-istoselidon",
                external: true,
              },
              {
                title: "Οδηγός Κατασκευής Κερδοφόρου E-shop — DIGIADS.GR Blog",
                href: "https://www.digiads.gr/blog/kataskevi-eshop",
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
