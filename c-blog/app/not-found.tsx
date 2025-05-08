import Link from "next/link"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <BlogHeader />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#0066FF] mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="px-6 py-3 bg-[#0066FF] text-white rounded-md hover:bg-[#0052CC] transition-colors">
            Back to Home
          </Link>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
