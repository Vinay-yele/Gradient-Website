"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Trophy, 
  DollarSign,
  Users,
  Star
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function EventsPage() {
  // Event data from the provided content
  const events = [
    {
      id: 1,
      title: "Jokes on You Again",
      description: "A thrilling comedy show by Bangalore's very own Niroop Mohan, Join us for an show of laughter and entertainment as Niroop takes the stage to share his unique perspective on life, love, and everything in between.",
      date: "May 10th, 2025",
      time: "10:00 AM",
      location: "Auditorium 1, Ground Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹150 per person",
      prizePool: "N/A",
      coordinators: [
        { name: "R Suman", number: "+91 6363742183" },
        { name: "Likith Chowdary", number: "+91 9900773333" }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDJOY",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/JOY.png"
    },
    {
      id: 2,
      title: "Uncharted 3 : Lost Voyage",
      description: "A thrilling high stakes online treasure hunt where participants embark on a quest to uncover hidden treasures and solve intricate puzzles. With a mix of technology and adventure, this event promises excitement and challenges.",
      date: "May 9th, 2025",
      time: "10:00 AM",
      location: "MEL Lab 1 & 2, 7th Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹100 per team",
      prizePool: "₹5,000",
      coordinators: [
        { name: "Pranav Veeraghanta", number: "+91 8073194166" },
        { name: "Siddarth Sahay", number: "+91 9354868006" }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDULV",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/UNC.png"
    },
    {
      id: 3,
      title: "Sync or Sink",
      description: "A test of teamwork and strategy, where participants must work together to solve puzzles and challenges. You either Sync up with your teammates or Sink into the depths of despair.",
      date: "May 10th, 2025",
      time: "2:30 PM",
      location: "CSE Seminar Hall, 4th Floor, PJA Block, BMSCE",
      category: "Utsav 2025",
      status: "registration-open",
      registrationFee: "₹100 per team",
      prizePool: "₹4,000",
      coordinators: [
        { name: "Yashas Nandan", number: "+91 7676823822" },
        { name: "Vignesh Madan", number: "+91 7022433357" }
      ],
      registrationLink: "https://events.bmsutsav.in/events/GRDSOS",
      poster: "https://gradient-content-server.vercel.app/content/utsav25/SOS.png"
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden text-white relative">
      {/* Background Video - Reduced opacity to see more of the background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(0.6)", mixBlendMode: "normal" }}
        >
          <source 
            src="https://gradient-content-server.vercel.app/content/utsav25/bg.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Mesh grid overlay for depth - reduced opacity further */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Dark gradient overlay - significantly reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-purple-950/25 to-black/25" />
      </div>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
        
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .bree-serif-regular {
          font-family: "Bree Serif", serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .event-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Event poster container */
        .event-poster-container {
          position: relative;
          overflow: hidden;
          padding-bottom: 100%; /* Creates a square aspect ratio */
          width: 100%;
        }

        .event-poster-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <Navbar />

      {/* Main content - Added more padding top to show more background */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        {/* Header - Increased title sizes */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 mt-4"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold bree-serif-regular text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            GRADIENT X UTSAV
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold righteous-regular text-gray-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Exciting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-gold-300 to-pink-400">Events</span> Await
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Get ready for an extraordinary showcase of talent, creativity, and innovation!
          </motion.p>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 relative"
        >
          {/* Events List - Reduced card size by using max-w-4xl instead of max-w-5xl */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-4xl mx-auto"
          >
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                variants={itemVariants}
                className="bg-purple-950/50 border border-purple-500/30 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-700/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Left side - Image (reduced height) */}
                  <div className="relative h-56 md:h-auto overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    
                    {/* Event status badge */}
                    <div className="absolute top-3 left-3 z-10">
                      {event.status === "registration-open" && (
                        <span className="px-2 py-1 text-xs font-medium bg-purple-600 text-white rounded-full border border-purple-400/30 shadow-md">
                          Registration Open
                        </span>
                      )}
                      {event.status === "coming-soon" && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full border border-blue-400/30 shadow-md">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Right side - Content (more compact) */}
                  <div className="p-3 md:p-4 flex flex-col col-span-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={16} className="text-yellow-400" fill="#FBBF24" />
                      <span className="text-yellow-200 text-xs font-medium">{event.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 hover:text-purple-300 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-purple-100 mb-3 text-sm">
                      {event.description}
                    </p>
                    
                    {/* Event details - 3 columns layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-purple-400" />
                        <span className="text-purple-200 text-xs">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-purple-400" />
                        <span className="text-purple-200 text-xs">{event.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-purple-400" />
                        <span className="text-purple-200 text-xs">{event.location}</span>
                      </div>
                    </div>

                    {/* Registration fee and prize pool - Made more compact */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="flex items-center gap-2 bg-purple-800/50 p-2 rounded-lg border-l-2 border-purple-500">
                        <DollarSign className="text-purple-300" size={18} />
                        <div>
                          <h4 className="text-purple-300 text-xs font-medium">Registration Fee</h4>
                          <p className="text-white text-xs font-bold">{event.registrationFee}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-purple-800/50 p-2 rounded-lg border-l-2 border-yellow-500">
                        <Trophy className="text-yellow-400" size={18} />
                        <div>
                          <h4 className="text-yellow-300 text-xs font-medium">Prize Pool</h4>
                          <p className="text-white text-xs font-bold">{event.prizePool}</p>
                        </div>
                      </div>
                    </div>

                    {/* Coordinators - Made more compact */}
                    <div className="bg-purple-900/40 p-2 rounded-lg mb-3">
                      <h4 className="text-xs font-bold text-white mb-1">Event Coordinators</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.coordinators.map((coordinator, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Phone className="text-purple-400" size={14} />
                            <div>
                              <p className="text-white text-xs">{coordinator.name}</p>
                              <p className="text-purple-300 text-xs">{coordinator.number}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Registration button */}
                    <div className="mt-auto">
                      <motion.a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md font-medium text-xs"
                      >
                        <span>Register Now</span>
                        <ArrowRight size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}