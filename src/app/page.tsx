import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import TechShowcase from "@/components/TechShowcase";
import BentoGrid from "@/components/BentoGrid";
import DigiadsEcosystem from "@/components/DigiadsEcosystem";
import SiteAuditor from "@/components/AI/SiteAuditor";
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Γιατί να επιλέξω την DIGIADS & το Istoselides-Rethymno.gr για την κατασκευή της ιστοσελίδας μου;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Στην DIGIADS αναπτύσσουμε custom Headless ιστοσελίδες με Next.js και Astro, εξασφαλίζοντας 100/100 Google Lighthouse Performance, χρόνο φόρτωσης κάτω από 0.8 δευτερόλεπτα, απροσπέλαστη ασφάλεια και εγγενές Technical SEO που σας φέρνει στην 1η σελίδα της Google.",
      },
    },
    {
      "@type": "Question",
      name: "Πόσο κοστίζει η κατασκευή ιστοσελίδας ή e-shop στο Ρέθυμνο και την Κρήτη;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Μια σύγχρονη επαγγελματική ιστοσελίδα παρουσίασης με custom UX/UI design και πλήρες Local SEO ξεκινά από 900€ – 1.500€. Οι εξειδικευμένες ιστοσελίδες ξενοδοχείων και βιλών με Direct Booking Engine κυμαίνονται μεταξύ 1.500€ – 3.500€, ενώ τα custom E-shops ξεκινούν από 2.200€.",
      },
    },
    {
      "@type": "Question",
      name: "Πώς βοηθάτε ξενοδοχεία και βίλες στην Κρήτη να αυξήσουν τις απευθείας κρατήσεις (Direct Bookings);",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Συνδυάζουμε ultra-fast πολυγλωσσική ιστοσελίδα με Booking Engine, κινηματογραφικό 4K Drone Video, International Hotel SEO και στοχευμένες καμπάνιες Google Ads & Meta Retargeting μέσω της DIGIADS, μειώνοντας την εξάρτηση από Booking και Airbnb.",
      },
    },
    {
      "@type": "Question",
      name: "Αναλαμβάνετε το SEO, τα Google Ads και τα Social Media μετά την κατασκευή της ιστοσελίδας;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι! Το Istoselides-Rethymno.gr αποτελεί τον εξειδικευμένο βραχίονα Web Architecture της DIGIADS (www.digiads.gr), αναλαμβάνοντας ολοκληρωμένα το Local SEO στο Google Maps, τις διαφημίσεις Google & Meta Ads και την παραγωγή TikTok/Instagram Reels.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010205]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* 1. Cinematic Hero with 3D WebGL & Local Crete Authority */}
      <Hero />

      {/* 2. Authority Stats Bar */}
      <StatsBar />

      {/* 3. Services - Growth Engine */}
      <Services />

      {/* 4. Web Architecture & 100/100 Lighthouse Tech Showcase */}
      <TechShowcase />

      {/* 5. Portfolio - Enterprise Bento Grid */}
      <BentoGrid />

      {/* 6. Crete Coverage, DIGIADS 360° Ecosystem Backlink Hub, Articles & FAQ */}
      <DigiadsEcosystem />

      {/* 7. AI Site Auditor */}
      <div id="audit">
        <SiteAuditor />
      </div>

      {/* 8. Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* 9. Final CTA */}
      <section className="py-36 relative flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,217,255,0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-6 font-montserrat tracking-tight">
            Time to <br className="md:hidden" />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-white to-[#FFBF00]">
              Elevate.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
            Κάθε σπουδαίο ψηφιακό έργο στην Κρήτη ξεκινά με μια στρατηγική συζήτηση. Σχεδιάστε τη νέα σας ιστοσελίδα ή το e-shop σας μαζί με την ομάδα της{" "}
            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="text-[#FFBF00] hover:underline font-medium"
            >
              DIGIADS
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-[#00d9ff] text-black rounded-full font-mono font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,217,255,0.3)]"
            >
              Ζητήστε Προσφορά →
            </Link>
            <a
              href="https://www.digiads.gr/contact"
              target="_blank"
              rel="noopener"
              className="px-10 py-5 border border-[#FFBF00]/40 bg-[#FFBF00]/10 text-[#FFBF00] rounded-full font-mono font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#FFBF00] hover:text-black transition-all duration-300"
            >
              Ραντεβού στο DIGIADS.GR ↗
            </a>
          </div>
        </div>
      </section>

      {/* 10. Mega-Footer */}
      <Footer />
    </main>
  );
}
