import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { DoctorWalk } from './Doctor_walk';

const Experience = () => {
    const mainGroup = useRef<THREE.Group>(null!);

    return (
        <group ref={mainGroup}>
            <DoctorWalk />

            <Environment
                preset="apartment"
                environmentIntensity={1}
                environmentRotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};
export default Experience;
