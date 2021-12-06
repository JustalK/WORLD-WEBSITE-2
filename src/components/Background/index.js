import React, { useRef, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { SLIDE } from '@src/constants/layers'
import {
  MATERIAL_NOISE,
  MATERIAL_FOG,
  MATERIAL_BLACK
} from '@src/constants/materials'
import { MESH_BACKGROUND } from '@src/constants/meshes'
import './Materials'

export default function Background({ children, material, slide }) {
  const { viewport } = useThree()
  const materialRef = useRef()

  useFrame((state, delta) => {
    if (
      materialRef?.current?.uTime !== undefined &&
      materialRef?.current?.uTime !== null
    ) {
      materialRef.current.uTime += delta
    }
  })

  const useMaterial = useMemo(() => {
    switch (material) {
      case MATERIAL_NOISE:
        return <noiseMaterial ref={materialRef} />
      case MATERIAL_FOG:
        return <fogMaterial ref={materialRef} />
      case MATERIAL_BLACK:
        return <meshBasicMaterial color="black" />
      default:
        return <meshPhongMaterial />
    }
  }, [material])

  return (
    <mesh
      position={[0, -slide * viewport.height, 0]}
      name={`${MESH_BACKGROUND}_${slide}`}
      renderOrder={SLIDE}
      onPointerMove={(e) => {
        const background = e.intersections.find(
          (intersection) =>
            intersection.eventObject.name === `${MESH_BACKGROUND}_${slide}`
        )
        if (
          materialRef.current &&
          materialRef.current.uMouse &&
          background.object.name === `${MESH_BACKGROUND}_${slide}`
        ) {
          materialRef.current.uMouse.x = background.uv.x
          materialRef.current.uMouse.y = background.uv.y
        }
      }}
    >
      <planeGeometry args={[viewport.width, viewport.height]} />
      {useMaterial}
      {children}
    </mesh>
  )
}
