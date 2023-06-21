"use client"
import { Canvas } from "@react-three/fiber";
import Lights from "../Lights";
import HomeModel2 from "./HomeModel2";
import { Stats } from "@react-three/drei";

export default function HomeCanvas2() {

  return(
    <Canvas shadows camera={{ fov: 50, near: 0.1, far: 2000, position: [0, 0, -5] }}>
      <Lights></Lights>
      <HomeModel2></HomeModel2>
      <Stats></Stats>
    </Canvas>
  )
}