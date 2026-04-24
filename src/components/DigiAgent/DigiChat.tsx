"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DigiLeadForm from "./DigiLeadForm";
import DigiQuickReplies from "./DigiQuickReplies";

// ── Types ─────────────────────────────────────────────────────
type Role = "user" | "assistant";
interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
}

// ── Markdown-lite renderer ────────────────────────────────────
function renderText(text: string) {
  const parts = text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .split("\n");
  return parts.map((line, i) => (
    <span key={i}>
      <span dangerouslySetInnerHTML={{ __html: line }} />
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

// ── Typing indicator ──────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 mb-4">
      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-500 flex items-center justify-center flex-shrink-0">
        <span className="text-white font-black text-[10px]">D</span>
      </div>
      <div className="bg-white/5 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-[#00d9ff] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function DigiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show notification bubble after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowNotification(true), 6000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (showNotification) {
      const t = setTimeout(() => setShowNotification(false), 10000);
      return () => clearTimeout(t);
    }
  }, [showNotification]);

  // Auto-dismiss notification on open
  useEffect(() => {
    if (isOpen) setShowNotification(false);
  }, [isOpen]);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        role: "assistant",
        content:
          "Γεια σου! 👋 Είμαι ο **DIGI**, ο ψηφιακός σύμβουλος της DIGIADS.\n\nΕίτε ψάχνεις για ιστοσελίδα, Google Ads, SEO ή τίποτα συγκεκριμένο ακόμα — είμαι εδώ να σε βοηθήσω να βρεις τη σωστή λύση.\n\n**Πες μου, με τι ασχολείται η επιχείρησή σου;** 🚀",
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input
  useEffect(() => {
    if (isOpen && !showLeadForm) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, showLeadForm]);

  // ── Send message ───────────────────────────────────────────
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isTyping) return;

      const userMsg: Message = {
        id: `u-${Date.now()}`,
        role: "user",
        content,
        timestamp: new Date(),
      };

      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setInput("");
      setIsTyping(true);

      const newCount = exchangeCount + 1;
      setExchangeCount(newCount);

      try {
        const res = await fetch("/api/digi-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
            exchangeCount: newCount,
          }),
        });

        const data = await res.json();

        const botMsg: Message = {
          id: `b-${Date.now()}`,
          role: "assistant",
          content: data.message ?? "Συγγνώμη, κάτι πήγε στραβά.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);

        // Show lead form after 3 exchanges (with a delay)
        if (data.captureLeads && !showLeadForm && !leadSubmitted) {
          setTimeout(() => setShowLeadForm(true), 1500);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            role: "assistant",
            content:
              "Συγγνώμη, δεν μπόρεσα να συνδεθώ. Γράψε μας στο **info@digiads.gr** 🙏",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [messages, isTyping, exchangeCount, showLeadForm, leadSubmitted]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // ── Lead form submit ───────────────────────────────────────
  const handleLeadSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    service: string;
  }) => {
    const summary = messages
      .slice(-6)
      .map((m) => `${m.role === "user" ? "Πελάτης" : "DIGI"}: ${m.content}`)
      .join("\n");

    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, chatSummary: summary }),
    });

    if (res.ok) {
      setLeadSubmitted(true);
      setShowLeadForm(false);
      // Add success message
      setMessages((prev) => [
        ...prev,
        {
          id: `success-${Date.now()}`,
          role: "assistant",
          content: `Τέλεια, **${data.name}**! ✅\n\nΣου έστειλα email επιβεβαίωσης στο **${data.email}**.\n\nΗ ομάδα μας θα σε επικοινωνήσει το συντομότερο με την προσωπική σου πρόταση. Ανυπομονούμε να συνεργαστούμε! 🚀`,
          timestamp: new Date(),
        },
      ]);
    }
  };

  // ── Chat summary for notification ─────────────────────────
  const unreadCount = !isOpen && messages.length > 1 ? 1 : 0;

  return (
    <>
      {/* ── Floating Button ────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
        {/* Notification bubble */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-[#060b1a] border border-[#00d9ff]/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[220px] shadow-2xl shadow-black/40 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-white text-xs font-medium leading-relaxed">
                👋 Γεια! Είμαι ο <strong className="text-[#00d9ff]">DIGI</strong>. Μπορώ να σε βοηθήσω να βρεις τη σωστή λύση για την επιχείρησή σου!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-500 shadow-lg shadow-[#00d9ff]/25 flex items-center justify-center text-[#010205] font-black text-xl transition-all"
          aria-label="Άνοιξε τον DIGI chat"
        >
          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#00d9ff]/30 animate-ping" />
          )}
          {/* Unread badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
              1
            </span>
          )}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat Window ────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed bottom-24 right-6 z-[9997] w-[380px] max-w-[calc(100vw-1.5rem)] h-[560px] max-h-[calc(100vh-8rem)] flex flex-col bg-[#060b1a]/95 backdrop-blur-2xl border border-white/8 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
            style={{ boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,217,255,0.05)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00d9ff]/20">
                  <span className="text-[#010205] font-black text-sm">D</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#060b1a]" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">DIGI</p>
                <p className="text-[#00d9ff] text-xs font-mono tracking-wide">Virtual Sales Agent · Online</p>
              </div>
              {/* Lead form toggle */}
              {!leadSubmitted && (
                <button
                  onClick={() => setShowLeadForm((v) => !v)}
                  title="Αίτηση πρότασης"
                  className="w-8 h-8 rounded-full bg-[#00d9ff]/10 hover:bg-[#00d9ff]/20 border border-[#00d9ff]/20 flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 text-[#00d9ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Body: messages + lead form overlay */}
            <div className="relative flex-1 overflow-hidden">
              {/* Messages */}
              <div className="h-full overflow-y-auto px-4 py-4 space-y-1" data-lenis-prevent>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2.5 mb-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar (bot only) */}
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00d9ff] to-blue-500 flex items-center justify-center flex-shrink-0 mb-0.5">
                        <span className="text-[#010205] font-black text-[10px]">D</span>
                      </div>
                    )}
                    {/* Bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#00d9ff]/15 border border-[#00d9ff]/20 text-white rounded-br-sm"
                          : "bg-white/5 border border-white/8 text-slate-300 rounded-bl-sm"
                      }`}
                    >
                      {renderText(msg.content)}
                    </motion.div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Lead form overlay */}
              <AnimatePresence>
                {showLeadForm && !leadSubmitted && (
                  <DigiLeadForm
                    onSubmit={handleLeadSubmit}
                    onSkip={() => setShowLeadForm(false)}
                    chatSummary={messages.map((m) => `${m.role}: ${m.content}`).join("\n")}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Quick replies */}
            {!showLeadForm && (
              <DigiQuickReplies
                onSelect={sendMessage}
                disabled={isTyping}
                exchangeCount={exchangeCount}
              />
            )}

            {/* Input */}
            {!showLeadForm && (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 px-4 py-3 border-t border-white/5"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Γράψε το μήνυμά σου..."
                  disabled={isTyping}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d9ff]/40 transition-all disabled:opacity-50"
                  maxLength={500}
                />
                <motion.button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex-shrink-0 bg-gradient-to-tr from-[#00d9ff] to-blue-500 rounded-xl flex items-center justify-center text-[#010205] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </form>
            )}

            {/* Footer branding */}
            <div className="px-4 pb-3 flex items-center justify-center gap-1">
              <span className="text-slate-700 text-[10px] font-mono tracking-widest">POWERED BY DIGIADS AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
