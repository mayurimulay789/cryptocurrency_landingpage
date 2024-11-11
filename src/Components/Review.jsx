'use client'

import { useState, useEffect } from 'react'
import { Card } from 'antd'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Marry",
    rating: 5,
    text: "I absolutely love Fincrypt.com! The platform is easy to navigate, and my transactions go through without any hassle.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVjTKBdBe6mQQENiTe2JI22fs0KXE4siZGA&s"
  },
  {
    id: 2,
    name: "Dev",
    rating: 5,
    text: "Fincrypt.com has made buying crypto a breeze! The user experience is fantastic, and my transactions are always quick.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnWN5Bgw6sw4QWGPm-ZvEc8WdDMBeOFZCdA&s"
  },
  {
    id: 3,
    name: "William",
    rating: 4,
    text: "With Fincrypt.com, I found the perfect platform for my crypto needs! It's easy to use, and transactions are super fast!",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhl9BwxgMalfZbhl2BtGDBlSPg8CkHaKouw&s"
  },
  {
    id: 4,
    name: "Andrew",
    rating: 5,
    text: "I can't recommend Fincrypt.com enough! The user interface is straightforward, and my transactions are always completed swiftly.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx-P393m_gDZQiwvcHw98LDOfuLjDXqayMA&s"
  }
]

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-12 bg-teal-800 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Join the growing community of users who trust Fincrypt.com
        </h2>
        <p className="mb-8 text-center text-white">
          Excellent 4.5 out of 5 * Trustpilot rating for increased credibility
        </p>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                style={{
                  backgroundImage: `url(${testimonial.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  flex: '0 0 300px', // Flex grow/shrink and base size
                  minWidth: '280px', // Minimum width for cards
                  maxWidth: '350px', // Maximum width for cards
                  height: '300px' // Set a fixed height for cards
                }}
                className="p-6 text-white snap-start"
                bodyStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
