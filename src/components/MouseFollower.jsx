import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function MouseFollower() {
  const followerRef = useRef(null);
  const xTo = useRef();
  const yTo = useRef();

  useEffect(() => {
    const follower = followerRef.current;
    
    // Set initial position
    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      scale: 0
    });

    // Create smooth animation tweens
    xTo.current = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    yTo.current = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
      
      // Check if hovering over text elements
      const target = e.target;
      const isTextElement = target.tagName === 'H1' || 
                           target.tagName === 'H2' || 
                           target.tagName === 'H3' || 
                           target.tagName === 'H4' || 
                           target.tagName === 'H5' || 
                           target.tagName === 'H6' || 
                           target.tagName === 'P' || 
                           target.tagName === 'SPAN' || 
                           target.tagName === 'A' ||
                           target.tagName === 'BUTTON' ||
                           target.closest('h1, h2, h3, h4, h5, h6, p, span, a, button');
      
      if (isTextElement) {
        // Scale to 2x when over text
        gsap.to(follower, {
          scale: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Normal scale when not over text
        gsap.to(follower, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed pointer-events-none z-50 w-5 h-5 bg-white rounded-full top-0 left-0"
      style={{
        mixBlendMode: 'difference'
      }}
    />
  );
}

export default MouseFollower;