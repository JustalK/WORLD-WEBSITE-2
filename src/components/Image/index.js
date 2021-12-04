import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { IMAGE } from '@src/constants/layers'
import { MESH_IMAGE } from '@src/constants/meshes'
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
      name={MESH_IMAGE}
      onPointerEnter={() => {
        TM.to(ref.current.uniforms.uVelo, 1.5, {
          value: 1.0,
          ease: 'expo.out'
        })
      }}
      onPointerLeave={() => {
        TM.to(ref.current.uniforms.uVelo, 1.5, {
          value: 0.0,
          ease: 'expo.out'
        })
      }}
      onPointerMove={(e) => {
        const background = e.intersections.find(
          (intersection) => intersection.eventObject.name === MESH_IMAGE
        )
        if (ref.current && background.object.name === MESH_IMAGE) {
          ref.current.uMouse = background.uv
        }
      }}
    >
      <planeGeometry args={[4, 4, 8, 8]} />
      <imageMaterial ref={ref} uTexture={uTexture} uTexture2={uTexture2} />
    </mesh>
  )
}
