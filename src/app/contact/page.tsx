import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Επικοινωνία | DIGIADS Headless",
  description: "Επικοινωνήστε μαζί μας για να σχεδιάσουμε το επόμενο σας Digital Marketing Project."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030509]">
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className="font-montserrat font-black text-2xl text-white">DIGI<span className="text-[#ffc107]">ADS</span></Link>
        <Link href="/" className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Home API</Link>
      </nav>

      <section className="pt-40 pb-20 px-5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 relative z-10">
                INITIALIZE <br/> 
                <span className="text-[#00d9ff] bg-gradient-to-r from-white to-[#00d9ff] bg-clip-text text-transparent">CONTACT</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl relative z-10">
                Είμαστε έτοιμοι να ακούσουμε την ιδέα σας. Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα στοιχεία επικοινωνίας για απευθείας επαφή.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              
              {/* Form Side */}
              <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                 <form className="flex flex-col gap-6">
                    <div>
                       <label className="block text-sm font-bold text-slate-400 mb-2">Ονοματεπώνυμο</label>
                       <input type="text" className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-slate-400 mb-2">Email</label>
                       <input type="email" className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors" placeholder="hello@company.com" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-slate-400 mb-2">Το Project σας</label>
                       <textarea className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors h-32" placeholder="Γράψτε μας λίγα λόγια..."></textarea>
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 w-full bg-[#00d9ff] text-black font-black uppercase tracking-widest rounded-xl py-4 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all mt-4">
                       Αποστολη Μηνυματος <Send size={16} />
                    </button>
                 </form>
              </div>

              {/* Info Side */}
              <div className="flex flex-col gap-10 justify-center">
                 <div className="flex gap-4 items-start">
                    <div className="p-4 bg-white/5 rounded-2xl text-[#E91E63]"><Phone size={24} /></div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-1">Τηλέφωνο</h3>
                       <p className="text-slate-400">+30 698 760 2707 <br/> +30 28311 31647</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-4 bg-white/5 rounded-2xl text-[#00d9ff]"><Mail size={24} /></div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-1">Email Απευθείας</h3>
                       <p className="text-slate-400">vourdas@digiads.gr</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-4 bg-white/5 rounded-2xl text-[#ffc107]"><MapPin size={24} /></div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-1">HQ Έδρα</h3>
                       <p className="text-slate-400">Κολοκοτρώνη 34, Ρέθυμνο, Κρήτη <br/> Τ.Κ. 74100</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
