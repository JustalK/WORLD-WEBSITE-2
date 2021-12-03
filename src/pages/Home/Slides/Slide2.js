/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React from 'react'
import Background from '@src/components/Background'
import { MATERIAL_NOISE } from '@src/constants/materials'

/**
 * @function Slide2
 * Create the slide 2
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide2
 */
const Slide2 = () => {
  return <Background material={MATERIAL_NOISE} slide={1} />
}

export default Slide2
