import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample media data
const mediaData = [
  {
    source: "CoinTelegraph",
    logo: "https://img.freepik.com/premium-photo/some-bitcoins-with-green-background-graph-ar-169-style-raw-stylize-250-job-id-f52e84da26c14bfbba10_343960-87296.jpg?w=1060",
    title: "CryptoNova raises $10M in Series A funding round",
    date: "2024-03-15",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    source: "CryptoInsider",
    logo: "data:image/png;base64,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",
    title: "CryptoNova's AI-powered trading algorithm outperforms market",
    date: "2024-03-10",
    gradient: "from-green-400 to-cyan-500",
  },
  {
    source: "BlockchainToday",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX+/v7////tMjcAAADsGSH61tfsISftMDX6+vru7u7tKC7k5OSOjY3sChXtKzD99vb1np/74+PDw8Pz8/OqqamVlJQ6NzhiYGEcFxh1c3T3tLWGhYXa2trzjpAOBAh/fn4rKCkVDxFVU1Ofnp7xc3XyenzuQUb4xMXsFR3wW17zhYf2q6z5zM3wZmnuSU3zj5H73+DPz89JR0jrAADvU1e+vb2ysbHsABAyLjBdW1xAPT4jHyFraWr97u71oqT3ubs173JsAAAEVElEQVR4nO3aD3OaSBgGcF7XCgiahD+KlYJArjFJ0ws2YA2m/f7fqu+CCto5Z+5uMqHk+c047kIyw5NleReIoind1vV8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8FpIeuuDeE10cXl999jhjHTVH4yHo78uOpuRPo97bLj80dGIdDXqldRB76aTGelDv7ejLm+vOpixkbDXG4/uujcdjxLydOzfdy3iScKe2v/8pZUZq6p9Urmb3aM9ze2NedgfVtPx4aWFGS3LShXSxLxxaKSIcN8lsW2kmtedQ0K1//XL3WhcTce/lZZFJEMUnih0TZiHgZRfMjBVA+zNqu3lUMffqxFX6oSDwUfe9ni7VMve8GO7hpETOmQFLnFC0nxDHr7uKxTMiXSFbG5yQl/jDLpv816NbIW4tU84Hn3Sqvw36kCtRvRDmzKWCfmjcEJHCLHSaM5fejSnqdBd2VxsJiLw6ZnbCcUFeeFEiJSqhOPrw8wjuhyWw6iOrls0Hcnw4u0i5nnoGiLUssBMhWsnRmQ6IvXF3HaMRZFbPI6uTduIphN69pzUmx4SXtQTkz4Nd5VjdNmaiGRE22TmhSRcR/A5OtkkAZ+MFMVeQonQd/NwMiVKsyqhbMerXcLeclnPu0NCXsipP1uSsTxLaSv0wC3zrGIz4EmnBOFkRW4joVZMzM1vCdXx49dvty9VFlJux3V1XD49tiJilXAV2YGbBRnZwdwJLDJ0ebYmcouhFzLhNuMRNoPfEg6IfqzX9+X19WZYB5TXoPVdGyLKarEIRC6vNJNgWkS6XUQr4XM93Ar/u2wGW6LF1BCbmSdos6DFhv8kz/uEnOzl6dvTFV1cV+WigW+r3jofJ9TyPM90UpyUm6bDc1BP3JS4azu+5rgW5RbJT2o6BheWvOxnWZ2QM96P1p+Gw94pVW1BwmrRVtZ25dCqajrRfkHX2Fv364TcfHlYnw6gtG7bAucIpZbkHy6UJLTjtWudkHf+HLR1DP8RueFMhKFTL+VkwpOV9z6hfCrV0nl4BpEt5Jmpy6EjzZYJZedwUh8lbO219BzSOaFfrKKQuPgvTKGkXhyZvuB0z3y5OU7Y1np4TpkwSLk25AaPXyIUQ5Pn6iIt9+zrYeMX2rimOUfmSCc8YPksD3fzME0LPQnJmdcVv/75Vq5Lz5EJrZijZDPHlAmVtHAdz+DNz/5+5f1w1fJ7i3NkQkOejvMki0n2VnzKFgbFzuLPuT88p5xt06mVRJrGy9ZVROHMDwODMr5R/GPu8c8hLeFDz+eJrBJuojmK4sz9zOabSaORsOXPac7ar+EOX7uFnLVqPqfptf1Z279H2/wk4S5mS5+X/ge7ddz7eubd9fcWXX331Pn3h91/B/wO3uN3/38x3sH/0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/oL31Abwy7RfQeVUIxLaJAQAAAABJRU5ErkJggg==",
    title: "CryptoNova launches innovative DeFi lending platform",
    date: "2024-03-05",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    source: "CoinCodex",
    logo: "https://coincodex.com/en/resources/images//static/media/cc-logo-glyph-png.png",
    title: "CryptoNova token surges 200% following major exchange listing",
    date: "2024-02-28",
    gradient: "from-yellow-400 to-red-500",
  },
];

// Custom hook for auto sliding functionality
const useAutoSlide = (length, interval = 5000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  return [index, setIndex];
};

// Main Media component
export default function Media() {
  const [currentIndex, setCurrentIndex] = useAutoSlide(mediaData.length, 5000);

  // Handlers for previous and next buttons
  const handlePrev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + mediaData.length) % mediaData.length);
  }, [setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % mediaData.length);
  }, [setCurrentIndex]);

  return (
    <div className="px-4 py-16" style={{ backgroundColor: '#114749' }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-600">
              Media Spotlight
            </span>
          </h2>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 text-gray-300 bg-gray-700 border-gray-700 rounded-full hover:bg-gray-600"
            >
              <ChevronLeft className="w-6 h-6 text-blue-300" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 text-gray-300 bg-gray-700 border-gray-700 rounded-full hover:bg-gray-600"
            >
              <ChevronRight className="w-6 h-6 text-blue-300" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % mediaData.length;
                const item = mediaData[index];
                return (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-1 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl`}
                  >
                    <div className="flex flex-col justify-between h-full p-6 bg-gray-800 rounded-xl shadow-lg">
                      <div>
                        <div className="flex items-center mb-4">
                          <img src={item.logo} alt={item.source} className="w-8 h-8 mr-2 rounded-full" />
                          <span className="font-semibold text-gray-300">{item.source}</span>
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{item.date}</span>
                        <a href="#" className="flex items-center text-blue-400 transition-colors duration-200 hover:text-blue-300">
                          Read more
                          <ChevronRight className="w-4 h-4 ml-1 text-blue-300" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
