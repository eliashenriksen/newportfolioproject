/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 landingpagemodel.gltf --transform
*/

//"Paradox Abstract Art of Python" (https://skfb.ly/6uZyX) by daydev is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshTransmissionMaterial, MeshDistortMaterial, MeshRefractionMaterial } from "@react-three/drei"

export function Model(props) {

  const { nodes, materials } = useGLTF('/landingpagemodel-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001_0.geometry} material={nodes.Plane001_0.material} rotation={[0, 0.087, -0.072]}>
        {/* <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        emissive={"#00ffb7"}
        color={"#ffffff"}>
        </meshPhysicalMaterial> */}
        <MeshDistortMaterial distort={0.4} speed={3} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/landingpagemodel-transformed.glb')