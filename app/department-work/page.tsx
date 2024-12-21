'use client'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "AI-Powered Traffic Management System",
    description: "Developing an intelligent traffic management system using computer vision and machine learning algorithms to optimize traffic flow in urban areas.",
    team: "Dr. Smith, Jane Doe, John Smith"
  },
  {
    title: "Natural Language Processing for Regional Languages",
    description: "Creating NLP models to improve language understanding and translation for various regional languages in India.",
    team: "Prof. Johnson, Alice Brown, Bob Wilson"
  },
  {
    title: "Predictive Maintenance in Manufacturing",
    description: "Implementing machine learning models to predict equipment failures and optimize maintenance schedules in manufacturing plants.",
    team: "Dr. Patel, Emily Chen, Michael Lee"
  }
]

export default function DepartmentWork() {
  return (
    <main className="my-8 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-purple-600s"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Department Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center mb-8"
        >
          Explore the cutting-edge AI and ML projects our department is currently working on.
        </motion.p>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-400"><span className="font-semibold">Team:</span> {project.team}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

