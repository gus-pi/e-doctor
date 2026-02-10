'use client';

import * as THREE from 'three';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import type { JSX } from 'react';
import type { GLTF } from 'three-stdlib';
import type { Group } from 'three';
type ActionName = 'Armature|mixamo.com|Layer0';

interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Occluder: THREE.Mesh;
        SM_Glass: THREE.Mesh;
        SM_Curtains: THREE.Mesh;
        Cube001: THREE.Mesh;
        Cube001_1: THREE.Mesh;
        Cube005: THREE.Mesh;
        Cube005_1: THREE.Mesh;
        SM_Detail: THREE.Mesh;
        SM_Table: THREE.Mesh;
        SM_Chair: THREE.Mesh;
        Cylinder002: THREE.Mesh;
        Cylinder002_1: THREE.Mesh;
        Cube012: THREE.Mesh;
        Cube012_1: THREE.Mesh;
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
        M_Ocludder: THREE.MeshStandardMaterial;
        M_Glass: THREE.MeshStandardMaterial;
        M_Curtains: THREE.MeshStandardMaterial;
        M_CeramicEnamelTiles: THREE.MeshStandardMaterial;
        M_Black: THREE.MeshStandardMaterial;
        M_AcousticCeiling: THREE.MeshStandardMaterial;
        M_FlatLight: THREE.MeshStandardMaterial;
        M_InteriourSet: THREE.MeshStandardMaterial;
        M_Table: THREE.MeshStandardMaterial;
        M_FurnitureSet: THREE.MeshStandardMaterial;

        M_Watches: THREE.MeshStandardMaterial;

        M_ClaySmooth: THREE.MeshStandardMaterial;
        Ch16_Body: THREE.MeshStandardMaterial;
        Ch16_body1: THREE.MeshStandardMaterial;
        Ch16_eyelashes: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

export function FullScene(props: JSX.IntrinsicElements['group']) {
    const group = useRef<Group | null>(null);
    const { scene, animations } = useGLTF('/models/full_scene_new-transformed.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const m = materials.M_Ocludder;
        if (!m) return;

        m.colorWrite = false; // invisible
        m.depthWrite = true; // still writes depth
        m.depthTest = true;
        m.transparent = false;
        m.opacity = 1;
        m.polygonOffset = true;
        m.polygonOffsetFactor = -1;
        m.polygonOffsetUnits = -1;
        m.needsUpdate = true;

        m.side = THREE.DoubleSide;

        m.needsUpdate = true;
    }, [materials]);

    useEffect(() => {
        const action = actions['Idle'];
        if (action) action.reset().fadeIn(0.5).play();
        return () => {
            action?.fadeOut(0.5);
        };
    }, [actions]);

    if (animations.length > 0) {
        animations[0].name = 'Idle';
    }
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene" rotation={[0, (3 * Math.PI) / 2, 0]}>
                <mesh
                    name="Occluder"
                    geometry={nodes.Occluder.geometry}
                    material={materials.M_Ocludder}
                />
                <group
                    name="Armature"
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                >
                    <primitive object={nodes.mixamorigHips} />
                </group>
                <mesh
                    name="SM_Glass"
                    geometry={nodes.SM_Glass.geometry}
                    material={materials.M_Glass}
                />
                <mesh
                    name="SM_Curtains"
                    geometry={nodes.SM_Curtains.geometry}
                    material={materials.M_Curtains}
                />
                <group name="SM_Floor">
                    <mesh
                        name="Cube001"
                        geometry={nodes.Cube001.geometry}
                        material={materials.M_CeramicEnamelTiles}
                    />
                    <mesh
                        name="Cube001_1"
                        geometry={nodes.Cube001_1.geometry}
                        material={materials.M_Black}
                    ></mesh>
                </group>
                <group name="SM_Ceiling">
                    <mesh
                        name="Cube005"
                        geometry={nodes.Cube005.geometry}
                        material={materials.M_AcousticCeiling}
                    />
                    <mesh
                        name="Cube005_1"
                        geometry={nodes.Cube005_1.geometry}
                        material={materials.M_FlatLight}
                    />
                </group>
                <mesh
                    name="SM_Detail"
                    geometry={nodes.SM_Detail.geometry}
                    material={materials.M_InteriourSet}
                />
                <mesh
                    name="SM_Table"
                    geometry={nodes.SM_Table.geometry}
                    material={materials.M_Table}
                    scale={0.01}
                />
                <mesh
                    name="SM_Chair"
                    geometry={nodes.SM_Chair.geometry}
                    material={materials.M_FurnitureSet}
                    position={[-0.3, 0, 0.3]}
                />
                <group name="SM_Watches" position={[-0.7, 1.8, 1.6]}>
                    <mesh
                        name="Cylinder002"
                        geometry={nodes.Cylinder002.geometry}
                        material={materials.M_Glass}
                    />
                    <mesh
                        name="Cylinder002_1"
                        geometry={nodes.Cylinder002_1.geometry}
                        material={materials.M_Watches}
                    />
                </group>
                <group name="SM_Walls">
                    <mesh
                        name="Cube012"
                        geometry={nodes.Cube012.geometry}
                        material={materials.M_Black}
                    />
                    <mesh
                        name="Cube012_1"
                        geometry={nodes.Cube012_1.geometry}
                        material={materials.M_ClaySmooth}
                    />
                </group>
                <skinnedMesh
                    name="Ch16_Body1"
                    geometry={nodes.Ch16_Body1.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Body1.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Cap"
                    geometry={nodes.Ch16_Cap.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Cap.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Eyelashes"
                    geometry={nodes.Ch16_Eyelashes.geometry}
                    material={materials.Ch16_eyelashes}
                    skeleton={nodes.Ch16_Eyelashes.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Mask"
                    geometry={nodes.Ch16_Mask.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Mask.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Pants"
                    geometry={nodes.Ch16_Pants.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Pants.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Shirt"
                    geometry={nodes.Ch16_Shirt.geometry}
                    material={materials.Ch16_Body}
                    skeleton={nodes.Ch16_Shirt.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
                <skinnedMesh
                    name="Ch16_Shoes"
                    geometry={nodes.Ch16_Shoes.geometry}
                    material={materials.Ch16_body1}
                    skeleton={nodes.Ch16_Shoes.skeleton}
                    position={[-0.284, 0, 0.29]}
                    rotation={[Math.PI / 2, 0, -1.419]}
                    scale={0.01}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/full_scene_new-transformed.glb');
