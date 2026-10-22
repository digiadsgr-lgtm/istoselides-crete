import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
import { DigiChat } from "@/components/DigiAgent";

const inter = Inter({ subsets: ["latin", "greek"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "600", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://istoselides-crete.gr"),
  title: "Κατασκευή Ιστοσελίδων στο Ρέθυμνο & την Κρήτη | E-shop & SEO | DIGIADS",
  description:
    "Κορυφαία κατασκευή ιστοσελίδων, e-shop (Next.js / Astro με 100/100 Lighthouse) και Local SEO σε Ρέθυμνο, Χανιά, Ηράκλειο & Λασίθι. Επίσημος βραχίονας της DIGIADS στην Κρήτη.",
  keywords: [
    "Κατασκευή ιστοσελίδων Ρέθυμνο",
    "Κατασκευή ιστοσελίδων Κρήτη",
    "Κατασκευή ιστοσελίδων Χανιά",
    "Κατασκευή ιστοσελίδων Ηράκλειο",
    "Web Design Ρέθυμνο",
    "Κατασκευή E-shop Ρέθυμνο",
    "Κατασκευή E-shop Κρήτη",
    "Digital Marketing Ρέθυμνο",
    "SEO Ρέθυμνο",
    "Local SEO Κρήτη",
    "Κατασκευή ιστοσελίδας ξενοδοχείου Κρήτη",
    "DIGIADS",
    "Web Agency Crete",
  ],
  authors: [{ name: "DIGIADS Network", url: "https://www.digiads.gr" }],
  creator: "DIGIADS",
  publisher: "DIGIADS",
  alternates: {
    canonical: "https://istoselides-crete.gr",
  },
  verification: {
    google: "RvcqGIduR0dj8Z1dcktF1H6ILWXDFTTpa6VHxfk_Kfw",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://istoselides-crete.gr",
    title: "Κατασκευή Ιστοσελίδων Ρέθυμνο & Κρήτη | 100/100 Lighthouse | DIGIADS",
    description:
      "Δημιουργούμε αστραπιαίες ιστοσελίδες, e-shop και συστήματα Direct Bookings στο Ρέθυμνο και όλη την Κρήτη. Official Web Architecture Hub of DIGIADS.GR.",
    siteName: "Istoselides Rethymno by DIGIADS",
    images: [
      {
        url: "https://istoselides-crete.gr/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Κατασκευή Ιστοσελίδων Ρέθυμνο & Κρήτη — DIGIADS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Κατασκευή Ιστοσελίδων Ρέθυμνο & Κρήτη | E-shop & SEO | DIGIADS",
    description: "High-Performance Next.js & Astro Web Design solutions in Rethymno & Crete. Powered by DIGIADS.GR.",
    images: ["https://istoselides-crete.gr/logo/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Comprehensive Structured Data (Schema.org)
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://istoselides-crete.gr/#organization",
    name: "Istoselides Rethymno | DIGIADS Web Design & SEO Κρήτη",
    alternateName: [
      "Web Design Ρέθυμνο",
      "Κατασκευή Ιστοσελίδων Κρήτη",
      "Κατασκευή Eshop Ρέθυμνο",
      "DigiAds Network Rethymno",
    ],
    url: "https://istoselides-crete.gr",
    logo: "https://www.digiads.gr/logo/digiads-logo-navy-gold.png",
    image: "https://istoselides-crete.gr/logo/og-image.jpg",
    telephone: "+306987602707",
    description:
      "Η εξειδικευμένη ομάδα Headless Web Design & SEO της DIGIADS για το Ρέθυμνο και την Κρήτη. High-performance ιστοσελίδες, e-shop και συστήματα απευθείας κρατήσεων με 100/100 Google Lighthouse.",
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.digiads.gr/#organization",
      name: "DIGIADS",
      url: "https://www.digiads.gr",
      logo: "https://www.digiads.gr/logo/digiads-logo-navy-gold.png",
      sameAs: [
        "https://www.digiads.gr",
        "https://www.facebook.com/Digiads.gr",
        "https://www.instagram.com/digiads.gr",
        "https://gr.linkedin.com/company/digiads-gr",
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Κολοκοτρώνη 34",
      addressLocality: "Ρέθυμνο",
      addressRegion: "Κρήτη",
      postalCode: "74132",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.3662,
      longitude: 24.4731,
    },
    areaServed: [
      { "@type": "City", name: "Ρέθυμνο" },
      { "@type": "City", name: "Χανιά" },
      { "@type": "City", name: "Ηράκλειο" },
      { "@type": "City", name: "Άγιος Νικόλαος" },
      { "@type": "AdministrativeArea", name: "Κρήτη" },
      { "@type": "Country", name: "Ελλάδα" },
    ],
    priceRange: "€€-€€€",
    email: "info@digiads.gr",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.digiads.gr",
      "https://www.digiads.gr/kataskevi-istoselidon",
      "https://www.digiads.gr/digital-marketing-rethymno",
      "https://www.digiads.gr/touristiko-marketing",
      "https://www.facebook.com/Digiads.gr",
      "https://www.instagram.com/digiads.gr",
      "https://gr.linkedin.com/company/digiads-gr",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Υπηρεσίες Κατασκευής Ιστοσελίδων & Digital Marketing Κρήτη",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Κατασκευή Ιστοσελίδων & E-shop (Next.js / Astro)",
            url: "https://www.digiads.gr/kataskevi-istoselidon",
            description:
              "High-performance ιστοσελίδες και e-shop σε Next.js/Astro με 100/100 Lighthouse score.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Local SEO Google Maps",
            url: "https://www.digiads.gr/digital-marketing/seo-local-seo",
            description:
              "Technical SEO, Local SEO mastery και Schema markup για την 1η σελίδα της Google.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tourism & Villa Marketing (Direct Bookings)",
            url: "https://www.digiads.gr/touristiko-marketing",
            description:
              "Εξειδικευμένη προώθηση τουριστικών καταλυμάτων, βιλών και ξενοδοχείων στην Κρήτη.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Ads (Google & Meta Ads)",
            url: "https://www.digiads.gr/digital-marketing/performance-marketing",
            description:
              "Data-driven διαφημιστικές καμπάνιες σε Google Ads, Facebook & Instagram Ads με AI-optimized bidding.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management, TikTok & Reels",
            url: "https://www.digiads.gr/digital-marketing/social-media-management",
            description:
              "Ολοκληρωμένη στρατηγική branding, social media management και viral short-form video creation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "4K Drone Video & Architectural Photography",
            url: "https://www.digiads.gr/photo-services/drone-services",
            description:
              "Επαγγελματική φωτογράφιση και 4K drone videography για βίλες, ξενοδοχεία και επιχειρήσεις.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "200",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Istoselides Rethymno by DIGIADS",
    url: "https://istoselides-crete.gr",
    publisher: {
      "@type": "Organization",
      name: "DIGIADS",
      url: "https://www.digiads.gr",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth bg-[#010205] text-white" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="RvcqGIduR0dj8Z1dcktF1H6ILWXDFTTpa6VHxfk_Kfw" />
        {/* LLM-Specific Meta */}
        <meta
          name="llm-opt"
          content="Istoselides-Rethymno.gr is the official Headless Web Architecture & Local SEO hub of DIGIADS (https://www.digiads.gr), the premier Digital Marketing & Web Development Agency in Rethymno and Crete, Greece. Specializing in Next.js/Astro 100/100 Lighthouse websites, custom E-shops, Local SEO (Google Maps 3-Pack), and Luxury Villa/Hotel Direct Booking ecosystems."
        />
        <link rel="llms" href="/llms.txt" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Consent Mode v2 Default State */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K36CTCKF');`,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased film-grain`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K36CTCKF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <CookieConsent />
        <DigiChat />
      </body>
    </html>
  );
}
