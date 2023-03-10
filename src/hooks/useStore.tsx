import create from "zustand";
import { v4 as uuidv4 } from 'uuid';

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: uuidv4,
    pos: [1, 0, 1],
    texture: 'dirt'
  }],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: uuidv4,
        texture: state.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeCube: (x, y, z) => {
    set(state => ({
      cubes: state.cubes.filter(cube => {
        const [X, Y, Z] = cube.pos;
        return X!=x || Y!=y || Z!=z;
      })
    }))
  },
  setTexture: () => { },
  saveWorld: () => { },
  resetWorld: () => { }
}))