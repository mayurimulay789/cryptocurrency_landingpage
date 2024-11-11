

import { useState, useEffect } from 'react'
import { PlayCircleOutlined, FileTextOutlined, ClockCircleOutlined, WalletOutlined, DollarOutlined } from '@ant-design/icons'
import { Button, Modal, Card, Progress, Input, Tabs } from 'antd'
import { motion, useAnimation } from 'framer-motion'

const { TabPane } = Tabs

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e, MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  )
}

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 3, minutes: 6, seconds: 26 })
  const [usdtRaised, setUsdtRaised] = useState(1220621.18)
  const [usdtGoal, setUsdtGoal] = useState(2020733)
  const [tokenPrice, setTokenPrice] = useState(0.0208)
  const [purchaseAmount, setPurchaseAmount] = useState(0)
  const [selectedPayment, setSelectedPayment] = useState("eth")

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prevTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  const whitepaperUrl = 'cryptoLanding\public\WhitePaper.pdf'; // Update this path

  const progressPercentage = (usdtRaised / usdtGoal) * 100
  const openWhitepaper = () => {
    window.open(whitepaperUrl, '_blank');
  };
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-gradient-to-br from-teal-900 to-black px-15 ">

      <CustomCursor />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 flex flex-col items-start justify-between px-4 py-12 mx-auto lg:flex-row">
        {/* Left column */}
        <motion.div
          className="space-y-6 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            FinCrypt
            <span className="block mt-2 text-2xl text-teal-400 md:text-3xl">Revolutionizing Decentralized Finance</span>
          </h1>
          <p className="max-w-xl text-lg text-gray-300">
            FinCrypt is a cutting-edge DeFi platform designed to transform how you interact with cryptocurrencies. We offer secure, transparent, and innovative solutions for staking, borrowing, lending, and more, tailored for both novice and experienced crypto enthusiasts.
          </p>
          <p className="max-w-xl text-lg text-gray-300">
          <p className="max-w-xl text-lg text-gray-300">
          FinCrypt aims to provide users with secure, transparent, and profitable solutions for staking, borrowing, lending, and more. Our platform is tailored to both novice and experienced crypto users, emphasizing ease of use and innovation within the DeFi space.
          </p>
          </p>
          <div className="flex flex-wrap gap-4">
          <Button
      type="default"
      className="px-5 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform border border-transparent rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800"
      onClick={openWhitepaper}
    >
      <FileTextOutlined className="mr-3" />
      Whitepaper
    </Button>
            <Button
              type="default"
              onClick={() => setIsVideoOpen(true)}
              className="px-5 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform border border-transparent rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800"
            >
              <PlayCircleOutlined className="py-5 mr-2" />
              How to use FinCrypt
            </Button>
            <Modal
              title="How to use FinCrypt"
              visible={isVideoOpen}
              onCancel={() => setIsVideoOpen(false)}
              footer={null}
              width={800}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="How to use FinCrypt"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Modal>
          </div>
          
        </motion.div>

        {/* Right column - FincryptPurchase */}
        <motion.div
          className="mt-12 lg:w-1/2 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            title={<span className="text-2xl font-bold text-teal-400">Buy FinCrypt Tokens</span>}
            className=" max-w-md mx-auto overflow-hidden bg-black bg-opacity-50 border border-teal-500 backdrop-filter backdrop-blur-lg rounded-xl"
            headStyle={{ borderBottom: '1px solid #22c55e', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            bodyStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          >
            <div className="grid grid-cols-4 gap-2 mb-2 time-left">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="p-3 text-center bg-teal-900 bg-opacity-50 rounded-lg time-unit">
                  <div className="text-3xl font-bold text-teal-400">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-teal-200 uppercase">{unit}</div>
                </div>
              ))}
            </div>

            <div className="mb-4 progress-section">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-teal-300">UNTIL PRICE INCREASE</span>
                <span className="font-bold text-teal-400">{progressPercentage.toFixed(2)}%</span>
              </div>
              <Progress 
                percent={progressPercentage} 
                showInfo={false} 
                strokeColor={{ 
                  '0%': '#14B8A6', 
                  '100%': '#0F766E' 
                }} 
                trailColor="#1E3A8A"
              />
            </div>

            <div className="mb-3 space-y-2 details">
              <div className="flex justify-between text-teal-200">
                <span>USDT Raised:</span>
                <span className="font-semibold">${usdtRaised.toLocaleString()} / ${usdtGoal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-teal-200">
                <span>Your purchased $FINCRYPT:</span>
                <span className="font-semibold">0 <ClockCircleOutlined className="ml-1 text-green-400" /></span>
              </div>
              <div className="flex justify-between text-teal-200">
                <span>Your stakeable $FINCRYPT:</span>
                <span className="font-semibold">0 <ClockCircleOutlined className="ml-1 text-teal-400" /></span>
              </div>
              <div className="text-lg font-bold text-center text-teal-400">
                1 $FINCRYPT = ${tokenPrice.toFixed(4)}
              </div>
            </div>

            <Tabs 
              defaultActiveKey="eth" 
              onChange={setSelectedPayment} 
              className="mb-4 custom-tabs"
              tabBarStyle={{ borderBottom: '1px solid #0F766E' }}
            >
              <TabPane tab="ETH" key="eth" />
              <TabPane tab="USDT" key="usdt" />
              <TabPane tab="USDC" key="usdc" />
              <TabPane tab="BTC" key="btc" />
              <TabPane tab="BNB" key="bnb" />

            </Tabs>

            <div className="flex mb-3 space-x-2 purchase-inputs">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-teal-300">
                  {selectedPayment.toUpperCase()} you pay
                </label>
                <Input
                  type="number"
                  placeholder="0"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                  className="text-black placeholder-green-300 bg-teal-900 bg-opacity-50 border-teal-500"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-teal-300">fincrypt receive</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={(purchaseAmount / tokenPrice).toFixed(2)}
                  readOnly
                  className="text-black bg-teal-900 bg-opacity-50 blue-green-500"
                />
              </div>
            </div>

            <div className="space-y-3 purchase-actions">
              <Button type="primary" block className="h-12 text-lg font-semibold text-white bg-teal-500 border-teal-600 hover:bg-green-600">
                <WalletOutlined className="mr-2" /> Connect Wallet
              </Button>
              <Button block className="h-12 text-lg font-semibold text-teal-400 border-teal-500 hover:bg-teal-900 hover:border-teal-400">
                <DollarOutlined className="mr-2" /> Buy with {selectedPayment.toUpperCase()}
              </Button>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-teal-800 font-medium transition-colors hover:text-green-300">
                Don't have a wallet?
              </a>
            </div>

            
          </Card>
        </motion.div>
      </div>

      <style jsx>{`
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .particle {
          position: absolute;
          background-color: rgba(74, 222, 128, 0.6);
          border-radius: 50%;
          animation: float 15s infinite;
        }
        .particle:nth-child(1) { width: 10px; height: 10px; left: 10%; top: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { width: 15px; height: 15px; left: 20%; top: 80%; animation-delay: 2s; }
        .particle:nth-child(3) { width: 8px; height: 8px; left: 30%; top: 40%; animation-delay: 4s; }
        .particle:nth-child(4) { width: 12px; height: 12px; left: 40%; top: 60%; animation-delay: 6s; }
        .particle:nth-child(5) { width: 7px; height: 7px; left: 50%; top: 30%; animation-delay: 8s; }
        .particle:nth-child(6) { width: 14px; height: 14px; left: 60%; top: 70%; animation-delay: 10s; }
        .particle:nth-child(7) { width: 9px; height: 9px; left: 70%; top: 50%; animation-delay: 12s; }
        .particle:nth-child(8) { width: 11px; height: 11px; left: 80%; top: 10%; animation-delay: 14s; }
        .particle:nth-child(9) { width: 13px; height: 13px; left: 90%; top: 90%; animation-delay: 16s; }
        .particle:nth-child(10) { width: 6px; height: 6px; left: 5%; top: 75%; animation-delay: 18s; }
        .particle:nth-child(11) { width: 16px; height: 16px; left: 15%; top: 35%; animation-delay: 20s; }
        .particle:nth-child(12) { width: 10px; height: 10px; left: 25%; top: 85%; animation-delay: 22s; }
        
        .particle:nth-child(13) { width: 8px; height: 8px; left: 35%; top: 45%; animation-delay: 24s; }
        .particle:nth-child(14) { width: 12px; height: 12px; left: 45%; top: 65%; animation-delay: 26s; }
        .particle:nth-child(15) { width: 7px; height: 7px; left: 55%; top: 25%; animation-delay: 28s; }
        .particle:nth-child(16) { width: 14px; height: 14px; left: 65%; top: 75%; animation-delay: 30s; }
        .particle:nth-child(17) { width: 9px; height: 9px; left: 75%; top: 55%; animation-delay: 32s; }
        .particle:nth-child(18) { width: 11px; height: 11px; left: 85%; top: 15%; animation-delay: 34s; }
        .particle:nth-child(19) { width: 13px; height: 13px; left: 95%; top: 95%; animation-delay: 36s; }
        .particle:nth-child(20) { width: 6px; height: 6px; left: 2%; top: 70%; animation-delay: 38s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

       
        .custom-tabs .ant-tabs-tab {
          color: #4ade80;
        }
        .custom-tabs .ant-tabs-tab:hover {
          color: #22c55e;
        }
        .custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #22c55e;
          font-weight: bold;
        }
        .custom-tabs .ant-tabs-ink-bar {
          background-color: #22c55e;
        }
      `}</style>
    </div>
  )
}