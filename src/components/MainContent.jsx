import React, { useState } from "react";
import Header from "./Header";
import MouseFollower from "./MouseFollower";
import Footer from "./Footer";
import ClapperBoard from "./ClapperBoard";

function MainContent({ onNavigateToContact, onNavigateToWorks, onNavigateToAbout }) {
  const [showClapperBoard, setShowClapperBoard] = useState(false);

  if (showClapperBoard) {
    return (
      <div className="relative w-full h-screen">
        <ClapperBoard />
        <button
          onClick={() => setShowClapperBoard(false)}
          className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-600 hover:bg-red-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors z-50 text-sm sm:text-base"
        >
          ← Back to Main
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen min-h-screen w-full bg-[#1c1c1c] relative overflow-hidden">
      <MouseFollower />
      
      {/* Header */}
      <div className="p-2 sm:p-3 md:p-5 absolute top-0 w-full z-10">
        <Header onNavigateToContact={onNavigateToContact} />
      </div>
      
      {/* Main Content Area */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white leading-none px-2 sm:px-4 md:px-6 lg:px-8 relative">
        {/* 1NOT2 Text */}
        <h1 className="text-center font-[Heathergreen] absolute -translate-y-6 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16 xl:-translate-y-20 2xl:-translate-y-24"
            style={{ fontSize: 'clamp(2rem, 12vw, 12rem)' }}>
          1NOT2
        </h1>
        
        {/* PRODUCTIONS Text */}
        <h1 className="text-center font-[Heathergreen] absolute translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-16 xl:translate-y-20 2xl:translate-y-24"
            style={{ fontSize: 'clamp(1.5rem, 8vw, 8rem)' }}>
          PRODUCTIONS
        </h1>
      </div>
      
      {/* Footer */}
      <div className="p-2 sm:p-3 md:p-5 absolute bottom-0 w-full z-10">
        <Footer onNavigateToWorks={onNavigateToWorks} onNavigateToAbout={onNavigateToAbout} />
      </div>
      
      
    </div>
  );
}

export default MainContent;
