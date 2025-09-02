import React from "react";
import MouseFollower from "./MouseFollower";
import LanguageCycler from "./LanguageCycler";
import languageData from "../assets/DifferentLanguages.json";

function ContactUs({ onNavigateToHome }) {
  return (
    <div className="h-screen min-h-screen w-full bg-[#1c1c1c] relative overflow-hidden">
      <MouseFollower />
      
      {/* Simplified Header with only Home Navigation */}
      <div className="p-2 sm:p-3 md:p-5 absolute top-0 w-full z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={onNavigateToHome}
            className="text-white font-[Akshar] text-lg sm:text-xl md:text-2xl font-medium hover:text-red-400 transition-colors duration-300"
          >
            1NOT2 PRODUCTIONS
          </button>
          <button 
            onClick={onNavigateToHome}
            className="text-white font-[Akshar] text-sm sm:text-base md:text-lg hover:text-red-400 transition-colors duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white leading-none px-4 sm:px-6 md:px-8 lg:px-12 relative">
        
        {/* Contact Us Title - Similar to home page style */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="font-[Heathergreen] text-[clamp(3rem,15vw,15rem)] font-normal leading-[0.85] mb-2 sm:mb-4">
            CONTACT US
          </h1>
          <h2 className="font-[Heathergreen] text-[clamp(1.8rem,9vw,9rem)] font-normal leading-[0.85] opacity-80">
          </h2>
        </div>

        {/* Contact Information - Centered and Simple */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-12 sm:space-y-16">
          
          {/* Email and Phone Row */}
          <div className="flex flex-col sm:flex-row items-center justify-around w-full max-w-2xl space-y-8 sm:space-y-0">
            
            {/* Email */}
            <div className="text-center group">
              <h3 className="font-[Heathergreen] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-red-500">
                <LanguageCycler 
                  mainContent="EMAIL"
                  languages={languageData.email}
                  className="font-[Heathergreen] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-500"
                />
              </h3>
              <a 
                href="mailto:onenot2production@gmail.com" 
                className="font-[Akshar] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-red-400 transition-colors duration-300 block"
              >
                onenot2production@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center group">
              <h3 className="font-[Heathergreen] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-red-500">
                <LanguageCycler 
                  mainContent="PHONE"
                  languages={languageData.phone}
                  className="font-[Heathergreen] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-500"
                />
              </h3>
              <a 
                href="tel:+9716224033" 
                className="font-[Akshar] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-red-400 transition-colors duration-300 block"
              >
                +91 9716224033
              </a>
            </div>

          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="font-[Heathergreen] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-red-500 text-center">
              FOLLOW US
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 md:space-x-16">
              
              {/* YouTube Link */}
              <a 
                href="https://www.youtube.com/@1not2production"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="font-[Akshar] text-lg sm:text-xl md:text-2xl text-white group-hover:text-red-400 transition-colors duration-300">
                  YouTube
                </span>
              </a>

              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/1not2production/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:via-red-400 group-hover:to-yellow-400 transition-all duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-[Akshar] text-lg sm:text-xl md:text-2xl text-white group-hover:text-red-400 transition-colors duration-300">
                  Instagram
                </span>
              </a>

            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default ContactUs;
