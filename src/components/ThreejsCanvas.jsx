import { Canvas, useThree } from '@react-three/fiber'
import { CanvasHelper } from '../helpers/CanvasHelper.jsx'
import { Lights } from '../components/Lights.jsx'
import { matBlu, matVerde } from './prjMaterials.jsx'
import { Environment,  ContactShadows, OrbitControls, Box } from '@react-three/drei'

import * as THREE from 'three'

import { state } from './../store.js'
import { useSnapshot } from 'valtio'



export function ThreejsCanvas() {
    const snap = useSnapshot(state)
    const fov = 25
    const position = [0, 2, 10]

    const materials = []
    console.log(materials.blu)

    return (
        <Canvas className={'canvas-' + snap.stack} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
            <CanvasHelper />
            <OrbitControls  makeDefault  enableZoom={true} enablePan={true} enableRotate={true}/>
            <Environment preset="city" intensity={1} blur={0} resolution={2046}/>
                {/* SI POSIZIONA IN BASE AL CENTRO DELL'ITEM */}
                <Box args={[1]} scale={0.2} position={[2,0.1,0]} material={matBlu}></Box>
                <Box args={[1]} scale={1.8} position={[0.4,0.08,-0.78]} material={matVerde}></Box>
        </Canvas>
    )
}