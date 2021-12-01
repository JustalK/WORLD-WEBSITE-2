import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { SLIDE } from '@src/constants/layers'
import './Materials/noise'

export default function Background() {
  const { viewport } = useThree()
  const noiseMaterialRef = useRef()

  useFrame((state, delta) => {
    noiseMaterialRef.current.uTime += delta
  })

  return (
    <mesh position={[0, -viewport.height, 0]} renderOrder={SLIDE}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <noiseMaterial ref={noiseMaterialRef} />
    </mesh>
  )
}
