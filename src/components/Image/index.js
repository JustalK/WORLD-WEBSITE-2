import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { IMAGE } from '@src/constants/layers'
import * as THREE from 'three'
import TM from 'gsap'
import './Materials'

export default function Image({ position, texturePath, textureHoverPath }) {
  const ref = useRef()
  const [uTexture, uTexture2] = useLoader(THREE.TextureLoader, [
    texturePath,
    textureHoverPath
  ])

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh
      position={position}
      renderOrder={IMAGE}
      onPointerEnter={() => {
        TM.to(ref.current.uniforms.uVelo, 1.0, {
          value: 1,
          ease: 'expo.out'
        })
      }}
      onPointerLeave={() => {
        TM.to(ref.current.uniforms.uVelo, 1.0, {
          value: 0,
          ease: 'expo.out'
        })
      }}
      onPointerMove={(e) => {
        ref.current.uMouse = e.intersections[0].uv
      }}
    >
      <planeGeometry args={[4, 4, 8, 8]} />
      <imageMaterial ref={ref} uTexture={uTexture} uTexture2={uTexture2} />
    </mesh>
  )
}
