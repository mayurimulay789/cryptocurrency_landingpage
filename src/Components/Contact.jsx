"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Bitcoin, DollarSign } from "lucide-react";

export default function CryptoContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate form fields (basic validation)
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { name: "name", type: "text", placeholder: "Your Name", icon: <DollarSign className="h-5 w-5 text-gray-400" /> },
    { name: "email", type: "email", placeholder: "your.email@example.com", icon: <DollarSign className="h-5 w-5 text-gray-400" /> },
    { name: "walletAddress", type: "text", placeholder: "Your Wallet Address (optional)", icon: <Bitcoin className="h-5 w-5 text-gray-400" /> },
  ];

  return (
    <div className="relative min-h-screen bg-center bg-cover flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-teal-500">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-6 py-8 sm:px-10 sm:py-12">
                  <motion.h2
                    className="text-3xl font-extrabold text-center text-teal-500 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Contact Crypto Support
                  </motion.h2>

                  {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formFields.map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <label htmlFor={field.name} className="sr-only">
                          {field.placeholder}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {field.icon}
                          </div>
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.name !== "walletAddress"}
                            className="appearance-none rounded-md relative block w-full pl-10 px-3 py-3 border border-gray-700 placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                            placeholder={field.placeholder}
                          />
                        </div>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                        placeholder="Describe your issue or question..."
                      ></textarea>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin h-5 w-5" />
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-6 py-8 sm:px-10 sm:py-12 text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 30 }}
                >
                  <svg
                    className="w-8 h-8 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-semibold text-teal-500 mb-2">Thank you!</h3>
                <p className="text-gray-300">
                  Your message has been sent successfully. Our crypto support team will get back to you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Animated cryptocurrency icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[Bitcoin].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight, 
              scale: 0.5, 
              opacity: 0 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          >
            <Icon className="h-16 w-16 text-teal-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
