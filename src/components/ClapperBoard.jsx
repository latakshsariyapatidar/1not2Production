import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useFBX, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ClapperBoardModel({ onClick }) {
  const group = useRef();
  const fbx = useFBX('/klaps2.fbx');
  const { actions, mixer } = useAnimations(fbx.animations, group);
  
  // Load textures
  const diffuseTexture = useLoader(THREE.TextureLoader, '/textures/klaps-gora-FINAL.png');
  const normalTexture = useLoader(THREE.TextureLoader, '/textures/klaps-gora-FINAL-NORMAL.png');
  const uvTexture = useLoader(THREE.TextureLoader, '/textures/klapsUV-FINAL.png');
  
  // Apply textures to the model
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child.isMesh && child.material) {
          // Create a new material with textures
          const material = new THREE.MeshStandardMaterial({
            map: diffuseTexture,
            normalMap: normalTexture,
            // You can add more texture maps as needed
          });
          child.material = material;
        }
      });
    }
  }, [fbx, diffuseTexture, normalTexture, uvTexture]);
  
  // Handle click to play animation
  const handleClick = (event) => {
    event.stopPropagation();
    onClick();
    
    // Play the first animation if available
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction.reset().play();
    }
  };

  // Update mixer on each frame
  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  return (
    <group 
      ref={group} 
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      position={[0, 0, 0]} // Center the model
    >
      <primitive 
        object={fbx} 
        scale={[0.1, 0.1, 0.1]} // Even larger scale for better visibility
        position={[0, 0, 0]} // Perfect center position
        rotation={[0, Math.PI, 0]} // Rotate to face camera if needed
      />
    </group>
  );
}

function ClapperBoard() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClapperClick = () => {
    setIsAnimating(true);
    
    // Reset animation state after a delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Adjust timing based on your animation duration
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-2 sm:px-4">
      <div className="w-full h-3/4 relative max-w-6xl">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 75, near: 0.1, far: 1000 }}
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.2} 
            castShadow
          />
          <pointLight position={[-5, 5, 5]} intensity={0.8} />
          <pointLight position={[5, -5, 5]} intensity={0.6} />
          
          {/* 3D Model */}
          <ClapperBoardModel 
            onClick={handleClapperClick}
          />
          
          {/* No camera controls - fixed camera position */}
        </Canvas>
      </div>
      
      {/* Instructions */}
      <div className="text-center mt-4 sm:mt-8 px-2 sm:px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-[Heathergreen] mb-2 sm:mb-4">
          Click the Clapperboard to Action!
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          {isAnimating ? "Rolling..." : "Ready for action! Click to clap."}
        </p>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <div className="text-white text-xs sm:text-sm bg-black bg-opacity-50 px-2 py-1 sm:px-3 sm:py-2 rounded">
          3D Model Loaded
        </div>
      </div>
    </div>
  );
}

export default ClapperBoard;
