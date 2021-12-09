/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React, { useRef, useEffect } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { Text } from 'troika-three-text'
import { TEXT_SPAN } from '@src/constants/texts'
import { MESH_BUTTON } from '@src/constants/meshes'
import { BUTTON } from '@src/constants/layers'
import TM from 'gsap'
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
    <mesh
      position={position}
      renderOrder={BUTTON}
      name={MESH_BUTTON}
      onPointerEnter={() => {
        if (titleMaterialRef.current) {
          TM.to(titleMaterialRef.current.uniforms.uVelo, 0.25, {
            value: 1,
            ease: 'expo.out'
          })
        }
      }}
      onPointerLeave={() => {
        if (titleMaterialRef.current) {
          TM.to(titleMaterialRef.current.uniforms.uVelo, 0.25, {
            value: 0,
            ease: 'expo.out'
          })
        }
      }}
      onPointerMove={(e) => {
        const background = e.intersections.find(
          (intersection) => intersection.eventObject.name === MESH_BUTTON
        )
        if (
          titleMaterialRef.current &&
          background.object.name === MESH_BUTTON
        ) {
          titleMaterialRef.current.uMouse = background.uv
        }
      }}
    >
      <planeGeometry args={[3.0, 0.5]} />
      <buttonMaterial ref={titleMaterialRef} />
      <text
        position={[0, 0, 0]}
        fontSize={TEXT_SPAN}
        font={'/fonts/Barlow-Regular.ttf'}
        color="#ffffff"
        maxWidth={7}
        text={label}
        anchorX="center"
        anchorY="middle"
        ref={titleRef}
      >
        <meshBasicMaterial color="red" />
      </text>
    </mesh>
  )
}

export default Button
