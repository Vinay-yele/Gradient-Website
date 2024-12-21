'use client'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import TypingAnimation from '@/components/ui/typing-animation'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center min-h-screen pt-20">
          {/* Left Section */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to<br />
              <TypingAnimation className='text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600s'>Gradient</TypingAnimation>
            </h1>
            
            
            <p className="text-gray-400 text-lg max-w-md">
              Exploring the fascinating world of Artificial Intelligence and Machine Learning at B.M.S. College of Engineering.
            </p>

            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link
                href="/team"
                className="flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                <span>Meet the Team</span>
                <ArrowRight size={20} />
              </Link>

              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-purple-600" />
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 ${i === 3 ? 'bg-purple-600' : 'bg-purple-800'} rounded-sm`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -right-2 -top-2 w-full h-full border-2 border-purple-600 rounded-lg" />
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="absolute top-2 left-2 flex space-x-1">
                  <X size={16} className="text-gray-500" />
                  <div className="w-full h-6 bg-purple-600 rounded-sm" />
                </div>
                <Image
                  src="/T.png"
                  alt="AI Visualization"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-[#1a1a1a]/80 rounded-full">
                  <span className="text-sm font-medium">AI Research Lab</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="fixed bottom-6 right-6 flex space-x-4 bg-[#1a1a1a]/50 p-4 rounded-lg shadow-lg">
        <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-purple-400">
          <FaFacebook size={34} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-purple-400">
          <FaTwitter size={34} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-purple-400">
          <FaLinkedin size={34} />
        </Link>
        <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-purple-400">
          <FaGithub size={34} />
        </Link>
      </div>

    </main>
  )
}
