import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, ChromaticAberration, Bloom } from "@react-three/postprocessing";
import { Model } from "@/public/Landingpagemodel";


export default function HomeModel1() {
  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  useFrame(() => {
    shapeRef.current.rotation.y += 0.001;
  });

  return(
    <mesh ref={shapeRef} position={[-3.5, 0, -1]} rotation-x={Math.PI * 1.9} rotation-y={Math.PI * 0}>
      {/* <sphereGeometry args={[2, 32, 16]}></sphereGeometry> */}
      <Model></Model>
      <EffectComposer>
        <ChromaticAberration offset={[0.002, -0.002]}></ChromaticAberration>
      </EffectComposer>
    </mesh>
  )
}