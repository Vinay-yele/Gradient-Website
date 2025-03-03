'use client'
import Footer from '@/components/Footer';
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react'

export default function Connect() {
  const socialLinks = [
    //   { icon: Facebook, href: "https://facebook.com/gradientbmsce", label: "Facebook" },
    //   { icon: Twitter, href: "https://twitter.com/gradientbmsce", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/gradient.aiml", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/gradient-club", label: "LinkedIn" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <Navbar />

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
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
            <span className="text-purple-400">Get in Touch</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Connect with Us
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-8 text-purple-400">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="ml-4 text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    gradient.mel@bmsce.ac.in
                  </span>
                </motion.div>

                {/* <motion.div 
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="ml-4 text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    +91 1234567890
                  </span>
                </motion.div> */}

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="ml-4 text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Department of Machine Learning
                    7th Floor, PJA Block
                    B.M.S. College of Engineering
                    #1908, Bull Temple Road
                    Bengaluru - 560 01
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-8 text-purple-400">Follow Us</h2>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-8 text-purple-400">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-purple-500/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-purple-500/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-purple-500/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg py-3 px-6 font-medium hover:from-purple-500 hover:to-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-purple-400 mx-auto" />
          </motion.div>
        </motion.div> */}
      </div>
    </main>
  );
}