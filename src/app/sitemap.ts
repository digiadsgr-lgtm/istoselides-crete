import { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/wp-graphql';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://istoselides-rethymno.gr';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/contact',
    '/drone-video-photography',
    '/social-media-management',
    '/digital-marketing/google-meta-ads-management',
    '/tourism-marketing',
    '/web-design',
    '/arthra'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const data = await fetchGraphQL(`
      query GetAllPostsForSitemap {
        posts(first: 100) {
          nodes {
            slug
            modified
          }
        }
      }
    `);

    const posts = data?.posts?.nodes || [];
    const postRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${baseUrl}/arthra/${post.slug}`,
      lastModified: new Date(post.modified || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.error("Failed to generate WP posts for sitemap:", error);
    return staticRoutes;
  }
}
