import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface FilterModelProps {
  autoRotate?: boolean;
}

function Bottle({ 
  position, 
  rotation = [0, 0, 0], 
  isTop = false, 
  isMiddle = false, 
  isBottom = false 
}: { 
  position: [number, number, number];
  rotation?: [number, number, number];
  isTop?: boolean;
  isMiddle?: boolean;
  isBottom?: boolean;
}) {
  const bottleHeight = 2.8;
  const bottleRadius = 0.45;
  const neckHeight = 0.6;
  const neckRadius = 0.15;
  
  return (
    <group position={position} rotation={rotation as unknown as THREE.Euler}>
      {/* Main bottle body - transparent plastic */}
      <mesh position={[0, bottleHeight / 2, 0]}>
        <cylinderGeometry args={[bottleRadius, bottleRadius * 0.9, bottleHeight, 32]} />
        <meshPhysicalMaterial
          color="#e8f4f8"
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0}
          transmission={0.6}
          thickness={0.5}
        />
      </mesh>
      
      {/* Bottle neck */}
      {!isTop && (
        <mesh position={[0, bottleHeight + neckHeight / 2, 0]}>
          <cylinderGeometry args={[neckRadius, bottleRadius * 0.4, neckHeight, 16]} />
          <meshPhysicalMaterial
            color="#e8f4f8"
            transparent
            opacity={0.5}
            roughness={0.1}
          />
        </mesh>
      )}
      
      {/* Contents based on bottle type */}
      {isTop && (
        <>
          {/* Fabric pre-filter on top */}
          <mesh position={[0, bottleHeight - 0.1, 0]}>
            <cylinderGeometry args={[bottleRadius * 0.95, bottleRadius * 0.95, 0.15, 32]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.9} />
          </mesh>
          
          {/* Coarse sand layer */}
          <mesh position={[0, bottleHeight - 0.6, 0]}>
            <cylinderGeometry args={[bottleRadius * 0.92, bottleRadius * 0.88, 0.8, 32]} />
            <meshStandardMaterial color="#c2b280" roughness={0.8} />
          </mesh>
          
          {/* Pebbles layer at bottom */}
          <group position={[0, bottleHeight - 1.4, 0]}>
            {/* Base pebble layer */}
            <mesh>
              <cylinderGeometry args={[bottleRadius * 0.88, bottleRadius * 0.85, 0.7, 32]} />
              <meshStandardMaterial color="#808080" roughness={0.7} />
            </mesh>
            {/* Individual pebbles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const r = 0.2 + Math.random() * 0.15;
              return (
                <mesh 
                  key={i} 
                  position={[
                    Math.cos(angle) * r, 
                    (Math.random() - 0.5) * 0.3, 
                    Math.sin(angle) * r
                  ]}
                >
                  <sphereGeometry args={[0.06 + Math.random() * 0.04, 8, 8]} />
                  <meshStandardMaterial 
                    color={`hsl(0, 0%, ${40 + Math.random() * 30}%)`} 
                    roughness={0.8} 
                  />
                </mesh>
              );
            })}
          </group>
        </>
      )}
      
      {isMiddle && (
        <>
          {/* Granular Activated Carbon (GAC) */}
          <mesh position={[0, bottleHeight / 2, 0]}>
            <cylinderGeometry args={[bottleRadius * 0.9, bottleRadius * 0.85, bottleHeight * 0.8, 32]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
          </mesh>
          {/* Charcoal granules on surface */}
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const r = Math.random() * 0.35;
            const y = bottleHeight * 0.7 + Math.random() * 0.3;
            return (
              <mesh 
                key={i} 
                position={[Math.cos(angle) * r, y, Math.sin(angle) * r]}
              >
                <boxGeometry args={[0.04, 0.04, 0.04]} />
                <meshStandardMaterial color="#0a0a0a" roughness={1} />
              </mesh>
            );
          })}
        </>
      )}
      
      {isBottom && (
        <>
          {/* Clean water in collection chamber */}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[bottleRadius * 0.88, bottleRadius * 0.85, 1.4, 32]} />
            <meshPhysicalMaterial
              color="#60b0e0"
              transparent
              opacity={0.6}
              roughness={0}
              metalness={0}
              transmission={0.8}
            />
          </mesh>
          {/* Water surface */}
          <mesh position={[0, 1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[bottleRadius * 0.88, 32]} />
            <meshPhysicalMaterial
              color="#80c8f0"
              transparent
              opacity={0.4}
              roughness={0.1}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

function CollectionContainer({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Small collection cup/bucket */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.6, 0.5, 0.8, 32, 1, true]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Cup bottom */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial color="#3d6b4a" roughness={0.6} />
      </mesh>
      {/* Water inside */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.55, 0.48, 0.4, 32]} />
        <meshPhysicalMaterial
          color="#60b0e0"
          transparent
          opacity={0.7}
          transmission={0.6}
        />
      </mesh>
    </group>
  );
}

function WaterDroplets() {
  const dropletsRef = useRef<THREE.Group>(null);
  
  const droplets = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 0.3,
      z: (Math.random() - 0.5) * 0.3,
      speed: 0.5 + Math.random() * 0.5,
      delay: i * 0.3,
    }));
  }, []);
  
  useFrame(({ clock }) => {
    if (dropletsRef.current) {
      dropletsRef.current.children.forEach((child, i) => {
        const droplet = droplets[i];
        const time = clock.getElapsedTime() + droplet.delay;
        const y = ((time * droplet.speed) % 8) - 4;
        child.position.y = 10 - y;
        (child as THREE.Mesh).scale.setScalar(Math.sin(y * 0.5) * 0.3 + 0.7);
      });
    }
  });
  
  return (
    <group ref={dropletsRef}>
      {droplets.map((drop) => (
        <mesh key={drop.id} position={[drop.x, 10, drop.z]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshPhysicalMaterial
            color="#60b0e0"
            transparent
            opacity={0.8}
            transmission={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export function FilterModel({ autoRotate = true }: FilterModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#60b0e0" />
      
      <Environment preset="sunset" />
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={groupRef} position={[0, -2, 0]}>
          {/* Bottle A (top) - Pebbles + Sand + Fabric */}
          <Bottle position={[0, 6, 0]} rotation={[Math.PI, 0, 0]} isTop />
          
          {/* Bottle B (middle) - Activated Charcoal */}
          <Bottle position={[0, 3, 0]} rotation={[Math.PI, 0, 0]} isMiddle />
          
          {/* Bottle C (bottom) - Collection */}
          <Bottle position={[0, 0, 0]} rotation={[0, 0, 0]} isBottom />
          
          {/* Collection container */}
          <CollectionContainer position={[0, -1.5, 0]} />
          
          {/* Water droplets animation */}
          <WaterDroplets />
          
          {/* Connection points / duct tape */}
          <mesh position={[0, 5.8, 0]}>
            <torusGeometry args={[0.48, 0.08, 8, 32]} />
            <meshStandardMaterial color="#666666" roughness={0.8} />
          </mesh>
          <mesh position={[0, 2.8, 0]}>
            <torusGeometry args={[0.48, 0.08, 8, 32]} />
            <meshStandardMaterial color="#666666" roughness={0.8} />
          </mesh>
        </group>
      </Float>
    </>
  );
}

export default FilterModel;
