import Link from "next/link"
import Image from "next/image"

interface Post {
  id: number
  image: string
  category: string
  tags: string[]
  title: string
  description: string
  date: string
  readTime: string
  href: string
}

interface RelatedPostsProps {
  posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white shadow-sm"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-[#0066FF]">{post.category}</span>
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500">
                      {index > 0 && "•"} {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center text-xs text-gray-500 mt-auto">
                <span>
                  {post.date} • {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
