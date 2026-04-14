import { fetchGraphQL } from '@/lib/wp-graphql';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

async function getPosts() {
  const query = `
    query GetLatestPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          date
          excerpt
        }
      }
    }
  `;
  const data = await fetchGraphQL(query);
  return data?.posts?.nodes || [];
}

export default async function BlogArchive() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#030509] pt-32">
      <div className="max-w-7xl mx-auto px-5 mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-white font-montserrat mb-6 tracking-tighter">
          <span className="text-[#00d9ff]">Knowledge</span> Hub
        </h1>
        <p className="text-slate-400 text-lg mb-16">Data-driven articles on Digital Marketing & Growth. Τροφοδοτούμενο live από το WordPress API.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link 
              key={post.slug} 
              href={`/arthra/${post.slug}`}
              className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-[#E91E63] hover:-translate-y-2 transition-all flex flex-col group"
            >
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E91E63] transition-colors leading-snug" dangerouslySetInnerHTML={{__html: post.title}} />
              <div className="text-sm text-slate-500 mb-4">{new Date(post.date).toLocaleDateString("el-GR")}</div>
              
              {/* Note: Excerpts might contain <p> tags from WP, so we render via HTML */}
              <div className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow" dangerouslySetInnerHTML={{__html: post.excerpt}} />
              
              <div className="text-sm font-bold text-[#E91E63] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                 Διαβαστε Περισσοτερα &gt;
              </div>
            </Link>
          ))}
        </div>
        
        {posts.length === 0 && (
           <p className="text-slate-500 bg-white/5 p-6 rounded-xl border border-white/10 text-center">
             Δεν βρέθηκαν άρθρα. Επιβεβαιώστε ότι το WPGraphQL Plugin είναι ενεργό στο backend.
           </p>
        )}
      </div>
      <Footer />
    </main>
  );
}
