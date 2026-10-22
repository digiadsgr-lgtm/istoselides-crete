"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { ArrowUpRight, MapPin, ChevronDown, Sparkles, ExternalLink, Clock, Layers } from "lucide-react";

const creteRegions = [
  {
    city: "Ρέθυμνο (HQ)",
    badge: "Κεντρική Έδρα · Κολοκοτρώνη 34",
    description:
      "Η φυσική έδρα της DIGIADS. Εξειδικευμένη κατασκευή ιστοσελίδων στο Ρέθυμνο, Local SEO στο Google Maps, προώθηση boutique ξενοδοχείων, βιλών και τοπικών επιχειρήσεων.",
    primaryLink: {
      label: "Digital Marketing & Web Design Ρέθυμνο — DIGIADS",
      url: "https://www.digiads.gr/digital-marketing-rethymno",
    },
    secondaryLink: {
      label: "Οδηγός Τιμών Ιστοσελίδας στο Ρέθυμνο",
      url: "/arthra/poso-kostizei-kataskevi-istoselidas-rethymno",
      internal: true,
    },
  },
  {
    city: "Χανιά",
    badge: "Luxury Villas · Hospitality · E-shop",
    description:
      "Υψηλής αισθητικής κατασκευή ιστοσελίδων στα Χανιά για luxury βίλες, τουριστικά καταλύματα, ναυτιλιακές/εκδρομικές εταιρείες και σύγχρονα ηλεκτρονικά καταστήματα.",
    primaryLink: {
      label: "Τουριστικό Marketing & Βίλες Κρήτη — DIGIADS",
      url: "https://www.digiads.gr/touristiko-marketing",
    },
    secondaryLink: {
      label: "Direct Bookings για Ξενοδοχεία & Βίλες",
      url: "/arthra/direct-bookings-xenodocheia-villes-kriti",
      internal: true,
    },
  },
  {
    city: "Ηράκλειο",
    badge: "Enterprise B2B · E-Commerce · Ads",
    description:
      "Custom Headless E-shops με διασύνδεση ERP/Skroutz, B2B εταιρικές ιστοσελίδες, τεχνικό SEO και καμπάνιες Performance Marketing (Google & Meta Ads) στο Ηράκλειο.",
    primaryLink: {
      label: "Κατασκευή Ιστοσελίδων & E-shop — DIGIADS",
      url: "https://www.digiads.gr/kataskevi-istoselidon",
    },
    secondaryLink: {
      label: "Οδηγός Κατασκευής E-shop στην Κρήτη",
      url: "/arthra/kataskevi-eshop-kriti-odigos-epitychias",
      internal: true,
    },
  },
  {
    city: "Άγιος Νικόλαος & Λασίθι",
    badge: "5-Star Resorts · Drone · Branding",
    description:
      "Ολοκληρωμένη ψηφιακή παρουσία, κινηματογραφικό 4K Drone Video, διεθνές SEO και luxury branding για resorts και επιχειρήσεις σε Άγιο Νικόλαο, Ελούντα, Ιεράπετρα και Σητεία.",
    primaryLink: {
      label: "4K Drone Video & Φωτογράφιση — DIGIADS",
      url: "https://www.digiads.gr/photo-services/drone-services",
    },
    secondaryLink: {
      label: "Κατασκευή Ιστοσελίδων σε Όλη την Κρήτη",
      url: "/arthra/kataskevi-istoselidon-chania-irakleio-rethymno-lasithi",
      internal: true,
    },
  },
];

const digiadsBacklinkHubs = [
  {
    category: "Web Architecture",
    title: "Κατασκευή Ιστοσελίδων & E-shop (Next.js / Astro)",
    desc: "Headless κατασκευή ιστοσελίδων με 100/100 Lighthouse, CRO & Serverless ασφάλεια.",
    url: "https://www.digiads.gr/kataskevi-istoselidon",
  },
  {
    category: "Local Dominance",
    title: "Digital Marketing στο Ρέθυμνο & την Κρήτη",
    desc: "Ολοκληρωμένη στρατηγική τοπικής ανάπτυξης από την κεντρική ομάδα της DIGIADS.",
    url: "https://www.digiads.gr/digital-marketing-rethymno",
  },
  {
    category: "Hospitality ROI",
    title: "Τουριστικό Marketing & Direct Bookings Ξενοδοχείων",
    desc: "Απελευθερωθείτε από τις προμήθειες της Booking & Airbnb με αυτόνομα booking funnels.",
    url: "https://www.digiads.gr/touristiko-marketing",
  },
  {
    category: "Paid Acquisition",
    title: "Performance Marketing (Google Ads & Meta Ads)",
    desc: "Data-driven καμπάνιες PPC & Retargeting με Server-Side GA4 conversion tracking.",
    url: "https://www.digiads.gr/digital-marketing/performance-marketing",
  },
  {
    category: "Organic Search #1",
    title: "SEO, Local SEO & Google Maps 3-Pack",
    desc: "Τεχνικό SEO, Topical Authority Silos, Schema.org & AI Search Optimization (GEO).",
    url: "https://www.digiads.gr/digital-marketing/seo-local-seo",
  },
  {
    category: "Paid Social",
    title: "Διαφήμιση σε Facebook & Instagram (Meta Ads)",
    desc: "Advantage+ AI καμπάνιες, δυναμικοί κατάλογοι προϊόντων και lead generation.",
    url: "https://www.digiads.gr/social-media/diafimisi-facebook-instagram",
  },
  {
    category: "Short-Form Video",
    title: "TikTok & Instagram Reels Marketing",
    desc: "Σενάριο, γύρισμα στον χώρο σας και viral editing που μετατρέπει προβολές σε πελάτες.",
    url: "https://www.digiads.gr/social-media/tiktok-reels",
  },
  {
    category: "Social Presence",
    title: "Διαχείριση Social Media & Community Growth",
    desc: "Στρατηγική περιεχομένου, αισθητική επιμέλεια feed και ανάπτυξη πιστής κοινότητας.",
    url: "https://www.digiads.gr/digital-marketing/social-media-management",
  },
  {
    category: "Brand Authority",
    title: "Προώθηση Επιχειρήσεων & Εταιρική Ταυτότητα",
    desc: "Re-branding, στρατηγική τοποθέτηση B2B/B2C και ολιστική αναβάθμιση κύρους.",
    url: "https://www.digiads.gr/digital-marketing/business-promotion",
  },
  {
    category: "Creator Economy",
    title: "Influencer Marketing & UGC Καμπάνιες",
    desc: "Συνεργασίες με επιλεγμένους creators για αυθεντικό social proof.",
    url: "https://www.digiads.gr/social-media/influencer-marketing",
  },
  {
    category: "Aerial Cinema",
    title: "Drone Video 4K/60fps & Εναέριες Λήψεις",
    desc: "Αδειοδοτημένες εναέριες λήψεις και FPV drone tours για βίλες, ξενοδοχεία και ακίνητα.",
    url: "https://www.digiads.gr/photo-services/drone-services",
  },
  {
    category: "Visual Studio",
    title: "Επαγγελματική Αρχιτεκτονική & Προϊοντική Φωτογράφιση",
    desc: "HDR φωτογράφιση εσωτερικών χώρων, γαστρονομίας και προϊόντων e-shop.",
    url: "https://www.digiads.gr/photo-services",
  },
];

const homeFaqs = [
  {
    q: "Γιατί να επιλέξω την DIGIADS & το Istoselides-Rethymno.gr για την κατασκευή της ιστοσελίδας μου;",
    a: "Σε αντίθεση με τις τυπικές εταιρείες που χρησιμοποιούν έτοιμα, αργά WordPress templates, στην DIGIADS αναπτύσσουμε custom Headless ιστοσελίδες με Next.js και Astro. Αυτό σας εξασφαλίζει 100/100 Google Lighthouse Performance, χρόνο φόρτωσης κάτω από 0.8 δευτερόλεπτα, απροσπέλαστη ασφάλεια και εγγενές Technical SEO που σας φέρνει στην 1η σελίδα της Google.",
    linkLabel: "Δείτε τις προδιαγραφές κατασκευής ιστοσελίδων της DIGIADS",
    linkUrl: "https://www.digiads.gr/kataskevi-istoselidon",
  },
  {
    q: "Πόσο κοστίζει η κατασκευή ιστοσελίδας ή e-shop στο Ρέθυμνο και την Κρήτη;",
    a: "Μια σύγχρονη επαγγελματική ιστοσελίδα παρουσίασης με custom UX/UI design και πλήρες Local SEO ξεκινά από 900€ – 1.500€. Οι εξειδικευμένες ιστοσελίδες ξενοδοχείων και βιλών με Direct Booking Engine κυμαίνονται μεταξύ 1.500€ – 3.500€, ενώ τα custom E-shops με διασύνδεση ERP/Skroutz ξεκινούν από 2.200€.",
    linkLabel: "Διαβάστε τον αναλυτικό οδηγό τιμών κατασκευής ιστοσελίδας 2026",
    linkUrl: "/arthra/poso-kostizei-kataskevi-istoselidas-rethymno",
  },
  {
    q: "Πώς βοηθάτε ξενοδοχεία και βίλες στην Κρήτη να αυξήσουν τις απευθείας κρατήσεις (Direct Bookings);",
    a: "Συνδυάζουμε μια ultra-fast πολυγλωσσική ιστοσελίδα με Booking Engine, κινηματογραφικό 4K Drone Video, International Hotel SEO και στοχευμένες καμπάνιες Google Ads & Meta Retargeting. Έτσι, οι επισκέπτες κλείνουν απευθείας σε εσάς χωρίς να πληρώνετε 15%–20% προμήθεια σε Booking και Airbnb.",
    linkLabel: "Εξερευνήστε το Τουριστικό Marketing της DIGIADS",
    linkUrl: "https://www.digiads.gr/touristiko-marketing",
  },
  {
    q: "Αναλαμβάνετε το SEO, τα Google Ads και τα Social Media μετά την κατασκευή της ιστοσελίδας;",
    a: "Ακριβώς! Το Istoselides-Rethymno.gr είναι ο εξειδικευμένος βραχίονας Web Architecture της DIGIADS (www.digiads.gr). Αμέσως μετά την παράδοση της ιστοσελίδας σας, η in-house ομάδα μας αναλαμβάνει το Local SEO στο Google Maps, τις διαφημίσεις Google & Meta Ads και την παραγωγή TikTok/Instagram Reels.",
    linkLabel: "Δείτε όλες τις υπηρεσίες Digital Marketing στο DIGIADS.GR",
    linkUrl: "https://www.digiads.gr/digital-marketing-rethymno",
  },
];

export default function DigiadsEcosystem() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featuredArticles = articles.slice(0, 6);

  return (
    <>
      {/* 1. Crete Local SEO Coverage Section */}
      <section className="py-28 bg-[#02040A] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#00d9ff] mb-4">
              <MapPin size={14} />
              <span>Παγκρήτια Εμβέλεια · Τοπική Κυριαρχία</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-montserrat tracking-tight leading-tight mb-5">
              Κατασκευή Ιστοσελίδων &amp; SEO σε{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#FFBF00]">
                Όλη την Κρήτη.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              Με φυσική έδρα στην καρδιά του νησιού (<strong className="text-white">Κολοκοτρώνη 34, Ρέθυμνο</strong>), η ομάδα της{" "}
              <a
                href="https://www.digiads.gr"
                target="_blank"
                rel="noopener"
                className="text-[#00d9ff] hover:text-[#FFBF00] underline font-medium"
              >
                DIGIADS
              </a>{" "}
              υποστηρίζει επιχειρήσεις, ξενοδοχεία, βίλες και e-shops και στους 4 νομούς της Κρήτης.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {creteRegions.map((reg) => (
              <div
                key={reg.city}
                className="p-8 sm:p-10 rounded-3xl bg-[#050814] border border-white/10 hover:border-[#00d9ff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-black text-white font-montserrat">{reg.city}</h3>
                    <span className="px-3 py-1 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[11px] font-mono text-[#00d9ff]">
                      {reg.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                    {reg.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={reg.primaryLink.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFBF00] hover:text-white transition-colors"
                  >
                    <span>{reg.primaryLink.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href={reg.secondaryLink.url}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#00d9ff] hover:underline"
                  >
                    <span>{reg.secondaryLink.label} →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Official DIGIADS.GR 360° Ecosystem Matrix (High-Value Contextual Backlink Hub) */}
      <section className="py-28 bg-[#010205] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFBF00]/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#FFBF00] mb-4">
                <Layers size={14} />
                <span>Official Parent Organization · DIGIADS.GR</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-montserrat tracking-tight leading-tight mb-4">
                Συνδεδεμένοι με το Κεντρικό Οικοσύστημα της{" "}
                <a
                  href="https://www.digiads.gr"
                  target="_blank"
                  rel="noopener"
                  className="text-[#FFBF00] hover:text-[#00d9ff] underline decoration-[#FFBF00]/40 underline-offset-8 transition-colors"
                >
                  DIGIADS
                </a>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
                Μια κορυφαία ιστοσελίδα είναι η αρχή. Μέσω της απευθείας διασύνδεσής μας με όλα τα εξειδικευμένα τμήματα του{" "}
                <a href="https://www.digiads.gr" target="_blank" rel="noopener" className="text-white underline hover:text-[#00d9ff]">
                  www.digiads.gr
                </a>
                , αποκτάτε πρόσβαση σε ένα πλήρες, καθετοποιημένο Digital Marketing Agency στην Κρήτη.
              </p>
            </div>

            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#FFBF00] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shrink-0 self-start lg:self-auto shadow-[0_0_30px_rgba(255,191,0,0.3)]"
            >
              <span>Επίσκεψη στο DIGIADS.GR</span>
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {digiadsBacklinkHubs.map((hub) => (
              <a
                key={hub.url}
                href={hub.url}
                target="_blank"
                rel="noopener"
                className="group p-6 rounded-2xl bg-[#050814] border border-white/10 hover:border-[#FFBF00]/60 hover:bg-[#080D20] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00d9ff]">
                      {hub.category}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-500 group-hover:text-[#FFBF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white font-montserrat mb-2 group-hover:text-[#FFBF00] transition-colors leading-snug">
                    {hub.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500 group-hover:text-slate-300 truncate">
                  {hub.url.replace("https://www.", "")}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Latest Pillar Articles Section on Homepage */}
      <section className="py-28 bg-[#02040A] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#00d9ff] mb-4">
                <Sparkles size={14} />
                <span>Knowledge Hub · Στρατηγική &amp; Οδηγοί 2026</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-montserrat tracking-tight">
                Τελευταία Άρθρα &amp; Μελέτες
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/arthra"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00d9ff] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Όλοι οι Οδηγοί ({articles.length}) →
              </Link>
              <a
                href="https://www.digiads.gr/blog"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-mono text-xs uppercase tracking-widest hover:border-[#FFBF00] hover:text-[#FFBF00] transition-colors"
              >
                DIGIADS.GR Blog <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((post) => (
              <article
                key={post.slug}
                className="group bg-[#050814] border border-white/10 rounded-3xl overflow-hidden hover:border-[#00d9ff]/50 transition-all duration-500 flex flex-col"
              >
                <Link href={`/arthra/${post.slug}`} className="relative h-52 w-full overflow-hidden block bg-[#080D1A]">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#00d9ff] uppercase tracking-wider">
                    {post.category}
                  </span>
                </Link>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-3">
                    <Clock size={12} className="text-[#FFBF00]" />
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/arthra/${post.slug}`}>
                    <h3 className="text-lg font-bold text-white font-montserrat mb-3 group-hover:text-[#00d9ff] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-slate-400 text-sm font-light line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/arthra/${post.slug}`}
                    className="inline-flex items-center justify-between text-xs font-mono font-bold text-[#00d9ff] uppercase tracking-widest group-hover:text-white pt-4 border-t border-white/5"
                  >
                    <span>Ανάγνωση Άρθρου</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive FAQ Section */}
      <section className="py-28 bg-[#010205] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00d9ff] block mb-3">
              Συχνές Ερωτήσεις · FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-montserrat tracking-tight">
              Όλα όσα θέλετε να γνωρίζετε
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#050814] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-base sm:text-lg font-bold text-white font-montserrat">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#00d9ff] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7 text-slate-300 text-sm sm:text-base font-light leading-relaxed border-t border-white/5 pt-4">
                      <p className="mb-4">{item.a}</p>
                      <a
                        href={item.linkUrl}
                        target={item.linkUrl.startsWith("http") ? "_blank" : undefined}
                        rel={item.linkUrl.startsWith("http") ? "noopener" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFBF00] hover:text-[#00d9ff] transition-colors"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
