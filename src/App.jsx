// Main App component - handles routing, page transitions, and global state management
import React, { useState } from "react";
import Loader from "./components/Loader";           // Frame sequence animation loader
import MainContent from "./components/MainContent"; // Home page component
import ContactUs from "./components/ContactUs";     // Contact page with social media links
import Works from "./components/Works";             // Portfolio showcase page
import AboutUs from "./components/AboutUs";         // About page with team information

function App() {
  // Loading state management - controls when loader is visible
  const [isLoading, setIsLoading] = useState(false);
  
  // Transition state - manages page transition animations
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Current page state - tracks which page is currently displayed
  // Options: "home", "contact", "works", "about"
  const [currentPage, setCurrentPage] = useState("home");
  
  // Next page state - stores the target page during transitions
  const [nextPage, setNextPage] = useState("");
  
  // Slide direction for page transitions - "left" or "right"
  const [slideDirection, setSlideDirection] = useState("right");

  /**
   * Handles loader completion and initiates app transition
   * Called when the frame sequence loader finishes playing
   */
  const handleLoaderComplete = () => {
    setIsTransitioning(true);           // Start transition animation
    setTimeout(() => {
      setIsLoading(false);              // Hide loader
      setTimeout(() => {
        setIsTransitioning(false);      // End transition after delay
      }, 300);                          // 300ms delay for smooth transition
    }, 500);                            // 500ms total loader transition time
  };

  /**
   * Manages page transitions with slide animations
   * @param {string} targetPage - The page to navigate to
   * @param {string} direction - Slide direction ("left" or "right")
   */
  const handlePageTransition = (targetPage, direction = "right") => {
    setSlideDirection(direction);       // Set animation direction
    setNextPage(targetPage);            // Set target page
    setIsTransitioning(true);           // Start transition
    
    // Complete transition after animation duration
    setTimeout(() => {
      setCurrentPage(targetPage);       // Update current page
      setIsTransitioning(false);        // End transition
    }, 500);                            // 500ms matches CSS animation duration
  };

  /**
   * Navigation function to Contact page
   * Slides left (Contact appears from right)
   */
  const navigateToContact = () => {
    handlePageTransition("contact", "left");
  };

  /**
   * Navigation function to Home page
   * Slides right (Home appears from left)
   */
  const navigateToHome = () => {
    handlePageTransition("home", "right");
  };

  /**
   * Navigation function to Works page
   * Slides left (Works appears from right)
   */
  const navigateToWorks = () => {
    handlePageTransition("works", "left");
  };

  /**
   * Navigation function to About page
   * Slides left (About appears from right)
   */
  const navigateToAbout = () => {
    handlePageTransition("about", "left");
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Loader Component */}
      {isLoading && (
        <div
          className={`absolute inset-0 z-50 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader
            onComplete={handleLoaderComplete}
            setIsLoading={setIsLoading}
          />
        </div>
      )}

      {/* Main Application Content */}
      {!isLoading && (
        <>
          {/* Current Page (slides out during transition) */}
          <div
            className="absolute inset-0"
            style={{
              animation: isTransitioning 
                ? slideDirection === "left" 
                  ? "slide-out-left 0.5s ease-in-out forwards" 
                  : "slide-out-right 0.5s ease-in-out forwards"
                : "none"
            }}
          >
            {currentPage === "home" ? (
              <MainContent onNavigateToContact={navigateToContact} onNavigateToWorks={navigateToWorks} onNavigateToAbout={navigateToAbout} />
            ) : currentPage === "contact" ? (
              <ContactUs onNavigateToHome={navigateToHome} />
            ) : currentPage === "works" ? (
              <Works onNavigateToHome={navigateToHome} />
            ) : currentPage === "about" ? (
              <AboutUs onNavigateToHome={navigateToHome} />
            ) : null}
          </div>

          {/* Next Page (slides in during transition) */}
          {isTransitioning && (
            <div
              className="absolute inset-0"
              style={{
                animation: slideDirection === "left" 
                  ? "slide-in-from-right 0.5s ease-in-out forwards" 
                  : "slide-in-from-left 0.5s ease-in-out forwards"
              }}
            >
              {nextPage === "home" ? (
                <MainContent onNavigateToContact={navigateToContact} onNavigateToWorks={navigateToWorks} onNavigateToAbout={navigateToAbout} />
              ) : nextPage === "contact" ? (
                <ContactUs onNavigateToHome={navigateToHome} />
              ) : nextPage === "works" ? (
                <Works onNavigateToHome={navigateToHome} />
              ) : nextPage === "about" ? (
                <AboutUs onNavigateToHome={navigateToHome} />
              ) : null}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;