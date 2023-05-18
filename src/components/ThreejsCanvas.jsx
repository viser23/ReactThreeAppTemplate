import { Canvas, useThree } from '@react-three/fiber'
import { CanvasHelper } from '../helpers/CanvasHelper.jsx'
import { Environment,  ContactShadows, OrbitControls, Box } from '@react-three/drei'
import { state } from './../store.js'
import { useSnapshot } from 'valtio'


export function ThreejsCanvas() {
    const snap = useSnapshot(state)
    const fov = 25
    const position = [0, 2, 2.5]

    // const material = new THREE.MeshStandardMaterial({color:'#f00'})

    return (
        <Canvas className={'canvas-' + snap.stack} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
            <CanvasHelper />
            <OrbitControls  makeDefault  enableZoom={true} enablePan={true} enableRotate={true}/>
            <Environment preset="city" intensity={1} blur={0} resolution={2046}/>

                <Box args={[1]} scale={0.1} position={[0,0,0]}>

                </Box>

            {/* <spotLight intensity={1} angle={0.8} penumbra={1} position={[5, 10, 5]} castShadow /> */}
            {/* <ContactShadows position={[0, -0.2, 0]} rotation={[0, 0, 0]} opacity={0.6} scale={7} blur={1} />  */}
        </Canvas>
    )
}