'use client'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Users, Code, BookOpen, Lightbulb, Share2, Calendar, Award } from 'lucide-react'
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
      description: "Educating students on the ever-changing landscape of placements and preparing to help them succeed"
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
        {/* Who Are We Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container mx-auto px-4 pb-10"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-purple-500/30" />
              <h2 className="text-3xl font-bold px-6 text-center text-purple-400">
                Who Are We?
              </h2>
              <div className="h-px w-12 bg-purple-500/30" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              <span style={{ whiteSpace: 'pre-line' }}>
                {`Gradient is a vibrant student community that embraces the dynamic field of AI and ML.

We focus on fostering innovation, collaboration and knowledge sharing among aspiring machine learning enthusiasts.

Our mission is to create a platform where passion for technology thrives, and groundbreaking ideas flourish.`}
              </span>
            </p>
          </div>
        </motion.section>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Achievements Section */}
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
                  Our Achievements
                </h2>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-gray-300">
                <div>
                  <Award className="text-purple-400 mx-auto mb-2" size={36} />
                  <h3 className="text-2xl font-bold">40+</h3>
                  <p className="text-lg">Events Conducted</p>
                </div>
                <div>
                  <Award className="text-purple-400 mx-auto mb-2" size={36} />
                  <h3 className="text-2xl font-bold">2000+</h3>
                  <p className="text-lg">Participants</p>
                </div>
                <div>
                  <Award className="text-purple-400 mx-auto mb-2" size={36} />
                  <h3 className="text-2xl font-bold">200+</h3>
                  <p className="text-lg">Community Members</p>
                </div>
                <div>
                  <Award className="text-purple-400 mx-auto mb-2" size={36} />
                  <h3 className="text-2xl font-bold">₹3L+</h3>
                  <p className="text-lg">Sponsorship Raised</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-purple-500/20">
                  <Image
                    src="https://gradient-content-server.vercel.app/content/merchbackshot.png"
                    alt="Our Very Merchandise"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <p className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    Our Very Own Merchandise
                  </p>
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-purple-500/20">
                  <Image
                    src="https://gradient-content-server.vercel.app/content/gw1.jpg"
                    alt="The First Ever Gradient Week"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <p className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    The First Ever Gradient Week
                  </p>
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-purple-500/20">
                  <Image
                    src="https://gradient-content-server.vercel.app/content/posters/hacka24.webp"
                    alt="website"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <p className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    Our Biggest Hackathon
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Roots Section */}
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
                  <h2 className="text-3xl font-bold text-center text-purple-400">
                    Our Roots
                  </h2>
                </div>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
                  Gradient founded in 2022, with the aim of reaching new heights and boldly doing what no one has done before.
                </p>

                <div className="grid md:grid-cols-2 gap-6 justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300" />
                    <div className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20">
                      <Image
                        src="https://gradient-content-server.vercel.app/content/inaugration.png"
                        alt="Inauguration Ceremony 1"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center mt-2 text-white-100 mb-2">Inauguration ceremony of Gradient (2022)</p>
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
                        src="https://gradient-content-server.vercel.app/content/founding core.jpg"
                        alt="23 core"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center mt-2 text-white-100 mb-2">'23 Core, The First Core</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="group relative md:col-span-2 mx-auto max-w-md"
                  >
                    <div className="absolute inset-0 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300" />
                    <div className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20">
                      <Image
                        src="https://gradient-content-server.vercel.app/content/core24.jpg"
                        alt="24 core"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center mt-2 text-white-100 mb-2">The 2024 Core Team</p>
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
            className="relative"
          >
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-purple-500/30" />
                <h2 className="text-3xl font-bold px-6 text-center text-purple-400">
                  What We Do
                </h2>
                <div className="h-px w-12 bg-purple-500/30" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative group"
                  >
                    <div className="flex flex-col h-full p-6 rounded-xl bg-gradient-to-r from-purple-800/40 to-purple-900/40 shadow-md border border-purple-500/20 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <activity.icon
                          className="text-purple-400 group-hover:text-purple-300 transition-colors"
                          size={40}
                        />
                        {/* Title */}
                        <h3 className="text-lg font-bold text-purple-200">{activity.title}</h3>
                      </div>
                      {/* Description */}
                      <p className="text-m text-white-700 mt-4 flex-grow">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}