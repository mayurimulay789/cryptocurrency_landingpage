'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'antd'
import { MenuOutlined, CloseOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { HashRouter } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

import Home from './Home'
import About from './About'
import Roadmap from './Roadmap'
import Contact from './Contact'
import FAQ from './FAQ'
import CryptoChatbot from './CryptoChatbot' // Import your chatbot component

const menuItems = [
  { name: 'Home', component: Home },
  { name: 'About', component: About },
  { name: 'Roadmap', component: Roadmap },
  { name: 'Contact', component: Contact },
  { name: 'FAQ', component: FAQ },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-teal-800/80 backdrop-blur-md' : 'bg-teal-800'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-white bg-clip-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Fincrypt
          </motion.div>

          <div className="hidden space-x-4 md:flex">
            <motion.div variants={menuVariants} initial="hidden" animate="visible">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="inline-block">
                  <Link
                    to={item.name.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className={`text-white hover:text-teal-400 transition-colors text-md mx-2 ${
                      activeSection === item.name ? 'text-teal-400' : ''
                    }`}
                    onClick={() => {
                      setActiveSection(item.name)
                      setIsOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="text-white transition-all duration-300 transform bg-gradient-to-r from-teal-600 to-black hover:from-teal-700 hover:to-black hover:scale-105">
              Connect Wallet
            </Button>
          </motion.div>
          <div className="md:hidden">
            <Button
              type="text"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:text-teal-400"
            >
              {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-teal-800/95 backdrop-blur-md"
          >
            <div className="container px-6 py-4 mx-auto">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="py-1"
                >
                  <Link
                    to={item.name.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="block py-2 text-base text-white transition-colors hover:text-teal-400"
                    onClick={() => {
                      setIsOpen(false)
                      setActiveSection(item.name)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const Landing = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <HashRouter>
      <div>
        <Navbar />
        <div className="py-5 mx-auto ">
          {menuItems.map((item) => (
            <section
              key={item.name}
              id={item.name.toLowerCase()}
            >
              <item.component />
            </section>
          ))}
        </div>
        {showScrollToTop && (
          <div className="fixed bottom-9 right-5">
            <Button
              onClick={scrollToTop}
              type="primary"
              shape="circle"
              icon={<ArrowUpOutlined />}
              className="transition-all duration-300 bg-gradient-to-r from-teal-600 to-black hover:from-teal-700 hover:to-black"
            />
          </div>
        )}
        {/* Add the CryptoChatbot component here */}
        <CryptoChatbot />
      </div>
    </HashRouter>
  )
}

export default Landing;
