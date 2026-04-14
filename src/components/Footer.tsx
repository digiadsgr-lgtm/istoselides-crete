import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-[#00d9ff]/15 bg-[#020408] text-slate-400 pt-20 pb-10 overflow-hidden mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-[radial-gradient(ellipse,rgba(0,217,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-black text-white font-montserrat tracking-tighter">DIGI<span className="text-[#ffc107]">ADS</span></h2>
            <p className="text-[#00d9ff] tracking-widest uppercase text-sm font-bold">Data-Driven. AI-Powered.</p>
            <address className="not-italic mt-4 flex flex-col gap-3">
               <a href="#" className="flex gap-3 items-center hover:text-[#00d9ff] transition-colors text-sm"><MapPin size={18} /> Κολοκοτρώνη 34, Ρέθυμνο</a>
               <a href="tel:6987602707" className="flex gap-3 items-center hover:text-[#00d9ff] transition-colors text-sm"><Phone size={18} /> 698 760 2707</a>
            </address>
            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-slate-500">
               Υπεύθυνος: Βούρδας Αθανάσιος<br/>
               Αρ. ΓΕΜΗ: 137317650000
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm">
               {["Web Design", "Performance Ads", "Social Media", "Knowledge Hub", "Contact"].map(link => (
                 <li key={link}>
                   <a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block before:content-['>'] before:text-[#E91E63] before:opacity-0 hover:before:opacity-100 before:-ml-2 hover:before:mr-2 before:transition-all">
                     {link}
                   </a>
                 </li>
               ))}
            </ul>
          </div>

          {/* Map Col */}
          <div className="md:col-span-2 lg:col-span-1">
             <h3 className="text-white font-bold text-lg mb-6">Location</h3>
             <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10 hover:border-[#00d9ff] transition-colors group">
                <div className="absolute inset-0 bg-[#00d9ff]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 mix-blend-overlay" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.7161781339223!2d24.484706615250044!3d35.36268938026977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149b75c0e11c1a75%3A0x523d04311472c96f!2sDigiads.gr!5e0!3m2!1sel!2sgr!4v1613934915502!5m2!1sel!2sgr" className="w-full h-full border-none" loading="lazy"></iframe>
             </div>
          </div>

          {/* Badges Col */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Verified Quality</h3>
            <div className="flex flex-col gap-6 items-start">
               {/* Digital simulated badge for PoC */}
               <div className="w-32 h-32 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-xs text-center p-4 hover:border-[#ffc107] transition-colors shadow-2xl">
                 Official Meta<br/>Business<br/>Partner
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
           <p>&copy; {new Date().getFullYear()} DIGIADS. Crafted for Performance.</p>
           <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E91E63] hover:-translate-y-1 transition-all text-white">Fb</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E91E63] hover:-translate-y-1 transition-all text-white">Ig</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E91E63] hover:-translate-y-1 transition-all text-white">In</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
