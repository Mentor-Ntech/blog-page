// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// // Mock data for blog posts
// const blogPosts = [
//   {
//     id: 1,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Crypto",
//     tags: [],
//     title: "3 Crypto Trends Summer 2025",
//     description: "3 Crypto Trends Summer 2025",
//     date: "07 May 2025",
//     readTime: "6 min read",
//     href: "/blog/3-crypto-trends-summer-2025",
//   },
//   {
//     id: 2,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Announcement",
//     tags: ["DeFi"],
//     title: "DeFi Audits",
//     description: "DeFi Audits",
//     date: "01 May 2025",
//     readTime: "1 min read",
//     href: "/blog/defi-audits",
//   },
//   {
//     id: 3,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Interview",
//     tags: [],
//     title: "Celo Africa DAO on  Insights update on cKash",
//     description: "Internal Africa DAO Product",
//     date: "01 May 2025",
//     readTime: "1 min read",
//     href: "/blog/celo-africa-on-the-insights-from-the-frontline",
//   },
//   {
//     id: 4,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Community",
//     tags: ["Celo", "digest", "news", "web3"],
//     title: "Celo Uni – Celo Dev,  and Celo Community",
//     description: "Celo Uni – Celo Dev,  and Celo Community",
//     date: "28 Feb 2025",
//     readTime: "4 min read",
//     href: "/blog/celo-africa-on-insights-from-the-frontline",
//   },
//   {
//     id: 5,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Announcement",
//     tags: [],
//     title: "cKash's Legal Opinion: Ensuring Compliance and Innovation in Web3 Finance",
//     description: "cKash's Legal Opinion: Ensuring Compliance and Innovation in Web3 Finance",
//     date: "26 Feb 2025",
//     readTime: "3 min read",
//     href: "/blog/crossfis-legal-opinion-ensuring-compliance-and-innovation-in-web3-finance",
//   },
//   {
//     id: 6,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Announcement",
//     tags: ["ckash, cUsd", "cZAR", "USDT", "Celo"],
//     title: "lauched 🚀",
//     description: "launched 🚀",
//     date: "29 Apr 2025",
//     readTime: "3 min read",
//     href: "/blog/cKash launch",
//   },
//   {
//     id: 7,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Announcement",
//     tags: ["ckash, cUsd", "cZAR", "USDT", "Celo"],
//     title: "lauched 🚀",
//     description: "launched 🚀",
//     date: "29 Apr 2025",
//     readTime: "3 min read",
//     href: "/blog/cKash launch",
//   },
//   {
//     id: 8,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "Announcement",
//     tags: ["ckash, cUsd", "cZAR", "USDT", "Celo"],
//     title: "lauched 🚀",
//     description: "launched 🚀",
//     date: "29 Apr 2025",
//     readTime: "3 min read",
//     href: "/blog/cKash launch",
//   },
//   {
//     id: 9,
//     image: "/placeholder.svg?height=200&width=400",
//     category: "cKash Finance",
//     tags: [],
//     title: "3 Advantages of local stable coin",
//     description: "",
//     date: "19 Feb 2025",
//     readTime: "5 min read",
//     href: "/blog/3-advantages-of-dapps-on-the-crossfi-chain",
//   },
// ]

// // Categories for filter
// const categories = [
//   "All",
//   "Announcement",
//   "Community",
//   "DeFi",
//   "Event",
//   "Finance",
//   "Interview",
//   "Partnership",
//   "Uncategorized",
// ]

// export function BlogGrid() {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [currentPage, setCurrentPage] = useState(1)
//   const postsPerPage = 9

//   // Filter posts by category
//   const filteredPosts =
//     activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

//   // Calculate pagination
//   const indexOfLastPost = currentPage * postsPerPage
//   const indexOfFirstPost = indexOfLastPost - postsPerPage
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

//   const handleCategoryChange = (category: string) => {
//     setActiveCategory(category)
//     setCurrentPage(1)
//   }

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber)
//   }

//   return (
//     <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
//       <div className="container mx-auto">
//         {/* Category filter */}
//         <div className="mb-8 overflow-x-auto">
//           <div className="flex space-x-2 pb-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 text-sm whitespace-nowrap rounded-md transition-colors ${
//                   activeCategory === category
//                     ? "bg-[#0066FF] text-white"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//                 onClick={() => handleCategoryChange(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog posts grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentPosts.map((post) => (
//             <Link
//               key={post.id}
//               href={post.href}
//               className="group flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white shadow-sm"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="p-4 flex flex-col flex-grow">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-xs font-medium text-[#0066FF]">{post.category}</span>
//                   <div className="flex flex-wrap gap-1">
//                     {post.tags.map((tag, index) => (
//                       <span key={index} className="text-xs text-gray-500">
//                         {index > 0 && "•"} {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#0066FF] transition-colors">
//                   {post.title}
//                 </h3>

//                 {post.description && <p className="text-sm text-gray-600 mb-3 flex-grow">{post.description}</p>}

//                 <div className="flex items-center text-xs text-gray-500 mt-auto">
//                   <span>
//                     {post.date} • {post.readTime}
//                   </span>
//                   <div className="ml-auto  bg-gray-300 group-hover:bg-[#0066FF] transition-colors cursor: pointer text-[#000] rounded-full">
//                     <button>read more</button>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center mt-12 space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`p-2 rounded-md ${
//                 currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>

//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`w-10 h-10 rounded-md ${
//                   currentPage === index + 1 ? "bg-[#0066FF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`p-2 rounded-md ${
//                 currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
// Categories for filter
const categories = [
 "All",
  "Announcement",
  "Community",
  "DeFi",
  "Event",
  "Finance",
  "Interview",
  "Partnership",
  "Uncategorized",
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  // Filter posts by category
  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Category filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded-md transition-colors ${
                  activeCategory === category
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
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
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500">
                        {index > 0 && "•"} {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#0066FF] transition-colors">
                  {post.title}
                </h3>

                {post.description && <p className="text-sm text-gray-600 mb-3 flex-grow">{post.description}</p>}

                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                  <span>
                    {post.date} • {post.readTime}
                  </span>
                  <div className="px-3 py-1 bg-gray-100 text-[#0066FF] rounded-full hover:bg-[#0066FF] hover:text-white transition-colors">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 rounded-md ${
                  currentPage === index + 1 ? "bg-[#0066FF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

