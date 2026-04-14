"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#010205]">
      {/* AI Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Future Web Architecture"
          fill
          priority
          className="object-cover opacity-20 mix-blend-screen transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: mounted ? 0.25 : 0 }}
        />
        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#010205_80%)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010205] via-transparent to-transparent z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20">
        <div className={`flex flex-col items-center text-center transform transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
             <span className="text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase">Architecture & Design</span>
             <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
          </div>

          {/* Hyper-Typography */}
          <h1 className="text-6xl md:text-8xl lg:text-[130px] font-light tracking-tighter leading-[0.9] mb-8 font-montserrat text-white">
            Digital<br />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-600 drop-shadow-2xl">Perfection.</span>
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-slate-400 font-light mb-16 leading-relaxed">
            Δημιουργούμε ψηφιακά περιβάλλοντα που κόβουν την ανάσα. <br className="hidden md:block" />
            Ένας τέλειος συνδυασμός <strong className="text-white font-medium">υψηλής αισθητικής</strong> και <strong className="text-white font-medium">απόλυτης ταχύτητας</strong>.
          </p>

          {/* Sophisticated CTA */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
            <a href="#portfolio" className="relative flex items-center justify-center px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02]">
              <span className="relative z-10 text-sm font-semibold tracking-[0.15em] uppercase">
                Explore Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-50" />
            </a>
          </div>

        </div>
      </div>
      
      {/* Subtle Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-[2000ms] delay-700 ${mounted ? 'opacity-30' : 'opacity-0'}`}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
