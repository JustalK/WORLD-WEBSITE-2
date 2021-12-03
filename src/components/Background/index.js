import React, { useRef, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { SLIDE } from '@src/constants/layers'
import { MATERIAL_NOISE, MATERIAL_FOG } from '@src/constants/materials'
import './Materials'

export default function Background({ children, material, slide }) {
  const { viewport } = useThree()
  const materialRef = useRef()

  useFrame((state, delta) => {
    if (materialRef?.current?.uTime !== null) {
      materialRef.current.uTime += delta
    }
  })

  const useMaterial = useMemo(() => {
    switch (material) {
      case MATERIAL_NOISE:
        return <noiseMaterial ref={materialRef} />
      case MATERIAL_FOG:
        return <fogMaterial ref={materialRef} />
      default:
        return <meshPhongMaterial />
    }
  }, [material])

  return (
    <mesh position={[0, -slide * viewport.height, 0]} renderOrder={SLIDE}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      {useMaterial}
      {children}
    </mesh>
  )
}
