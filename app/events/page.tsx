'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-800 via-black to-purple-900 text-white relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <Navbar />
      <div className="absolute inset-0 animate-gradient bg-[radial-gradient(circle_at_center,_rgba(128,0,255,0.6),_transparent)] pointer-events-none" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text uppercase relative">
            Gradient Week
            <motion.span
              className="absolute -top-6 -left-8 w-20 h-20 bg-purple-600/60 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            <motion.span
              className="absolute -bottom-6 -right-8 w-24 h-24 bg-purple-500/50 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
          </h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-300 mt-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            7th - 9th APRIL
            <motion.span
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-purple-400/25 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay tuned for an immersive experience. Follow us on social media for the latest updates and exclusive content!
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.a
            href="https://instagram.com/gradient.aiml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition"
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Instagram size={40} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/gradient-club"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition"
            whileHover={{ scale: 1.2, rotate: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin size={40} />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>
        {`
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
        opacity: 1;
      }
      20% {
        background-position: 25% 75%;
        opacity: 0.9;
      }
      40% {
        background-position: 50% 50%;
        opacity: 0.8;
      }
      60% {
        background-position: 75% 25%;
        opacity: 0.9;
      }
      80% {
        background-position: 100% 50%;
        opacity: 1;
      }
      100% {
        background-position: 0% 50%;
        opacity: 1;
      }
    }
    .animate-gradient {
      background-size: 300% 300%;
      animation: gradientShift 10s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    }
  `}
      </style>

    </main>
  )
}
