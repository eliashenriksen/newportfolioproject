"use client"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react";
import Lights from "../Lights";
import Controls from "../Controls";
import HomeModel1 from "./HomeModel1";
import Text1 from "./Text1";
import Text2 from "./Text2";
import { Stats } from "@react-three/drei";


export default function HomeCanvas1() {

  const [movedX, setMovedX] = useState(0);
  const [movedY, setMovedY] = useState(0);

  function modelMoveFunction(event) {
    // console.log(event.clientX, event.clientY);
    const compensatedX = (event.clientX - 1920 * 0.5) / 25000;
    const compensatedY = (event.clientY - 1080 * 0.5) / 25000;
    setMovedX(compensatedX);
    setMovedY(compensatedY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", modelMoveFunction);
    return () => {
      window.removeEventListener("mousemove", modelMoveFunction);
    }
  }, []);

  return(
    <Canvas shadows camera={{ fov: 50, near: 0.1, far: 2000, position: [-5.5, -0.6, -6], zoom: 0.8 }} dpr={[1, 2]}>
      <Lights></Lights>
      <HomeModel1></HomeModel1>
      {/* <Shape2></Shape2> */}
      <mesh position={[-1, movedY * 10, -5]} rotation-y={Math.PI * 1.26 - movedX} rotation-x={Math.PI * movedY}>
        <Text2></Text2>
        <Text1></Text1>
      </mesh>
      {/* <Stats></Stats> */}
    </Canvas>
  )
}