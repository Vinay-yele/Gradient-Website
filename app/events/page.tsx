'use client'
import Footer from '@/components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced background with geometric elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated geometric shapes */}
      <motion.div 
        className="absolute top-1/4 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-purple-600/10 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-10 md:left-20 w-24 h-24 md:w-48 md:h-48 rounded-full bg-cyan-600/10 blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a10_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a10_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6"
          >
            <span className="text-purple-400">Save The Date</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Gradient Week
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Coming Soon
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Experience the future of technology through our carefully curated events, workshops, and sessions. Stay tuned for more details.
          </p>
          
          {/* Decorative graphic element */}
          <div className="w-full max-w-md mx-auto relative mb-16">
            <motion.div 
              className="absolute inset-0 rounded-lg border border-purple-500/20 backdrop-blur-sm"
              animate={{ 
                boxShadow: ['0 0 0px rgba(168, 85, 247, 0.4)', '0 0 20px rgba(168, 85, 247, 0.6)', '0 0 0px rgba(168, 85, 247, 0.4)']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <div className="p-10 relative z-10">
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto mx-auto"
              >
                <path 
                  fill="#A855F7" 
                  d="M43.9,-73.6C55.9,-67.4,64.4,-54.6,71.9,-41C79.3,-27.4,85.6,-13.7,85.4,-0.1C85.2,13.5,78.6,26.9,69.9,38.1C61.2,49.3,50.5,58.3,38.5,65C26.5,71.8,13.3,76.3,-0.6,77.3C-14.5,78.3,-29,75.8,-41.8,68.7C-54.5,61.6,-65.6,49.8,-73.7,36.1C-81.7,22.3,-86.8,6.5,-84.2,-7.8C-81.5,-22.1,-71.1,-34.9,-59.8,-44.1C-48.4,-53.3,-36.1,-58.9,-24.4,-65.1C-12.7,-71.3,-1.3,-78.1,11.4,-80.5C24.1,-82.9,31.9,-79.8,43.9,-73.6Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <span className="block text-lg md:text-2xl font-bold text-white">2025</span>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Social media links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full hover:from-purple-600 hover:to-purple-800 transition-all duration-300 min-w-[180px] justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 min-w-[180px] justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative floating elements */}
        <div className="relative max-w-3xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 400}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
