import React, { useRef, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { SLIDE } from '@src/constants/layers'
import { MATERIAL_NOISE } from '@src/constants/materials'
import './Materials/noise'

export default function Background({ children, material }) {
  const { viewport } = useThree()
  const materialRef = useRef()

  useFrame((state, delta) => {
    if (materialRef?.current?.uTime) {
      materialRef.current.uTime += delta
    }
  })

  const useMaterial = useMemo(() => {
    switch (material) {
      case MATERIAL_NOISE:
        return <noiseMaterial ref={materialRef} />
      default:
        return <meshPhongMaterial />
    }
  }, [material])

  return (
    <mesh position={[0, -viewport.height, 0]} renderOrder={SLIDE}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      {useMaterial}
      {children}
    </mesh>
  )
}
