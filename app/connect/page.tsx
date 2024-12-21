'use client'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Connect() {
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
          Connect with Us
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2 text-purple-400" />
                <span>gradient@bmsce.ac.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-purple-400" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-purple-400" />
                <span>B.M.S. College of Engineering, Bengaluru</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700 transition-colors duration-300">Send Message</button>
          </div>
        </motion.form>
      </div>
    </main>
  )
}

