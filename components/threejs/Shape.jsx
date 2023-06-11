import { MeshTransmissionMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, ChromaticAberration, Bloom } from "@react-three/postprocessing";
import { Model } from "@/public/Landingpagemodel";


export default function Shape() {
  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  useFrame(() => {
    shapeRef.current.rotation.y += 0.001;
  });

  return(
    <mesh ref={shapeRef} position={[-3.5, 0, -1]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Model></Model>
      <EffectComposer>
        <ChromaticAberration offset={[0.001, 0.001]}></ChromaticAberration>
        <Bloom intensity={1}></Bloom>
      </EffectComposer>
    </mesh>
  )
}