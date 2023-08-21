"use client"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState, useRef } from "react";
import Lights from "../Lights";
import Controls from "../Controls";
import HomeModel1 from "./HomeModel1";
import Text1 from "./Text1";
import Text2 from "./Text2";
import { Center, Stats, View } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useCanvasPositionHandler } from "@/hooks/useCanvasPositionHandler";
import styles from "./HomeCanvas.module.css";
import HomeModel2 from "./HomeModel2";
import HomeScene1 from "./scenes/HomeScene1";


export default function HomeCanvas({ containerRef, view1Ref, view2Ref}) {

  const [movedX, setMovedX] = useState(0);
  const [movedY, setMovedY] = useState(0);


  // function modelMoveFunction(event) {
  //   // console.log(event.clientX, event.clientY);
  //   const compensatedX = (event.clientX - (window.innerWidth * 0.5)) / 20000;
  //   const compensatedY = (event.clientY - (window.innerHeight * 0.5)) / 20000;
  //   setMovedX(compensatedX);
  //   setMovedY(compensatedY);
  // }

  // useEffect(() => {
  //   window.addEventListener("mousemove", modelMoveFunction);
  //   return () => {
  //     window.removeEventListener("mousemove", modelMoveFunction);
  //   }
  // }, []);

  const camera1Position = useCanvasPositionHandler().camera1Position;
  const camera2Position = useCanvasPositionHandler().camera2Position;
  const canvas1DPR = useCanvasPositionHandler().canvas1DPR;

  //https://discourse.threejs.org/t/accessing-the-camera-in-react-three-fiber-out-of-the-canvas/39137/2
  //https://github.com/pmndrs/drei#perspectivecamera
  const camera1Config = { fov: 50, near: 0.1, far: 2000, position: camera1Position ? camera1Position : [0, 0, 4], zoom: 0.8 };
  const camera2Config = { fov: 50, near: 0.1, far: 2000, position: camera2Position ? camera2Position : [0, 0, 2], zoom: 0.8 };

  return(
    <div ref={containerRef}>
      <HomeScene1 view1Ref={view1Ref}></HomeScene1>
      <Canvas eventSource={containerRef} shadows dpr={canvas1DPR} className={styles.canvas}>
        <View track={view1Ref}>
          <PerspectiveCamera makeDefault {...camera1Config}></PerspectiveCamera>
          <Lights></Lights>
          <HomeModel1></HomeModel1>
          <mesh position={[-1, 2, -4]} rotation-y={Math.PI * -movedX} rotation-x={Math.PI * -movedY}>
            <Text2></Text2>
            <Text1></Text1>
          </mesh>
        </View>
        <View track={view2Ref}>
          <PerspectiveCamera makeDefault {...camera2Config}></PerspectiveCamera>
          <Lights></Lights>
          <HomeModel2></HomeModel2>
          <Stats></Stats>
        </View>
      </Canvas>
    </div>
  )
}