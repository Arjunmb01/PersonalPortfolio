import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useInView } from 'framer-motion';
import FloatingCard from './FloatingCard';
import ParticleField from './ParticleField';

interface Project {
  id: string;
  title: string;
}

interface ProjectsSceneProps {
  projects: Project[];
  onProjectClick?: (id: string) => void;
}

const ProjectsScene = ({ projects, onProjectClick }: ProjectsSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  // Calculate positions in a spiral pattern
  const getPosition = (index: number): [number, number, number] => {
    const angle = index * 1.2;
    const radius = 3.2 + index * 0.6;
    return [
      Math.cos(angle) * radius,
      Math.sin(index * 0.5) * 0.5,
      Math.sin(angle) * radius - 2
    ];
  };

  return (
    <div ref={containerRef} className="h-full w-full">
      {isInView && (
        <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

            <Stars radius={50} depth={50} count={1000} factor={2} fade speed={1} />
            <ParticleField count={300} color="#00d4ff" size={0.015} spread={15} />

            {projects.slice(0, 6).map((project, index) => (
              <FloatingCard
                key={project.id}
                position={getPosition(index)}
                title={project.title}
                index={index}
                onClick={() => onProjectClick?.(project.id)}
              />
            ))}

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.8}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />

            <EffectComposer>
              <Bloom
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                intensity={0.8}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default ProjectsScene;
