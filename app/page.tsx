'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Calendar, Sparkles } from 'lucide-react'
import Link from 'next/link'

import TypingAnimation from '@/components/ui/typing-animation'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-b text-white overflow-hidden">

      <Navbar />

      {/* Gradient Week Banner - positioned before navbar but with margin for proper spacing */}
      <motion.div
        className="relative w-full bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 py-4 
    mt-[90px] lg:mt-[100px] text-center -mb-[90px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <Sparkles size={28} className="text-yellow-300 animate-pulse lg:block" />

                <div className="text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start space-y-1 lg:space-y-0 lg:space-x-3">
                    <h2 className="font-bold text-2xl md:text-3xl text-white">
                      <span className="text-yellow-300">GRADIENT WEEK '25</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-white">
                      Has Concluded
                    </p>
                  </div>
                </div>

                <Sparkles size={24} className="text-yellow-300 animate-pulse lg:block" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end w-full lg:w-auto space-y-3 sm:space-y-0 sm:space-x-4 mt-3 lg:mt-0">
              <p className="text-purple-100 text-center lg:text-right font-medium text-xl">
                Check out the highlights of the event!
              </p>
              <Link
                href="/events"
                className="inline-flex items-center space-x-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg transition-all duration-300 transform hover:scale-105 text-purple-900 font-bold text-xl shadow-lg"
              >
                <span>RECAP</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Modified breakpoints from md to lg for better responsive behavior */}
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] pt-20">
          {/* Left Section - Adjusted width and added padding for medium screens */}
          <motion.div
            className="w-full md:max-w-2xl lg:w-1/2 space-y-8 relative z-10 px-4 md:px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-10 text-center lg:text-left">
                Welcome to
                <div className="mt-2">
                  <TypingAnimation className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 ">
                    Gradient
                  </TypingAnimation>
                </div>
              </h1>
            </div>

            <p className="text-gray-300 text-xl md:text-2xl max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Pioneering the future through AI and Machine Learning innovation at B.M.S. College of Engineering.
            </p>

            <motion.div
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group flex items-center justify-center md:justify-start space-x-3 px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <span>Explore Our Club</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Section - Added padding and adjusted margins for better spacing */}
          <motion.div
            className="w-full md:max-w-5xl lg:w-1/2 mt-12 lg:mt-0 relative z-10 px-4 md:px-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 -top-4 w-24 h-24 border-4 border-purple-600/30 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute -left-4 -bottom-4 w-16 h-16 border-4 border-purple-600/30 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
              />
              <div className="relative">
                <div className="absolute -right-2 -top-2 w-full h-full border-2 border-purple-600 rounded-lg" />
                <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute top-2 left-2 flex space-x-1 items-center"></div>
                  <Image
                    src="https://gradient-content-server.vercel.app//group.png"
                    alt="Group photo"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>     
      
    </main>
  )
}