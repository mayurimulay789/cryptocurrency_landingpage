import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Users, Shield, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import { Button, Card } from 'antd';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Banner() {
  const [activeCard, setActiveCard] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const cardContent = {
    vision: "Our vision at FinCrypt is to create a future where decentralized finance is accessible to everyone, everywhere. We aspire to build a global ecosystem that transcends geographical and financial boundaries, allowing individuals to manage and grow their wealth on their own terms.",
    mission: "FinCrypt's mission is to democratize access to decentralized finance by providing a user-friendly platform that simplifies complex financial processes. We are dedicated to breaking down the barriers that have historically kept individuals from fully participating in the financial ecosystem.",
    innovation: "We leverage cutting-edge blockchain solutions and AI-driven algorithms to provide seamless, efficient, and intelligent financial services. Our platform adapts to user behavior, offering personalized recommendations and insights.",
    security: "We employ state-of-the-art security measures, including multi-signature wallets, regular security audits, and advanced encryption techniques. Our decentralized architecture ensures that you always remain in control of your assets.",
    growth: "Access a wide range of DeFi products designed to maximize your financial potential. From yield farming and liquidity mining to decentralized lending and borrowing, we offer diverse opportunities for wealth creation and preservation."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 to-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          backgroundSize: ["100% 100%", "200% 200%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.section
          className="text-center mb-16"
          initial="initial"
          animate={controls}
          variants={staggerChildren}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300"
            variants={fadeInUp}
          >
            Welcome to FinCrypt
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Pioneering the future of decentralized finance, empowering you to take control of your financial destiny.
          </motion.p>
          <motion.div variants={fadeInUp} animate={floatingAnimation}>
            <Button type="primary" className="text-lg px-8 py-3 rounded-full">
              Join Our Community <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          animate={controls}
        >
          {['vision', 'mission'].map((type) => (
            <motion.div key={type} variants={fadeInUp}>
              <Card
                className="bg-gradient-to-br from-teal-700 to-teal-900 border-transparent hover:border-teal-600 transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => setActiveCard(activeCard === type ? null : type)}
              >
                <Card.Meta
                  title={
                    <div className="flex items-center text-2xl text-teal-300">
                      {type === 'vision' ? <Users className="mr-2" /> : <Shield className="mr-2" />}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                  }
                />
                <Card.Content>
                  <p className={`text-gray-200 ${activeCard === type ? '' : 'line-clamp-3'} group-hover:line-clamp-none transition-all duration-300`}>
                    {cardContent[type]}
                  </p>
                  <motion.div
                    className="mt-4 text-teal-300"
                    animate={{ rotate: activeCard === type ? 180 : 0 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </Card.Content>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="mb-16"
          variants={staggerChildren}
          initial="initial"
          animate={controls}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300"
            variants={fadeInUp}
          >
            Why Choose FinCrypt?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['innovation', 'security', 'growth'].map((feature, index) => (
              <motion.div
                key={feature}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-teal-700 to-teal-900 border-transparent hover:border-teal-600 transition-all duration-300 h-full">
                  <Card.Meta
                    title={
                      <div className="flex items-center text-xl text-teal-300">
                        {index === 0 ? <Zap className="mr-2" /> :
                          index === 1 ? <Shield className="mr-2" /> :
                            <TrendingUp className="mr-2" />}
                        {feature.charAt(0).toUpperCase() + feature.slice(1)}
                      </div>
                    }
                  />
                  <Card.Content>
                    <p className="text-gray-200">{cardContent[feature]}</p>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          variants={staggerChildren}
          initial="initial"
          animate={controls}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300"
            variants={fadeInUp}
          >
            Join the FinCrypt Revolution
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Experience the future of decentralized finance and take control of your financial future.
          </motion.p>
          <motion.div variants={fadeInUp} animate={floatingAnimation}>
            <Button type="primary" className="text-lg px-8 py-3 rounded-full">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
