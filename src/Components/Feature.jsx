import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCoins,
  FaRedo,
  FaBrain,
  FaPiggyBank,
  FaImage,
  FaBolt,
} from 'react-icons/fa';

const features = [
  {
    icon: FaCoins,
    title: 'Staking',
    description: 'Lock your crypto assets for high yields with flexible options.',
    details: [
      'Fixed-term plans (1 month to 1 year)',
      'Flexible staking for liquidity',
      'Higher yields with FinCrypt tokens (FICC)',
    ],
  },
  {
    icon: FaRedo,
    title: 'Crypto Swap',
    description: 'Seamlessly exchange between cryptocurrencies.',
    details: [
      'Low fees and competitive rates',
      'Wide range of supported cryptocurrencies',
      'Instant swaps with no slippage',
    ],
  },
  {
    icon: FaBrain,
    title: 'AI-Driven Strategies',
    description: 'Optimize investments with AI assistance for higher returns.',
    details: [
      'Machine learning algorithms for market analysis',
      'Personalized investment recommendations',
      'Real-time portfolio optimization',
    ],
  },
  {
    icon: FaPiggyBank,
    title: 'Borrowing and Lending',
    description: 'Access crypto-backed loans or earn passive income by lending.',
    details: [
      'Use crypto or NFTs as collateral',
      'Competitive interest rates for borrowers',
      'Earn interest on idle assets as a lender',
    ],
  },
  {
    icon: FaImage,
    title: 'NFT-backed Loans',
    description: 'Use your NFTs as collateral for loans.',
    details: [
      'Unlock the value of your digital assets',
      'Fair valuation of NFTs',
      'Flexible loan terms',
    ],
  },
  {
    icon: FaBolt,
    title: 'Flash Loans',
    description: 'Instant, collateral-free loans for developers and traders.',
    details: [
      'Execute complex arbitrage strategies',
      'No collateral required',
      'Loan and repayment in a single transaction',
    ],
  },
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center p-6 overflow-hidden text-center rounded-lg shadow-lg bg-gradient-to-b from-teal-800 to-black hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-5xl text-white"
      >
        <Icon />
      </motion.div>
      <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mb-2 text-gray-300">{feature.description}</p>
      <motion.ul
        className="list-none p-0"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, height: "auto" },
          hidden: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        {feature.details.map((detail, idx) => (
          <motion.li
            key={idx}
            className="text-gray-200 mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {detail}
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="absolute inset-0 bg-teal-600 rounded-full opacity-20 blur-md"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-teal-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-4xl font-bold text-center text-white"
      >
        Our Cutting-Edge Features
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;