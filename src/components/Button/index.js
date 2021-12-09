/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React, { useRef, useEffect } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { TEXT_SPAN } from '@src/constants/texts'
import { MESH_TEXT } from '@src/constants/meshes'
import './Materials'

extend({ Text })

/**
 * @function Slide2
 * Create the slide 2
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide2
 */
const Button = ({ position, label }) => {
  const titleMaterialRef = useRef()
  const titleRef = useRef()

  useEffect(() => {
    titleRef.current.sync()
  })

  useFrame((state, delta) => {
    titleMaterialRef.current.uTime += delta
  })

  return (
    <mesh position={position} renderOrder={10000}>
      <planeGeometry args={[3.0, 0.5]} />
      <meshBasicMaterial color="red" />
      <text
        position={[0, 0, 0]}
        fontSize={TEXT_SPAN}
        font={'/fonts/Barlow-Regular.ttf'}
        color="#ffffff"
        maxWidth={7}
        text={label}
        name={MESH_TEXT}
        anchorX="center"
        anchorY="middle"
        ref={titleRef}
      >
        <buttonMaterial ref={titleMaterialRef} />
      </text>
    </mesh>
  )
}

export default Button
