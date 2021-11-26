/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import { useThree } from '@react-three/fiber'

/**
 * @function Slide1
 * Create the slide 1
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide1
 */
const Slide1 = ({ handleOnClick }) => {
  const viewport = useThree((state) => state.viewport)
  return (
    <mesh position={[0, 0, 0]} onClick={handleOnClick}>
      <boxGeometry args={[viewport.width, viewport.height, 1]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Slide1
