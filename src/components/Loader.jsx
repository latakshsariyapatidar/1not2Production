import React, { useRef, useEffect, useState } from 'react';

/**
 * Loader Component - Displays an animated sequence from image frames
 * 
 * This component:
 * 1. Loads 120 PNG images from the ClapperBoard folder
 * 2. Displays them as an animation sequence at 50 FPS
 * 3. Shows a loading progress bar while images are being loaded
 * 4. Automatically transitions to main content when animation completes
 * 
 * @param {Function} onLoadingComplete - Callback function to trigger when animation finishes
 */
function Loader({ onLoadingComplete }) {
  // React Refs and State Management
  const canvasRef = useRef(null);                    // Reference to HTML5 canvas element
  const [currentFrame, setCurrentFrame] = useState(0);   // Track which frame is currently being displayed
  const [isLoading, setIsLoading] = useState(true);      // Track if images are still being loaded
  const [loadedImages, setLoadedImages] = useState(0);   // Track how many images have been loaded
  
  // Animation Configuration
  const totalFrames = 120;    // Total number of image frames (0001.png to 0120.png)
  const frameRate = 50;       // Animation speed - 50 frames per second for smooth playback
  
  // Main Effect Hook - Runs when component mounts
  useEffect(() => {
    // Get canvas element and its 2D drawing context
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit if canvas is not available
    
    const ctx = canvas.getContext('2d');    // 2D drawing context for rendering images
    const images = [];                      // Array to store all preloaded image objects
    
    /**
     * Canvas Size Management
     * Updates canvas dimensions to match window size
     * This ensures the animation fills the entire screen
     */
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;     // Set canvas width to viewport width
      canvas.height = window.innerHeight;   // Set canvas height to viewport height
    };
    
    updateCanvasSize();                                           // Set initial canvas size
    window.addEventListener('resize', updateCanvasSize);          // Update size when window is resized
    
    /**
     * Image Preloading Function
     * 
     * This function loads all 120 image frames before starting the animation.
     * Preloading ensures smooth playback without delays during animation.
     * 
     * Process:
     * 1. Loop through frames 1-120
     * 2. Create Image objects for each frame
     * 3. Set up load/error handlers
     * 4. Start animation when all images are loaded
     */
    const preloadImages = () => {
      let loadedCount = 0;    // Local counter for tracking loaded images
      
      // Loop through all frame numbers (1 to 120)
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();                                    // Create new Image object
        const frameNumber = i.toString().padStart(4, '0');         // Convert to 4-digit format (0001, 0002, etc.)
        img.src = `/ClapperBoard/${frameNumber}.png`;               // Set image source path
        
        // Handle successful image loading
        img.onload = () => {
          loadedCount++;                          // Increment counter
          setLoadedImages(loadedCount);           // Update React state for progress bar
          if (loadedCount === totalFrames) {      // Check if all images are loaded
            setIsLoading(false);                  // Hide loading screen
            startAnimation();                     // Begin frame animation
          }
        };
        
        // Handle image loading errors
        img.onerror = () => {
          console.error(`Failed to load frame: ${frameNumber}.png`);
          loadedCount++;                          // Still increment counter to continue
          setLoadedImages(loadedCount);           // Update progress
          if (loadedCount === totalFrames) {      // Continue even if some images failed
            setIsLoading(false);
            startAnimation();
          }
        };
        
        images[i - 1] = img;    // Store image object in array (index 0-119)
      }
    };
    
    /**
     * Animation Controller Function
     * 
     * Manages the frame-by-frame animation playback using setInterval.
     * Controls timing, frame progression, and completion handling.
     * 
     * Process:
     * 1. Start at frame 0
     * 2. Display each frame at specified frame rate (50 FPS)
     * 3. Progress through all 120 frames
     * 4. Trigger completion callback when finished
     */
    const startAnimation = () => {
      let frame = 0;    // Current frame counter (0-119)
      
      // Set up interval timer for animation playback
      const interval = setInterval(() => {
        if (frame < totalFrames) {
          setCurrentFrame(frame);     // Update React state for frame counter display
          drawFrame(frame);           // Draw current frame to canvas
          frame++;                    // Move to next frame
        } else {
          // Animation complete - cleanup and transition
          clearInterval(interval);                    // Stop the animation timer
          setTimeout(() => {                          // Add delay for smooth transition
            onLoadingComplete();                      // Trigger callback to switch to main content
          }, 1000);                                   // 1 second delay for smoother handoff
        }
      }, 1000 / frameRate);    // Calculate interval time: 1000ms / 50fps = 20ms between frames
    };
    
    /**
     * Frame Drawing Function
     * 
     * Renders individual animation frames to the canvas with proper sizing and centering.
     * Ensures images fit within screen bounds while maintaining aspect ratio.
     * 
     * @param {number} frameIndex - Index of the frame to draw (0-119)
     * 
     * Process:
     * 1. Validate image availability
     * 2. Clear previous frame from canvas
     * 3. Calculate optimal size (80% of screen)
     * 4. Scale image if needed
     * 5. Center image on canvas
     * 6. Draw image to canvas
     */
    const drawFrame = (frameIndex) => {
      // Safety check: ensure image exists and is fully loaded
      if (!images[frameIndex] || !images[frameIndex].complete) return;
      
      // Clear entire canvas before drawing new frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const img = images[frameIndex];    // Get current frame image
      
      // Calculate maximum allowed dimensions (80% of canvas size for padding)
      const maxWidth = canvas.width * 0.8;      // 80% of viewport width
      const maxHeight = canvas.height * 0.8;    // 80% of viewport height
      
      // Start with original image dimensions
      let drawWidth = img.width;
      let drawHeight = img.height;
      
      // Scale down image if it's too wide for the canvas
      if (drawWidth > maxWidth) {
        const scale = maxWidth / drawWidth;    // Calculate scaling factor
        drawWidth *= scale;                    // Apply scaling to width
        drawHeight *= scale;                   // Apply scaling to height (maintain aspect ratio)
      }
      
      // Scale down image if it's too tall for the canvas
      if (drawHeight > maxHeight) {
        const scale = maxHeight / drawHeight;  // Calculate scaling factor
        drawWidth *= scale;                    // Apply scaling to width
        drawHeight *= scale;                   // Apply scaling to height
      }
      
      // Calculate center position for the scaled image
      const drawX = (canvas.width - drawWidth) / 2;     // Horizontal center
      const drawY = (canvas.height - drawHeight) / 2;   // Vertical center
      
      // Draw the image to canvas at calculated position and size
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };
    
    // Initialize the loading process
    preloadImages();
    
    // Cleanup function - runs when component unmounts
    return () => {
      window.removeEventListener('resize', updateCanvasSize);    // Remove event listener to prevent memory leaks
    };
  }, [onLoadingComplete, totalFrames, frameRate]);    // Dependencies: re-run effect if these values change

  // Component JSX Render
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* 
        Main Canvas Element
        - Uses ref to access canvas in JavaScript
        - Styled for optimal centering and display
        - crisp-edges for pixel-perfect image rendering
      */}
      <canvas 
        ref={canvasRef}
        className="block max-w-full max-h-full"
        style={{ 
          imageRendering: 'crisp-edges',    // Prevent blurry scaling
          objectFit: 'contain'              // Maintain aspect ratio
        }}
      />
      
      {/* 
        Loading Screen Overlay
        - Shows while images are being preloaded
        - Displays progress bar and percentage
        - Covers entire screen with black background
      */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10">
          {/* Loading text */}
          <div className="text-white text-xl sm:text-2xl font-[Heathergreen] mb-6">
            Loading Animation...
          </div>
          
          {/* Progress bar container */}
          <div className="w-48 sm:w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            {/* Progress bar fill - width changes based on loading progress */}
            <div 
              className="h-full bg-red-500 transition-all duration-300 ease-out"
              style={{ width: `${(loadedImages / totalFrames) * 100}%` }}
            />
          </div>
          
          {/* Percentage text - calculated from loaded images */}
          <div className="text-white text-sm font-[Heathergreen] mt-3">
            {Math.round((loadedImages / totalFrames) * 100)}%
          </div>
        </div>
      )}
      
      {/* 
        Frame Counter
        - Shows current frame number during animation
        - Only visible when loading is complete
        - Positioned at bottom center
      */}
      {!isLoading && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-[Heathergreen] opacity-70">
          Frame {currentFrame + 1} / {totalFrames}
        </div>
      )}
    </div>
  );
}

export default Loader;