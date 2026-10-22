import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Clock, Sparkles, BookOpen, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Άρθρα & Οδηγοί Web Design, SEO & Digital Marketing Κρήτη | Istoselides Rethymno by DIGIADS",
  description:
    "Εξειδικευμένα άρθρα, μελέτες περίπτωσης και οδηγοί για Κατασκευή Ιστοσελίδων, E-shop, Local SEO, Direct Bookings Ξενοδοχείων και Google/Meta Ads στο Ρέθυμνο και την Κρήτη.",
  alternates: {
    canonical: "https://istoselides-crete.gr/arthra",
  },
  openGraph: {
    title: "Knowledge Hub — Άρθρα Web Design, SEO & Digital Marketing | DIGIADS Network",
    description:
      "Πρακτικοί οδηγοί για επιχειρήσεις, ξενοδοχεία, βίλες και e-shop στην Κρήτη από την ομάδα της DIGIADS.",
    url: "https://istoselides-crete.gr/arthra",
    type: "website",
  },
};

const digiadsPillarHubs = [
  {
    title: "Κατασκευή Ιστοσελίδων & E-shop",
    url: "https://www.digiads.gr/kataskevi-istoselidon",
    tag: "Web Architecture",
  },
  {
    title: "Digital Marketing στο Ρέθυμνο",
    url: "https://www.digiads.gr/digital-marketing-rethymno",
    tag: "Local Growth",
  },
  {
    title: "Τουριστικό Marketing & Βίλες",
    url: "https://www.digiads.gr/touristiko-marketing",
    tag: "Hospitality",
  },
  {
    title: "SEO & Google Maps 3-Pack",
    url: "https://www.digiads.gr/digital-marketing/seo-local-seo",
    tag: "Organic #1",
  },
  {
    title: "Google Ads & Meta Ads ROI",
    url: "https://www.digiads.gr/digital-marketing/performance-marketing",
    tag: "Performance",
  },
  {
    title: "Κεντρικό Blog της DIGIADS",
    url: "https://www.digiads.gr/blog",
    tag: "25+ Μελέτες",
  },
];

export default function BlogArchive() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#00d9ff]/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#FFBF00]/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-28 relative z-10">
        {/* Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00d9ff]/30 bg-[#00d9ff]/5 text-[#00d9ff] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <Sparkles size={14} />
            <span>DIGIADS Knowledge Hub · Κρήτη</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-montserrat mb-6 tracking-tight leading-[1.05]">
            Στρατηγικοί Οδηγοί{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-white to-[#FFBF00]">
              Web Design, SEO &amp; Growth.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Αναλυτικές μελέτες, οδηγοί τιμών και τεχνικά playbooks για επιχειρήσεις, ξενοδοχεία, βίλες και e-shops σε{" "}
            <strong className="text-white font-medium">Ρέθυμνο, Χανιά, Ηράκλειο και Λασίθι</strong> — με την υπογραφή της{" "}
            <a
              href="https://www.digiads.gr"
              target="_blank"
              rel="noopener"
              className="text-[#00d9ff] hover:text-[#FFBF00] underline underline-offset-4 font-semibold transition-colors"
            >
              DIGIADS Digital Marketing Agency
            </a>
            .
          </p>
        </div>

        {/* Featured Article Hero Card */}
        {featuredArticle && (
          <div className="mb-20">
            <Link
              href={`/arthra/${featuredArticle.slug}`}
              className="group relative grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#060B19] to-[#03050B] border border-white/10 hover:border-[#00d9ff]/50 transition-all duration-500 shadow-[0_20px_70px_rgba(0,0,0,0.6)]"
            >
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] overflow-hidden bg-[#050814]">
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.heroAlt}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03050B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#03050B]" />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#FFBF00]/40 text-[#FFBF00] text-xs font-mono uppercase tracking-widest">
                  Featured Pillar Guide
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#00d9ff] uppercase tracking-wider mb-4">
                  <span>{featuredArticle.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Clock size={13} /> {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-montserrat leading-tight mb-5 group-hover:text-[#00d9ff] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-400 text-base font-light leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div className="text-xs text-slate-400">
                    Γράφει ο <strong className="text-white">{featuredArticle.author.name}</strong>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00d9ff] group-hover:translate-x-1 transition-transform">
                    Ανάγνωση Οδηγού <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {remainingArticles.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-[#050814]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#00d9ff]/50 hover:-translate-y-1.5 transition-all duration-500 flex flex-col shadow-xl"
            >
              <Link href={`/arthra/${post.slug}`} className="relative h-56 w-full overflow-hidden block bg-[#080D1A]">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#00d9ff] uppercase tracking-wider">
                  {post.category}
                </span>
              </Link>

              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mb-3">
                  <span>{new Date(post.date).toLocaleDateString("el-GR")}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <Link href={`/arthra/${post.slug}`}>
                  <h2 className="text-xl font-bold text-white font-montserrat mb-3 group-hover:text-[#00d9ff] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Contextual DIGIADS Reference Pill */}
                {post.digiadsLinks?.[0] && (
                  <div className="mb-5 pt-4 border-t border-white/5">
                    <a
                      href={post.digiadsLinks[0].url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FFBF00]/90 hover:text-[#FFBF00] transition-colors"
                    >
                      <ExternalLink size={11} />
                      <span className="truncate">{post.digiadsLinks[0].label}</span>
                    </a>
                  </div>
                )}

                <Link
                  href={`/arthra/${post.slug}`}
                  className="inline-flex items-center justify-between text-xs font-mono font-bold text-[#00d9ff] uppercase tracking-widest group-hover:text-white transition-colors pt-2"
                >
                  <span>Διαβάστε τον Οδηγό</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* DIGIADS Central Knowledge Ecosystem Hub (Rich Contextual Backlinks Block) */}
        <section className="rounded-3xl bg-gradient-to-br from-[#070C1E] via-[#050814] to-[#0A1026] border border-[#00d9ff]/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#FFBF00]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFBF00] mb-3">
                  <BookOpen size={14} />
                  <span>Επίσημο Δίκτυο DIGIADS.GR</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white font-montserrat tracking-tight">
                  Εξερευνήστε τους Κεντρικούς Κόμβους της DIGIADS
                </h2>
              </div>
              <a
                href="https://www.digiads.gr/blog"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFBF00] text-black font-bold text-xs font-mono uppercase tracking-widest hover:bg-white transition-colors self-start md:self-auto"
              >
                Όλα τα Άρθρα στο DigiAds.gr <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {digiadsPillarHubs.map((hub) => (
                <a
                  key={hub.url}
                  href={hub.url}
                  target="_blank"
                  rel="noopener"
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFBF00]/50 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00d9ff] block mb-1">
                      {hub.tag}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#FFBF00] transition-colors">
                      {hub.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:text-[#FFBF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
