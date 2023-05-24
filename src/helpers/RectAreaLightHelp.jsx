import { useHelper } from "@react-three/drei"
import { useRef } from "react"
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'
import { useControls } from "leva";


export function RectAreaLightHelp(props) {

    const light = useRef()
    useHelper(light, RectAreaLightHelper, 'cyan')
    // console.log(light)

    const [{ position,power,distance, angle,penumbra, decay,color, intensity }] = useControls("rectAreaLight",
    () => ({
        color: "#fff",
        position: [0, 1, -3],
        // power: {value: 1,min:0,max:1000,step:0.1},
        intensity: {value: 1,min:0,max:10,step:0.1},
        })
    )

    return (<>
        <rectAreaLight ref={light} decay={decay} width={1} height={1} intensity={intensity} color={color} rotation={[0, Math.PI, 0]} position={position} />
    </>)
}
// TUTTO DA SISTEMARE