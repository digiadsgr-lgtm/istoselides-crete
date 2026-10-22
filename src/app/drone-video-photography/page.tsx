import { Footer } from "@/components/Footer";
import { Camera, Video, Sun, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επαγγελματική Φωτογράφιση & 4K Drone Video στην Κρήτη | DIGIADS Media",
  description:
    "Εναέριες λήψεις Drone 4K/60fps, αρχιτεκτονική φωτογράφιση HDR για βίλες, ξενοδοχεία, ακίνητα και επιχειρήσεις σε Ρέθυμνο, Χανιά, Ηράκλειο και Λασίθι από την DIGIADS.",
  keywords: [
    "Drone Video Κρήτη",
    "Επαγγελματική Φωτογράφιση Ξενοδοχείων Ρέθυμνο",
    "Φωτογράφιση Βίλας Κρήτη",
    "Aerial Photography Crete",
    "DIGIADS Drone Services",
  ],
  alternates: {
    canonical: "https://istoselides-crete.gr/drone-video-photography",
  },
  openGraph: {
    title: "4K Drone Video & Architectural Photography στην Κρήτη | DIGIADS",
    description:
      "Κινηματογραφική παραγωγή εικόνας και ήχου που εκτοξεύει τις κρατήσεις και την αξία του brand σας.",
    url: "https://istoselides-crete.gr/drone-video-photography",
    type: "website",
  },
};

export default function DroneMediaPage() {
  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <section className="pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d9ff]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <span>4K/60fps Aerial Drone · HDR Architecture · Cinema Production</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
            CINEMATIC DRONE &amp; <br />
            <span className="bg-gradient-to-r from-[#00d9ff] via-white to-[#FFBF00] bg-clip-text text-transparent">
              MEDIA PRODUCTION
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Εικόνες και εναέρια πλάνα που κόβουν την ανάσα και τροφοδοτούν την ιστοσελίδα και τις διαφημίσεις σας. Ανακαλύψτε τις εξειδικευμένες υπηρεσίες{" "}
            <a
              href="https://www.digiads.gr/photo-services/drone-services"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Drone Video &amp; Εναέριας Φωτογράφισης της DIGIADS
            </a>{" "}
            καθώς και το τμήμα{" "}
            <a
              href="https://www.digiads.gr/photo-services"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
            >
              Επαγγελματικής Φωτογράφισης Ξενοδοχείων &amp; Επιχειρήσεων
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#00d9ff] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Κλείστε Ημερομηνία Παραγωγής <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.digiads.gr/photo-services/drone-services"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-bold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all uppercase tracking-widest text-xs font-mono"
            >
              Drone Services @ DIGIADS.GR <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 relative z-10">
        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#00d9ff]/50 transition-all shadow-xl">
          <Video className="text-[#00d9ff] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">Cinematic Storytelling Video</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Σκηνοθετημένα promo videos για Hero sections ιστοσελίδων, YouTube,{" "}
            <a href="https://www.digiads.gr/social-media/tiktok-reels" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              TikTok &amp; Instagram Reels
            </a>
            .
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#FFBF00]/50 transition-all shadow-xl">
          <Sun className="text-[#FFBF00] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">4K/60fps &amp; FPV Drone Aerials</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Αδειοδοτημένες πτήσεις{" "}
            <a href="https://www.digiads.gr/photo-services/drone-services" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Drone στην Κρήτη
            </a>{" "}
            για ανάδειξη luxury βιλών, παραθαλάσσιων resorts, real estate και μεγάλων τεχνικών έργων.
          </p>
        </div>

        <div className="bg-[#050814] p-10 rounded-3xl border border-white/10 hover:border-[#ec4899]/50 transition-all shadow-xl">
          <Camera className="text-[#ec4899] w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white font-montserrat mb-4">HDR Architectural &amp; Product Photo</h2>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Αρχιτεκτονική φωτογράφιση εσωτερικών και εξωτερικών χώρων υψηλού δυναμικού εύρους που αυξάνει το CTR στις πλατφόρμες κρατήσεων και στο{" "}
            <a href="https://www.digiads.gr/touristiko-marketing" target="_blank" rel="noopener" className="text-[#00d9ff] underline">
              Direct Booking Website
            </a>{" "}
            σας.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
