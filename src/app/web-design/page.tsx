import { Footer } from '@/components/Footer';
import { MonitorSmartphone, Search, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Κατασκευή Ιστοσελίδων & E-shop | DIGIADS Headless",
  description: "Custom κατασκευή ιστοσελίδων & e-shop με performance-first προσέγγιση. Ταχύτατο Web Design, SEO ready."
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#030509]">
      {/* Native Navigation strictly for PoC */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="font-montserrat font-black text-2xl text-white">DIGI<span className="text-[#ffc107]">ADS</span></Link>
        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Home API</Link>
      </nav>

      {/* Extreme Performance Hardcoded Hero */}
      <section className="pt-40 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d9ff]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <h1 className="text-6xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 relative z-10 leading-none">
          H/PERFORMANCE <br/> 
          <span className="text-[#00d9ff] bg-gradient-to-r from-white to-[#00d9ff] bg-clip-text text-transparent">WEB DESIGN</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10 mb-12">
          Ιστοσελίδες σχεδιασμένες με data-driven UI/UX, βελτιστοποιημένες βάσει Google Core Web Vitals (CWV) για αστραπιαία φόρτωση και μέγιστο Conversion Rate.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-[#00d9ff] hover:text-black transition-all relative z-10 uppercase tracking-widest text-sm">
           Αναλυση του Project σας <ArrowRight size={16} />
        </a>
      </section>

      {/* Technical Grid (Hardcoded Native UI) */}
      <section className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 py-20 relative z-10">
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <MonitorSmartphone className="text-[#00d9ff] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Mobile-First UI</h3>
           <p className="text-slate-400">Σχεδιασμός που μαγνητίζει στις κινητές συσκευές, προσφέροντας fluid εμπειρία και αυξάνοντας το Retention Rate ραγδαία.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Cpu className="text-[#E91E63] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">React/Headless Engine</h3>
           <p className="text-slate-400">Κώδικας αιχμής (Next.js) που ξεπερνά τα παλιά WordPress Themes σε κάθε μέτρηση Lighthouse Performance.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Search className="text-[#ffc107] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Technical SEO Core</h3>
           <p className="text-slate-400">Εγγενής αρχιτεκτονική φιλική προς AI Crawlers, αυτοματοποιημένα Schema.org Data και καθαρό Document Object Model.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
