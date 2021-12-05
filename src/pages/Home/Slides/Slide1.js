/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import Background from '@src/components/Background'
import Title from '@src/components/Title'
import { useThree } from '@react-three/fiber'
import { MATERIAL_FOG } from '@src/constants/materials'
import Line from '@src/components/Line'
import * as THREE from 'three'
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
      <Title position={[0, 0, 0]} text="JUSTAL KEVIN" />
      <Line
        pointsPosition={[
          new THREE.Vector3(
            -viewport.width / 2,
            -(0.8 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3(
            (-0.5 * viewport.width) / 2,
            (0.7 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3(
            (0.25 * viewport.width) / 2,
            (0.6 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3((0.6 * viewport.width) / 2, viewport.height / 2, 1)
        ]}
      />
      <Line
        pointsPosition={[
          new THREE.Vector3(viewport.width / 2, (0.7 * viewport.height) / 2, 1),
          new THREE.Vector3(
            (0.6 * viewport.width) / 2,
            -(0.5 * viewport.height) / 2,
            1
          ),
          new THREE.Vector3((0.4 * viewport.width) / 2, -viewport.height, 2),
          new THREE.Vector3(
            -(0.25 * viewport.width) / 2,
            -1.2 * viewport.height,
            1
          ),
          new THREE.Vector3(-viewport.width / 2, -1.75 * viewport.height, 1)
        ]}
      />
    </Background>
  )
}

export default Slide1
