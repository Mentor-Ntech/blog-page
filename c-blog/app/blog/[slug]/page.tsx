// import Link from "next/link"
// import Image from "next/image"
// import { BlogHeader } from "@/components/blog-header"
// import { BlogFooter } from "@/components/blog-footer"
// import { RelatedPosts } from "@/components/related-posts"
// import { blogPosts } from "@/data/blog-posts"
// import { notFound } from "next/navigation"
// import { CommentsSection } from "@/components/comments-section"

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   // Find the blog post with the matching slug
//   const post = blogPosts.find((post) => {
//     const postSlug = post.href.split("/").pop()
//     return postSlug === params.slug
//   })

//   // If post not found, show 404
//   if (!post) {
//     notFound()
//   }

//   // Get related posts (same category or has matching tags)
//   const relatedPosts = blogPosts
//     .filter((p) => p.id !== post.id)
//     .filter((p) => p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
//     .slice(0, 3)

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       <BlogHeader />

//       <main className="pt-24">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 mt-8">
//             <Link href="/" className="hover:text-[#0066FF] transition-colors">
//               Home
//             </Link>
//             <span>/</span>
//             <Link href="/blog" className="hover:text-[#0066FF] transition-colors">
//               Blog
//             </Link>
//             <span>/</span>
//             <span className="text-gray-800">{post.title}</span>
//           </div>

//           {/* Post Header */}
//           <div className="max-w-4xl mx-auto mb-12">
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-sm font-medium text-[#0066FF]">{post.category}</span>
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map((tag, index) => (
//                   <span key={index} className="text-xs text-gray-500">
//                     {index > 0 && "•"} {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
//             <div className="flex items-center text-sm text-gray-500">
//               <span>
//                 {post.date} • {post.readTime}
//               </span>
//             </div>
//           </div>

//           {/* Featured Image */}
//           <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] mb-12 rounded-lg overflow-hidden">
//             <Image
//               src={post.image || "/placeholder.svg?height=500&width=1000"}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Post Content */}
//           <div className="max-w-3xl mx-auto mb-16">
//             <div className="prose prose-lg max-w-none">
//               <p className="text-lg leading-relaxed mb-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
//                 tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
//                 erat.
//               </p>

//               <h2 className="text-2xl font-bold mt-10 mb-4">Understanding the Impact</h2>
//               <p className="mb-6">
//                 Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
//                 posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam
//                 ultricies nisi vel augue.
//               </p>

//               <blockquote className="border-l-4 border-[#0066FF] pl-4 italic my-8">
//                 "Cryptocurrency and blockchain technology are revolutionizing the way we think about finance and
//                 transactions in the digital age."
//               </blockquote>

//               <p className="mb-6">
//                 Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
//                 condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
//               </p>

//               <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
//               <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">
//                   Decentralized finance continues to grow at an unprecedented rate across global markets
//                 </li>
//                 <li className="mb-2">
//                   Regulatory frameworks are evolving to accommodate the changing landscape of digital assets
//                 </li>
//                 <li className="mb-2">
//                   Cross-chain interoperability remains a key challenge for widespread blockchain adoption
//                 </li>
//                 <li className="mb-2">
//                   Institutional investors are increasingly allocating resources to cryptocurrency portfolios
//                 </li>
//               </ul>

//               <p className="mb-6">
//                 Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
//                 tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
//               </p>

//               <h2 className="text-2xl font-bold mt-10 mb-4">Looking Ahead</h2>
//               <p className="mb-6">
//                 Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
//                 sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
//               </p>
//             </div>

//             {/* Tags */}
//             <div className="mt-12 pt-8 border-t border-gray-200">
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Share */}
//             <div className="mt-8">
//               <h3 className="text-lg font-bold mb-4">Share this post</h3>
//               <div className="flex gap-4">
//                 <button className="p-2 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                   </svg>
//                 </button>
//                 <button className="p-2 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                   </svg>
//                 </button>
//                 <button className="p-2 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </button>
//                 <button className="p-2 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Comments Section */}
//             <CommentsSection postId={post.id} />

//             {/* Related Posts */}
//             {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
//           </div>
//         </div>
//       </main>

//       <BlogFooter />
//     </div>
//   )
// }

import Link from "next/link";
import Image from "next/image";
import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";
import { RelatedPosts } from "@/components/related-posts";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import { CommentsSection } from "@/components/comments-section";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const slug = params.slug;

  const post = blogPosts.find((post) => {
    const postSlug = post.href.split("/").pop();
    return postSlug === slug;
  });

  if (!post) {
    notFound(); // 404 page if not found
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <BlogHeader />

      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 mt-8">
            <Link href="/" className="hover:text-[#0066FF] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0066FF] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-800">{post.title}</span>
          </div>

          {/* Post Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-[#0066FF]">
                {post.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-xs text-gray-500">
                    {index > 0 && "•"} {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>
                {post.date} • {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg?height=500&width=1000"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Post Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Share this post</h3>
              <div className="flex gap-4">
                {/* Add your social buttons here */}
              </div>
            </div>
          </div>

          {/* Related Posts and Comments Section */}
          <RelatedPosts posts={relatedPosts} />
          <CommentsSection postId={post.id} />
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
