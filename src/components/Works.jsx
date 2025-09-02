import React, { useState, useMemo } from "react";
import Header from "./Header";
import MouseFollower from "./MouseFollower";

function Works({ onNavigateToHome }) {
  const [selectedCategory, setSelectedCategory] = useState("older");

  // Memoize movie data to prevent re-creation on every render
  const { olderWorks, upcomingWorks } = useMemo(() => ({
    olderWorks: [
      {
        id: 1,
        title: "Chahat",
        image: "/moviePoster/poster1.webp",
        year: "2024",
        genre: "Drama"
      },
      {
        id: 2,
        title: "Burden of Mask", 
        image: "/moviePoster/poster2.webp",
        year: "2023",
        genre: "Drama"
      },
    ],
    upcomingWorks: [
      {
        id: 1,
        title: "Residuum",
        image: "/moviePoster/poster3.webp",
        year: "2025",
        genre: "-",
        status: "In Production"
      },
    ]
  }), []);

  const currentWorks = selectedCategory === "older" ? olderWorks : upcomingWorks;

  return (
    <div className="h-screen min-h-screen w-full bg-[#1c1c1c] relative">
      <MouseFollower />
      
      {/* Simplified Header with only Home Navigation */}
      <div className="p-2 sm:p-3 md:p-5 absolute top-0 w-full z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={onNavigateToHome}
            className="text-white font-[Akshar] text-lg sm:text-xl md:text-2xl font-medium hover:text-red-400 transition-colors duration-150"
          >
            1NOT2 PRODUCTIONS
          </button>
          <button 
            onClick={onNavigateToHome}
            className="text-white font-[Akshar] text-sm sm:text-base md:text-lg hover:text-red-400 transition-colors duration-150"
          >
            ← Back to Home
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="w-full h-full flex flex-col items-center justify-start text-white pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-y-auto">
        
        {/* Works Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-[Heathergreen] text-[clamp(3rem,12vw,10rem)] font-normal leading-[0.85] mb-4">
            WORKS
          </h1>
        </div>

        {/* Category Toggle Buttons */}
        <div className="flex space-x-4 sm:space-x-8 mb-8 sm:mb-12">
          <button
            onClick={() => setSelectedCategory("older")}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-[Heathergreen] text-lg sm:text-xl md:text-2xl transition-colors duration-150 border-b-2 ${
              selectedCategory === "older" 
                ? "text-red-500 border-red-500" 
                : "text-white border-transparent hover:text-red-400"
            }`}
          >
            OLDER WORKS
          </button>
          <button
            onClick={() => setSelectedCategory("upcoming")}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-[Heathergreen] text-lg sm:text-xl md:text-2xl transition-colors duration-150 border-b-2 ${
              selectedCategory === "upcoming" 
                ? "text-red-500 border-red-500" 
                : "text-white border-transparent hover:text-red-400"
            }`}
          >
            UPCOMING WORKS
          </button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl mb-20">
          {currentWorks.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              {/* Movie Poster */}
              <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-[16/9] mb-4">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Fallback for missing images */}
                <div className="absolute inset-0 bg-gray-700 items-center justify-center text-white font-[Heathergreen] text-xl hidden">
                  {work.title}
                </div>
                
                {/* Simplified Overlay */}
                <div className="absolute inset-0 bg-[#0000] group-hover:bg-[#0000008d] transition-opacity duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center p-4">
                    <h3 className="font-[Heathergreen] text-lg sm:text-xl text-white mb-2">
                      {work.title}
                    </h3>
                    {work.status && (
                      <p className="font-[Akshar] text-sm text-red-400 mb-1">
                        {work.status}
                      </p>
                    )}
                    <p className="font-[Akshar] text-sm text-gray-300">
                      {work.year} • {work.genre}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Movie Details */}
              <div className="text-center">
                <h3 className="font-[Heathergreen] text-lg sm:text-xl text-white mb-1 group-hover:text-red-400 transition-colors duration-150">
                  {work.title}
                </h3>
                <p className="font-[Akshar] text-sm sm:text-base text-gray-400">
                  {work.year} • {work.genre}
                </p>
                {work.status && (
                  <p className="font-[Akshar] text-xs sm:text-sm text-red-400 mt-1">
                    {work.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentWorks.length === 0 && (
          <div className="text-center py-20">
            <h3 className="font-[Heathergreen] text-2xl sm:text-3xl text-gray-400 mb-4">
              No {selectedCategory} works available
            </h3>
            <p className="font-[Akshar] text-base sm:text-lg text-gray-500">
              Check back soon for updates!
            </p>
          </div>
        )}

      </div>
      
    </div>
  );
}

export default Works;
