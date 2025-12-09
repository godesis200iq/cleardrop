import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  type?: 'drops' | 'leaves' | 'mixed';
}

export function ParticleField({ count = 50, type = 'mixed' }: ParticleFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    return [...Array(count)].map((_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        Math.random() * 15 - 5,
        (Math.random() - 0.5) * 10
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        -0.02 - Math.random() * 0.03,
        (Math.random() - 0.5) * 0.01
      ),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      scale: 0.5 + Math.random() * 0.5,
      isLeaf: type === 'leaves' || (type === 'mixed' && i % 3 === 0),
    }));
  }, [count, type]);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  useFrame(() => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);
      particle.rotation += particle.rotationSpeed;
      
      if (particle.position.y < -5) {
        particle.position.y = 10;
        particle.position.x = (Math.random() - 0.5) * 20;
      }
      
      if (particle.isLeaf) {
        particle.position.x += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }
      
      dummy.position.copy(particle.position);
      dummy.rotation.set(
        particle.isLeaf ? particle.rotation : 0,
        particle.rotation,
        particle.isLeaf ? particle.rotation * 0.5 : 0
      );
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  
  const geometry = useMemo(() => {
    if (type === 'leaves') {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.quadraticCurveTo(0.1, 0.15, 0, 0.3);
      shape.quadraticCurveTo(-0.1, 0.15, 0, 0);
      return new THREE.ShapeGeometry(shape);
    }
    return new THREE.SphereGeometry(0.05, 8, 8);
  }, [type]);
  
  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]}>
      <meshStandardMaterial
        color={type === 'leaves' ? '#4ade80' : '#60a5fa'}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}

export function FloatingParticles2D() {
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      isLeaf: i % 4 === 0,
    }));
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.isLeaf ? 'leaf' : 'water-drop'}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.isLeaf ? `${p.size * 2}px` : `${p.size}px`,
            height: p.isLeaf ? `${p.size * 2}px` : `${p.size * 1.5}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleField;
