'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Department Work', href: '/department-work' },
  { name: 'Connect with us', href: '/connect' }
]

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-purple-600 font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold text-white">Gradient</span>
          </Link>
          
          {/* Navigation Items */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
                  <Link 
                    href={item.href}
                    className="text-white text-base hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA Button
          <Link
            href="/connect"
            className="hidden md:inline-flex items-center px-6 py-2 bg-yellow-400 text-purple-900 font-bold text-base rounded-full hover:bg-yellow-500 shadow-md transition-colors duration-300"
          >
            Sign In
          </Link> */}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
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
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
