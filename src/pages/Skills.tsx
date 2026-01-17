import { motion, useInView } from 'framer-motion';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import HUDPanel from '@/components/ui/HUDPanel';
import ParticleField from '@/components/3d/ParticleField';
import { useSkillsByCategory } from '@/hooks/useSkills';
import { Loader2 } from 'lucide-react';

interface TechSphereProps {
  skills: string[];
}

const TechSphere = ({ skills }: TechSphereProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const radius = 3.5;

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Orbiting skill nodes */}
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <Float key={skill} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial
                  color="#00d4ff"
                  emissive="#00d4ff"
                  emissiveIntensity={1}
                />
              </mesh>
              <Text
                position={[0, 0.4, 0]}
                fontSize={0.25}
                color="#e0f7fa"
                anchorX="center"
                anchorY="middle"
              >
                {skill}
              </Text>
            </group>
          </Float>
        );
      })}

      {/* Connection lines */}
      {skills.map((_, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={`line-${index}`}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial attach="material" color="#00d4ff" opacity={0.3} transparent />
          </line>
        );
      })}

      {/* Particle field */}
      <ParticleField count={200} color="#00d4ff" size={0.01} spread={8} />
    </group>
  );
};

const Skills = () => {
  const { data: skillsByCategory, isLoading, error } = useSkillsByCategory();


  if (error) {
    console.error('Error loading skills:', error);
  }

  const allSkills = skillsByCategory
    ? (Object.values(skillsByCategory).flat() as any[]).map(s => s.name)
    : [];

  const categories = skillsByCategory ? Object.keys(skillsByCategory) : [];

  return (
    <section id="skills" className="relative z-10 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// TECHNICAL_SKILLS'}
          </span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mt-4">
            <span className="text-foreground">MY </span>
            <span className="text-primary text-glow">ARSENAL</span>
          </h1>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="ml-3 font-mono text-primary">Loading skills...</span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Skills Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="h-[600px] relative"
            >
              <HUDPanel title="skills_visualizer.exe" className="h-full">
                <div className="h-full w-full">
                  <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
                      <TechSphere skills={allSkills.slice(0, 12)} />
                      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} />
                      <EffectComposer>
                        <Bloom
                          luminanceThreshold={0.2}
                          luminanceSmoothing={0.9}
                          intensity={0.6}
                        />
                      </EffectComposer>
                    </Suspense>
                  </Canvas>
                </div>
              </HUDPanel>
            </motion.div>

            {/* Skills List */}
            <div className="space-y-6">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                >
                  <HUDPanel title={`${category.toLowerCase()}.config`} className="p-6">
                    <h3 className="font-orbitron text-lg text-primary mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsByCategory?.[category]?.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="relative group"
                        >
                          <span className="px-4 py-2 rounded-lg bg-muted border border-border font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors cursor-default block">
                            {skill.name}
                          </span>
                          {/* Proficiency tooltip */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.proficiency}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </HUDPanel>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
