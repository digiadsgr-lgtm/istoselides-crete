import { Footer } from '@/components/Footer';
import { Camera, Video, Sun, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Φωτογράφιση & Drone Videos | DIGIADS Headless",
  description: "Υπερσύγχρονος εξοπλισμός Media Production. Εναέριες λήψεις 4K, Architectural Photo."
};

export default function DroneMediaPage() {
  return (
    <main className="min-h-screen bg-[#030509]">
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="font-montserrat font-black text-2xl text-white">DIGI<span className="text-[#ffc107]">ADS</span></Link>
        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Home API</Link>
      </nav>

      <section className="pt-40 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[150px] rounded-full pointer-events-none" />
        
        <h1 className="text-6xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 relative z-10 leading-none">
          PREMIUM <br/> 
          <span className="bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">MEDIA PRODUCTION</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10 mb-12">
          Εικόνες που κόβουν την ανάσα. Κινηματογραφικά Video και Εναέριες λήψεις που αναβαθμίζουν ολοκληρωτικά τη μάρκα σας.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all relative z-10 uppercase tracking-widest text-sm">
           Δειτε το Portfolio <ArrowRight size={16} />
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 py-20 relative z-10">
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl bg-[url('https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=1000')] bg-cover bg-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[#030509]/80 group-hover:bg-[#030509]/60 transition-colors" />
           <Video className="text-white w-12 h-12 mb-6 relative z-10" />
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Cinematic Video</h3>
           <p className="text-slate-300 relative z-10">Προώθηση μέσω storytelling με επαγγελματικά video clips για Social και Web.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000')] bg-cover bg-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[#030509]/80 group-hover:bg-[#030509]/60 transition-colors" />
           <Sun className="text-white w-12 h-12 mb-6 relative z-10" />
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Drone Aerials</h3>
           <p className="text-slate-300 relative z-10">Αδειοδοτημένες πτήσεις Drone (4K/60fps) για real estate και τουριστικά καταλύματα.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl bg-[url('https://images.unsplash.com/photo-1542038784-949138ff9667?q=80&w=1000')] bg-cover bg-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[#030509]/80 group-hover:bg-[#030509]/60 transition-colors" />
           <Camera className="text-white w-12 h-12 mb-6 relative z-10" />
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Photography</h3>
           <p className="text-slate-300 relative z-10">Αρχιτεκτονική Φωτογράφιση υψηλού δυναμικού εύρους (HDR) για ανάδειξη χώρων.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
