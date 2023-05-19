import { Canvas, useThree } from '@react-three/fiber'
import { CanvasHelper } from '../helpers/CanvasHelper.jsx'
import { Lights } from '../components/Lights.jsx'
import { matBlu, matVerde, matViola } from './prjMaterials.jsx'
import { Environment,  ContactShadows, OrbitControls, Box } from '@react-three/drei'

import {Level1} from './Level1.jsx'

import * as THREE from 'three'

import { state } from './../store.js'
import { useSnapshot } from 'valtio'



export function ThreejsCanvas() {
    const snap = useSnapshot(state)
    const fov = 25
    const position = [0, 2, 10]

    return (
        <Canvas className={'canvas-' + snap.stack} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
            
            <CanvasHelper />
            <OrbitControls  makeDefault  enableZoom={true} enablePan={true} enableRotate={true}/>
            <Environment preset="city" intensity={1} blur={0} resolution={2046}/>
                {/* SI POSIZIONA IN BASE AL CENTRO DELL'ITEM */}
            <Level1 />
        </Canvas>
    )
}