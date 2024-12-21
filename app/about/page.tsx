'use client'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="my-8 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-purple-600s"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Gradient
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            Gradient, the AIML club of B.M.S. College of Engineering, is dedicated to exploring the fascinating world of Artificial Intelligence and Machine Learning. Our mission is to foster a community of AI enthusiasts, provide hands-on experience with cutting-edge technologies, and bridge the gap between academic learning and industry requirements.
          </p>
          <p className="text-gray-300">
            We aim to inspire and educate students about the potential of AI and ML, encouraging innovation and collaboration in this rapidly evolving field.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">What We Do</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Organize workshops and seminars on AI and ML topics</li>
            <li>Host hackathons and coding competitions</li>
            <li>Collaborate on innovative AI projects</li>
            <li>Invite industry experts for guest lectures</li>
            <li>Provide resources for learning and skill development</li>
            <li>Foster a supportive community for AI enthusiasts</li>
          </ul>
        </motion.div>
      </div>
    </main>
  )
}

