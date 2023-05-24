import { useSnapshot } from 'valtio'
import { state } from './../store.js'
import {Storevalue} from './../helpers/Storevalue.jsx'

export function Overlay() {

    const snap = useSnapshot(state)

    const change = () => {
        console.log("ppop")
        if (state.stack=='home') {
            state.stack='level1'
        } else  state.stack='home'
    }

    return (
        <div className={'overlay overlay-' + snap.stack}>
            <main>
                {snap.debug&&<Storevalue />}
                <button onClick={()=>{change()}}>clicca</button>
            </main>
        </div>
    )
}