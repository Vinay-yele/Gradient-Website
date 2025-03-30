'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, Clock, MapPin, IndianRupee, Phone, Mail, Users } from 'lucide-react'
import { flagshipEvents, culturalEvent, collaborationEvents } from './events-data'

// Add a type definition for the event ID to fix the TypeScript error
type EventId = string | number;

// Add interface for the event object
interface EventType {
  id: EventId;
  title: string;
  image: string;
  description: string;
  date?: string;
  time?: string;
  venue?: string;
  teamSize?: string;
  fee?: string;
  registrationLink: string;
  coordinators?: Array<{
    name: string;
    phone?: string;
    email?: string;
  }>;
}

// Interface for the EventCard props
interface EventCardProps {
  event: EventType;
  isOpen: boolean;
  onToggle: (id: EventId) => void;
}

export default function Events() {
  // Create an object to store the open state for each event
  const [openEvents, setOpenEvents] = useState<Record<EventId, boolean>>({});

  // Function to toggle a specific event's open state
  const toggleEvent = (eventId: EventId) => {
    setOpenEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  // Function to check if an event is open
  const isEventOpen = (eventId: EventId): boolean => {
    return !!openEvents[eventId];
  };

  // Event Card Component
  const EventCard = ({ event, isOpen, onToggle }: EventCardProps) => {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <h3 className="text-xl font-bold">{event.title}</h3>
          </div>
        </div>
        <div
          className="p-4 cursor-pointer flex items-center justify-center border-t border-purple-700/30"
          onClick={() => onToggle(event.id)}
        >
          <span className="text-purple-300 mr-2">
            {isOpen ? "Hide Details" : "Show Details"}
          </span>
          {isOpen ? (
            <ChevronUp className="text-purple-300" />
          ) : (
            <ChevronDown className="text-purple-300" />
          )}
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-purple-700/30">
              <p className="text-gray-300 mb-4">
                {event.description}
              </p>
              <div className="space-y-2 mb-4">
                {event.date && (
                  <div className="flex items-center gap-2 text-purple-300">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center gap-2 text-purple-300">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center gap-2 text-purple-300">
                    <MapPin size={16} />
                    <span>{event.venue}</span>
                  </div>
                )}
                {event.teamSize && (
                  <div className="flex items-center gap-2 text-purple-300">
                    <Users size={16} />
                    <span>{event.teamSize}</span>
                  </div>
                )}
                {event.fee && (
                  <div className="flex items-center gap-2 text-purple-300">
                    {event.fee.includes("₹") ? <IndianRupee size={16} /> : null}
                    <span>{event.fee}</span>
                  </div>
                )}
              </div>
              {event.coordinators && event.coordinators.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    {event.coordinators.length > 1 ? "Event Coordinators" : "Event Coordinator"}
                  </h4>
                  <div className="space-y-3">
                    {event.coordinators.map((coordinator, idx) => (
                      <div key={idx} className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <p className="font-medium">{coordinator.name}</p>
                          {coordinator.phone && (
                            <div className="flex items-center gap-2 text-sm mt-1 sm:mt-0">
                              <Phone size={14} />
                              <span>{coordinator.phone}</span>
                            </div>
                          )}
                        </div>
                        {coordinator.email && (
                          <div className="flex items-center gap-2 text-sm mt-1">
                            <Mail size={14} />
                            <span>{coordinator.email}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <motion.a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 rounded-lg text-center transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen text-white relative">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover md:object-center object-top"
          style={{ minHeight: "100vh", minWidth: "100vw" }}
        >
          <source src="/gwback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Navbar />

      <section className="relative z-10 container mx-auto px-4 py-16 mt-20">
        {/* Flagship Events Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Flagship Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {flagshipEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              isOpen={isEventOpen(event.id)}
              onToggle={toggleEvent}
            />
          ))}
        </div>

        {/* Cultural Evening Section */}
        <div className="my-16">
          <div className="bg-gradient-to-r from-purple-900/80 to-black/80 backdrop-blur-md rounded-xl p-8 border border-purple-700/50 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">{culturalEvent.title}</h3>
            <p className="text-xl">
              Join us on <strong>{culturalEvent.date} at {culturalEvent.time} at {culturalEvent.venue}</strong> to conclude this amazing week with performances, music, and celebration!
            </p>
          </div>
        </div>

        {/* Collaborative Events Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Collaboration Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collaborationEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              isOpen={isEventOpen(event.id)}
              onToggle={toggleEvent}
            />
          ))}
        </div>
      </section>
    </main>
  );
}