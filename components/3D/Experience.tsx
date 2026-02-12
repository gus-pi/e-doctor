'use client';

import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { FullScene } from '@/components/3D/Full_scene';

const Experience = () => {
    const mainGroup = useRef<THREE.Group>(null!);

    return (
        <group ref={mainGroup}>
            <FullScene position={[0, -1, 0]} />
            {/* <pointLight position={[0, 3, 0]} /> */}
            <Environment
                preset="apartment"
                environmentIntensity={1}
                environmentRotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
};
export default Experience;
