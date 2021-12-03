import React from 'react'
import { extend } from '@react-three/fiber'
import { CubicBezierLine } from '@react-three/drei'
import { MeshLine, MeshLineMaterial } from 'meshline'

extend({ MeshLine, MeshLineMaterial })

const Lines = ({ color = '#000000' }) => {
  return (
    <CubicBezierLine
      start={[0, 0, 1]}
      end={[10, 0, 1]}
      midA={[5, 4, 1]}
      midB={[0, 0, 1]}
      segments={1000}
      color={color}
      lineWidth={1}
      dashed={false}
    />
  )
}

export default Lines
