'use client';

import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import PricingSection from '@/components/landing/PricingSection';
import WhatToAsk from '@/components/landing/WhatToAsk';
import { useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

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
        <div className="relative min-h-screen bg-background">
            <Header />
            <Hero />
            {/* <div className="relative h-screen w-full">
                <Canvas camera={{ position: [0, 0, 10], fov: 35, near: 0.1, far: 50 }}>
                    <Scene />
                </Canvas>
            </div> */}
            <HowItWorks />
            <WhatToAsk />
            <PricingSection />
            <CTA />
            <Footer />
        </div>
    );
}
