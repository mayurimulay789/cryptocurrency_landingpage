import { useState } from 'react'
import { ArrowRight, Bitcoin } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-teal-400 to-black">
      <div 
        className="relative flex flex-col items-center w-full max-w-4xl p-6 overflow-hidden transform bg-white shadow-2xl rounded-2xl md:p-8 md:flex-row"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519032173976-a66002a2f8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-teal-900 to-transparent"></div>
        <div className="relative z-10 w-full pr-0 md:w-3/5 md:pr-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Stay on top of crypto. All the time, any time.
          </h2>
          <p className="mb-6 text-gray-200">
            Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings, and more information from CoinMarketCap.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-full bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center transform ${
                isSubmitting || isSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                'Subscribing...'
              ) : isSubmitted ? (
                'Subscribed!'
              ) : (
                <>
                  Subscribe <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="relative z-10 w-full mt-8 md:w-2/5 md:mt-0">
          <div 
            className="relative h-64 overflow-hidden rounded-lg md:h-full"
            style={{
              backgroundImage: "url('https://icomax.springsoftit.com/asset/frontend/default/images/banner/652f8961c1b661697614177.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          >
          </div>
        </div>
      </div>
    </div>
  )
}
