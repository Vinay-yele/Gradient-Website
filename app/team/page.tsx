'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

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
      { name: "Ayush Sharma", role: "Tech Head", year: "Fourth year", image: "/placeholder.svg", github: "https://github.com", twitter: "https://twitter.com" },
      { name: "Tech Head 2", role: "Tech Head", year: "Fourth year", image: "/placeholder.svg", github: "https://github.com", linkedin: "https://linkedin.com" },
      { name: "Tech Head 3", role: "Tech Head", year: "Fourth year", image: "/placeholder.svg", github: "https://github.com", twitter: "https://twitter.com" },
    ]
  },
  {
    title: "Design Heads",
    members: [
      { name: "Design Head 1", role: "Design Head", year: "Fourth year", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
      { name: "Design Head 2", role: "Design Head", year: "Fourth year", image: "/placeholder.svg", twitter: "https://twitter.com" },
    ]
  },
  {
    title: "Social Media and Marketing Heads",
    members: [
      { name: "Social Media Head 1", role: "Social Media & Marketing Head", year: "Fourth year", image: "/placeholder.svg", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
      { name: "Social Media Head 2", role: "Social Media & Marketing Head", year: "Fourth year", image: "/placeholder.svg", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
    ]
  },
  {
    title: "Content Heads",
    members: [
      { name: "Content Head 1", role: "Content Head", year: "Fourth year", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
      { name: "Content Head 2", role: "Content Head", year: "Fourth year", image: "/placeholder.svg", twitter: "https://twitter.com" },
    ]
  },
  {
    title: "Logistics Heads",
    members: [
      { name: "Logistics Head 1", role: "Logistics Head", year: "Fourth year", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
      { name: "Logistics Head 2", role: "Logistics Head", year: "Fourth year", image: "/placeholder.svg", github: "https://github.com" },
    ]
  },
]

const TeamMember = ({ name, role, year, image, github, twitter, linkedin }: TeamMember) => (
  <motion.div 
    className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image src={image} alt={name} width={300} height={300} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-purple-400">{name}</h3>
      <p className="text-gray-300">{role}</p>
      <p className="text-gray-400 text-sm">{year}</p>
      <div className="mt-4 flex space-x-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Github size={20} />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Twitter size={20} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Linkedin size={20} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Team() {
  return (
    <main className="my-8 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team
        </motion.h1>
        {teamData.map((section, index) => (
          <motion.section 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  )
}

