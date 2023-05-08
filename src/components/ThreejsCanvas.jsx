import { Canvas } from '@react-three/fiber'
import { Environment,  ContactShadows, OrbitControls } from '@react-three/drei'

import { state } from './../store.js'
import { useSnapshot } from 'valtio'


export function ThreejsCanvas() {
    const snap = useSnapshot(state)
    const fov = 25
    const position = [0, 2, 2.5]

    return (
        <Canvas className={'canvas-' + snap.stack} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
            <OrbitControls  makeDefault  enableZoom={true} enablePan={true} enableRotate={true}/>
            <Environment preset="city" intensity={1} blur={0} resolution={2046}/>

                <axesHelper args={[1]} />
                <gridHelper args={[6, 6, 0xffffff, 'gray']} />

            {/* <spotLight intensity={1} angle={0.8} penumbra={1} position={[5, 10, 5]} castShadow /> */}
            {/* <ContactShadows position={[0, -0.2, 0]} rotation={[0, 0, 0]} opacity={0.6} scale={7} blur={1} />  */}
        </Canvas>
    )
}