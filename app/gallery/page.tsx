'use client'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ChevronDown, Users, ArrowRight, Image as ImageIcon, ChevronRight, ChevronUp } from 'lucide-react'

// Event data structure organized by category and year
const eventCategories = [
  {
    name: "Gradient Week",
    description: "Our annual tech innovation week showcasing cutting-edge AI and ML projects",
    years: [
      {
        year: "2024",
        events: [
          {
            title: "AI Workshop",
            date: "2024-03-15",
            time: "14:00 - 17:00",
            location: "Main Auditorium",
            description: "Learn the basics of artificial intelligence and its applications in various industries.",
            attendees: 120,
            status: "registration-open",
            images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"]
          },
          {
            title: "Machine Learning Hackathon",
            date: "2024-03-17",
            time: "09:00 - 18:00",
            location: "Computer Science Lab",
            description: "Participate in our 24-hour hackathon and build innovative ML solutions to real-world problems.",
            attendees: 75,
            status: "registration-open",
            images: ["/placeholder4.jpg", "/placeholder5.jpg"]
          }
        ]
      }
    ]
  },
  {
    name: "Phaseshift",
    description: "The flagship technical symposium featuring competitions, workshops and tech showcases",
    years: [
      {
        year: "2023",
        events: [
          {
            title: "Robotics Challenge",
            date: "2023-10-12",
            time: "10:00 - 16:00",
            location: "Engineering Block",
            description: "Build and program robots to navigate complex terrains and complete tasks.",
            attendees: 85,
            status: "completed",
            images: ["/placeholder6.jpg", "/placeholder7.jpg", "/placeholder8.jpg"]
          },
          {
            title: "Capture The Flag",
            date: "2023-10-13",
            time: "09:00 - 20:00",
            location: "Computer Center",
            description: "Test your cybersecurity skills in this intense 12-hour hacking competition.",
            attendees: 64,
            status: "completed",
            images: ["/placeholder9.jpg"]
          }
        ]
      },
      {
        year: "2022",
        events: [
          {
            title: "Web Development Showdown",
            date: "2022-11-05",
            time: "09:00 - 17:00",
            location: "IT Department",
            description: "Create responsive web applications in this fast-paced development competition.",
            attendees: 92,
            status: "completed",
            images: ["/placeholder10.jpg", "/placeholder11.jpg"]
          }
        ]
      }
    ]
  },
  {
    name: "Utsav",
    description: "Our annual cultural festival celebrating art, music, dance and creative expression",
    years: [
      {
        year: "2023",
        events: [
          {
            title: "Battle of Bands",
            date: "2023-12-08",
            time: "18:00 - 22:00",
            location: "Open Air Theatre",
            description: "Witness incredible musical talent as bands compete for the top prize.",
            attendees: 350,
            status: "completed",
            images: ["/placeholder12.jpg", "/placeholder13.jpg", "/placeholder14.jpg"]
          },
          {
            title: "Dance Showdown",
            date: "2023-12-09",
            time: "17:00 - 20:00",
            location: "Main Auditorium",
            description: "Experience breathtaking performances from dance groups across the region.",
            attendees: 280,
            status: "completed",
            images: ["/placeholder15.jpg", "/placeholder16.jpg"]
          }
        ]
      },
      {
        year: "2022",
        events: [
          {
            title: "Fashion Show",
            date: "2022-12-15",
            time: "19:00 - 21:00",
            location: "Central Quad",
            description: "A spectacular showcase of style, creativity and design by aspiring fashion enthusiasts.",
            attendees: 420,
            status: "completed",
            images: ["/placeholder17.jpg", "/placeholder18.jpg"]
          }
        ]
      }
    ]
  },
  {
    name: "Standalone",
    description: "Special events and one-off initiatives throughout the academic year",
    years: [
      {
        year: "2024",
        events: [
          {
            title: "Guest Lecture: Future of AI",
            date: "2024-04-05",
            time: "16:00 - 18:00",
            location: "Seminar Hall",
            description: "Join us for an insightful talk by industry expert Dr. Jane Doe on the future prospects of AI.",
            attendees: 200,
            status: "coming-soon",
            images: []
          }
        ]
      },
      {
        year: "2023",
        events: [
          {
            title: "Industry Connect Workshop",
            date: "2023-08-22",
            time: "10:00 - 13:00",
            location: "Conference Center",
            description: "Connect with industry professionals and gain insights into career opportunities in tech.",
            attendees: 150,
            status: "completed",
            images: ["/placeholder19.jpg", "/placeholder20.jpg"]
          }
        ]
      }
    ]
  }
];

export default function Events() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openYear, setOpenYear] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleYear = (categoryIndex, yearIndex) => {
    const key = `${categoryIndex}-${yearIndex}`;
    setOpenYear(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const viewGallery = (event) => {
    setSelectedEvent(event);
    setShowGallery(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar />    
          <h1 className="text-5xl md:text-7xl font-bold mb-4 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Events & Activities
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our diverse range of events spanning technical festivals, cultural celebrations, and innovative workshops.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {eventCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
              className="group relative"
            >
              <div 
                className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300 cursor-pointer"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-purple-400">{category.name}</h2>
                    <p className="text-gray-400 mt-2">{category.description}</p>
                  </div>
                  <div className="text-purple-400">
                    {openCategory === categoryIndex ? 
                      <ChevronUp size={24} /> : 
                      <ChevronDown size={24} />
                    }
                  </div>
                </div>
              </div>

              {openCategory === categoryIndex && (
                <div className="mt-4 pl-4 space-y-4 border-l-2 border-purple-500/30">
                  {category.years.map((yearData, yearIndex) => (
                    <div key={yearData.year} className="space-y-4">
                      <div 
                        className="flex items-center space-x-2 text-xl font-semibold text-purple-300 cursor-pointer" 
                        onClick={() => toggleYear(categoryIndex, yearIndex)}
                      >
                        {openYear[`${categoryIndex}-${yearIndex}`] ? 
                          <ChevronUp size={20} /> : 
                          <ChevronRight size={20} />
                        }
                        <span>{yearData.year}</span>
                      </div>

                      {openYear[`${categoryIndex}-${yearIndex}`] && (
                        <div className="space-y-4 pl-6">
                          {yearData.events.map((event, eventIndex) => (
                            <div 
                              key={event.title} 
                              className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-xl p-5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300"
                            >
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                  <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                                  {event.status === "registration-open" && (
                                    <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                      Registration Open
                                    </span>
                                  )}
                                  {event.status === "coming-soon" && (
                                    <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                                      Coming Soon
                                    </span>
                                  )}
                                  {event.status === "completed" && (
                                    <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                                      Completed
                                    </span>
                                  )}
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-gray-300">
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
                                    <span>{event.attendees} participants</span>
                                  </div>
                                </div>
                                
                                <p className="text-gray-400 text-lg">
                                  {event.description}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-1">
                                  {event.status === "registration-open" && (
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="flex items-center justify-center space-x-2 px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 group/btn"
                                    >
                                      <span>Register Now</span>
                                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                  )}
                                  
                                  {event.images.length > 0 && (
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => viewGallery(event)}
                                      className="flex items-center justify-center space-x-2 px-6 py-2 bg-transparent border border-purple-500 rounded-full hover:bg-purple-500/10 transition-colors duration-300"
                                    >
                                      <ImageIcon size={18} />
                                      <span>View Gallery ({event.images.length})</span>
                                    </motion.button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && selectedEvent && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedEvent.title} - Gallery</h3>
              <button 
                onClick={() => setShowGallery(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedEvent.images.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-gray-800 aspect-video">
                  <img src={`/api/placeholder/600/400`} alt={`${selectedEvent.title} event photo ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
