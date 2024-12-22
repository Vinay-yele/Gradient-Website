'use client'
import Footer from '@/components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Trophy, Users, Building2, Microscope, GraduationCap, Brain, Network, LineChart, Server, Code, Database, Cpu } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Research Papers', value: '50+', icon: Microscope },
  { label: 'Faculty Members', value: '25+', icon: Users },
  { label: 'Students Placed', value: '250+', icon: Building2 },
  { label: 'Student Achievements', value: '100+', icon: Trophy }
]

const researchAreas = [
  {
    title: 'Machine Learning',
    description: 'Deep learning, reinforcement learning, and neural networks research with state-of-the-art facilities.',
    icon: Brain,
    projects: ['Neural Architecture Search', 'Automated Machine Learning', 'Deep Reinforcement Learning']
  },
  {
    title: 'Computer Vision',
    description: 'Advanced image processing and visual recognition systems development using cutting-edge algorithms.',
    icon: Network,
    projects: ['Object Detection', 'Image Segmentation', 'Visual SLAM']
  },
  {
    title: 'Natural Language Processing',
    description: 'Research in text analysis, language understanding, and generation using transformer models.',
    icon: LineChart,
    projects: ['Sentiment Analysis', 'Machine Translation', 'Text Generation']
  }
]

const facilities = [
  {
    name: 'AI Research Lab',
    description: 'State-of-the-art computing facilities with GPU clusters for deep learning research.',
    image: '/T.png'
  },
  {
    name: 'Innovation Center',
    description: 'Collaborative space for students to work on AI/ML projects with industry mentors.',
    image: '/T.png'
  },
  {
    name: 'Computing Infrastructure',
    description: 'High-performance computing clusters with the latest NVIDIA GPUs.',
    image: '/T.png'
  }
]

const centerOfExcellence = {
  infrastructure: [
    {
      icon: Server,
      title: 'Nvidia DGX A100 Server',
      description: 'State-of-the-art supercomputing server for large-scale computation and simulation'
    },
    {
      icon: Database,
      title: 'High-Performance Computing',
      description: 'Advanced computing and storage infrastructure for intensive AI workloads'
    },
    {
      icon: Code,
      title: 'AI Software Suite',
      description: 'Complete suite of advanced AI software from NVIDIA NGC'
    },
    {
      icon: Cpu,
      title: 'Scalable Infrastructure',
      description: 'Flexible and scalable infrastructure for projects of all sizes'
    }
  ],
  services: [
    'Access to cutting-edge AI technology and infrastructure',
    'Project-based collaboration and support',
    'Access to Nvidia DGX A100 for large-scale computation',
    'R&D opportunities with the Center\'s team',
    'AI model Development and Deployment services',
    'Access to pre-trained AI/ML models and tools',
    'Performance Optimization and Scalability support',
    'Large-scale Data processing and Analysis'
  ]
}

export default function DepartmentWork() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Department of AI & ML
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering research and innovation in Artificial Intelligence and Machine Learning, 
            preparing students for the future of technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm border border-purple-500/20"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Research Areas Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <area.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{area.title}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.projects.map((project) => (
                    <li key={project} className="text-gray-500 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                      {project}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Center of Excellence Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              B.S. Narayan Center of Excellence
              <span className="block text-xl text-purple-400 mt-2">in AI&ML</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A state-of-the-art facility fostering dynamic industry-academic synergy for AI adoption, 
              powered by cutting-edge infrastructure and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Infrastructure */}
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Infrastructure</h3>
              <div className="grid gap-6">
                {centerOfExcellence.infrastructure.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <item.icon className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Services Offered</h3>
              <ul className="space-y-4">
                {centerOfExcellence.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden h-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/T.png"
              alt="B.S. Narayan Center of Excellence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg text-gray-300">
                  Experience the future of AI research and development at our cutting-edge facility
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Facilities Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <motion.div
                key={facility.name}
                className="group relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={facility.image}
                  alt={facility.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">{facility.name}</h3>
                  <p className="text-gray-300 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Footer/>
    </main>
  )
}

