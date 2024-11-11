import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function FincryptFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [topCryptos, setTopCryptos] = useState(['Bitcoin', 'Ethereum', 'Cardano', 'Polkadot', 'Solana']);

  useEffect(() => {
    // Simulating an API call to get top cryptocurrencies
    const fetchTopCryptos = async () => {
      // In a real scenario, you would fetch this data from an API
      const mockApiResponse = ['Bitcoin', 'Ethereum', 'Cardano', 'Polkadot', 'Solana'];
      setTopCryptos(mockApiResponse);
    };

    fetchTopCryptos();
  }, []);

  return (
    <footer className="text-white bg-gradient-to-r from-teal-800 to-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Fincrypt</h3>
            <p className="mb-4">Empowering your financial future through blockchain technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors duration-300 hover:text-blue-400"><Facebook size={20} /></a>
              <a href="#" className="transition-colors duration-300 hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="transition-colors duration-300 hover:text-blue-400"><Linkedin size={20} /></a>
              <a href="#" className="transition-colors duration-300 hover:text-blue-400"><Instagram size={20} /></a>
              <a href="#" className="transition-colors duration-300 hover:text-blue-400"><Github size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-300 hover:text-blue-400">Home</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-blue-400">Services</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Top Cryptocurrencies</h4>
            <ul className="space-y-2">
              {topCryptos.map((crypto, index) => (
                <li key={index}>
                  <a href="#" className="transition-colors duration-300 hover:text-blue-400">{crypto}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p>&copy; {currentYear} Fincrypt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
