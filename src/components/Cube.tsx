import { useStore } from "../hooks/useStore.js"
import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from '../assets/textures/textures.js'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube] = useStore(state => [state.removeCube]);
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[`${texture}Texture`]
  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if(e.altKey) {
          const {x, y, z} = ref.current.position;
          removeCube(x, y, z);
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        map={activeTexture}
        attach="material"
        color={isHovered ? 'grey' : 'white'}
      />
    </mesh>
  )
}