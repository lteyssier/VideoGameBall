/* eslint-disable react/no-unknown-property */
import Lights from "./Lights"
import { OrbitControls } from "@react-three/drei"
import {Level} from "./Level"
import { Physics } from "@react-three/rapier"
import Player from "./Player"
import useGame from "../stores/useGame"

const Scene = () => {

  const blocksCount = useGame((state)=>{return state.blocksCount})
  const blocksSeed = useGame((state)=>{return state.blocksSeed})

  return (
    <>
              <color args={ [ '#bdedfc' ] } attach="background" />

            <OrbitControls makeDefault/>
            <Lights/>
            <Physics debug={false}>  
                <Level count={blocksCount} seed={blocksSeed}/>
                <Player/>
            </Physics>
     
    </>
  )
}

export default Scene