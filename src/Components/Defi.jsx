"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send, Download, Plus, Wallet, Repeat, Grid, MessageSquare, Package } from "lucide-react"
import { Button } from "antd"

const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", amount: "1 BTC", value: "$22,868.66", change: -2.21 },
  { name: "Ethereum", symbol: "ETH", amount: "5 ETH", value: "$8,165.05", change: 1.23 },
  { name: "Cronos", symbol: "CRO", amount: "20,000 CRO", value: "$1,009.8", change: 1.22 },
  { name: "Polkadot", symbol: "DOT", amount: "500 DOT", value: "$3,345", change: -3.21 },
]

const gradientAnimationStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(31, 41, 55, 0.5), rgba(34, 197, 94, 0.5))",
  animation: "gradient-animation 5s ease infinite",
  backgroundSize: "300% 300%",
  zIndex: -1,
}

export default function Component() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-teal-800 to-black">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://img.etimg.com/thumb/width-1200,height-1200,imgsize-44124,resizemode-75,msid-89705745/tech/technology/crypto-platforms-introduce-new-products-as-investors-explore-ways-to-save-tax.jpg')",
          filter: "brightness(0.4)",
        }}
      ></div>
      <div style={gradientAnimationStyle}></div>
      <div className="relative z-10 flex flex-col items-center justify-between gap-12 mx-auto max-w-7xl lg:flex-row">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-white">DeFi Made Simple</h1>

          <motion.div className="mb-8 space-y-4">
            {["DeFi Wallet", "DeFi Earn", "DeFi Swap"].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-start"
                onHoverStart={() => setHoveredFeature(feature)}
                onHoverEnd={() => setHoveredFeature(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mr-2 font-semibold text-white">{feature}.</div>
                <div className="text-yellow-600">
                  {hoveredFeature === feature ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature === "DeFi Wallet" && "Secure and easy-to-use crypto wallet"}
                      {feature === "DeFi Earn" && "Earn interest on your crypto assets"}
                      {feature === "DeFi Swap" && "Swap tokens at the best rates"}
                    </motion.span>
                  ) : (
                    <span>
                      {feature === "DeFi Wallet" && "Your Keys, Your Crypto"}
                      {feature === "DeFi Earn" && "No lock-up period and stable returns."}
                      {feature === "DeFi Swap" && "Swap DeFi coins and earn Triple Yield."}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="default"
              className="px-6 py-3 font-bold text-white transition-transform duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 hover:shadow-lg"
            >
              Get DeFi Wallet
            </Button>
            <Button
              variant="default"
              className="px-6 py-3 font-bold text-white transition-transform duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-lg"
            >
              Explore DeFi Features <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block p-1 bg-gray-200 rounded-3xl">
            <div className="bg-[#0b1426] w-full text-white p-6 rounded-3xl max-w-sm mx-auto">
              <div className="flex items-center justify-between mx-10 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-2 bg-yellow-500 rounded-full"></div>
                  <div>wallet.cro</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400">TOTAL BALANCE</div>
                <div className="text-2xl font-bold">$88,025 USD</div>
              </div>

              <div className="flex justify-between mb-6">
                {["Send", "Receive", "Buy"].map((action, index) => (
                  <motion.div
                    key={action}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-1 bg-blue-500 rounded-full">
                      {index === 0 && <Send className="w-6 h-6" />}
                      {index === 1 && <Download className="w-6 h-6" />}
                      {index === 2 && <Plus className="w-6 h-6" />}
                    </div>
                    <div className="text-sm">{action}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-6 space-y-4">
                {cryptoData.map((crypto, index) => (
                  <motion.div
                    key={crypto.symbol}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full mr-2 bg-${crypto.symbol.toLowerCase()}-500`}></div>
                      <div>
                        <div>{crypto.name}</div>
                        <div className="text-sm text-gray-400">{crypto.amount}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div>{crypto.value}</div>
                      <div className={`text-sm ${crypto.change > 0 ? "text-green-500" : "text-red-500"}`}>
                        {crypto.change > 0 ? "+" : ""}
                        {crypto.change}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between">
                {["Wallet", "NFT", "Browser", "Swap", "Earn"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 mb-1 bg-gray-700 rounded-full">
                      {index === 0 && <Wallet className="w-4 h-4" />}
                      {index === 1 && <Grid className="w-4 h-4" />}
                      {index === 2 && <MessageSquare className="w-4 h-4" />}
                      {index === 3 && <Repeat className="w-4 h-4" />}
                      {index === 4 && <Package className="w-4 h-4" />}
                    </div>
                    <div className="text-xs">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}