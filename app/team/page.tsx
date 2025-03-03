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
      { name: "Sudhanva Bharadwaj", role: "Club Coordinator", year: "Third year", image: "/sudhanva.png", github: "https://github.com/sudhanvabharadwaj", linkedin: "https://www.linkedin.com/in/sudhanva-bharadwaj/" },
      { name: "Shashank Sharma", role: "Club Coordinator", year: "Third year", image: "/shashank.JPG", github: "https://github.com/csshashanksharma", linkedin: "https://www.linkedin.com/in/c-s-shashank-sharma-58532b277/" },
    ]
  },
  {
    title: "Technical Heads",
    members: [
      { name: "Pranav V", role: "Technical Head", year: "Third Year", image: "/pranav.JPG", github: "https://github.com/pranav1211", linkedin: "https://www.linkedin.com/in/pranav-veeraghanta-315760119/" },
      { name: "Siddharth Sahay", role: "Technical Head", year: "Third Year", image: "/sid.JPG", github: "https://github.com/siddzzzz", linkedin: "https://www.linkedin.com/in/siddharth-sahay-9a8365254/" },

    ]
  },
  {
    title: "Design Heads",
    members: [
      { name: "Vinay Yele", role: "Design Head", year: "Third year", image: "/yele.JPG", github: "https://github.com/Vinay-yele", linkedin: "https://www.linkedin.com/in/vinay-yele-08ab08295/" },
      { name: "Deepali", role: "Design Head", year: "Third Year", image: "/deepali.JPG", linkedin: "http://linkedin.com/in/deepali-u-10a78a306" },
    ]
  },  
  { 
    title: "Logistics and Event Management Heads",
    members: [
      { name: "Suman", role: "Logistics and Event Management Head", year: "Third Year", image: "/suman.JPG", github: "https://github.com/Suman302004", linkedin: "https://www.linkedin.com/in/suman-rudraswamy-53450b25b/", },
      { name: "Vignesh Madan", role: "Logistics and Event Management Head", year: "Third Year", image: "/vignesh.JPG", github: "https://github.com/VIGNESHMADAN", linkedin: "https://www.linkedin.com/in/vignesh-madan-6505a4275/" },
      { name: "Krishna Saket", role: "Logistics and Event Management Head", year: "Third Year", image: "/saket.JPG", github: "https://github.com/SakhamooriKrishnasaket", linkedin: "https://www.linkedin.com/in/krishna-saket-sakhamoori-82349b278/" },
    ],
  },
  {
    title: "Media and Sponsorship Heads",
    members: [
      {
        name: "Varsh Gandhi",
        role: "Media & Sponsorship Head",
        year: "Third Year",
        image: "/varsh.JPG",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Supriya Gowda",
        role: "Media & Sponsorship Head",
        year: "Third Year",
        image: "/supriya.JPG",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Sanjana",
        role: "Media & Sponsorship Head",
        year: "Third Year",
        image: "/sanj.JPG",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Likith Choudary",
        role: "Media & Sponsorship Head",
        year: "Third Year",
        image: "/likith.JPG",
        github: "https://github.com/LikithChowdary2807",
        linkedin: "https://www.linkedin.com/in/likith-chowdary-154204300",
      },
    ],
  },
  {
    title: "Content Heads",
    members: [
      { name: "Yashas Nandan", role: "Content Head", year: "Third Year", image: "/yashas.JPG", github: "https://github.com/Yashas-Nandan", linkedin: "https://www.linkedin.com/in/yashas-nandan-399a0225a/" },
      { name: "Ashrit", role: "Content Head", year: "Third Year", image: "/ashrit.JPG", github: "https://github.com/24ashrit", linkedin: "https://www.linkedin.com/in/ashrit-m-a771442bb/" },
    ]
  } 
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
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
        </div>

        <div className="p-6 relative">
          <motion.div
            initial={false}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-2">{name}</h3>
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

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400">
            The Minds Behind Gradient
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
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
              <div className="flex items-center justify-center mb-12 -mt-12">
                <div className="h-px w-12 bg-purple-500/30" />
                <h2 className="text-3xl md:text-4xl font-bold px-6 text-center text-purple-300">
                  {section.title}
                </h2>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              {/* Consistent approach for all sections regardless of member count */}
              <div className="flex flex-wrap justify-center mx-auto max-w-6xl">
                {section.members.map((member) => (
                  <div
                    key={member.name}
                    className={`px-4 pb-8 w-full 
                      ${section.members.length === 1 ? 'md:w-1/2 lg:w-1/3 mx-auto' : ''}
                      ${section.members.length === 2 ? 'md:w-1/2 lg:w-5/12' : ''}
                      ${section.members.length >= 3 ? 'md:w-1/2 lg:w-1/3' : ''}
                    `}
                  >
                    <TeamMember {...member} />
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

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
  )
}