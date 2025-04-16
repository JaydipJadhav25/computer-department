import {Canvas} from "@react-three/fiber"
import MeshComp from "./MeshComp"

export default function CanvasComp() {
  return (

     <div className="h-72 md:w-full md:h-full mx-auto">
       <Canvas shadows={true} className="w-full h-full"  camera={{ position: [-1, -1, -5]}}>
        <MeshComp/>
      </Canvas>
     </div>

  )
}
