"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import ProtectedEmail from "@/components/ProtectedEmail";
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot anti-spam trap (must remain empty for real users)
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) {
      // Bot detected — silently pretend success
      setStatus("sent");
      return;
    }
    if (!name || !email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          website: honeypot,
          service: "Φόρμα Επικοινωνίας - Istoselides Crete",
          chatSummary: `Μήνυμα από φόρμα επικοινωνίας (istoselides-crete.gr):\n${message}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <section className="pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d9ff]/30 bg-[#00d9ff]/10 text-[#00d9ff] text-xs font-mono uppercase tracking-[0.25em] mb-6">
              <span>Κολοκοτρώνη 34, Ρέθυμνο, Κρήτη · DIGIADS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-montserrat tracking-tighter mb-6 leading-[0.95]">
              START YOUR <br />
              <span className="bg-gradient-to-r from-white via-[#00d9ff] to-[#FFBF00] bg-clip-text text-transparent">
                PROJECT
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
              Είμαστε έτοιμοι να σχεδιάσουμε την επόμενη μέρα της επιχείρησής σας στην Κρήτη. Επικοινωνήστε απευθείας με την ομάδα της{" "}
              <a
                href="https://www.digiads.gr/contact"
                target="_blank"
                rel="noopener"
                className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
              >
                DIGIADS (www.digiads.gr)
              </a>{" "}
              ή συμπληρώστε τη φόρμα ενδιαφέροντος.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 relative z-10">
            {/* Form Side */}
            <div className="lg:col-span-7 bg-[#050814] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              {status === "sent" ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-white font-montserrat mb-3">
                    Το μήνυμά σας εστάλη επιτυχώς!
                  </h2>
                  <p className="text-slate-400 font-light mb-8">
                    Η ομάδα της DIGIADS θα επικοινωνήσει μαζί σας εντός 24 εργάσιμων ωρών.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-widest hover:bg-white/20 transition-colors"
                  >
                    Νέο Μήνυμα
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Anti-Spam Honeypot Field (Hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_website_hp">Website</label>
                    <input
                      id="company_website_hp"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Ονοματεπώνυμο *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors"
                        placeholder="π.χ. Γιώργος Παπαδάκης"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Τηλέφωνο Επικοινωνίας
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors"
                        placeholder="69..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors"
                      placeholder="name@company.gr"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Περιγραφή Project (Ιστοσελίδα, E-shop, SEO, Βίλα/Ξενοδοχείο)
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00d9ff] transition-colors h-36"
                      placeholder="Πείτε μας λίγα λόγια για τους στόχους σας..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 w-full bg-[#00d9ff] text-black font-black uppercase tracking-widest rounded-xl py-4 hover:bg-white transition-all mt-2 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? "Αποστολή..." : "Αποστολή Αιτήματος"} <Send size={16} />
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-rose-400 text-center">
                      Παρουσιάστηκε σφάλμα. Μπορείτε να καλέσετε απευθείας στο 698 760 2707.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 flex flex-col gap-7 justify-center">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-[#050814] border border-white/10">
                <div className="p-3.5 bg-[#00d9ff]/10 rounded-xl text-[#00d9ff]">
                  <Phone size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-montserrat mb-1">Τηλέφωνο</h2>
                  <a
                    href="tel:+306987602707"
                    className="text-slate-300 hover:text-[#00d9ff] font-mono text-base transition-colors block"
                  >
                    698 760 2707
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-[#050814] border border-white/10">
                <div className="p-3.5 bg-[#FFBF00]/10 rounded-xl text-[#FFBF00]">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-white font-montserrat">Email</h2>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      <ShieldCheck size={11} /> Anti-Bot Protected
                    </span>
                  </div>
                  <ProtectedEmail
                    showCopy
                    className="text-slate-300 hover:text-[#FFBF00] font-mono text-base transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-[#050814] border border-white/10">
                <div className="p-3.5 bg-emerald-400/10 rounded-xl text-emerald-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-montserrat mb-1">Γραφείο</h2>
                  <p className="text-slate-300 text-base">
                    Κολοκοτρώνη 34, Ρέθυμνο, Κρήτη
                  </p>
                  <a
                    href="https://www.digiads.gr/contact"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00d9ff] hover:text-[#FFBF00] mt-3"
                  >
                    <span>Κεντρική Σελίδα Επικοινωνίας DIGIADS.GR</span>
                    <ExternalLink size={12} />
                  </a>
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
