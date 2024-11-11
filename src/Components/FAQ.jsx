
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
// import Newsletter from './Newsletter'
import Footer from './Footer'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    { question: "What is FinCrypt?", answer: "FinCrypt is a decentralized financial platform designed to empower users with innovative tools to grow, manage, and protect their wealth in the crypto space. With a focus on security, flexibility, and yields, we offer a suite of financial solutions tailored for modern crypto users, all powered by cutting-edge blockchain technology. As we evolve, FinCrypt will continue to unlock new opportunities for decentralized finance, ensuring your place in the digital economy." },
    { question: "What is an ICO, and why is FinCrypt launching one?", answer: "Our project offers innovative solutions in the decentralized blockchain space, backed by a strong team and solid business plan. By investing in our ICO, you gain access to our platform and potential rewards from token appreciation. Our ICO will help fund the development and expansion of FinCrypt's decentralized financial ecosystem, giving investors the chance to join at the ground level." },
    { question: "How do I participate in the FinCrypt ICO?", answer: "To participate in the ICO, you need to create an account on our website, complete the KYC process, and follow the instructions to purchase tokens by transferring supported cryptocurrency during the ICO." },
    { question: "What problem does our platform solve?", answer: "Our platform aims to solve limitless opportunities within the decentralized finance space, including high transaction fees, slow processing times, limited accessibility, security risks, and centralized control. By providing a decentralized, secure, and accessible financial platform, FinCrypt enables users to enjoy fast and low-cost transactions, easy access to crypto services, enhanced security features, decentralized control, and autonomy, along with innovative investment opportunities." },
    { question: "What are the key features of FinCrypt?", answer: "FinCrypt is built to offer users unparalleled flexibility and opportunities within the decentralized finance space. From earning high-yield returns to leveraging digital assets in creative ways, our platform delivers a seamless experience tailored for both new and experienced crypto users. Whether you are looking to maximize your investments or explore new financial avenues, FinCrypt offers innovative solutions that adapt to your needs, all with a focus on security, efficiency, and user empowerment." },
    { question: "How does staking work on FinCrypt?", answer: "During the initial presale phase, FinCrypt offers a 12% staking reward, distributed evenly over a 24-month period. Early participants can lock in this attractive rate, allowing them to benefit from steady returns as the platform grows." },
    { question: "What is blockchain identity verification, and when will it be introduced?", answer: "Blockchain identity verification (DID and VC) is a feature we will introduce once the platform is fully developed. It will enhance security across all services by preventing fraudulent activities and ensuring user authenticity." },
    { question: "How is FinCrypt different from other decentralized finance platforms?", answer: "FinCrypt is not just another DeFi platform; it's a vision for the future of finance. We focus on empowering users with innovative solutions that enhance flexibility and growth potential in the crypto space. Prioritizing a seamless and trustworthy experience, FinCrypt sets itself apart as a platform designed to evolve alongside the needs of the community." },
    { question: "When will FinCrypt tokens be available on exchanges?", answer: "We plan to list FinCrypt on both decentralized and centralized exchanges shortly after the ICO. This will provide liquidity and allow investors to trade tokens freely. More details on the listing will be announced soon." },
    { question: "What is FinCrypt's long-term vision?", answer: "FinCrypt envisions becoming a comprehensive decentralized finance platform. We plan to introduce more innovative features while focusing on security, growth, and community-driven decision-making to create a sustainable financial ecosystem." },
  ]

  return (
    <>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#082c29' }}>
        <div className="container flex-grow px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <motion.h1 
            className="mb-8 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex items-center justify-between w-full p-4 text-left text-white transition-all duration-200 bg-black bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 hover:bg-opacity-70"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="text-sm font-semibold sm:text-base">{item.question}</span>
                  <ChevronDown className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 text-sm text-white bg-gray-700 bg-opacity-50 rounded-b-lg sm:text-base"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}