"use client"
import { Canvas } from "@react-three/fiber";
import Lights from "../Lights";
import HomeModel2 from "./HomeModel2";
import { Stats } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useCanvasPositionHandler } from "@/hooks/useCanvasPositionHandler";

export default function HomeCanvas2() {

  const canvas2Position = useCanvasPositionHandler().canvas2Position;
  const canvas2DPR = useCanvasPositionHandler().canvas2DPR;

  //https://discourse.threejs.org/t/accessing-the-camera-in-react-three-fiber-out-of-the-canvas/39137/2
  //https://github.com/pmndrs/drei#perspectivecamera
  const cameraConfig = { fov: 50, near: 0.1, far: 2000, position: canvas2Position ? canvas2Position : [0, 0, 2], zoom: 0.8 };

  return(
    <Canvas shadows dpr={canvas2DPR}>
      <PerspectiveCamera makeDefault {...cameraConfig}></PerspectiveCamera>
      <Lights></Lights>
      <HomeModel2></HomeModel2>
      <Stats></Stats>
    </Canvas>
  )
}