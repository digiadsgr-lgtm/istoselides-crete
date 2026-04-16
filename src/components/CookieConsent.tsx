"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if consent is already given
    const consent = localStorage.getItem("digiads_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const updateConsent = (granted: boolean) => {
    const status = granted ? "granted" : "denied";
    
    // GTM DataLayer Push
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "consent_update",
      consent_status: granted ? "all" : "rejected",
    });

    // Execute gtag consent update
    function gtag() { w.dataLayer.push(arguments); }
    // @ts-ignore
    gtag('consent', 'update', {
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status,
      'analytics_storage': status
    });

    localStorage.setItem("digiads_cookie_consent", granted ? "all" : "rejected");
    setShow(false);
  };

  const handleAcceptAll = () => updateConsent(true);
  const handleDeclineAll = () => updateConsent(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 sm:bottom-6 sm:right-6 sm:max-w-sm w-full z-[100] p-6 bg-[#030509]/95 backdrop-blur-xl border border-white/10 shadow-2xl sm:rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-[#00d9ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-white font-bold text-lg">Η Ιδιωτικότητά σας</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σου, 
            για την ανάλυση της επισκεψιμότητας, και την βελτιστοποίηση διαφημιστικών 
            καμπανιών. {(<a href="/privacy" className="text-[#00d9ff] hover:underline whitespace-nowrap">Πολιτική Απορρήτου</a>)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2.5 bg-[#00d9ff] hover:bg-white text-black font-bold text-sm tracking-wider uppercase rounded-xl transition-colors duration-300"
            >
              Αποδοχή Όλων
            </button>
            <button 
              onClick={handleDeclineAll}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-sm rounded-xl transition-colors duration-300"
            >
              Απόρριψη
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
