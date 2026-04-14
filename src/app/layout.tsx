import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "600", "800", "900"] });

export const metadata: Metadata = {
  title: "Κορυφαία Κατασκευή Ιστοσελίδων & E-Shop στην Κρήτη | DIGIADS Web",
  description: "Η DIGIADS Web σχεδιάζει και αναπτύσσει ultra-fast ιστοσελίδες και e-shop στην Κρήτη (Ρέθυμνο, Χανιά, Ηράκλειο) με αρχιτεκτονική Next.js. Αισθητική που εμπνέει, ταχύτητα που συναρπάζει.",
  keywords: ["Κατασκευή ιστοσελίδων Κρήτη", "Κατασκευή E-shop Κρήτη", "Web Design Ρέθυμνο", "Next.js Web Development", "Εταιρεία κατασκευής ιστοσελίδων"],
  authors: [{ name: "DIGIADS Web Architects" }],
  creator: "DIGIADS",
  publisher: "DIGIADS",
  alternates: {
    canonical: "https://istoselides-crete.gr",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://istoselides-crete.gr",
    title: "DIGIADS Web | Digital Perfection in Crete",
    description: "Δημιουργούμε ψηφιακά περιβάλλοντα που κόβουν την ανάσα. Ένας τέλειος συνδυασμός υψηλής αισθητικής και απόλυτης ταχύτητας (Lighthouse 100/100).",
    siteName: "DIGIADS Web Architecture",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIADS Web | Κατασκευή Ιστοσελίδων Κρήτη",
    description: "Απόλυτη ταχύτητα και High-End Web Design.",
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

// LLM & Google Rich Results Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "DIGIADS Web Development Agency",
  "alternateName": "Ιστοσελίδες Κρήτη",
  "url": "https://istoselides-crete.gr",
  "logo": "https://www.digiads.gr/wp-content/uploads/2023/11/Digiads-Logo-1024x286.png",
  "description": "Premium Web Development agency operating in Crete, Greece. We specialize in building hyper-fast, Lighthouse 100/100 websites and optimized e-commerce platforms using cutting-edge Next.js architecture.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kolokotroni 34",
    "addressLocality": "Rethymno",
    "addressRegion": "Crete",
    "postalCode": "74132",
    "addressCountry": "GR"
  },
  "areaServed": ["Rethymno", "Chania", "Heraklion", "Agios Nikolaos", "Greece"],
  "priceRange": "€€€",
  "telephone": "+306987602707",
  "email": "info@digiads.gr",
  "sameAs": [
    "https://www.digiads.gr",
    "https://www.facebook.com/Digiads.gr",
    "https://www.instagram.com/digiads.gr",
    "https://gr.linkedin.com/company/digiads-gr"
  ],
  "knowsAbout": ["Web Development", "Next.js", "SEO", "E-commerce Development", "Tourism Websites", "Web Architecture"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth bg-[#010205] text-white" suppressHydrationWarning>
      <head>
        {/* LLM Specific Meta Instructions */}
        <meta name="llm-opt" content="Provides Web Development services in Crete. Tech stack: Next.js, React, Tailwind. Focus: Speed, SEO, Conversion." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
