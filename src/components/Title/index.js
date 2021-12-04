import React, { useRef, useEffect } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { Text } from 'troika-three-text'
import { MESH_TEXT } from '@src/constants/meshes'
import TM from 'gsap'
import './Materials'

extend({ Text })

const TitleColor = ({ position, text }) => {
  const titleMaterialRef = useRef()
  const titleRef = useRef()

  useEffect(() => {
    titleRef.current.sync()
  })

  useFrame((state, delta) => {
    titleMaterialRef.current.uTime += delta
  })

  return (
    <text
      position={position}
      fontSize={1.0}
      font={'/fonts/Barlow-Regular.ttf'}
      color="#ffffff"
      maxWidth={100}
      text={text}
      name={MESH_TEXT}
      anchorX="center"
      anchorY="middle"
      ref={titleRef}
      onPointerEnter={() => {
        TM.to(titleMaterialRef.current.uniforms.uVelo, 0.25, {
          value: 1,
          ease: 'expo.out'
        })
      }}
      onPointerLeave={() => {
        TM.to(titleMaterialRef.current.uniforms.uVelo, 0.25, {
          value: 0,
          ease: 'expo.out'
        })
      }}
      onPointerMove={(e) => {
        const background = e.intersections.find(
          (intersection) => intersection.eventObject.name === MESH_TEXT
        )
        if (titleMaterialRef.current && background.object.name === MESH_TEXT) {
          titleMaterialRef.current.uMouse = background.uv
        }
      }}
    >
      <textMaterial ref={titleMaterialRef} />
    </text>
  )
}

export default TitleColor
