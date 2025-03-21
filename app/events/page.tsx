'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <Navbar />
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text uppercase relative">
            Gradient Week
            <span className="absolute -top-6 -left-8 w-16 h-16 bg-purple-600/30 rounded-full blur-2xl" />
            <span className="absolute -bottom-6 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl" />
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-300 mt-4 relative">
            Coming Soon
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl" />
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Stay tuned for an immersive experience. Follow us on social media for the latest updates and exclusive content!
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transition">
            <Instagram size={40} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transition">
            <Linkedin size={40} />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,0,128,0.3),_transparent)] pointer-events-none" />
    </main>
  )
}
