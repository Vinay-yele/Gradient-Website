'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const navItems = [
  { name: 'Gradient Week', href: '/events' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Event Gallery', href: '/gallery' },
  { name: 'Department of ML', href: '/department-work' },
  { name: 'About', href: '/about' },
  { name: 'Connect with us', href: '/connect' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-26 h-26 rounded-full flex items-center justify-center ">
              <Image
                src="/Logo.png"
                alt="Gradient Logo"
                width={92}
                height={92}
                priority
              />
            </div>
            <span className="text-4xl font-bold text-white">Gradient</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <>
                  <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
                    <Link
                      href={item.href}
                      className="text-white text-xl hover:text-purple-400 transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                  {index < navItems.length - 1 && (
                    <div className="h-5 w-px bg-white/30 mx-4"></div>
                  )}
                </>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
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
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <nav className="py-4">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="text-white text-lg hover:text-purple-400 transition-colors duration-300 font-medium block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
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
