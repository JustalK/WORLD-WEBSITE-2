/**
 * The module managing the slide 3 of the Home page
 * @module Home/slide3
 */
import React from 'react'
import Background from '@src/components/Background'
import { MATERIAL_BLACK } from '@src/constants/materials'

/**
 * @function Slide3
 * Create the slide 3
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide3
 */
const Slide3 = () => {
  return <Background material={MATERIAL_BLACK} slide={2} />
}

export default Slide3
