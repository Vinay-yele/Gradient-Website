'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import Footer from '@/components/Footer'
import { teamData } from './teamData'

// Types
interface TeamMember {
  name: string
  role: string
  year: string
  image: string
  github?: string
  twitter?: string
  linkedin?: string
}

const TeamMember = ({ name, role, year, image, github, linkedin }: TeamMember) => {
  return (
    <div className="group relative h-full">
      {/* Diagonal card with darker purple background */}
      <div className="relative bg-purple-950/90 h-full overflow-hidden shadow-lg"
           style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)' }}>
        <div className="flex flex-col h-full">
          {/* Diagonal overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent 
                         -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          
          {/* Content container - changed to stack image on top for larger images */}
          <div className="flex flex-col h-full">
            {/* Image section with MUCH larger dimensions */}
            <div className="relative w-full">
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }}>
                <Image
                  src={image}
                  alt={name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center transition-transform duration-700 
                           scale-105 group-hover:scale-115"
                  style={{ objectPosition: '50% 20%' }} // Focus more on faces
                  priority
                />
                {/* Image overlay gradient - further reduced fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-purple-950/5" />
              </div>
            </div>
            
            {/* Text content section below image */}
            <div className="w-full p-5 flex flex-col items-center relative z-10">
              {/* Purple accent line */}
              <div className="w-16 h-1 bg-purple-500 mb-4 transform origin-center transition-all duration-300 
                            group-hover:w-24 group-hover:bg-fuchsia-500" />
              
              <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors text-center">{name}</h3>
              <p className="text-purple-200/90 font-medium text-base mt-2 text-center">{role}</p>
              {year && <p className="text-zinc-400 text-sm mt-1 text-center">{year}</p>}
              
              {/* Social links */}
              <div className="flex space-x-4 mt-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-800/60 hover:bg-purple-600 
                             text-white p-2 rounded-md transition-colors transform hover:scale-105"
                    aria-label={`${name}'s GitHub`}
                  >
                    <Github size={24} />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-800/60 hover:bg-purple-600 
                             text-white p-2 rounded-md transition-colors transform hover:scale-105"
                    aria-label={`${name}'s LinkedIn`}
                  >
                    <Linkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Domain Section with side title and alternating layout
const DomainSection = ({ title, members, isReversed }: { title: string, members: any[], isReversed: boolean }) => {
  return (
    <div className="mb-24">
      <div className={`flex flex-col ${isReversed ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
        {/* Side Domain Title - fixed for long titles */}
        <div className={`w-full md:w-1/3 mb-12 md:mb-0 ${isReversed ? 'md:pr-12' : 'md:pl-12'} relative`}>
          <div className="sticky top-32">
            <h2 className={`text-5xl md:text-6xl train-one-regular leading-tight ${isReversed ? 'md:text-right' : 'md:text-left'} text-center whitespace-normal`}>
              {title}
            </h2>          
          </div>
        </div>
        
        {/* Team Members Grid - always 2 columns max */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div key={member.name} className={members.length === 3 && index === 2 ? 'md:col-span-2 max-w-lg mx-auto' : ''}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
      {/* Google Fonts Import for Train One */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Delius&family=Kavoon&family=Kreon:wght@300&family=Permanent+Marker&family=Train+One&display=swap');
        
        .train-one-regular {
          font-family: "Train One", system-ui;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      
      {/* Very dark purple grid background pattern - made more visible */}
      <div className="fixed inset-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #4d3197 1px, transparent 1px), linear-gradient(to bottom, #4d3197 1px, transparent 1px)',
                   backgroundSize: '40px 40px',
                   backgroundColor: '#180336' }} />
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 text-center">        
        <div className="mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-7xl md:text-7xl font-bold mt-10">
              <span className="text-white">The Minds</span><br />
              <span className="text-purple-400">Behind Gradient</span>
            </h1>
            {/* Added tagline below the title */}
            <p className="text-purple-200 text-2xl mt-6 font-light">
              The team that brings you innovation at the speed of thought
            </p>
          </motion.div>
        </div>

        {/* Team Sections with alternating layout */}
        <div className="space-y-12">
          {teamData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DomainSection 
                title={section.title} 
                members={section.members} 
                isReversed={index % 2 !== 0} // Alternate layout
              />
            </motion.div>
          ))}
        </div>
      </div>     
    </div>
  );
}