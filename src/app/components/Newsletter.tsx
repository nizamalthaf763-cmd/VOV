// components/Newsletter.tsx
'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Here you would integrate with your email/newsletter service
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="bg-indigo-600 py-16 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Newsletter
        </h2>
        <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
          Bring together people who care about a cause. Subscribe to stay updated with our latest programs and events.
        </p>

        {submitted ? (
          <p className="text-lg font-medium">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
              className="w-full sm:w-auto px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
