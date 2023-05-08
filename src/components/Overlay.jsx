import { useSnapshot } from 'valtio'
import { state } from './../store.js'
import {Storevalue} from './../helpers/Storevalue.jsx'

export function Overlay() {

    const snap = useSnapshot(state)

    return (
        <div className={'overlay overlay-' + snap.stack}>
            <main>
                {snap.debug&&<Storevalue />}
            </main>
        </div>
    )
}