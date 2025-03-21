'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'

const events = [
  {
    title: "AI Workshop",
    date: "September 15, 2023",
    time: "14:00 - 17:00",
    location: "Main Auditorium",
    description: "Learn the basics of artificial intelligence and its applications in various industries.",
    attendees: 120,
  },
  {
    title: "Machine Learning Hackathon",
    date: "October 20, 2023",
    time: "09:00 - 18:00",
    location: "Computer Science Lab",
    description: "Participate in our 24-hour hackathon and build innovative ML solutions to real-world problems.",
    attendees: 75,
  },
  {
    title: "Guest Lecture: Future of AI",
    date: "November 5, 2023",
    time: "16:00 - 18:00",
    location: "Seminar Hall",
    description: "Join us for an insightful talk by industry expert Dr. Jane Doe on the future prospects of AI.",
    attendees: 200,
  }
]

export default function Events() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Discover our latest events and be part of the future of technology.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-3">{event.title}</h2>
              <div className="text-gray-400 text-sm space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-purple-400" size={18} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-purple-400" size={18} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-purple-400" size={18} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-purple-400" size={18} />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{event.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition"
              >
                Register Now <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
