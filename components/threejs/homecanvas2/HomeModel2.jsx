import { MeshTransmissionMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, ChromaticAberration, Bloom } from "@react-three/postprocessing";
import { Model } from "@/public/Faceprofilewire";
import { Text } from "@react-three/drei";
import { useState } from "react";
import { useEffect } from "react";


export default function HomeModel2() {

  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  const aberrationRef = useRef();
  // console.log(aberrationRef.current.uniforms.get("offset").value.x);
  // console.log(aberrationRef.current.uniforms.get("offset").value.y);
  // console.log(shapeRef);

  let goBackwards = false;

  useFrame(() => {
    if (goBackwards === false) {
      shapeRef.current.rotation.y += 0.001;

      // if (aberrationRef.current.uniforms.get("offset").value.x < 0.05) {
      //   aberrationRef.current.uniforms.get("offset").value.x += 0.001;
      //   console.log(aberrationRef.current.uniforms.get("offset").value.x);
      // }
      // console.log(shapeRef.current.rotation.y.toFixed(1));
      if (shapeRef.current.rotation.y.toFixed(1) == 3.7) {
        goBackwards = true;
      }
      
    } else if (goBackwards === true) {
      shapeRef.current.rotation.y -= 0.001;

      // if (aberrationRef.current.uniforms.get("offset").value.x > 0.05) {
      //   aberrationRef.current.uniforms.get("offset").value.x -= 0.001;
      //   console.log(aberrationRef.current.uniforms.get("offset").value.x);
      // }
      // aberrationRef.current.uniforms.get("offset").value.x -= 0.001;
      // console.log(shapeRef.current.rotation.y.toFixed(1));
      if (shapeRef.current.rotation.y.toFixed(1) == 2.6) {
        goBackwards = false;
      }
    }
  });

  return(
    <mesh ref={shapeRef} position={[0, -0.7, -1]} rotation-x={Math.PI * 0} rotation-y={Math.PI * 1.1}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Model></Model>
      {/* <EffectComposer>
        <ChromaticAberration ref={aberrationRef} offset={[0.002, -0.002]}></ChromaticAberration>
      </EffectComposer> */}
    </mesh>
  )
}

