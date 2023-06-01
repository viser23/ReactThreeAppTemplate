import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'
import {  Center } from '@react-three/drei'

import { useSnapshot } from 'valtio'
import { state } from '../store.js'




export function CameraContainer({children}) {

  const snap = useSnapshot(state)
  const group = useRef()
  // const { camera } = useThree();

    return (<OrbitControls  makeDefault  enableZoom={snap.stack=='forge' ? true : false} enablePan={false} enableRotate={false} minDistance={0.5} maxDistance={2}/>
    )
}