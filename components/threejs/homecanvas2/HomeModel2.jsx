"use client"
import { MeshTransmissionMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "@/public/Faceprofilewire";
import { Text } from "@react-three/drei";
import { useState } from "react";
import { useEffect } from "react";
import * as THREE from 'three';


export default function HomeModel2() {

  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();

  let goBackwards = false;

  useFrame(() => {
    if (goBackwards === false) {
      shapeRef.current.rotation.y += 0.001;
      // console.log("rotation current forwards Y:", shapeRef.current.rotation.y);

      if (shapeRef.current.rotation.y.toFixed(1) == 0.6) {
        goBackwards = true;
      }
      
    } else if (goBackwards === true) {
      shapeRef.current.rotation.y -= 0.001;
      // console.log("rotation current backwards Y:", shapeRef.current.rotation.y);

      if (shapeRef.current.rotation.y.toFixed(1) == -0.6) {
        goBackwards = false;
      }
    }
  });

  return(
    <mesh ref={shapeRef} position={[0, -0.7, -1]} rotation-x={Math.PI * 0} rotation-y={Math.PI * 0}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Model></Model>
    </mesh>
  )
}

