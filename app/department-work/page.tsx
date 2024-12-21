'use client'
import Footer from '@/components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Users, Brain, ChevronDown, Workflow } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered Traffic Management System",
    description: "Developing an intelligent traffic management system using computer vision and machine learning algorithms to optimize traffic flow in urban areas.",
    team: "Dr. Smith, Jane Doe, John Smith",
    icon: Brain
  },
  {
    title: "Natural Language Processing for Regional Languages",
    description: "Creating NLP models to improve language understanding and translation for various regional languages in India.",
    team: "Prof. Johnson, Alice Brown, Bob Wilson",
    icon: Workflow
  },
  {
    title: "Predictive Maintenance in Manufacturing",
    description: "Implementing machine learning models to predict equipment failures and optimize maintenance schedules in manufacturing plants.",
    team: "Dr. Patel, Emily Chen, Michael Lee",
    icon: Brain
  }
]

export default function DepartmentWork() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
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
            <span className="text-purple-400">Research & Development</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Department Work
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore the cutting-edge AI and ML projects our department is currently working on.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <project.icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users size={16} className="text-purple-400" />
                      <span className="font-medium">Team:</span>
                      <span>{project.team}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
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