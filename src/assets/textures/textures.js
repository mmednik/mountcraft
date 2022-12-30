import { grassImage } from './images'
import { RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(grassImage)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export { groundTexture }
