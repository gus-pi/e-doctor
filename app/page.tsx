'use client';

import Experience from '@/components/3D/Experience';
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Home() {
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
                <Canvas camera={{ position: [0, 0, 5], fov: 35, near: 0.1, far: 50 }}>
                    <OrbitControls />
                    <Experience />
                </Canvas>
            </div>
        </div>
    );
}
