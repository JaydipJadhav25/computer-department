import {Canvas} from "@react-three/fiber"
import Mesh from "./Mesh"
export default function CanvasComp() {
  return (

      <Canvas shadows={true} style={{ height: '80vh' }} camera={{ position: [-1, -1, -5]}}>
        <Mesh />
      </Canvas>

  )
}
