"use client"

import type React from "react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setIsSuccess(true)
      setEmail("")
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="newsletter"
      className="py-20 px-4 sm:px-6 lg:px-8 mb-30 rounded-xs"
      style={{ background: "linear-gradient(rgba(0, 37, 134, 1), rgba(0, 60, 214, 1))" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-white leading-tight mb-4">Receive Newsletter & Updates</h2>
          <p className="text-white/80 text-base mb-8">Stay updated with the latest news and articles</p>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white placeholder-white/50 px-12 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                  name="email"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-[#0066FF] px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors whitespace-nowrap disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {errorMessage && <p className="mt-2 text-sm text-red-300">{errorMessage}</p>}
            {isSuccess && (
              <div className="mt-4 p-3 bg-white/10 rounded-md">
                <p className="text-white">Thank you for subscribing to our newsletter!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
