/**
 * The module managing the slide 3 of the Home page
 * @module Home/slide3
 */
import React from 'react'
import Background from '@src/components/Background'
import { MATERIAL_NOISE } from '@src/constants/materials'

/**
 * @function Slide3
 * Create the slide 3
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide3
 */
const Slide3 = ({ handleOnClick }) => {
  return (
    <Background material={MATERIAL_NOISE} slide={2}>
      <mesh position={[0, 0, 0]} onClick={handleOnClick}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </Background>
  )
}

export default Slide3
