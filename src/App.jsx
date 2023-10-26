
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'
import { KeyboardControls } from '@react-three/drei'
import Interface from './components/Interface'


function App() {
 
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
    ]}
    >
        <Canvas
          camera={{
            fov:45,
            near:0.1,
            far:200,
            position:[2.5,4,6]
          }}
        >
          <Scene/>
        </Canvas>
        <Interface/>
    </KeyboardControls>
  )
}

export default App
