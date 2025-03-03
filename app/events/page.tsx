'use client'
import Footer from '@/components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ChevronDown, Users, ArrowRight } from 'lucide-react'

const events = [
  {
    title: "AI Workshop",
    date: "2023-09-15",
    time: "14:00 - 17:00",
    location: "Main Auditorium",
    description: "Learn the basics of artificial intelligence and its applications in various industries.",
    attendees: 120,
    status: "registration-open"
  },
  {
    title: "Machine Learning Hackathon",
    date: "2023-10-20",
    time: "09:00 - 18:00",
    location: "Computer Science Lab",
    description: "Participate in our 24-hour hackathon and build innovative ML solutions to real-world problems.",
    attendees: 75,
    status: "registration-open"
  },
  {
    title: "Guest Lecture: Future of AI",
    date: "2023-11-05",
    time: "16:00 - 18:00",
    location: "Seminar Hall",
    description: "Join us for an insightful talk by industry expert Dr. Jane Doe on the future prospects of AI.",
    attendees: 200,
    status: "coming-soon"
  }
]

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
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
            <span className="text-purple-400">Join Our Events</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Upcoming Events
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of technology through our carefully curated events, workshops, and sessions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl font-bold text-purple-400">{event.title}</h2>
                      {event.status === "registration-open" && (
                        <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          Registration Open
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-purple-400" size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="text-purple-400" size={18} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="text-purple-400" size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="text-purple-400" size={18} />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-lg max-w-2xl">
                      {event.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 group/btn"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
    </main>
  )
}