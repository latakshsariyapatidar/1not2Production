/**
 * DiwaliGiftBox Component
 * 
 * A floating gift box icon that shakes continuously at the bottom right of the screen.
 * When clicked, it opens a modal displaying a movie poster and Diwali release announcement.
 * 
 * Features:
 * - Fixed positioned gift box with shaking animation
 * - Modal with movie poster and release text
 * - Smooth animations using framer-motion
 * - Responsive design with TailwindCSS
 * - Clean close functionality
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DiwaliGiftBox = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Opens the modal and hides the gift box
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal and shows the gift box again
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Prevents modal from closing when clicking on modal content
   */
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Gift Box - Fixed at bottom right */}
      <AnimatePresence>
        {!isModalOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              // Continuous shaking animation
              rotate: [0, -3, 3, -3, 3, 0],
              x: [0, -2, 2, -2, 2, 0],
              y: [0, -1, 1, -1, 1, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: 0.3 },
              opacity: { duration: 0.3 },
              // Shaking animation configuration
              rotate: { 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              },
              x: { 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              },
              y: { 
                repeat: Infinity, 
                duration: 2.2, 
                ease: "easeInOut" 
              }
            }}
            className="fixed bottom-6 right-6 z-40 cursor-pointer"
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gift Box Container */}
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-4 rounded-2xl shadow-2xl border-2 border-red-400 hover:shadow-red-500/25 transition-all duration-300">
              {/* Gift Box Icon */}
              <div className="relative">
                {/* Box base */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg relative overflow-hidden">
                  {/* Gift ribbon vertical */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-red-400 to-red-600"></div>
                  {/* Gift ribbon horizontal */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                  {/* Bow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute top-1 -left-1 w-2 h-2 bg-red-400 rounded-full transform rotate-45"></div>
                    <div className="absolute top-1 -right-1 w-2 h-2 bg-red-400 rounded-full transform -rotate-45"></div>
                  </div>
                  {/* Sparkle effects */}
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-1 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Backdrop and Content */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm px-4"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 300 
              }}
              className="relative bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 rounded-3xl shadow-2xl border-2 border-yellow-600 max-w-sm sm:max-w-md md:max-w-lg w-full mx-4 overflow-hidden"
              onClick={handleModalContentClick}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                ✕
              </motion.button>

              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-400/20 rounded-3xl"></div>

              {/* Modal Body */}
              <div className="relative p-6 sm:p-8 text-center">
                {/* Diwali decorative elements */}
                <div className="absolute top-2 left-2 text-yellow-400 text-lg animate-pulse">🪔</div>
                <div className="absolute top-2 right-12 text-yellow-400 text-lg animate-pulse delay-500">🪔</div>
                <div className="absolute bottom-2 left-4 text-orange-400 text-sm animate-pulse delay-1000">✨</div>
                <div className="absolute bottom-2 right-4 text-orange-400 text-sm animate-pulse delay-700">✨</div>

                {/* Movie Poster */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-6 relative"
                >
                  <div className="relative mx-auto w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500">
                    {/* Placeholder movie poster - replace with your actual poster */}
                    <img
                      src="public/moviePoster/IMG-20250822-WA0046.jpg"
                      alt="Movie Poster"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback poster design */}
                    
                    {/* Poster shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Release Text */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="space-y-3"
                >
                  {/* Main release text */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-['Heathergreen']">
                    Releasing this Diwali
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-yellow-200 text-sm sm:text-base opacity-90 font-['Akshar']">
                    Get ready for an unforgettable cinematic experience
                  </p>
                  
                  {/* Diwali greeting */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-yellow-400 text-lg">🪔</span>
                    <span className="text-orange-300 text-sm font-medium">
                      Happy Diwali 2025
                    </span>
                    <span className="text-yellow-400 text-lg">🪔</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative border */}
              <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DiwaliGiftBox;
