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
  const cleanText = text.replace(/\[SHOW_FORM\]/g, "");
  const parts = cleanText
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
  const [agentState, setAgentState] = useState<"online" | "reading" | "analyzing" | "typing">("online");
  const isTyping = agentState !== "online";
  const [exchangeCount, setExchangeCount] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // ── Web Audio API Sound Effect ──────────────────────────────
  const playPopSound = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  }, []);

  // ── Speech Recognition Setup ────────────────────────────────
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "el-GR";

      recognition.onresult = (event: any) => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setInput((prev) => (prev ? prev + " " : "") + finalTranscript.trim());
        }
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert("Η φωνητική πληκτρολόγηση δεν υποστηρίζεται σε αυτόν τον browser.");
      }
    }
  };

  // ── Session Persistence ──────────────────────────────────────
  useEffect(() => {
    const savedMessages = sessionStorage.getItem("digi_chat_messages");
    const savedCount = sessionStorage.getItem("digi_chat_count");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(
          parsed.map((m: any) => ({
            ...m,
            timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
          }))
        );
      } catch (e) {}
    }
    if (savedCount) setExchangeCount(parseInt(savedCount, 10));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      sessionStorage.setItem("digi_chat_messages", JSON.stringify(messages));
      sessionStorage.setItem("digi_chat_count", exchangeCount.toString());
    }
  }, [messages, exchangeCount, isInitialized]);

  // Show notification bubble after 2 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowNotification(true), 2000);
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
    if (isOpen && messages.length === 0 && isInitialized) {
      const path = window.location.pathname;
      let contextGreeting = "Είτε ψάχνεις για ιστοσελίδα, Google Ads, SEO ή τίποτα συγκεκριμένο ακόμα — είμαι εδώ να σε βοηθήσω να βρεις τη σωστή λύση.";
      
      if (path.includes("web-design") || path.includes("kataskevi-istoselidon")) {
        contextGreeting = "Βλέπω ότι ενδιαφέρεσαι για **Κατασκευή Ιστοσελίδων**. Μπορώ να σου εξηγήσω πώς σχεδιάζουμε premium, ταχύτατα sites που φέρνουν πωλήσεις.";
      } else if (path.includes("tourism-marketing") || path.includes("touristiko-marketing")) {
        contextGreeting = "Βλέπω ότι σε ενδιαφέρει το **Τουριστικό Marketing**. Έχουμε ειδικές στρατηγικές (Google/Meta Ads) αποκλειστικά για ξενοδοχεία και βίλες που αυξάνουν τις απευθείας κρατήσεις.";
      } else if (path.includes("photo-services") || path.includes("drone-services")) {
        contextGreeting = "Βλέπω ότι κοιτάς τις **Υπηρεσίες Φωτογράφισης & Drone**. Μια επαγγελματική εικόνα είναι το 50% της πώλησης! Θέλεις να δούμε πώς μπορούμε να αναδείξουμε το project σου;";
      }

      const greeting: Message = {
        id: "greeting",
        role: "assistant",
        content: `Γεια σου! 👋 Είμαι ο **DIGI**, ο ψηφιακός σύμβουλος της DIGIADS.\n\n${contextGreeting}\n\n**Πες μου, με τι ακριβώς ασχολείται η επιχείρησή σου;** 🚀`,
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length, isInitialized]);

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
      
      setAgentState("reading");
      const newCount = exchangeCount + 1;
      setExchangeCount(newCount);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000); // 45s max duration

        setAgentState("analyzing");

        const res = await fetch("/api/digi-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
            exchangeCount: newCount,
            currentPage: window.location.pathname
          }),
          signal: controller.signal,
        });

        setAgentState("typing"); // begin streaming!

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          setMessages((prev) => [
            ...prev,
            { id: `b-${Date.now()}`, role: "assistant", content: data.message || "Συγγνώμη, κάτι πήγε στραβά.", timestamp: new Date() },
          ]);
          setAgentState("online");
          return;
        }

        const reader = res.body?.getReader();
        const decoder = new TextDecoder("utf-8");
        let done = false;
        let buffer = "";
        let botMessage = "";
        const botMsgId = `b-${Date.now()}`;

        // Initial empty message to stream into
        setMessages((prev) => [
          ...prev,
          { id: botMsgId, role: "assistant", content: "", timestamp: new Date() },
        ]);
        playPopSound();

        if (reader) {
          while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split("\n");
              buffer = lines.pop() || ""; // Keep the last incomplete line in buffer
              
              for (const line of lines) {
                if (line.trim().startsWith("data: ")) {
                  const dataStr = line.replace("data: ", "").trim();
                  if (!dataStr || dataStr === "[DONE]") continue;
                  try {
                    const data = JSON.parse(dataStr);
                    const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (textPart) {
                      botMessage += textPart;
                      if (botMessage.includes("[SHOW_FORM]") && !showLeadForm && !leadSubmitted) {
                        setShowLeadForm(true);
                      }
                      setMessages((prev) =>
                        prev.map((m) =>
                          m.id === botMsgId ? { ...m, content: botMessage } : m
                        )
                      );
                    }
                  } catch (e) {
                    // Ignore parse errors from partial JSON chunks
                  }
                }
              }
            }
          }
        }
        
        clearTimeout(timeoutId);

        // Fallback: Show lead form after 4 exchanges if it hasn't popped up yet
        if (newCount >= 4 && !showLeadForm && !leadSubmitted) {
          setTimeout(() => setShowLeadForm(true), 2500);
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
        setAgentState("online");
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
            className="fixed z-[9997] flex flex-col bg-[#060b1a]/95 backdrop-blur-2xl border border-white/8 shadow-2xl shadow-black/60 overflow-hidden bottom-0 right-0 w-full h-[85dvh] max-h-[85dvh] rounded-t-3xl border-x-0 border-b-0 sm:bottom-24 sm:right-6 sm:w-[380px] sm:max-w-[calc(100vw-1.5rem)] sm:h-[560px] sm:max-h-[calc(100vh-8rem)] sm:rounded-2xl sm:border"
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
                <p className="text-white font-bold text-sm m-0 leading-tight">DIGI</p>
                <p className="text-[#00d9ff] text-[11px] font-mono tracking-widest m-0 mt-0.5">
                  {agentState === "online" ? "Virtual Sales Agent · Online" : 
                   agentState === "reading" ? "Virtual Sales Agent · διαβάζει..." : 
                   agentState === "analyzing" ? "Virtual Sales Agent · σκέφτεται..." : 
                   "Virtual Sales Agent · πληκτρολογεί..."}
                </p>
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
              <div className="digi-scroll h-full overflow-y-auto px-4 py-4 space-y-1" data-lenis-prevent>
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
                {(agentState === "reading" || agentState === "analyzing") && <TypingIndicator />}
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
                onOpenForm={() => setShowLeadForm(true)}
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
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all border ${
                    isListening
                      ? "bg-red-500/20 border-red-500 text-red-500 animate-pulse"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                  title="Φωνητική Πληκτρολόγηση"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Γράψε το μήνυμά σου..."
                  disabled={isTyping}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00d9ff]/40 transition-all disabled:opacity-50"
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
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .digi-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .digi-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .digi-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .digi-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}
