import { proxy } from 'valtio'

const state = proxy({
  debug: true, // intro, forge, ...
  stack: 'home' // intro, forge, ...
})

export { state }
