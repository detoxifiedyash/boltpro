import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const heroBackgrounds = [
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Campus Life',
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Research Excellence',
  },
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Innovation Hub',
  },
];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 transform scale-105"
            style={{ 
              backgroundImage: `url(${heroBackgrounds[currentBg].url})`,
              animation: 'slowZoom 20s infinite alternate'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/80 to-cool-grey/90" />
        </motion.div>
      </AnimatePresence>

      <div className="relative min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Shape Your Future at
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-poppy">
                  {heroBackgrounds[currentBg].title}
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join our community of innovators, leaders, and changemakers. Experience world-class education that transforms lives.
              </motion.p>

              <motion.div 
                className="mt-10 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-amber-400 to-poppy hover:from-amber-500 hover:to-poppy/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-lg transform transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative pb-8 text-center"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => {
              document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="sr-only">Scroll down</span>
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}