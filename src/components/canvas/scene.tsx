"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const particlePositions = new Float32Array(2000 * 3);
for (let i = 0; i < 2000; i++) {
    particlePositions[i * 3] = (Math.sin(i * 12.9898) * 43758.5453 % 1 - 0.5) * 10;
    particlePositions[i * 3 + 1] = (Math.sin(i * 78.233) * 43758.5453 % 1 - 0.5) * 10;
    particlePositions[i * 3 + 2] = (Math.sin(i * 39.425) * 43758.5453 % 1 - 0.5) * 10;
}

function Particles() {
    const ref = useRef<THREE.Points>(null!);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#6366f1"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function FloatingShapes() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[2, 1, -2]}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#4f46e5" wireframe />
            </mesh>
            <mesh position={[-3, -2, -1]}>
                <torusKnotGeometry args={[0.5, 0.2, 128, 16]} />
                <meshStandardMaterial color="#818cf8" wireframe />
            </mesh>
        </Float>
    );
}

export const Scene = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Particles />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};
