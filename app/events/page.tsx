'use client'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Solid color background with accent elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-purple-600" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-cyan-600" />
      
      {/* Accent shapes */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-purple-600 opacity-20" />
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-cyan-600 opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-pink-600 opacity-10" />
      
      {/* Navbar component */}
      <Navbar />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main announcement box */}
          <div className="bg-gray-900 border-l-8 border-purple-600 rounded-lg p-12 mb-12 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mb-2">
                <span className="bg-purple-600 text-white font-bold uppercase text-sm px-4 py-2 rounded">
                  Announcement
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                <span className="text-white">Gradient </span>
                <span className="text-purple-500">Week</span>
              </h1>
              
              <div className="h-1 w-32 bg-cyan-600 mb-8"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-200">
                Coming Soon
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl">
                Follow us for more updates and be the first to know when we launch. 
                Join us for an exciting week of innovation and technology.
              </p>
            </motion.div>
          </div>
          
          {/* Social media section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-900 rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-gray-300">
              Stay Connected
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://instagram.com/gradient.aiml" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium w-full sm:w-auto justify-center px-6 py-3 rounded-md transition-all duration-300"
              >
                <Instagram size={20} />
                <span>Follow on Instagram</span>
              </a>
              
              <a 
                href="https://in.linkedin.com/company/gradient-club" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium w-full sm:w-auto justify-center px-6 py-3 rounded-md transition-all duration-300"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600" />
    </main>
  )
}
