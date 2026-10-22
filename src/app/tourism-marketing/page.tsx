import { Footer } from "@/components/Footer";
import { Map, Plane, Star, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Τουριστικό Marketing & Direct Bookings Ξενοδοχείων & Βιλών Κρήτη | DIGIADS",
  description:
    "Αυξήστε τις απευθείας κρατήσεις (Direct Bookings) του ξενοδοχείου ή της βίλας σας στην Κρήτη έως +340%. Ξενοδοχειακό Web Design, SEO, Google Ads & Drone Video από την DIGIADS.",
  keywords: [
    "Τουριστικό Marketing Κρήτη",
    "Direct Bookings Ξενοδοχεία",
    "Προώθηση Βίλας Κρήτη",
    "Κατασκευή Ιστοσελίδας Ξενοδοχείου Ρέθυμνο",
    "Hospitality Marketing Crete",
  ],
  alternates: {
    canonical: "https://istoselides-rethymno.gr/tourism-marketing",
  },
  openGraph: {
    title: "Tourism & Hospitality Marketing Κρήτη | Direct Bookings Engine | DIGIADS",
    description:
      "Μειώστε την εξάρτηση από Booking & Airbnb με αυτόνομα συστήματα απευθείας κρατήσεων.",
    url: "https://istoselides-rethymno.gr/tourism-marketing",
    type: "website",
  },
};

export default function TourismMarketingPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFBF00]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/10 text-[#FFBF00] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>Villas · Boutique Hotels · Direct Bookings +340%</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            TOURISM &amp; VILLA <br />
            <span className="bg-gradient-to-r from-white via-[#FFBF00] to-[#00d9ff] bg-clip-text text-transparent">
              DIRECT BOOKINGS
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Γεμίστε τα δωμάτια του ξενοδοχείου ή τις εβδομάδες της βίλας σας στην Κρήτη απευθείας, παρακάμπτοντας τις προμήθειες 15%–20% των OTAs (Booking.com / Airbnb). Υποστηρίζεται από το εξειδικευμένο τμήμα{" "}
            <a
              href="https://www.digiads.gr/touristiko-marketing"
              target="_blank"
              rel="noopener"
              className="text-[#FFBF00] hover:text-[#00d9ff] underline font-semibold"
            >
              Τουριστικού Marketing της DIGIADS
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFBF00] text-black rounded-full font-bold hover:bg-white transition-all uppercase tracking-widest text-xs font-mono"
            >
              Στρατηγική Κρατήσεων <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/touristiko-marketing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Hospitality Hub @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 relative z-10">
        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all shadow-xl">
          <Plane className="text-[#FFBF00] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Direct Booking Websites</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Custom ξενοδοχειακές ιστοσελίδες με{" "}
            <a href="https://www.digiads.gr/kataskevi-istoselidon" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Headless Next.js/Astro ταχύτητα
            </a>
            , πολυγλωσσική δομή και άψογη ενσωμάτωση Booking Engine / Channel Manager.
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all shadow-xl">
          <Map className="text-[#00d9ff] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">International Hotel Ads &amp; SEO</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Καμπάνιες{" "}
            <a href="https://www.digiads.gr/digital-marketing/performance-marketing" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Google Ads &amp; Meta Retargeting
            </a>{" "}
            σε αγορές υψηλής αξίας (UK, DE, FR, CH, USA) ακριβώς τη στιγμή που κλείνουν διακοπές στην Κρήτη.
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#ec4899]/50 transition-all shadow-xl">
          <Star className="text-[#ec4899] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">4K Drone, Photo &amp; Reels</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Παρουσίαση της βίλας ή του resort σας ως εμπειρία ζωής μέσω{" "}
            <a href="https://www.digiads.gr/photo-services/drone-services" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              κινηματογραφικού Drone Video
            </a>{" "}
            και{" "}
            <a href="https://www.digiads.gr/social-media/tiktok-reels" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              TikTok/Reels παραγωγών
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#070C1F] to-[#04060E] border border-white/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-montserrat mb-6">
            Μελέτες &amp; Οδηγοί Τουριστικού Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Direct Bookings για Ξενοδοχεία & Βίλες στην Κρήτη: Πλήρης Οδηγός",
                href: "/arthra/direct-bookings-xenodocheia-villes-kriti",
                external: false,
              },
              {
                title: "TikTok & Instagram Reels για Ξενοδοχεία και Καταλύματα",
                href: "/arthra/tiktok-reels-instagram-marketing-epicheiriseis-kriti",
                external: false,
              },
              {
                title: "Τουριστικό Marketing & Direct Bookings — DIGIADS.GR",
                href: "https://www.digiads.gr/touristiko-marketing",
                external: true,
              },
              {
                title: "Drone Video & Εναέρια Φωτογράφιση Βιλών — DIGIADS.GR",
                href: "https://www.digiads.gr/photo-services/drone-services",
                external: true,
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFBF00]/50 transition-all text-sm font-semibold text-white hover:text-[#FFBF00]"
              >
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00d9ff] shrink-0" />
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
