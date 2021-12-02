import React, { useRef, useEffect } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { Text } from 'troika-three-text'
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
        titleMaterialRef.current.uMouse = e.intersections[0].uv
      }}
    >
      <textMaterial ref={titleMaterialRef} />
    </text>
  )
}

export default TitleColor
