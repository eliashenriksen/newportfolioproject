
export default function Lights() {
  return(
    <>
      <ambientLight color={"white"} intensity={0.3}></ambientLight>
      <pointLight color={"#03fcb6"} intensity={1} position={[-25, -5, -10]}></pointLight>
      <pointLight color={"blue"} intensity={1} position={[-20, 10, 10]}></pointLight>
      <pointLight color={"#ffffff"} intensity={1} position={[-10, 0, 0]}></pointLight>
    </>
  )
}