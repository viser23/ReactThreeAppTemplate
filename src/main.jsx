import { createRoot } from 'react-dom/client'
import { ThreejsCanvas } from './components/ThreejsCanvas.jsx'
import { Overlay } from './components/Overlay.jsx'
import './styles.css'

const querystring = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const iframeclass = (querystring.iframe) ? "root-iframe" : "root"
const body = document.querySelector('body')
body.classList.add(iframeclass)

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <ThreejsCanvas />
    <Overlay />
  </>
)
