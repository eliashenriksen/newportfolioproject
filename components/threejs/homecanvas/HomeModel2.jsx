"use client"
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useContext } from "react";
import { Model } from "@/public/Faceprofilewire";
import { PerformanceContext } from "@/app/layout";


export default function HomeModel2() {

  const {performanceMode, setPerformanceMode} = useContext(PerformanceContext);

  //https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/hooks/rotating-cube
  const shapeRef = useRef();
  let goBackwards = false;

  useFrame(() => {
    if (performanceMode === false) {
      if (goBackwards === false) {
        shapeRef.current.rotation.y += 0.001;
        // console.log("rotation current forwards Y:", shapeRef.current.rotation.y);
        // console.log("goBackwards? :", goBackwards);
  
        if (shapeRef.current.rotation.y.toFixed(1) == 0.6 || shapeRef.current.rotation.y.toFixed(1) > 0.6) {
          goBackwards = true;
        }
        
      } else if (goBackwards === true) {
        shapeRef.current.rotation.y -= 0.001;
        // console.log("rotation current backwards Y:", shapeRef.current.rotation.y);
        // console.log("goBackwards? :", goBackwards);
  
        if (shapeRef.current.rotation.y.toFixed(1) == -0.6 || shapeRef.current.rotation.y.toFixed(1) < -0.6) {
          goBackwards = false;
        }
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

