import Hero from "@/components/Hero";
import TechShowcase from "@/components/TechShowcase";
import BentoGrid from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02040A] selection:bg-[#00d9ff]/30 selection:text-white">
      <Hero />
      <TechShowcase />
      <BentoGrid />
      
      {/* Elegant CTA Section */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
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

           {/* Pure Elegant CTA */}
           <a href="mailto:info@digiads.gr" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-full blur-[20px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              <button className="relative px-10 py-5 bg-transparent border border-white/20 rounded-full flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
                <span className="font-medium text-sm tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors z-10">Start the Conversation</span>
                <svg className="w-5 h-5 text-white group-hover:text-black transform group-hover:translate-x-1 transition-all z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
           </a>

        </div>
      </section>

      {/* Powered by DigiAds Footer Connect */}
      <div className="border-t border-white/5 bg-[#010205] py-8 text-center relative z-20">
             <p className="text-xs tracking-widest uppercase text-slate-600 font-mono flex items-center justify-center gap-2">
               Engineered & Powered by 
               <a href="https://www.digiads.gr" target="_blank" rel="noreferrer" className="text-white hover:text-[#00d9ff] transition-colors font-bold flex items-center gap-1">
                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                 DIGIADS
               </a>
             </p>
           </div>
    </main>
  );
}
