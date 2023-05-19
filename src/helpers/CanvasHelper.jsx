import { Html,GizmoHelper,GizmoViewcube } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {useEffect, useState} from 'react'
import {Placeholder} from './Placeholder.jsx'
import { Perf } from 'r3f-perf'


export function CanvasHelper() {
    const ThreeState = useThree()

    const camera = ThreeState.camera
    // let cameraCoord = {}
    // console.log(ThreeState.camera)
    // console.log(camera)
    const [cameraCoord, setCameraCoord] = useState(camera.position)
    
    useEffect(()=>{
        //  console.log(cameraCoord) 
     },[cameraCoord])

     useFrame(()=>{
        setCameraCoord(camera.position)
        //  console.log(cameraCoord)
     })
    
    return (<>
        <Perf position={'bottom-right'} />
        <axesHelper size={[1]} />
        <gridHelper args={[10, 10, '#eee', '#333']} />
        <Placeholder />
        <GizmoHelper alignment="bottom-left"  margin={[80, 80]}  gizmo="GizmoViewcube">
            <GizmoViewcube />
        </GizmoHelper>
        {/* <Html className="htmlhelper">
        {Object.keys(cameraCoord).map(key => (
            <div key={key}>
            {key}: {cameraCoord[key]}
            </div>
        ))}
        </Html> */}
    </>
    )
} 