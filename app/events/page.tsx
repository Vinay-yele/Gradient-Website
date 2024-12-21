'use client'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    title: "AI Workshop",
    date: "2023-09-15",
    time: "14:00 - 17:00",
    location: "Main Auditorium",
    description: "Learn the basics of artificial intelligence and its applications in various industries."
  },
  {
    title: "Machine Learning Hackathon",
    date: "2023-10-20",
    time: "09:00 - 18:00",
    location: "Computer Science Lab",
    description: "Participate in our 24-hour hackathon and build innovative ML solutions to real-world problems."
  },
  {
    title: "Guest Lecture: Future of AI",
    date: "2023-11-05",
    time: "16:00 - 18:00",
    location: "Seminar Hall",
    description: "Join us for an insightful talk by industry expert Dr. Jane Doe on the future prospects of AI."
  }
]

export default function Events() {
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
          Upcoming Events
        </motion.h1>
        <div className="grid gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">{event.title}</h2>
              <div className="flex items-center text-gray-300 mb-2">
                <Calendar className="mr-2" size={16} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-300 mb-2">
                <Clock className="mr-2" size={16} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin className="mr-2" size={16} />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-400">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

