import { MeshTransmissionMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, ChromaticAberration, Bloom } from "@react-three/postprocessing";
import { Model } from "@/public/faceprofile";
import { Text } from "@react-three/drei";


export default function Shape2() {

  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  let goBackwards = false;
  useFrame(() => {
    if (goBackwards === false) {
      shapeRef.current.rotation.y += 0.001;
      if (parseInt(shapeRef.current.rotation.y) === 4) {
        goBackwards = true;
      }
      
    } else if (goBackwards === true) {
      shapeRef.current.rotation.y -= 0.001;
      if (parseInt(shapeRef.current.rotation.y) === 2) {
        goBackwards = false;
      }
    }
  });

  return(
    <mesh ref={shapeRef} position={[-3.8, -0.5, -2]} rotation-x={Math.PI * 0} rotation-y={Math.PI * 1.1}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Text font="/NothingYouCouldDo-Regular.ttf" position={[0.1, -0.35, 0]} fontSize={0.03} color="#03fcb6">
        Yup, thats a model of my face
      </Text>
      <Model></Model>
      <EffectComposer>
        <ChromaticAberration offset={[0.001, 0.001]}></ChromaticAberration>
        <Bloom intensity={1}></Bloom>
      </EffectComposer>
    </mesh>
  )
}

