'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, ChevronDown } from 'lucide-react'
import Footer from '@/components/Footer'

interface TeamMember {
  name: string
  role: string
  year: string
  image: string
  github?: string
  twitter?: string
  linkedin?: string
}

interface TeamSection {
  title: string
  members: TeamMember[]
}

const teamData: TeamSection[] = [
    {
      title: "Club Coordinators",
      members: [
        { name: "Vaishak Bhuvan", role: "Club Coordinator", year: "Fourth year", image: "/T.png", github: "https://github.com", linkedin: "https://linkedin.com" },
        { name: "Archala Varsha", role: "Club Coordinator", year: "Fourth year", image: "/T.png", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
      ]
    },
    {
      title: "Tech Heads",
      members: [
        { name: "Ankit L", role: "Tech Head", year: "Fourth year", image: "/T.png", github: "https://github.com", twitter: "https://twitter.com" },
        { name: "Amal Srivatsa", role: "Tech Head", year: "Fourth year", image: "/T.png", github: "https://github.com", linkedin: "https://linkedin.com" },
        { name: "Adhithya GJ ", role: "Tech Head", year: "Fourth year", image: "/T.png", github: "https://github.com", twitter: "https://twitter.com" },
      ]
    },
    {
      title: "Design Heads",
      members: [
        { name: "Design Head 1", role: "Design Head", year: "Fourth year", image: "/T.png", linkedin: "https://linkedin.com" },
        { name: "Design Head 2", role: "Design Head", year: "Fourth year", image: "/T.png", twitter: "https://twitter.com" },
      ]
    },
    {
      title: "Social Media and Marketing Heads",
      members: [
        { name: "Social Media Head 1", role: "Social Media & Marketing Head", year: "Fourth year", image: "/T.png", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
        { name: "Social Media Head 2", role: "Social Media & Marketing Head", year: "Fourth year", image: "/T.png", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
      ]
    },
    {
      title: "Content Heads",
      members: [
        { name: "Content Head 1", role: "Content Head", year: "Fourth year", image: "/T.png", linkedin: "https://linkedin.com" },
        { name: "Content Head 2", role: "Content Head", year: "Fourth year", image: "/T.png", twitter: "https://twitter.com" },
      ]
    },
    {
      title: "Logistics Heads",
      members: [
        { name: "Logistics Head 1", role: "Logistics Head", year: "Fourth year", image: "/T.png", linkedin: "https://linkedin.com" },
        { name: "Logistics Head 2", role: "Logistics Head", year: "Fourth year", image: "/T.png", github: "https://github.com" },
      ]
    },
  ]

const TeamMember = ({ name, role, year, image, github, twitter, linkedin }: TeamMember) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="relative group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/10"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="relative h-56 overflow-hidden">
          <Image 
            src={image} 
            alt={name} 
            width={400} 
            height={400} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
        </div>
        
        <div className="p-6 relative">
          <motion.div
            initial={false}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">{name}</h3>
            <p className="text-gray-300 text-lg mb-1">{role}</p>
            <p className="text-gray-400 text-sm mb-4">{year}</p>
          </motion.div>

          <motion.div 
            className="flex space-x-4 items-center"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
              >
                <Twitter size={22} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
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
            <span className="text-purple-400">Meet Our Amazing Team</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">
            The Minds Behind Gradient
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dedicated individuals working together to push the boundaries of AI and Machine Learning at BMSCE.
          </p>
        </motion.div>

        <div className="space-y-24">
          {teamData.map((section, index) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-center mb-12">
                <div className="h-px w-12 bg-purple-500/30" />
                <h2 className="text-3xl md:text-4xl font-bold px-6 text-center text-purple-400">
                  {section.title}
                </h2>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {section.members.map((member) => (
                  <TeamMember key={member.name} {...member} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div 
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
        </motion.div>
      </div>
      <Footer/>
    </main>
  )
}