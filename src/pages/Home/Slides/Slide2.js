/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React from 'react'
import { useThree } from '@react-three/fiber'
import Background from '@src/components/Background'
import { MATERIAL_NOISE } from '@src/constants/materials'
import Line from '@src/components/Line'
import * as THREE from 'three'

/**
 * @function Slide2
 * Create the slide 2
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide2
 */
const Slide2 = () => {
  const { viewport } = useThree()

  return (
    <Background material={MATERIAL_NOISE} slide={1}>
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

export default Slide2
