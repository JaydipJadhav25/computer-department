import {  OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from "three"
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Mesh } from "three";


// import { EffectComposer, Bloom } from '@react-three/postprocessing';
export default function MeshComp() {
    const meashRef = useRef<Mesh>(null);
  

      useFrame(({ clock }) => {
        if (meashRef.current) {
        //   meashRef.current.rotation.y = clock.getDelta(); // Rotates smoothly in opposite direction
         meashRef.current.rotation.y = -clock.elapsedTime;
        }
      });

      const colorMap = useLoader(TextureLoader, './projects.png')
  return (
        <>
        <ambientLight intensity={1.5} /> {/* Increased intensity */}
  <directionalLight position={[0, 9, 10]} color="blue" intensity={9}
     castShadow 
    
  />
  
  {/* Additional point light for glow effect */}
  <pointLight position={[0, 9, 19]} intensity={9} color="blue" />
       <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
       {/* <mesh ref={meashRef} position={[0, -1, 0]} rotation={[-0.1, 1, -0.3]}   */}
       <mesh ref={meashRef} position={[0, -1, 0]} rotation={[0, 1, 0]}  
     castShadow 
    receiveShadow >
    
        {/* Higher Segments for Smoothness */}
        <cylinderGeometry args={[2.6, 2.6, 5.5, 94, 90, true]} />
          

        {/* <sphereGeometry args={[2, 64, 64]} /> */}

        {/* <boxGeometry args={[3, 3, 3]} />  */}
        {/* Box geometry for the top part */}

    <meshStandardMaterial  map={colorMap}   transparent side={THREE.DoubleSide} 
          roughness={4.9} /* Reduces roughness for smooth surface */
          metalness={0.1} /* Adds a glossy effect */
        //  wireframe={true} 
    />

  </mesh>
   
        </>
  )
}
