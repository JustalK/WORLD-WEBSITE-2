import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { CURSOR } from '@src/constants/layers'
import './Materials'

export default function Cursor({ cursorPositionRef }) {
  const viewport = useThree((state) => state.viewport)
  const ref = useRef()

  useFrame(() => {
    ref.current.position.x =
      (viewport.width * (2 * cursorPositionRef.current.x - 1)) / 2
    ref.current.position.y =
      -(viewport.height * (2 * cursorPositionRef.current.y - 1)) / 2
  })

  return (
    <>
      <mesh ref={ref} renderOrder={CURSOR} position={[0, 0, 0]}>
        <circleGeometry args={[0.05, 32]} />
        <cursorMaterial color={'#ffffff'} />
      </mesh>
    </>
  )
}
