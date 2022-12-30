import {
  grassImage,
  dirtImage,
  logImage,
  glassImage,
  woodImage
} from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(grassImage)
const dirtTexture = new TextureLoader().load(dirtImage)
const logTexture = new TextureLoader().load(logImage)
const glassTexture = new TextureLoader().load(glassImage)
const woodTexture = new TextureLoader().load(woodImage)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

logTexture.wrapS = RepeatWrapping
logTexture.wrapT = RepeatWrapping
logTexture.magFilter = NearestFilter

glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

export {
  groundTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
