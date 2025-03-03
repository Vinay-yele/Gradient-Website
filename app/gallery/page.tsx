'use client'
import React from 'react';
import { Camera, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';  // Import Image from next/image

const galleryItems = [
  {
    id: 1,
    imageUrl: '/T.png',
    title: 'Tech Conference 2024',
    description: 'Annual developer conference featuring the latest in web technologies',
    date: 'March 15, 2024',
    location: 'San Francisco'
  },
  {
    id: 2,
    imageUrl: '/T.png',
    title: 'Startup Pitch Night',
    description: 'Emerging entrepreneurs showcase their innovative solutions',
    date: 'April 2, 2024',
    location: 'New York'
  },
  {
    id: 3,
    imageUrl: '/T.png',
    title: 'Design Workshop',
    description: 'Interactive session on modern UI/UX principles',
    date: 'March 20, 2024',
    location: 'London'
  },
  {
    id: 4,
    imageUrl: '/T.png',
    title: 'Team Building Day',
    description: 'Collaborative activities to strengthen team bonds',
    date: 'April 5, 2024',
    location: 'Seattle'
  },
  {
    id: 5,
    imageUrl: '/T.png',
    title: 'Innovation Summit',
    description: 'Exploring breakthrough technologies and future trends',
    date: 'March 25, 2024',
    location: 'Austin'
  },
  {
    id: 6,
    imageUrl: '/T.png',
    title: 'Code for Good',
    description: 'Hackathon focused on social impact projects',
    date: 'April 10, 2024',
    location: 'Chicago'
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
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
            <span className="text-purple-400">Explore Our Events</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Event Gallery
          </h1>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-purple-400 opacity-75" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
