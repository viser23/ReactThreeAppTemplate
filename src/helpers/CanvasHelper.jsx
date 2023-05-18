import { Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {useEffect, useState} from 'react'

export function CanvasHelper() {
    const ThreeState = useThree()

    const camera = ThreeState.camera
    // let cameraCoord = {}
    // console.log(ThreeState.camera)
    console.log(camera)
    const [cameraCoord, setCameraCoord] = useState(camera.position)
    
    useEffect(()=>{
         console.log(cameraCoord) 
     },[cameraCoord])

     useFrame(()=>{
        setCameraCoord(camera.position)
        //  console.log(cameraCoord)
     })
    
    return (<>
        <axesHelper args={[1]} />
        <gridHelper args={[6, 6, 0xffffff, 'gray']} />
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