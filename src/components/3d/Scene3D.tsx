import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useInView } from 'framer-motion';
import * as THREE from 'three';
import AIRobot from './AIRobot';

const Scene3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isInView) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInView]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
            <pointLight position={[-5, 3, -5]} intensity={0.5} color="#00d4ff" />
            <pointLight position={[5, -3, 5]} intensity={0.3} color="#ff00ff" />

            {/* Environment */}
            <Stars
              radius={100}
              depth={50}
              count={3000}
              factor={4}
              saturation={0}
              fade
              speed={0.5}
            />

            {/* Main Robot */}
            <AIRobot mousePosition={mousePosition} />

            {/* Post-processing effects */}
            <EffectComposer>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>

            {/* Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default Scene3D;
