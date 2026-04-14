import { Footer } from '@/components/Footer';
import { Target, TrendingUp, BarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Google Ads & Meta Ads Management | DIGIADS Headless",
  description: "Μεγιστοποίηση κερδοφορίας μέσα από Performance Marketing. Στοχευμένες διαφημίσεις με κορυφαίο ROI σε Google & Meta (Facebook/Instagram)."
};

export default function PerformanceAdsPage() {
  return (
    <main className="min-h-screen bg-[#030509]">
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="font-montserrat font-black text-2xl text-white">DIGI<span className="text-[#ffc107]">ADS</span></Link>
        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Home API</Link>
      </nav>

      <section className="pt-40 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E91E63]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <h1 className="text-6xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 relative z-10 leading-none">
          PERFORMANCE <br/> 
          <span className="bg-gradient-to-r from-white to-[#E91E63] bg-clip-text text-transparent">MARKETING</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10 mb-12">
          Δεν αγοράζουμε απλώς κλικ. Αγοράζουμε πελάτες. Μεγιστοποιήστε την κερδοφορία σας μέσα από data-driven καμπάνιες σε Google & Meta.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-[#E91E63] hover:text-white transition-all relative z-10 uppercase tracking-widest text-sm">
           Δωρεαν Audit <ArrowRight size={16} />
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 py-20 relative z-10">
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <Target className="text-[#E91E63] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Precision Targeting</h3>
           <p className="text-slate-400">Εντοπίζουμε τον ιδανικό πελάτη με τη χρήση προηγμένων αλγορίθμων και Data Scraping, ακριβώς τη στιγμή που είναι έτοιμος να αγοράσει.</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <TrendingUp className="text-[#00d9ff] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Conversion Rate Opt.</h3>
           <p className="text-slate-400">Συνεχής πειραματισμός με A/B Tests σε διαφημίσεις και Landing Pages για τη συνεχή αύξηση του ποσοστού μετατροπής (CRO).</p>
        </div>
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform shadow-xl">
           <BarChart className="text-[#ffc107] w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Transparent Analytics</h3>
           <p className="text-slate-400">Παρέχουμε real-time Reporting Dashboards. Γνωρίζετε ακριβώς πόσα ξοδεύετε και τι αποφέρει κάθε ευρώ στο ROAS.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
