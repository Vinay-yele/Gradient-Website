'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, MousePointerClick } from 'lucide-react';

// Import data from separate file
import { recapSections } from './recap-data';

export default function GradientWeekRecap() {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openSection = (section) => {
    setActiveSection(section);
    setCurrentImageIndex(0);
  };
  
  const closeSection = () => setActiveSection(null);

  const nextImage = () => {
    if (activeSection) {
      setCurrentImageIndex((prev) => 
        prev === activeSection.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeSection) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeSection.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Reorganize sections for the desired layout
  const reorganizedSections = [
    // First row (unchanged)
    [recapSections.find(s => s.id === 'inauguration'), recapSections.find(s => s.id === 'impact-ai'), recapSections.find(s => s.id === 'parallel-fusion')],
    
    // Second row (cultural evening, collaboration events, AI agents workshop [new])
    [recapSections.find(s => s.id === 'cultural-evening'), recapSections.find(s => s.id === 'collab-events'), recapSections.find(s => s.id === 'ai-agents-workshop')],
    
    // Third row (general shots, behind the scenes)
    [recapSections.find(s => s.id === 'general-shots'), recapSections.find(s => s.id === 'behind-scenes')]
  ];

  // Group sections for mobile layout (all sections in sequence)
  const mobileSections = [
    ...recapSections.filter(s => s.id !== 'ai-agents-workshop'), 
    recapSections.find(s => s.id === 'ai-agents-workshop')
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black animate-gradient-shift">
          {/* Animated particles/circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
              animate={{ 
                x: ['-10%', '60%', '20%', '-10%'],
                y: ['10%', '40%', '60%', '10%'],
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            <motion.div 
              className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
              animate={{ 
                x: ['70%', '30%', '50%', '70%'],
                y: ['60%', '20%', '40%', '60%'],
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            <motion.div 
              className="absolute w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"
              animate={{ 
                x: ['40%', '80%', '10%', '40%'],
                y: ['30%', '60%', '10%', '30%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50"></div>
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 py-16 mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gradient Week <span className="text-purple-500">'25</span> Recap
        </motion.h1>

        {/* Grid Layout for Timeline */}
        <div className="relative">
          {!isMobile && reorganizedSections.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative mb-24">
              {/* Horizontal line connecting the row */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform -translate-y-1/2 z-0 hidden md:block"></div>
              
              {/* Section cards in this row */}
              <div className={`grid grid-cols-1 md:grid-cols-${row.length === 2 ? '2' : '3'} gap-12 relative z-10`}>
                {row.map((section, colIndex) => {
                  if (!section) return null; // Skip if section is undefined
                  
                  // Calculate tilt angle based on position in grid
                  const tiltDirection = (rowIndex + colIndex) % 2 === 0 ? 1 : -1;
                  const tiltAngle = `${tiltDirection * 3}deg`;
                  
                  return (
                    <motion.div
                      key={section.id}
                      className="relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: colIndex * 0.1 }}
                    >
                      {/* Vertical line connecting to horizontal timeline */}
                      {!isMobile && (
                        <div 
                          className={`absolute left-1/2 w-1 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500 to-transparent z-0 hidden md:block
                            ${/* Connect specific sections between rows */
                              (rowIndex === 0 && colIndex === 2) || // Third section in first row
                              (rowIndex === 1 && colIndex === 0) || // First section in second row
                              (rowIndex === 1 && colIndex === 0) || // First section in second row connects to third row
                              (rowIndex === 2 && colIndex === 0)    // First section in third row
                              ? '' : 'invisible'
                            }
                          `}
                        >
                          {/* Top line for connecting rows */}
                          {((rowIndex === 1 && colIndex === 0) || (rowIndex === 2 && colIndex === 0)) && 
                            <div className="h-12 bottom-full absolute left-0 right-0"></div>
                          }
                          
                          {/* Bottom line for connecting to next row */}
                          {((rowIndex === 0 && colIndex === 2) || (rowIndex === 1 && colIndex === 0)) && 
                            <div className="h-12 top-full absolute left-0 right-0"></div>
                          }
                        </div>
                      )}
                      
                      {/* Timeline dot (removed blue dot in the middle) */}
                      
                      {/* The section card */}
                      <motion.div
                        className="bg-gray-900/80 backdrop-blur-md border border-purple-700/50 rounded-xl overflow-hidden cursor-pointer hover:border-purple-500 transition-all duration-300 shadow-lg shadow-purple-900/20 relative z-10"
                        style={{ transform: `rotate(${tiltAngle})` }}
                        whileHover={{ scale: 1.05, rotate: '0deg' }}
                        onClick={() => openSection(section)}
                      >
                        <div className="relative">
                          <img 
                            src={section.coverImage} 
                            alt={section.title} 
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                            <div className="p-6">
                              <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                              <p className="text-gray-300 line-clamp-2 mb-4">{section.brief}</p>
                              
                              {/* CTA Button */}
                              <motion.button
                                className="flex items-center gap-2 bg-purple-700/70 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <MousePointerClick size={16} />
                                Click Me
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Vertical connecting line to next row (if not the last row) */}
              {rowIndex < reorganizedSections.length - 1 && !isMobile && (
                <div 
                  className={`absolute w-1 h-24 transform -translate-x-1/2 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -bottom-24 hidden md:block
                    ${rowIndex === 0 ? 'left-5/6' : 'left-1/6'}`}
                    style={{
                      left: rowIndex === 0 ? 'calc(83.33% - 0.5px)' : 'calc(16.67% - 0.5px)'
                    }}
                ></div>
              )}
            </div>
          ))}
          
          {/* Mobile layout (stacked vertically) */}
          {isMobile && (
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 z-0"></div>
              
              {mobileSections.map((section, index) => {
                if (!section) return null;
                
                return (
                  <motion.div 
                    key={section.id}
                    className="relative mb-16 pl-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Connecting line */}
                    <div className="absolute left-0 top-1/2 w-8 h-1 bg-gradient-to-r from-purple-600 to-transparent transform -translate-y-1/2"></div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-1/2 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                    
                    {/* The section card */}
                    <motion.div
                      className="bg-gray-900/80 backdrop-blur-md border border-purple-700/50 rounded-xl overflow-hidden cursor-pointer hover:border-purple-500 transition-all duration-300 shadow-lg shadow-purple-900/20"
                      whileHover={{ scale: 1.03 }}
                      onClick={() => openSection(section)}
                    >
                      <div className="relative">
                        <img 
                          src={section.coverImage} 
                          alt={section.title} 
                          className="w-full h-56 object-cover" // Increased height for mobile too
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                          <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2 mb-3">{section.brief}</p>
                            
                            {/* CTA Button */}
                            <motion.button
                              className="flex items-center gap-1 bg-purple-700/70 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <MousePointerClick size={14} />
                              Click Me
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Thank you message */}
        <motion.div 
          className="text-center mt-32 mb-16 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Thank you for being a part of Gradient Week '25
            </h2>
            <p className="text-xl text-purple-300">With Love, Gradient</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Slideshow Popup */}
      <AnimatePresence>
        {activeSection && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSection}
          >
            <motion.div
              className="bg-gray-900 rounded-xl w-full max-w-4xl overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-20 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                onClick={closeSection}
              >
                <X size={24} />
              </button>

              {/* Main slideshow */}
              <div className="relative aspect-video">
                <motion.img 
                  key={currentImageIndex}
                  src={activeSection.images[currentImageIndex].url} 
                  alt={activeSection.images[currentImageIndex].alt} 
                  className="w-full h-full object-contain bg-black/70"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Navigation arrows */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {activeSection.images.length}
                </div>
              </div>

              {/* Image thumbnails */}
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800 p-2 gap-2 bg-black/50">
                {activeSection.images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className={`flex-none h-16 w-24 cursor-pointer transition-all rounded overflow-hidden ${idx === currentImageIndex ? 'ring-2 ring-purple-500' : 'opacity-60 hover:opacity-100'}`}
                    onClick={() => goToImage(idx)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{activeSection.title}</h3>
                <p className="text-gray-300">{activeSection.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}