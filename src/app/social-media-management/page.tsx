import { Footer } from "@/components/Footer";
import { Share2, Heart, Users, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Διαχείριση Social Media, TikTok & Reels στην Κρήτη | Brand Strategy | DIGIADS",
  description:
    "Επαγγελματική διαχείριση Social Media (Instagram, TikTok, Facebook), παραγωγή Reels και Brand Strategy στο Ρέθυμνο και την Κρήτη από την ομάδα της DIGIADS.",
  keywords: [
    "Διαχείριση Social Media Ρέθυμνο",
    "Social Media Marketing Κρήτη",
    "TikTok Reels Ξενοδοχεία",
    "Brand Strategy Κρήτη",
    "DIGIADS Social Media",
  ],
  alternates: {
    canonical: "https://istoselides-crete.gr/social-media-management",
  },
  openGraph: {
    title: "Social Media Management, TikTok & Brand Strategy | DIGIADS Network",
    description:
      "Short-form video production, αισθητικό branding και ενεργή ανάπτυξη κοινού.",
    url: "https://istoselides-crete.gr/social-media-management",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00ff88]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>Instagram · TikTok Reels · Brand Authority</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            SOCIAL MEDIA &amp; <br />
            <span className="bg-gradient-to-r from-white via-emerald-400 to-[#00d9ff] bg-clip-text text-transparent">
              BRAND STRATEGY
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Content Strategy που σταματάει το scroll. Μετατρέπουμε τους θεατές σας σε πιστούς πελάτες μέσω{" "}
            <a
              href="https://www.digiads.gr/digital-marketing/social-media-management"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Διαχείρισης Social Media της DIGIADS
            </a>{" "}
            και{" "}
            <a
              href="https://www.digiads.gr/social-media/tiktok-reels"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Παραγωγής TikTok &amp; Instagram Reels
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-400 text-black rounded-full font-bold hover:bg-white transition-all uppercase tracking-widest text-xs font-mono"
            >
              Ζητήστε Πλάνο Social Media <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/digital-marketing/social-media-management"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Social Media Hub @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 relative z-10">
        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all shadow-xl">
          <Share2 className="text-emerald-400 w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Viral TikTok &amp; Reels</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Σενάριο (Hook-Value-CTA), επαγγελματικό γύρισμα στον χώρο σας στην Κρήτη και δυναμικό μοντάζ για{" "}
            <a href="https://www.digiads.gr/social-media/tiktok-reels" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              TikTok &amp; Instagram Reels
            </a>
            .
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all shadow-xl">
          <Heart className="text-[#FFBF00] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Aesthetic Brand Identity</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Σχεδιασμός{" "}
            <a href="https://www.digiads.gr/digital-marketing/business-promotion" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              εταιρικής ταυτότητας και προώθησης
            </a>{" "}
            που καθιερώνει την επιχείρησή σας ως τον αδιαμφισβήτητο ηγέτη του κλάδου σας.
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all shadow-xl">
          <Users className="text-[#00d9ff] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Influencer &amp; Paid Social</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Συνδυάζουμε την οργανική ανάπτυξη με{" "}
            <a href="https://www.digiads.gr/social-media/influencer-marketing" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Influencer Marketing
            </a>{" "}
            και στοχευμένη{" "}
            <a href="https://www.digiads.gr/social-media/diafimisi-facebook-instagram" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              διαφήμιση Facebook &amp; Instagram
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#070C1F] to-[#04060E] border border-white/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-montserrat mb-6">
            Στρατηγικοί Οδηγοί Social Media &amp; Branding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "TikTok & Instagram Reels Marketing για Επιχειρήσεις στην Κρήτη",
                href: "/arthra/tiktok-reels-instagram-marketing-epicheiriseis-kriti",
                external: false,
              },
              {
                title: "Branding, Οπτική Ταυτότητα & Redesign Ιστοσελίδας",
                href: "/arthra/branding-optiki-taftotita-redesign-istoselidas",
                external: false,
              },
              {
                title: "TikTok & Reels Marketing — DIGIADS.GR",
                href: "https://www.digiads.gr/social-media/tiktok-reels",
                external: true,
              },
              {
                title: "Στρατηγική Instagram για Επιχειρήσεις — DIGIADS.GR Blog",
                href: "https://www.digiads.gr/blog/instagram-strategy-epicheiriseis",
                external: true,
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 transition-all text-sm font-semibold text-white hover:text-emerald-400"
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
