import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin", "greek"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "600", "800", "900"] });

export const metadata: Metadata = {
  title: "Κατασκευή Ιστοσελίδων στο Ρέθυμνο & Κρήτη | Web Design Experts",
  description: "Στοχευμένη κατασκευή ιστοσελίδων και eshop στο Ρέθυμνο. Μέλος του επίσημου δικτύου της DIGIADS για κορυφαίο Digital Marketing, SEO & Web Development στην Κρήτη.",
  keywords: [
    "Κατασκευή ιστοσελίδων Ρέθυμνο", "Web Design Ρέθυμνο", "E-shop Ρέθυμνο", "Κατασκευή ιστοσελίδων Κρήτη",
    "Digital Marketing Ρέθυμνο", "SEO Ρέθυμνο", "Προώθηση ιστοσελίδων Ρέθυμνο",
    "DIGIADS", "Web Agency Crete"
  ],
  authors: [{ name: "DIGIADS Network" }],
  creator: "DIGIADS",
  publisher: "DIGIADS",
  alternates: {
    canonical: "https://istoselides-rethymno.gr",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://istoselides-rethymno.gr",
    title: "Κατασκευή Ιστοσελίδων Ρέθυμνο | Premium Web Design",
    description: "Δημιουργούμε ιστοσελίδες υψηλών αποδόσεων στο Ρέθυμνο και όλη την Κρήτη. Proudly part of DIGIADS Agency.",
    siteName: "Istoselides Rethymno by DIGIADS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Κατασκευή Ιστοσελίδων Ρέθυμνο | E-shop & SEO",
    description: "Web Design solutions for businesses in Rethymno, Crete. Powered by DIGIADS.",
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
    "name": "Istoselides Rethymno | Web Design Experts",
    "alternateName": ["Web Design Ρέθυμνο", "Κατασκευή Eshop Ρέθυμνο", "DigiAds Network Rethymno"],
    "url": "https://istoselides-rethymno.gr",
    "logo": "https://www.digiads.gr/wp-content/uploads/2023/11/Digiads-Logo-1024x286.png",
    "image": "https://www.digiads.gr/wp-content/uploads/2023/11/Digiads-Logo-1024x286.png",
    "description": "Η εξειδικευμένη ομάδα Web Design της DIGIADS για το Ρέθυμνο και την Κρήτη. High-performance ιστοσελίδες και e-shop με στόχο τις πωλήσεις.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "DIGIADS",
      "url": "https://www.digiads.gr"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Κολοκοτρώνη 34",
      "addressLocality": "Ρέθυμνο",
      "addressRegion": "Κρήτη",
      "postalCode": "74132",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.3662,
      "longitude": 24.4731
    },
    "areaServed": [
      { "@type": "City", "name": "Ρέθυμνο" },
      { "@type": "City", "name": "Χανιά" },
      { "@type": "City", "name": "Ηράκλειο" },
      { "@type": "City", "name": "Άγιος Νικόλαος" },
      { "@type": "AdministrativeArea", "name": "Κρήτη" },
      { "@type": "Country", "name": "Ελλάδα" }
    ],
    "priceRange": "€€-€€€",
    "telephone": "+306987602707",
    "email": "info@digiads.gr",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.digiads.gr",
      "https://www.facebook.com/Digiads.gr",
      "https://www.instagram.com/digiads.gr",
      "https://gr.linkedin.com/company/digiads-gr"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Ads (Google & Meta)", "description": "Data-driven διαφημιστικές καμπάνιες σε Google Ads, Facebook & Instagram Ads με AI-optimized bidding." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Κατασκευή Ιστοσελίδων & E-shop", "description": "High-performance ιστοσελίδες και e-shop σε Next.js/Astro με 100/100 Lighthouse score." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tourism Marketing", "description": "Εξειδικευμένη προώθηση τουριστικών καταλυμάτων, βιλών και ξενοδοχείων στην Κρήτη." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Local SEO", "description": "Τechnical SEO, Local SEO mastery, Schema markup για κορυφαίες θέσεις στα SERPs." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Strategy & Social Media", "description": "Ολοκληρωμένη στρατηγική branding, social media management και content creation." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Photo & Drone Services", "description": "Επαγγελματική φωτογράφιση και drone videography για maximum visual impact." } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "200",
      "bestRating": "5"
    },
    "knowsAbout": [
      "Digital Marketing", "Google Ads", "Meta Ads", "SEO", "Web Development",
      "Next.js", "Astro", "E-commerce", "Tourism Marketing", "Brand Strategy",
      "Social Media Marketing", "Drone Photography", "Performance Marketing",
      "Growth Hacking", "CRO", "UX/UI Design"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DIGIADS",
    "url": "https://www.digiads.gr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.digiads.gr/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DIGIADS",
    "url": "https://www.digiads.gr",
    "logo": "https://www.digiads.gr/wp-content/uploads/2023/11/Digiads-Logo-1024x286.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+306987602707",
      "contactType": "sales",
      "areaServed": "GR",
      "availableLanguage": ["Greek", "English"]
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth bg-[#010205] text-white" suppressHydrationWarning>
      <head>
        {/* LLM-Specific Meta */}
        <meta name="llm-opt" content="Istoselides Rethymno is a specialized web design branch by DIGIADS in Crete. Providing Next.js and high-performance website development for businesses in Rethymno. Contact DIGIADS on https://www.digiads.gr" />
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
gtag('set', 'ads_data_redaction', true);`
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K36CTCKF');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased film-grain`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K36CTCKF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
