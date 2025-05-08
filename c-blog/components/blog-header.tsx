"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-black text-[#0066FF]">
                c<span className="text-black">K</span>ash
              </span>
            </Link>
          </div>

          {/* <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <a
                className="text-[#0066FF] hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
                target="_blank"
                href="https://t.me/ckashapp"
                rel="noreferrer"
              >
                Support
              </a>
              <Link className="text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium" href="/">
                Blog
              </Link>
              <a
                className="text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
                target="_blank"
                href="https://t.me/ckashapp"
                rel="noreferrer"
              >
                Community
              </a>
            </div>
          </div> */}

          {/* <div className="hidden sm:flex items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0066FF] text-white px-6 py-4 rounded-sm text-base font-medium hover:bg-[#0052CC] transition-colors flex items-center gap-2">
                Download App
              </button>
            </a>
          </div> */}

          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0066FF] hover:text-[#0052CC] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white py-4 shadow-lg">
          <div className="px-4 space-y-4">
            <a
              className="block text-[#0066FF] hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
              target="_blank"
              href="https://t.me/ckashapp"
              rel="noreferrer"
            >
              Support
            </a>
            <Link className="block text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium" href="/">
              Blog
            </Link>
            <a
              className="block text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
              target="_blank"
              href="https://t.me/ckashapp"
              rel="noreferrer"
            >
              Community
            </a>
            <div className="pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-[#0066FF] text-white px-4 py-3 rounded-sm text-base font-medium hover:bg-[#0052CC] transition-colors flex items-center justify-center gap-2">
                  Download App
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
