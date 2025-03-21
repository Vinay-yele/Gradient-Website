'use client'
import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { name: 'Gradient Week', href: '/events' },
  { name: 'Core Team', href: '/team' },
  { name: 'Event Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Dept. of ML', href: '/department-work' },
  { name: 'Let\'s Connect', href: '/connect' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-purple-900/20' 
          : 'bg-transparent backdrop-blur-sm'
      } border-b ${scrolled ? 'border-purple-900/30' : 'border-white/10'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 flex-shrink-0 group transition-all duration-300"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Logo.png"
                  alt="Gradient Logo"
                  width={92}
                  height={92}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Gradient
              </motion.span>
            </span>
          </Link>

          {/* Spacer div to push navigation to the right */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <div className="h-6 w-px bg-gradient-to-b from-purple-400/10 via-white/30 to-purple-400/10 mx-5"></div>
                  )}
                  <motion.li 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="relative text-white text-lg hover:text-purple-400 transition-all duration-300 font-medium text-center w-32 block py-2 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                    </Link>
                  </motion.li>
                </React.Fragment>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle with improved button */}
          <div className="xl:hidden flex items-center ml-auto">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-white focus:outline-none bg-purple-900/30 p-2 rounded-lg"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with improved styling */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden overflow-hidden"
            >
              <nav className="py-4">
                <ul className="flex flex-col space-y-4 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-purple-900/30">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="text-center"
                    >
                      <Link
                        href={item.href}
                        className="text-white text-lg hover:text-purple-400 transition-all duration-300 font-medium block py-2 px-4 rounded-md hover:bg-purple-900/20"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {index < navItems.length - 1 && (
                        <div className="h-px w-3/4 mx-auto mt-4 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
