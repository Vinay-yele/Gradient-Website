'use client'
import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const navItems = [
  { name: 'Gradient Week', href: '/events' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Event Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Connect with us', href: '/connect' },
  { name: 'Department of ML', href: '/department-work' }
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
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-26 h-26 rounded-full flex items-center justify-center">
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

          {/* Spacer div to push navigation to the right */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation - Now with more spacing from logo */}
          <nav className="hidden xl:flex items-center justify-center pl-24">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <div className="h-6 w-px bg-white/30 mx-5"></div>
                  )}
                  <motion.li whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className="text-white text-lg hover:text-purple-400 transition-colors duration-300 font-medium text-center w-32 block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                </React.Fragment>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center ml-auto">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="w-10 h-10"
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
                  className="w-10 h-10"
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
              className="xl:hidden"
            >
              <nav className="py-4">
                <ul className="flex flex-col space-y-4">
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