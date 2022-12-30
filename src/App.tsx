import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"

function App() {
  return (
    <>
      <h1>MountCraft</h1>
      <Canvas>
        <Sky />
      </Canvas>
    </>
  )
}

export default App
