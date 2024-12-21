import React from 'react';
import { Camera, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';

const galleryItems = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    title: 'Tech Conference 2024',
    description: 'Annual developer conference featuring the latest in web technologies',
    date: 'March 15, 2024',
    location: 'San Francisco'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    title: 'Startup Pitch Night',
    description: 'Emerging entrepreneurs showcase their innovative solutions',
    date: 'April 2, 2024',
    location: 'New York'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    title: 'Design Workshop',
    description: 'Interactive session on modern UI/UX principles',
    date: 'March 20, 2024',
    location: 'London'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    title: 'Team Building Day',
    description: 'Collaborative activities to strengthen team bonds',
    date: 'April 5, 2024',
    location: 'Seattle'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    title: 'Innovation Summit',
    description: 'Exploring breakthrough technologies and future trends',
    date: 'March 25, 2024',
    location: 'Austin'
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    title: 'Code for Good',
    description: 'Hackathon focused on social impact projects',
    date: 'April 10, 2024',
    location: 'Chicago'
  }
];

// Add more items following the same pattern up to 40-50 items...

function App() {
  return (
    <div className="my-8 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r  from-purple-400 to-purple-600s text-transparent bg-clip-text">
          Event Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white opacity-75" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
