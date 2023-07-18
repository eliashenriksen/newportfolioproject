"use client"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react";
import Lights from "../Lights";
import Controls from "../Controls";
import HomeModel1 from "./HomeModel1";
import Text1 from "./Text1";
import Text2 from "./Text2";
import { Center, Stats } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useCanvasPositionHandler } from "@/hooks/useCanvasPositionHandler";


export default function HomeCanvas1() {

  const [movedX, setMovedX] = useState(0);
  const [movedY, setMovedY] = useState(0);
  // const [canvas1Position, setCanvas1Position] = useState([-5.5, -0.6, -6]);

  function modelMoveFunction(event) {
    // console.log(event.clientX, event.clientY);
    const compensatedX = (event.clientX - (window.innerWidth * 0.5)) / 20000;
    const compensatedY = (event.clientY - (window.innerHeight * 0.5)) / 20000;
    setMovedX(compensatedX);
    setMovedY(compensatedY);
  }

  useEffect(() => {
    // canvasPositionHandler();
    window.addEventListener("mousemove", modelMoveFunction);
    // window.addEventListener("resize", canvasPositionHandler);
    return () => {
      window.removeEventListener("mousemove", modelMoveFunction);
      // window.removeEventListener("resize", canvasPositionHandler);
    }
  }, []);

  const canvas1Position = useCanvasPositionHandler().canvas1Position;

  //https://discourse.threejs.org/t/accessing-the-camera-in-react-three-fiber-out-of-the-canvas/39137/2
  //https://github.com/pmndrs/drei#perspectivecamera
  const cameraConfig = { fov: 50, near: 0.1, far: 2000, position: canvas1Position ? canvas1Position : [0, 0, 4], zoom: 0.8 };

  return(
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault {...cameraConfig}></PerspectiveCamera>
      <Lights></Lights>
      <HomeModel1></HomeModel1>
      <mesh position={[-1, 2, -4]} rotation-y={Math.PI * -movedX} rotation-x={Math.PI * -movedY}>
        <Text2></Text2>
        <Text1></Text1>
      </mesh>
      {/* <Stats></Stats> */}
    </Canvas>
  )
}