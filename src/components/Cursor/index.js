import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import './Materials'

export default function Cursor({ cursorPosition }) {
  const viewport = useThree((state) => state.viewport)
  const ref = useRef()
  const material = useRef()
  console.log(cursorPosition, viewport)
  useFrame(() => {
    ref.current.position.x = cursorPosition.current.x
  })

  return (
    <>
      <mesh ref={ref} position={[0, 0, 0.0001]}>
        <circleGeometry args={[0.05, 32]} />
        <cursorMaterial ref={material} color={'#ffffff'} />
      </mesh>
    </>
  )
}
