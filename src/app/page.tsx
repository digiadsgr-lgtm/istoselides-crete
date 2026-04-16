import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import BentoGrid from "@/components/BentoGrid";
import SiteAuditor from "@/components/AI/SiteAuditor";
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010205]">
      {/* 1. Cinematic Hero with 3D WebGL */}
      <Hero />

      {/* 2. Authority Stats Bar */}
      <StatsBar />

      {/* 3. Services - Growth Engine */}
      <Services />

      {/* 4. Portfolio - Bento Grid */}
      <BentoGrid />

      {/* 5. AI Site Auditor */}
      <div id="audit">
        <SiteAuditor />
      </div>

      {/* 6. Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* 7. Final CTA */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,217,255,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-6 font-montserrat tracking-tight">
            Time to <br className="md:hidden" />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Elevate.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl font-light mb-14 max-w-2xl leading-relaxed">
            Κάθε σπουδαίο ψηφιακό ταξίδι ξεκινά με μια απλή συζήτηση. Ας σχεδιάσουμε μαζί την επόμενη μέρα της επιχείρησής σας, στην κορυφή.
          </p>

          <a href="mailto:info@digiads.gr" className="group relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-[#00d9ff] rounded-full blur-[30px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            <button className="relative px-12 py-6 bg-transparent border border-white/20 rounded-full flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-500 overflow-hidden group">
              <span className="font-medium text-sm tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors z-10">
                Start the Conversation
              </span>
              <svg className="w-5 h-5 text-white group-hover:text-black transform group-hover:translate-x-1 transition-all z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
        </div>
      </section>

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
