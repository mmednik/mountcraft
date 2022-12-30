import create from "zustand";
import { v4 as uuidv4 } from 'uuid';

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: uuidv4,
    pos: [1, 1, 1],
    texture: 'dirt'
  }],
  addCube: () => { },
  removeCube: () => { },
  setTexture: () => { },
  saveWorld: () => { },
  resetWorld: () => { }
}))