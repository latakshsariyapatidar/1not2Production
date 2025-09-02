import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function LanguageCycler({ mainContent, languages, className, onClick }) {
    const textRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        let currentIndex = 0;

        const handleMouseEnter = () => {
            // Change color to red immediately
            gsap.to(textElement, {
                color: '#ef4444',
                duration: 0.2,
                ease: 'power2.out'
            });

            // Start language cycling animation
            animationRef.current = gsap.to({}, {
                duration: 0.1,
                repeat: languages.length - 1,
                onRepeat: () => {
                    currentIndex = (currentIndex + 1) % languages.length;
                    textElement.textContent = languages[currentIndex];
                },
                onComplete: () => {
                    // Reset to original text
                    textElement.textContent = mainContent;
                    currentIndex = 0;
                }
            });
        };

        const handleMouseLeave = () => {
            // Kill any running animation
            if (animationRef.current) {
                animationRef.current.kill();
            }
            
            // Reset to original state immediately (no animation on exit)
            textElement.textContent = mainContent;
            textElement.style.color = 'white';
            currentIndex = 0;
        };

        textElement.addEventListener('mouseenter', handleMouseEnter);
        textElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            textElement.removeEventListener('mouseenter', handleMouseEnter);
            textElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mainContent, languages]);

    return (
        <h1 
            ref={textRef}
            className={className}
            onClick={onClick}
        >
            {mainContent}
        </h1>
    );
}

export default LanguageCycler;
