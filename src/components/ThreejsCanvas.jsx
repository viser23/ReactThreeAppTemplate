import { Canvas, useThree } from '@react-three/fiber'
import { CanvasHelper } from '../helpers/CanvasHelper.jsx'
import { Lights } from '../components/Lights.jsx'
import { OrbitControls } from '@react-three/drei'

import { lazy, Suspense } from "react";


// const Level1  = lazy(() => import("./Level1"));
// import {Level1} from './Level1.jsx'

// import * as THREE from 'three'

import { state } from './../store.js'
import { useSnapshot } from 'valtio'
import { SpotLightHelp } from '../helpers/SpotLightHelp.jsx'
import { RectAreaLightHelp } from '../helpers/RectAreaLightHelp.jsx'

// const module = await import('/modules/myCustomModule.js');

export function ThreejsCanvas() {
    
    const snap = useSnapshot(state)
    const fov = 25
    const position = [0, 2, 10]

    return (
        <Canvas className={'canvas-' + snap.stack} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
            <CanvasHelper />
            <Lights />
            {/* <SpotLightHelp /> */}
            {/* <RectAreaLightHelp /> */}
            <OrbitControls makeDefault enableZoom={true} enablePan={true} enableRotate={true} />
            
            {/* SI POSIZIONA IN BASE AL CENTRO DELL'ITEM */}
            <Suspense>
                {snap.stack == 'level1' && <Level1 position={[0, 0, 0]} />}
            </Suspense>
        </Canvas>
    )
}