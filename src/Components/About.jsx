import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Bitcoin } from 'lucide-react';
import Why from './Why';
import Tokenomics from './Tokenomics';
// import Defi from './Defi';
import { MapPin } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const rotatingEffect = {
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: 'linear' },
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="relative p-8 overflow-hidden text-white bg-gradient-to-b from-teal-800 via-gray-900 to-black">
        {/* Uncomment this section if you want to include a Canvas background */}
        {/* <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
          <OrbitControls enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas> */}

        <div className="relative z-10 max-w-6xl mx-auto">
          <header className="mb-12">
            <motion.h1 
              {...fadeInUp}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-green-300"
            >
              About FinCrypt
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center text-green-200"
            >
              Empowering Your Financial Journey
            </motion.p>
          </header>

          
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-teal-400 to-green-300">
                Transforming the Future of Finance
              </h2>
              <motion.p 
                {...slideIn}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-6 leading-relaxed text-gray-300"
              >
                At FinCrypt, we believe that the future of finance lies in decentralization. As a pioneering force in the crypto finance space, we are committed to creating an innovative platform that empowers users by providing them with the tools they need to take control of their financial destiny. 
              </motion.p>
              <motion.p 
                {...slideIn}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6 leading-relaxed text-gray-300"
              >
                Our journey began with a vision to transform how individuals interact with their digital assets—making it simpler, safer, and more rewarding. With a team of blockchain enthusiasts and financial experts, we have meticulously designed a platform that encompasses a diverse range of functionalities, including staking, borrowing, lending, and unique investment opportunities.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <div className="relative w-full overflow-hidden bg-teal-800 rounded-lg shadow-lg h-80">
                <motion.div 
                  {...rotatingEffect}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Bitcoin size={200} className="text-green-300 opacity-20" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <img 
                    src="https://icomax.springsoftit.com/asset/frontend/default/images/blog/652fd02deb4b61697632301.jpg" 
                    alt="FinCrypt Theme Illustration" 
                    className="w-full h-full object-fit"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-300">
              Ready to take control of your finances?
            </h3>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }} 
              whileTap={{ scale: 0.9 }} 
              className="px-8 py-3 mb-4 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-teal-600 hover:shadow-xl"
            >
              Join Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      <Why />
      <Tokenomics />
    </>
  );
}
