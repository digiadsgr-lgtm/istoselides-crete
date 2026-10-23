"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

// ASCII char codes for "info" and "digiads.gr" — never stored as plain text in SSR HTML
const USER_CODES = [105, 110, 102, 111];
const DOMAIN_CODES = [100, 105, 103, 105, 97, 100, 115, 46, 103, 114];

function decodeEmail(): string {
  const u = String.fromCharCode(...USER_CODES);
  const d = String.fromCharCode(...DOMAIN_CODES);
  return `${u}@${d}`;
}

interface ProtectedEmailProps {
  className?: string;
  showCopy?: boolean;
  prefix?: string;
}

export default function ProtectedEmail({
  className = "text-slate-400 hover:text-[#00d9ff] transition-colors",
  showCopy = false,
  prefix = "",
}: ProtectedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const decoded = decodeEmail();
    window.location.href = `mailto:${decoded}`;
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const decoded = decodeEmail();
    navigator.clipboard?.writeText(decoded);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!email) {
    // SSR placeholder: invisible to email-harvesting regex bots
    return (
      <span className={className} aria-label="Email επικοινωνίας">
        {prefix}[προστατευμένο email]
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleEmailClick}
        className={`cursor-pointer text-left ${className}`}
        title="Κλικ για αποστολή email"
      >
        {prefix}
        {email}
      </button>
      {showCopy && (
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
          title="Αντιγραφή Email"
        >
          {copied ? (
            <>
              <Check size={11} className="text-emerald-400" />
              <span className="text-emerald-400">Αντιγράφηκε</span>
            </>
          ) : (
            <>
              <Copy size={11} />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
    </span>
  );
}
