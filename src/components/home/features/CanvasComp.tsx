import {Canvas} from "@react-three/fiber"
import MeshComp from "./MeshComp"

export default function CanvasComp() {
  return (

      <Canvas shadows={true} style={{ height: '80vh' }} camera={{ position: [-1, -1, -5]}}>
        <MeshComp/>
      </Canvas>

  )
}
