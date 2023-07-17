"use client"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Model } from "@/public/Landingpagemodel";
import * as THREE from 'three';


export default function HomeModel1() {
  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  useFrame(() => {
    shapeRef.current.rotation.y += 0.001;
  });

  return(
    <mesh ref={shapeRef} position={[1.5, 2, -4.5]} rotation-x={Math.PI * 1.9} rotation-y={Math.PI * 0}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Model></Model>
    </mesh>
  )
}