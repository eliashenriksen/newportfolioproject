"use client"
import styles from "./page.module.css";
import { Canvas, useThree } from "@react-three/fiber";
import Shape from "@/components/threejs/Shape";
import Shape2 from "@/components/threejs/Shape2";
import Controls from "@/components/threejs/Controls";
import { Text, GradientTexture, Text3D } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import Text1 from "@/components/threejs/Text1";
import Text2 from "@/components/threejs/Text2";
import Lights from "@/components/threejs/Lights";
import { createClient } from "contentful";


export default function TestRoute() {

  async function getContent() {
    const client = createClient({
      space: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE}`,
      environment: 'master', // defaults to 'master' if not set
      accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
    })

    try {
      const response = await client.getEntries();
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  getContent();

  // client.getEntries()
  // .then((response) => console.log(response.items))
  // .catch(console.error)

  return(
    <div className={styles.scene}>
      <div className={styles.testdiv}></div>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{ fov: 50, near: 0.1, far: 1000, position: [-6, 0, -6] }}>
          <Lights></Lights>
          <Controls></Controls>
          <Shape></Shape>
          {/* <Shape2></Shape2> */}
          <mesh position={[-0, 0, -5]} rotation-y={Math.PI * 1.27} rotation-x={Math.PI * -0}>
            <Text2></Text2>
            <Text1></Text1>
          </mesh>
          {/* <mesh position={[1, 0, 0]} rotation-y={Math.PI * 1.5}>
            <planeGeometry args={[120, 60, 32, 32]}></planeGeometry>
            <meshBasicMaterial>
              <GradientTexture
              stops={[0, 0.5, 1]}
              colors={['#302F47', '#334956', '#302F47']}
              size={10}>
              </GradientTexture>
            </meshBasicMaterial>
          </mesh> */}
          {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" background blur={1}></Environment> */}
      </Canvas>
    </div>
  )
}