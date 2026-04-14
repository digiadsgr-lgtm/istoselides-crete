import { fetchGraphQL } from '@/lib/wp-graphql';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

async function getPost(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        date
      }
    }
  `;
  const decodedSlug = decodeURIComponent(slug);
  const data = await fetchGraphQL(query, { id: decodedSlug, idType: "SLUG" });
  return data?.post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPost(decodedSlug);
  
  // Create a clean description from the content for SEO
  const cleanExcerpt = post?.content ? post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...' : "";
  
  return {
    title: post?.title ? `${post.title} | DIGIADS` : "Άρθρο | DIGIADS",
    description: cleanExcerpt,
  };
}

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#030509] flex flex-col items-center justify-center text-white">
         <h1 className="text-4xl font-black text-slate-500 mb-4">404</h1>
         <p>Το άρθρο δεν βρέθηκε.</p>
         <Link href="/arthra" className="mt-8 text-[#00d9ff]">Επιστροφή</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030509] pt-32">
      <article className="max-w-4xl mx-auto px-5 mb-24">
        <Link href="/arthra" className="inline-flex items-center gap-2 text-[#00d9ff] hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-bold">
           <ArrowLeft size={16} /> Πίσω στα Άρθρα
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-white font-montserrat mb-8 leading-tight" dangerouslySetInnerHTML={{__html: post.title}} />
        <div className="text-slate-500 border-b border-white/10 pb-8 mb-12 flex justify-between items-center">
          <span>Δημοσιεύτηκε: {new Date(post.date).toLocaleDateString("el-GR")}</span>
        </div>
        
        {/* Raw HTML from WP Content injected into a highly styled parent container */}
        <div 
          className="wp-content-engine text-lg text-slate-300 leading-relaxed space-y-6 
                    [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-6
                    [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4
                    [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                    [&>p>a]:text-[#E91E63] [&>p>a]:underline [&>p>a:hover]:text-[#00d9ff]
                    [&>img]:rounded-2xl [&>img]:my-10 [&>img]:shadow-2xl"
          dangerouslySetInnerHTML={{__html: post.content}} 
        />
      </article>
      <Footer />
    </main>
  );
}
