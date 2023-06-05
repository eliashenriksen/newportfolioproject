import { MeshTransmissionMaterial, Text3D } from "@react-three/drei";

export default function Text1() {

  return(
    <Text3D 
    font={"/Ubuntu_Regular.json"}
    color={"#ffffff"}
    curveSegments={10}
    bevelEnabled
    bevelSize={0.04}
    bevelThickness={0.05}
    height={0.1}
    lineHeight={0.7}
    letterSpacing={-0.03}
    size={0.5}>
      {`IM ELIAS, A\n DESIGNER &\n DEVELOPER`}
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
  )
}