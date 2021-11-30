import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { IMAGE } from '@src/constants/layers'
import * as THREE from 'three'
import './Materials'

export default function Image() {
  const ref = useRef()
  const [uTexture] = useLoader(THREE.TextureLoader, ['./images/love_1.jpg'])

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh
      position={[0, 0, 0]}
      renderOrder={IMAGE}
      onPointerEnter={() => {
        console.log('On It !')
      }}
    >
      <planeGeometry args={[4, 4]} />
      <imageMaterial ref={ref} uTexture={uTexture} />
    </mesh>
  )
}
