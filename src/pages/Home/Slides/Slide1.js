/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import { useThree } from '@react-three/fiber'
import Background from '@src/components/Background'
import Image from '@src/components/Image'
import Title from '@src/components/Title'
import Line from '@src/components/Line'
import * as THREE from 'three'
import { LOVE_1, LOVE_2 } from '@src/constants/images'
import { MATERIAL_FOG } from '@src/constants/materials'

/**
 * @function Slide1
 * Create the slide 1
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide1
 */
const Slide1 = () => {
  const { viewport } = useThree()
  return (
    <Background material={MATERIAL_FOG} slide={0}>
      <Title position={[0, 0, 0]} text="Title Test" />
      <Image
        position={[0, -4, 0]}
        texturePath={LOVE_1}
        textureHoverPath={LOVE_2}
      />
      <Line
        pointsPosition={[
          new THREE.Vector3(
            -viewport.width / 2,
            (0.1 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3(
            (-0.5 * viewport.width) / 2,
            (0.7 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3(0, 0, 1),
          new THREE.Vector3(
            (0.25 * viewport.width) / 2,
            (-0.6 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3((0.6 * viewport.width) / 2, viewport.height / 2, 1)
        ]}
      />
    </Background>
  )
}

export default Slide1
