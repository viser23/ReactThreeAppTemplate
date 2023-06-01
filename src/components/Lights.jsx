import { Environment, ContactShadows } from '@react-three/drei'

export function Lights() {

    return (
        <>
            {/* <rectAreaLight width={ 2.5 } height={ 1.65 } intensity={ 65 } color={ '#eee' } rotation={ [ - 0.1, Math.PI, 0 ] } position={ [ 0, 0.55, - 1.15 ] } /> */}
            <spotLight intensity={1} angle={0.8} penumbra={1} position={[5, 10, 5]} castShadow />
            <Environment preset="city" intensity={1} blur={0} resolution={1024} />
            {/* <ContactShadows position={[0, -0.2, 0]} rotation={[0, 0, 0]} opacity={0.6} scale={7} blur={1} />  */}
        </>
        
    )
}

