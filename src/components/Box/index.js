/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React from 'react'

/**
 * @function Slide2
 * Create the slide 2
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide2
 */
const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.0, 1.0, 1.0]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Box
