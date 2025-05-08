import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react"

export function BlogFooter() {
  return (
    <footer className="bg-[#0A1E8F] text-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 justify-between">
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">cKash</h2>
            <p className="text-white/70 text-sm mb-6 sm:mb-8">
              Unlock seamless payments with a secure,
              <br className="hidden sm:block" /> user-friendly experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="flex justify-center items-center gap-2 sm:gap-3 bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#0052CC] transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs">Download on</div>
                    <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-1 lg:ml-16">
            <h3 className="text-base font-semibold mb-3 sm:mb-4">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/#features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/#newsletter">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/#faqs">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-base font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/70 hover:text-white transition-colors" href="/">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
            <Link className="text-white/70 hover:text-white transition-colors" href="/terms">
              Terms of use
            </Link>
            <Link className="text-white/70 hover:text-white transition-colors" href="/privacy">
              Privacy policy
            </Link>
            <Link className="text-white/70 hover:text-white transition-colors" href="/account">
              Account deactivation
            </Link>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
              href="https://twitter.com"
              rel="noreferrer"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
              href="https://facebook.com"
              rel="noreferrer"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
              href="https://linkedin.com"
              rel="noreferrer"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
              href="https://instagram.com"
              rel="noreferrer"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
