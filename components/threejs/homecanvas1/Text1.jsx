import { MeshTransmissionMaterial, Text3D, Center } from "@react-three/drei";

export default function Text1() {

  return(
    <Center middle>
      <Text3D 
      font={"/Poppins_Regular.json"}
      color={"#ffffff"}
      curveSegments={10}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.05}
      height={0.1}
      lineHeight={0.52  }
      letterSpacing={0.00}
      size={0.5}>
        {`IM ELIAS, A\nDESIGNER &\nDEVELOPER`}
        {/* {`I'm Elias, a\nDesigner &\nDeveloper`} */}
        <meshPhysicalMaterial roughness={0} color={"#ffffff"} clearcoat={1}></meshPhysicalMaterial>
        {/* <MeshTransmissionMaterial
        attenuationColor={"#ffffff"} 
        color={"#ffffff"}
        ior={1.33} 
        distortion={0.1} 
        distortionScale={0.1} 
        temporalDistortion={0.2} 
        chromaticAberration={0.03} 
        anisotropy={0.1} 
        transmission={1} 
        thickness={3} 
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.2}
        reflectivity={0.2}
        specularIntensity={0}>
        </MeshTransmissionMaterial> */}
      </Text3D>
    </Center>
  )
}