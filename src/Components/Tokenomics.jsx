import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaCoins, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const initialTokenAllocation = [
  { name: 'Presale', percentage: 25, amount: 5000000000, color: '#FF6B6B' },
  { name: 'Staking', percentage: 12, amount: 2400000000, color: '#4ECDC4' },
  { name: 'Marketing', percentage: 17, amount: 3400000000, color: '#45B7D1' },
  { name: 'Project Finance', percentage: 9, amount: 1800000000, color: '#F7B801' },
  { name: 'Innovation Inventory', percentage: 12, amount: 2400000000, color: '#9B59B6' },
  { name: 'Liquidity', percentage: 10, amount: 2000000000, color: '#3498DB' },
  { name: 'Reserves', percentage: 15, amount: 3000000000, color: '#1ABC9C' },
];

const getChartData = (data) => ({
  labels: data.map(item => item.name),
  datasets: [
    {
      data: data.map(item => item.percentage),
      backgroundColor: data.map(item => item.color),
      borderColor: data.map(item => item.color),
      borderWidth: 2,
    },
  ],
});

const Tokenomics = () => {
  const [tokenAllocation, setTokenAllocation] = useState(initialTokenAllocation);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tokenAllocation.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [tokenAllocation.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tokenAllocation.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tokenAllocation.length) % tokenAllocation.length);
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-gradient-to-br from-teal-800 to-black sm:px-6 lg:px-8 perspective-1000">
      <div className="mx-auto max-w-7xl">
        <motion.h1 
          className="mb-12 text-5xl font-extrabold text-center text-teal-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FinCrypt Tokenomics
        </motion.h1>

        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div 
              className="p-6 transition-transform duration-500 transform bg-white rounded-lg shadow-2xl bg-opacity-10 backdrop-blur-lg hover:scale-105 hover:rotate-y-6 hover:shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h2 className="mb-6 text-3xl font-bold text-center text-teal-300">Token Allocation</h2>
              <div className="w-full h-96">
                <Doughnut 
                  data={getChartData(tokenAllocation)} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          color: 'white'
                        }
                      }
                    },
                    cutout: '60%'
                  }} 
                />
              </div>
            </motion.div>

            <motion.div 
              className="p-6 transition-transform duration-500 transform bg-white rounded-lg shadow-2xl bg-opacity-10 backdrop-blur-lg hover:scale-105 hover:rotate-y-6 hover:shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h2 className="mb-6 text-3xl font-bold text-center text-teal-300">Token Details</h2>
              <div className="relative h-64">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-lg"
                    style={{ backgroundColor: tokenAllocation[currentSlide].color }} // Set dynamic background color
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCoins className="mb-4 text-6xl text-white" />
                    <h3 className="mb-2 text-2xl font-bold text-white">{tokenAllocation[currentSlide].name}</h3>
                    <p className="mb-2 text-xl text-white">{tokenAllocation[currentSlide].percentage}%</p>
                    <p className="text-lg text-white">{tokenAllocation[currentSlide].amount.toLocaleString()} FICC</p>
                  </motion.div>
                </AnimatePresence>
                <button
                  className="absolute left-0 transform -translate-y-1/2 top-1/2"
                  onClick={prevSlide}
                >
                  <FaChevronLeft className="text-3xl text-white" />
                </button>
                <button
                  className="absolute right-0 transform -translate-y-1/2 top-1/2"
                  onClick={nextSlide}
                >
                  <FaChevronRight className="text-3xl text-white" />
                </button>
              </div>
            </motion.div>
          </div>
        )}

        <motion.div 
          className="flex flex-col items-center justify-center p-6 mt-12 transition-transform duration-500 transform bg-white rounded-lg shadow-2xl bg-opacity-10 backdrop-blur-lg hover:scale-105 hover:rotate-y-6 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-teal-300">Key Features</h2>
          <ul className="space-y-4 list-disc list-inside">
            <motion.li whileHover={{ scale: 1.05 }} className="text-white transition-colors duration-300 hover:text-teal-300">
              FinCrypt Token (FICC): Native utility token with exclusive benefits
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="text-white transition-colors duration-300 hover:text-teal-300">
              Token Burn Mechanism: Periodic buyback and burn to maintain scarcity
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="text-white transition-colors duration-300 hover:text-teal-300">
              Staking Rewards: 12% rewards over 24 months during ICO
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-2xl font-bold text-teal-300">Total Supply: 20,000,000,000 FICC</p>
        </motion.div>
      </div>

      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.2);
          border-left: 8px solid #4ECDC4;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .hover\\:rotate-y-6:hover {
          transform: rotateY(6deg);
        }
      `}</style>
    </div>
  );
};

export default Tokenomics;
