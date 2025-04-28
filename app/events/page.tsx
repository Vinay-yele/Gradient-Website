"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Ship, Music, Mic } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Jokes on You Again",
      description: "Stand-Up Comedy Event Ft. Niroop Mohan",
      icon: <Mic size={36} className="text-orange-400" />, 
      color: "bg-gradient-to-br from-orange-100 to-orange-300",
      hoverColor: "from-orange-200 to-orange-400",
      link: "https://events.bmsutsav.in/events/GRDJOY"
    },
    {
      id: 2,
      title: "Uncharted Lost Voyage",
      description: "Online Treasure Hunt",
      icon: <Ship size={36} className="text-blue-400" />, 
      color: "bg-gradient-to-br from-blue-100 to-blue-300",
      hoverColor: "from-blue-200 to-blue-400",
      link: "https://events.bmsutsav.in/events/GRDULV"
    },
    {
      id: 3,
      title: "Sync or Sink",
      description: "Team Up for the Biggest Test of Knowledge",
      icon: <Music size={36} className="text-green-400" />, 
      color: "bg-gradient-to-br from-green-100 to-green-300",
      hoverColor: "from-green-200 to-green-400",
      link: "https://events.bmsutsav.in/events/GRDSOS"
    }
  ];

  // Particles animation setup
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div
      className="min-h-screen overflow-hidden text-gray-900 relative"
      style={{ backgroundColor: "#0f172a" }} // Darker background color (slate-900)
    >
      {/* Improved animated darker background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark gradient background with cosmic feel */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        </motion.div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #4c1d95 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, #4c1d95 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #4c1d95 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #4c1d95 0%, transparent 50%)"
            ]
          }}
          transition={{ 
            duration: 15, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />

        {/* Glowing particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.3)"
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Mesh grid overlay for depth */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <Navbar />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 sm:px-12 lg:px-16 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20 mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            GRADIENT X UTSAV
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Exciting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-gold-300 to-pink-400">Events</span> Await
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Get ready for an extraordinary showcase of talent, creativity, and innovation!
          </motion.p>
        </motion.div>

        {/* Events Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 * index,
                type: "spring",
                stiffness: 100
              }}
              className="relative overflow-hidden"
            >
              <motion.div
                className={`relative w-full p-8 rounded-2xl overflow-hidden group cursor-pointer ${event.color} hover:shadow-2xl transition-all duration-500`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px 5px rgba(255, 255, 255, 0.1)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
              >
                {/* Animated background on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.hoverColor} opacity-70`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] w-full h-full" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-64 flex flex-col justify-between">
                  <div>
                    <motion.div 
                      className="mb-6 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md" 
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      {event.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-700/90">{event.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-col space-y-3">
                      <span className="text-xl font-semibold text-gray-700">Coming Soon</span>

                      <Link href={event.link} className="inline-block">
                        <motion.span
                          className="inline-flex items-center px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all duration-300"
                          whileHover={{ x: 8, backgroundColor: "#f3f4f6" }}
                        >
                          <span className="mr-2">Register Now</span>
                          <motion.span
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight size={16} />
                          </motion.span>
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}