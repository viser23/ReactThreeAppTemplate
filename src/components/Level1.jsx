import {  Box } from '@react-three/drei'
import { matBlu, matVerde, matViola } from './prjMaterials.jsx'

export function Level1() {
    return (<>
        <Box args={[1]} scale={1} position={[2,0.5,0]} material={matBlu}></Box>
        <Box args={[1]} scale={1} position={[0.5,0.5,-3]} material={matVerde}></Box>
        <Box args={[1]} scale={1} position={[2.5,0.5,-1]} material={matViola}></Box>
    </>
)
}