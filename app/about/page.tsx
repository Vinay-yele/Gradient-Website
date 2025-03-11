'use client'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Users, Code, BookOpen, Lightbulb, Share2, Calendar } from 'lucide-react'
import Footer from '@/components/Footer'

export default function About() {
  const activities = [
    {
      icon: Terminal,
      title: "Technical Workshops",
      description: "Hands-on workshops and seminars on cutting-edge AI and ML technologies"
    },
    {
      icon: Code,
      title: "Hackathons",
      description: "Competitive coding events and AI project challenges"
    },
    {
      icon: Users,
      title: "Technical Events",
      description: "Collaborative, Fun and innovative events with real-world applications"
    },
    {
      icon: BookOpen,
      title: "Guest Lectures",
      description: "Industry experts sharing insights and experiences"
    },
    {
      icon: Lightbulb,
      title: "Placement Talks",
      description: "Educating students on the ever-changing landscape of placements and perparing to help them succeed"
    },
    {
      icon: Share2,
      title: "Networking",
      description: "Building connections within the AI community"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            About Gradient
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who We Are Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-purple-500/30" />
                <h2 className="text-3xl font-bold px-6 text-center text-purple-400">
                  Who We Are
                </h2>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Gradient, the AIML club of B.M.S. College of Engineering, is dedicated to exploring the fascinating world of Artificial Intelligence and Machine Learning. Our mission is to foster a community of AI enthusiasts, provide hands-on experience with cutting-edge technologies, and bridge the gap between academic learning and industry requirements.
                </p>
                <p>
                  We aim to inspire and educate students about the potential of AI and ML, encouraging innovation and collaboration in this rapidly evolving field.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Inauguration Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-purple-500/30" />
                <div className="flex items-center space-x-2 px-6">
                  <Calendar className="text-purple-400" size={24} />
                  <h2 className="text-3xl font-bold text-center text-purple-400">
                    Inauguration Ceremony
                  </h2>
                </div>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
                  The official launch of Gradient marked a significant milestone in our journey towards advancing AI education and research at BMSCE.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300" />
                    <div className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20">
                      <Image
                        src="/innaugaration.jpg"
                        alt="Inauguration Ceremony 1"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300" />
                    <div className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20">
                      <Image
                        src="/innaugaration.jpg"
                        alt="Inauguration Ceremony 2"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What We Do Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-12 bg-purple-500/30" />
              <h2 className="text-3xl font-bold px-6 text-center text-purple-400">
                What We Do
              </h2>
              <div className="h-px w-12 bg-purple-500/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 group hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <activity.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-400">{activity.title}</h3>
                  </div>
                  <p className="text-gray-300">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
        {/* <Footer/> */}
    </main>
  )
}
