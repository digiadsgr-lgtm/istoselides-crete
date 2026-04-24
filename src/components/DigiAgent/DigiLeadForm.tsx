"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DigiLeadFormProps {
  onSubmit: (data: { name: string; email: string; phone: string; service: string }) => Promise<void>;
  onSkip: () => void;
  chatSummary: string;
}

const SERVICES = [
  "Κατασκευή Ιστοσελίδας",
  "E-shop",
  "Google & Meta Ads",
  "SEO / Google Ranking",
  "Tourism Marketing",
  "Social Media Management",
  "Φωτογράφιση & Drone",
  "Δεν ξέρω ακόμα",
];

export default function DigiLeadForm({ onSubmit, onSkip, chatSummary }: DigiLeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Συμπλήρωσε τουλάχιστον όνομα και email.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onSubmit({ name, email, phone, service });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-0 z-10 flex flex-col bg-[#060b1a]/95 backdrop-blur-xl rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-xs">D</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Εξατομικευμένη Πρόταση</p>
            <p className="text-[#00d9ff] text-xs font-mono">δωρεάν · 0 δεσμεύσεις</p>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-3 leading-relaxed">
          Έχω ήδη μια ξεκάθαρη εικόνα για αυτό που χρειάζεσαι. Δώσε μου τα στοιχεία σου και σου στέλνω αναλυτική πρόταση.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 tracking-wider uppercase">
            Όνομα *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="π.χ. Γιώργης Παπαδάκης"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d9ff]/50 focus:bg-white/8 transition-all"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 tracking-wider uppercase">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="giorgis@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d9ff]/50 focus:bg-white/8 transition-all"
            required
          />
        </div>

        {/* Phone (optional) */}
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 tracking-wider uppercase">
            Τηλέφωνο <span className="text-slate-600">(προαιρετικό)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+30 69..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d9ff]/50 transition-all"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 tracking-wider uppercase">
            Με τι ενδιαφέρεσαι;
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d9ff]/50 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-slate-500">Επίλεξε υπηρεσία...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-[#0a1628]">{s}</option>
            ))}
          </select>
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-400 text-xs bg-red-500/10 rounded-lg px-3 py-2"
            >
              ⚠️ {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full relative group bg-gradient-to-r from-[#00d9ff] to-blue-500 rounded-xl py-3.5 text-sm font-bold text-[#010205] hover:from-[#00d9ff] hover:to-[#00b8ff] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-[#010205]/30 border-t-[#010205] rounded-full animate-spin" />
              Αποστολή...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              📋 Στείλε μου την Πρόταση
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
        </button>

        {/* Skip */}
        <button
          type="button"
          onClick={onSkip}
          className="w-full text-center text-xs text-slate-600 hover:text-slate-400 transition-colors py-1"
        >
          Συνέχεια συνομιλίας →
        </button>
      </form>
    </motion.div>
  );
}
