'use client';

import * as THREE from 'three';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import type { JSX } from 'react';
import type { GLTF } from 'three-stdlib';
import type { Group } from 'three';

type ActionName = 'Armature|mixamo.com|Layer0' | 'Take 001.001';

interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Ch16_Body1: THREE.SkinnedMesh;
        Ch16_Cap: THREE.SkinnedMesh;
        Ch16_Eyelashes: THREE.SkinnedMesh;
        Ch16_Mask: THREE.SkinnedMesh;
        Ch16_Pants: THREE.SkinnedMesh;
        Ch16_Shirt: THREE.SkinnedMesh;
        Ch16_Shoes: THREE.SkinnedMesh;
        mixamorigHips: THREE.Bone;
    };
    materials: {
        Ch16_Body: THREE.MeshStandardMaterial;
        Ch16_body1: THREE.MeshStandardMaterial;
        Ch16_eyelashes: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

export function DoctorWalk(props: JSX.IntrinsicElements['group']) {
    const group = useRef<Group | null>(null);
    const { scene, animations } = useGLTF('/models/doctor_walk.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const action = actions['Walk'];

        if (action) {
            action.reset().fadeIn(0.5).play();
        }

        return () => {
            action?.fadeOut(0.5);
        };
    }, [actions]);

    if (animations.length > 0) {
        animations[0].name = 'Walk';
    }

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <primitive object={nodes.mixamorigHips} />
                </group>
                <skinnedMesh
                    name="Ch16_Body1"
                    geometry={nodes.Ch16_Body1.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Body1.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Cap"
                    geometry={nodes.Ch16_Cap.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Cap.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Eyelashes"
                    geometry={nodes.Ch16_Eyelashes.geometry}
                    material={materials.Ch16_eyelashes}
                    skeleton={nodes.Ch16_Eyelashes.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Mask"
                    geometry={nodes.Ch16_Mask.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Mask.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Pants"
                    geometry={nodes.Ch16_Pants.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Pants.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Shirt"
                    geometry={nodes.Ch16_Shirt.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Shirt.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Shoes"
                    geometry={nodes.Ch16_Shoes.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Shoes.skeleton}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/doctor_walk.glb');
