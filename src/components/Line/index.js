import React from 'react'
import { extend } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'
import { MeshLine, MeshLineMaterial } from 'meshline'

extend({ MeshLine, MeshLineMaterial })

const Lines = ({ pointsPosition, color = '#832869' }) => {
  const linePoints = new THREE.CatmullRomCurve3(pointsPosition).getPoints(250)

  return <Line points={linePoints} color={color} lineWidth={1} dashed={false} />
}

export default Lines
