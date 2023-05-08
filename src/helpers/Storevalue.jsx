import { useSnapshot } from 'valtio'
import { state } from './../store.js'

export function Storevalue() {
  const snap = useSnapshot(state)

  return (
      <div className='item-parameters'>
        <div>stack: {snap.stack}</div>
        <div>debug: {snap.debug? "true":"false"}</div>
      </div>
  )
}

