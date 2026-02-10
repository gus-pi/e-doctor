'use client';

import Experience from '@/components/3D/Experience';
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

function Scene() {
    const target = useMemo(() => new THREE.Vector3(2, -1, 0), []);
    const controlsRef = useRef<any>(null);
    const dirRef = useRef(1);

    const minAz = -Math.PI / 6; // -30°
    const maxAz = Math.PI / 6; // +30°
    const speed = 0.05; // rad/sec

    useFrame((state, dt) => {
        const controls = controlsRef.current;
        if (!controls) return;

        const cam = state.camera;

        // Current azimuth relative to target
        const offset = cam.position.clone().sub(target);
        const az = Math.atan2(offset.x, offset.z); // azimuth around Y

        const eps = 1e-3;
        if (az >= maxAz - eps) dirRef.current = -1;
        if (az <= minAz + eps) dirRef.current = 1;

        // Rotate camera around target on Y axis
        const angle = dirRef.current * speed * dt;
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);

        cam.position.copy(target).add(offset);
        cam.lookAt(target);

        // let OrbitControls reconcile damping, etc.
        controls.target.copy(target);
        controls.update();
    });

    return (
        <>
            <OrbitControls
                ref={controlsRef}
                makeDefault
                target={target}
                enableDamping
                dampingFactor={0.05}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2 - 0.05}
                minAzimuthAngle={minAz}
                maxAzimuthAngle={maxAz}
                minDistance={2}
                maxDistance={10}
                enableZoom={false}
            />
            <Experience />
        </>
    );
}

export default function Home() {
    const controls = useRef<any>(null);

    // ✅ stable target object (no new Vector3 every render)
    const target = useMemo(() => new THREE.Vector3(3, -1, 0), []);

    useLayoutEffect(() => {
        // ensure controls picks up target immediately
        controls.current?.target.copy(target);
        controls.current?.update();
    }, [target]);
    return (
        <div className="relative min-h-screen">
            <h1>Home page</h1>
            <SignedOut>
                <SignUpButton>Sign Up</SignUpButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>Log Out</SignOutButton>
            </SignedIn>
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 35, near: 0.1, far: 50 }}>
                    <Scene />
                </Canvas>
            </div>
        </div>
    );
}
