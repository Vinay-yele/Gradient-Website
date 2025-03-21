'use client'
import Footer from '@/components/Footer';
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

export default function Connect() {
  const socialLinks = [
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Connect with Us
          </h1>
        </motion.div>

        {/* Partner With Us & Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Partner With Us & Sponsor</h2>
          <p className="text-gray-300 mb-4">
            At Gradient, we offer unparalleled opportunities to collaborate with some of the brightest minds in AI & Machine Learning. Our network is a thriving community of tech enthusiasts, students, and industry leaders.
          </p>
          <p className="text-gray-300 mb-4">
            By partnering with us, you not only get access to innovative talent and state-of-the-art projects but also enhance your brand visibility in a cutting-edge field. Whether you're looking to sponsor events, workshops, or initiatives, our platform is the ideal place to showcase your commitment to innovation.
          </p>
          <p className="text-lg text-purple-400 font-semibold mt-4">
            Ready to elevate your brand? <a href="mailto:gradient.mel@bmsce.ac.in" className="underline hover:text-purple-300">Reach out to us today!</a>
          </p>
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

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="ml-4 text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Department of Machine Learning, 7th Floor, PJA Block, B.M.S. College of Engineering, Bengaluru - 560 01
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
        </div>
      </div>
    </main>
  );
}
