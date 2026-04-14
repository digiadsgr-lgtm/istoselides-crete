import { Footer } from '@/components/Footer';
import { Map, Plane, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Tourism Marketing | DIGIADS Headless",
  description: "Στοχευμένες λύσεις Digital Marketing για Ξενοδοχεία και Τουριστικές Επιχειρήσεις."
};

export default function TourismMarketingPage() {
  return (
    <main className="min-h-screen bg-[#030509]">
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="font-montserrat font-black text-2xl text-white">DIGI<span className="text-[#ffc107]">ADS</span></Link>
        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Home API</Link>
      </nav>

      <section className="pt-40 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffc107]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <h1 className="text-6xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 relative z-10 leading-none">
          TOURISM <br/> 
          <span className="bg-gradient-to-r from-white to-[#ffc107] bg-clip-text text-transparent">MARKETING</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10 mb-12">
          Γεμίστε τα δωμάτια του ξενοδοχείου σας απευθείας, παρακάμπτοντας τις πλατφόρμες OTA (Booking/Airbnb) για μέγιστο κέρδος ανά κράτηση.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-[#ffc107] hover:text-black transition-all relative z-10 uppercase tracking-widest text-sm">
           Στρατηγικη Κρατησεων <ArrowRight size={16} />
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 py-20 relative z-10">
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Plane className="text-[#ffc107] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Direct Bookings</h3>
           <p className="text-slate-400">Εργαλεία και καμπάνιες σχεδιασμένες για direct conversions μέσα από το δικό σας property website.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Map className="text-[#00d9ff] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Global Reach Ads</h3>
           <p className="text-slate-400">Multi-language διαφημιστικές καμπάνιες με στόχευση σε αλλοδαπούς τουρίστες ακριβώς τη στιγμή που ψάχνουν προορισμό.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Star className="text-[#E91E63] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Experience Design</h3>
           <p className="text-slate-400">Παρουσίαση του ξενοδοχείου σας ως εμπειρία ζωής (Video, Drone) αντί για απλό κατάλυμα.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
