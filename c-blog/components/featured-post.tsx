import Image from "next/image"
import Link from "next/link"

interface FeaturedPostProps {
  image: string
  category: string
  title: string
  description: string
  date: string
  readTime: string
  href: string
}

export function FeaturedPost({ image, category, title, description, date, readTime, href }: FeaturedPostProps) {
  return (
    <Link href={href} className="block max-w-5xl mx-auto group">
      <div className="grid md:grid-cols-[1fr,1.5fr] gap-6 overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white shadow-sm">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-[#0066FF]">{category}</span>
            <div className="flex gap-2">{/* Tags would go here */}</div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#0066FF] transition-colors text-gray-800">
            {title}
          </h2>

          <p className="text-gray-600 mb-4 flex-grow">{description}</p>

          <div className="flex items-center text-sm text-gray-500">
            <span>
              {date} • {readTime}
            </span>
            <div className="ml-auto h-px w-12 bg-gray-300 group-hover:bg-[#0066FF] transition-colors"></div>
          </div>
        </div>
      </div>
    </Link>
  )
}
