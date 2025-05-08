import Link from "next/link"
import { BlogHeader } from "@/components/blog-header"
import { FeaturedPost } from "@/components/featured-post"
import { BlogGrid } from "@/components/blog-grid"
import { Newsletter } from "@/components/newsletter"
import { BlogFooter } from "@/components/blog-footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <BlogHeader />

      <main className="pt-24">
        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>cKash Blog</span>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#0066FF]">
            welcome to the cKash blog
          </h1>

          <FeaturedPost
            image="/placeholder.svg?height=400&width=800"
            category="cKash"
            title="Reflecting in 2025: A Local stablecoin that make everyday transactions easier for Local users "
            description="local stablecoin built on @MentoLabs"
            date="29 Apr 2025"
            readTime="4 min read"
            href="/blog/reflecting-on-2025-a-transformative-year-for-Africa DAO"
          />
        </section>

        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8" id="all">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold flex items-center text-[#0066FF]">
                <span className="mr-2">.01</span>
                all articles
              </h2>
            </div>
          </div>
        </section>

        <BlogGrid />

        <Newsletter />
      </main>

      <BlogFooter />
    </div>
  )
}
