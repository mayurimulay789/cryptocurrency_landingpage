'use client'

import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Shield, Zap, Lightbulb, Users, Layers, DollarSign } from 'lucide-react'

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Decentralization',
    description: 'Full control for users with no centralized authority or KYC.',
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Security',
    description: 'Advanced anti-fraud measures through blockchain identity verification.',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Innovation',
    description: 'NFT-backed loans, dual investments, and an AI-driven investment engine.',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Accessibility',
    description: 'A simple, user-friendly platform for beginners and experts alike.',
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: 'Scalability',
    description: 'Cross-chain compatibility, allowing users to interact with multiple blockchain ecosystems.',
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: 'Cryptocurrency',
    description: 'Trade and invest in a variety of cryptocurrencies securely and efficiently.',
  },
]

const FeatureCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 5, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      onHoverStart={() => {
        setIsHovered(true)
        controls.start("hover")
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        controls.start("visible")
      }}
      onViewportEnter={() => controls.start("visible")}
      viewport={{ once: true, amount: 0.8 }}
      className="relative flex flex-col items-center justify-center p-6 text-center text-white shadow-2xl overflow-hidden group"
      style={{
        background: 'linear-gradient(to bottom right, #38b2a0, #3b82f6)',
        clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
      }}
    >
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-200">{description}</p>
      <motion.div
        className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20"
        initial={{ scale: 0 }}
        animate={isHovered ? { scale: 1.5 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

export default function Why() {
  return (
    <div className="min-h-screen px-4 py-16 text-white bg-gradient-to-br from-teal-600 to-black sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://img.freepik.com/premium-photo/deep-teal-background-with-subtle-gradient-teal-background-image-teal-blue-green-wallpaper_1020697-728088.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      <div className="relative z-10 mx-auto text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Why <span className="text-teal-400">FinCrypt</span>?
          </h1>
          <p className="text-xl text-gray-300 sm:text-2xl">
            Empowering your financial future through innovative blockchain solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-3 font-bold text-black transition-transform duration-300 bg-teal-400 rounded-full hover:bg-teal-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with FinCrypt
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}