import { articles, getArticleBySlug } from "@/data/articles";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, CheckCircle2, ExternalLink, HelpCircle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getArticleBySlug(decodedSlug);

  if (!post) {
    return {
      title: "Άρθρο δεν βρέθηκε | Istoselides Rethymno by DIGIADS",
    };
  }

  const canonicalUrl = `https://istoselides-crete.gr/arthra/${post.slug}`;

  return {
    title: `${post.title} | DIGIADS Network`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name, url: post.author.url }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "el_GR",
      url: canonicalUrl,
      title: post.title,
      description: post.description,
      siteName: "Istoselides Rethymno by DIGIADS",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: `https://istoselides-crete.gr${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://istoselides-crete.gr${post.heroImage}`],
    },
  };
}

export default async function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getArticleBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== post.slug)
    .slice(0, 3);

  const canonicalUrl = `https://istoselides-crete.gr/arthra/${post.slug}`;

  const articleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `https://istoselides-crete.gr${post.heroImage}`,
      datePublished: post.date,
      dateModified: post.updatedDate,
      author: {
        "@type": "Person",
        name: post.author.name,
        url: post.author.url,
        worksFor: {
          "@type": "Organization",
          name: "DIGIADS",
          url: "https://www.digiads.gr",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "DIGIADS",
        url: "https://www.digiads.gr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.digiads.gr/logo/digiads-logo-navy-gold.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      inLanguage: "el-GR",
      keywords: post.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Αρχική",
          item: "https://istoselides-crete.gr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Άρθρα & Οδηγοί",
          item: "https://istoselides-crete.gr/arthra",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: canonicalUrl,
        },
      ],
    },
    ...(post.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-[#010205] pt-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-6 mb-28 relative z-10">
        {/* Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link
            href="/arthra"
            className="inline-flex items-center gap-2 text-[#00d9ff] hover:text-white transition-colors uppercase tracking-widest text-xs font-mono font-bold"
          >
            <ArrowLeft size={15} /> Πίσω στο Knowledge Hub
          </Link>

          <a
            href="https://www.digiads.gr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFBF00] hover:underline"
          >
            <span>Powered by DIGIADS.GR</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono uppercase tracking-wider">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar size={13} className="text-[#00d9ff]" />
            {new Date(post.date).toLocaleDateString("el-GR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="text-slate-600">•</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Clock size={13} className="text-[#FFBF00]" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-montserrat mb-8 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 border-l-2 border-[#00d9ff] pl-6">
          {post.excerpt}
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-[280px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 mb-14 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-[#050814]">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010205]/70 via-transparent to-transparent" />
        </div>

        {/* Article Body */}
        <div
          className="wp-content-engine text-lg text-slate-300 leading-relaxed space-y-6
            [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-black [&>h2]:font-montserrat [&>h2]:text-white [&>h2]:mt-14 [&>h2]:mb-5 [&>h2]:tracking-tight
            [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:font-montserrat [&>h3]:text-[#00d9ff] [&>h3]:mt-10 [&>h3]:mb-4
            [&>p]:mb-6 [&>p]:font-light [&>p]:leading-relaxed
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:space-y-3
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol]:space-y-3
            [&_li]:text-slate-300 [&_li]:font-light
            [&_strong]:text-white [&_strong]:font-semibold
            [&_a]:text-[#00d9ff] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#FFBF00] [&_a]:transition-colors
            [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/10 [&_code]:text-[#FFBF00] [&_code]:text-sm [&_code]:font-mono"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Contextual DIGIADS Ecosystem Backlinks Box */}
        {post.digiadsLinks && post.digiadsLinks.length > 0 && (
          <div className="my-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#070D22] via-[#050814] to-[#0A1128] border border-[#FFBF00]/30 shadow-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#FFBF00] mb-3">
              <CheckCircle2 size={16} />
              <span>Επίσημοι Κόμβοι &amp; Πηγές DIGIADS.GR</span>
            </div>
            <h2 className="text-2xl font-black text-white font-montserrat mb-3">
              Εμβαθύνετε μέσω του Κεντρικού Οικοσυστήματος της DIGIADS
            </h2>
            <p className="text-slate-400 text-sm font-light mb-6">
              Το <strong>istoselides-crete.gr</strong> αποτελεί εξειδικευμένο βραχίονα Web Development της{" "}
              <a
                href="https://www.digiads.gr"
                target="_blank"
                rel="noopener"
                className="text-[#00d9ff] hover:text-[#FFBF00] underline font-semibold"
              >
                DIGIADS
              </a>
              . Δείτε τις αντίστοιχες κεντρικές σελίδες υπηρεσιών και μελετών:
            </p>
            <div className="grid grid-cols-1 gap-4">
              {post.digiadsLinks.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d9ff]/60 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-base font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-400 font-light mt-1">
                      {item.context}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[#FFBF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section inside Article */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="my-16">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#00d9ff] mb-3">
              <HelpCircle size={16} />
              <span>Συχνές Ερωτήσεις (FAQ)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-montserrat mb-8">
              Απαντήσεις στις Κύριες Ερωτήσεις σας
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#050814] border border-white/10"
                >
                  <h3 className="text-lg font-bold text-white font-montserrat mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author Box */}
        <div className="my-14 p-8 rounded-3xl bg-[#050814] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00d9ff] block mb-1">
              Συντάκτης &amp; Επιμέλεια
            </span>
            <h3 className="text-xl font-bold text-white font-montserrat">
              {post.author.name}
            </h3>
            <p className="text-sm text-slate-400 font-light mt-1">
              {post.author.role} — Εξειδικευμένες λύσεις Headless Web Design, SEO &amp; Performance Marketing στην Κρήτη.
            </p>
          </div>
          <a
            href="https://www.digiads.gr/contact"
            target="_blank"
            rel="noopener"
            className="px-6 py-3.5 rounded-full bg-[#00d9ff] text-black font-bold text-xs font-mono uppercase tracking-widest hover:bg-white transition-colors shrink-0"
          >
            Ζητήστε Προσφορά →
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-[1400px] mx-auto px-6 pb-24">
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-montserrat mb-10">
            Σχετικά Άρθρα &amp; Μελέτες
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/arthra/${rel.slug}`}
                className="group bg-[#050814] border border-white/10 rounded-3xl p-7 hover:border-[#00d9ff]/50 transition-all flex flex-col"
              >
                <span className="text-[11px] font-mono text-[#00d9ff] uppercase tracking-wider mb-3">
                  {rel.category}
                </span>
                <h3 className="text-lg font-bold text-white font-montserrat mb-3 group-hover:text-[#00d9ff] transition-colors">
                  {rel.title}
                </h3>
                <p className="text-slate-400 text-sm font-light line-clamp-2 mb-6 flex-grow">
                  {rel.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFBF00] uppercase tracking-wider">
                  Διαβάστε <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
