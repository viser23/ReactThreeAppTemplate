import { useHelper } from "@react-three/drei"
import { useRef } from "react"
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'
import { useControls } from "leva";


export function RectAreaLightHelp(props) {

    const light = useRef()
    useHelper(light, RectAreaLightHelper, 'cyan')
    // console.log(light)

    const [{ position,intensity,distance, angle,penumbra, decay }] = useControls("rectAreaLight",
    () => ({
        color: "#fff",
        position: [1, 2, 5],
        intensity: {value: 1,min:0,max:10,step:0.1},
        distance: {value: 50,min:0,max:100,step:0.1},
        angle: {value: 0.3,min:0,max:1.2,step:0.01},
        penumbra: {value: 1,min:0,max:1,step:0.01},
        decay: {value: 1,min:0,max:20,step:0.1},
        })
    )

    return (<>
        <rectAreaLight ref={light} width={2.5} height={1.65} intensity={65} color={'#eee'} rotation={[- 0.1, Math.PI, 0]} position={[0, 0.55, - 1.15]} />
    </>)
}
// TUTTO DA SISTEMARE