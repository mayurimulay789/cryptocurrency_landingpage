"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Cog, Globe, BarChart2 } from 'lucide-react';
import Feature from './Feature';
import Media from './Media';
import Review from './Review';

const roadmapData = [
  {
    quarter: "Phase 1: Presale & Platform Launch",
    icon: Pencil,
    title: "Presale & Platform Launch",
    items: [
      "Launch presale of FICC tokens",
      "Establish partnerships with major crypto exchanges",
      "Develop core staking and swapping features"
    ]
  },
  {
    quarter: "Phase 2: Feature Rollout",
    icon: Cog,
    title: "Feature Rollout",
    items: [
      "Release borrowing/lending services",
      "Launch AI-driven investment tools and NFT-backed loans",
      "Expand P2P trading capabilities"
    ]
  },
  {
    quarter: "Phase 3: Global Expansion & Cross-Chain Compatibility",
    icon: Globe,
    title: "Global Expansion",
    items: [
      "Launch cross-chain asset compatibility",
      "Develop DeFi insurance and governance mechanisms through DAO",
      "Introduce yield farming and flash loans"
    ]
  },
  {
    quarter: "Phase 4: Full Platform Deployment & Community Growth",
    icon: BarChart2,
    title: "Full Platform Deployment",
    items: [
      "Launch full community rewards program",
      "Expand global user base through strategic marketing",
      "Continuously upgrade platform security and usability"
    ]
  },
];

const RoadmapItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center w-full mb-10 cursor-pointer transition-transform duration-300`}
    >
      <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <h3 className="mb-2 text-xl font-bold text-teal-400 drop-shadow-lg">{data.title}</h3>
        <ul className="list-none">
          {data.items.map((item, idx) => (
            <li key={idx} className="mb-1 text-sm text-gray-300">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center w-2/12">
        <motion.div
          className="flex items-center justify-center w-16 h-16 transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-br from-teal-500 to-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          <data.icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      <div className={`w-5/12 ${isEven ? 'text-left pl-8' : 'text-right pr-8'}`}>
        <span className="text-lg font-semibold text-teal-400">{data.quarter}</span>
      </div>
    </motion.div>
  );
};

export default function CryptoRoadmap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div 
        style={{
          background: 'linear-gradient(135deg, #115e59 0%, #000000 100%)',
          color: '#fff',
          borderRadius: '10px',
          overflow: 'hidden',
          padding: '4rem 0',
        }}
      >
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-5xl font-bold text-center text-white drop-shadow-lg"
            >
              Roadmap
            </motion.h2>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute w-1 h-full transform -translate-x-1/2 bg-teal-400 left-1/2"></div>
              
              {/* Roadmap Items */}
              {roadmapData.map((item, index) => (
                <RoadmapItem key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <Media />
      <Review />
    </>
  );
}
