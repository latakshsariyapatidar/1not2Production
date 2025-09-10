
import React from "react";
import MouseFollower from "./MouseFollower";
import LanguageCycler from "./LanguageCycler";
import languageData from "../assets/DifferentLanguages.json";

function AboutUs({ onNavigateToHome }) {
  const teamMembers = [
    {
      name: "Krishna Mishra",
      role: "Founder/CEO/Actor"
    },
    {
      name: "Shashank",
      role: "Director"
    },
    {
      name: "Sahil Suman",
      role: "D.O.P"
    },
    {
      name: "Rushikesh Deshmukh",
      role: "Music Director"
    },
    {
      name: "Ashmit Singh",
      role: "Writer"
    },
    {
      name: "Ayush Raj",
      role: "Editor"
    },
    {
      name: "Apratim Das",
      role: "Editor"
    },
    {
      name: "Silas",
      role: "2nd Unit DOP"
    },
    {
      name: "Ricky Charan",
      role: "Assistant Cameraman"
    },
    {
      name: "Vedant Ghodke",
      role: "Creative Head"
    },{
        name: "Lataksh Sariya",
        role: "Technical Lead (Web)"
    }
  ];

  return (
    <div className="absolute inset-0 w-full bg-[#1c1c1c] overflow-y-auto">
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
      <div className="w-full text-white leading-none px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-8">
        
        {/* About Us Title - Similar to home page style */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <LanguageCycler 
            mainContent="ABOUT US"
            languages={languageData.aboutUs}
            className="font-[Heathergreen] text-[clamp(3rem,12vw,10rem)] font-normal leading-[0.85]"
          />
        </div>

        {/* Production House Description */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
          <p className="font-[Akshar] text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-6">
            OneNottwo Production stands at the forefront of contemporary filmmaking, where artistic vision meets technical excellence.
          </p>
          <p className="font-[Akshar] text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
            We are a collective of passionate storytellers, dedicated to crafting cinematic experiences that resonate with audiences worldwide.
          </p>
        </div>

        {/* Core Team Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-[Heathergreen] text-[clamp(2rem,8vw,6rem)] font-normal leading-[0.85] text-red-500">
            CORE TEAM
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 justify-items-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <h3 className="font-[Heathergreen] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 sm:mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="font-[Akshar] text-sm sm:text-base md:text-lg lg:text-xl text-white/60">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-[Heathergreen] text-[clamp(1.8rem,6vw,4rem)] font-normal leading-[0.85] mb-6 sm:mb-8 text-red-500">
            OUR VISION
          </h2>
          <p className="font-[Akshar] text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
            To create cinematic experiences that transcend boundaries, inspire emotions, and leave lasting impressions on audiences around the globe.
          </p>
        </div>

      </div>
      
    </div>
  );
}

export default AboutUs;
