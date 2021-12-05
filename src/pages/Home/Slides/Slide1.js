/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import Background from '@src/components/Background'
import Title from '@src/components/Title'
import { MATERIAL_FOG } from '@src/constants/materials'

/**
 * @function Slide1
 * Create the slide 1
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide1
 */
const Slide1 = () => {
  return (
    <Background material={MATERIAL_FOG} slide={0}>
      <Title position={[0, 0, 0]} text="JUSTAL KEVIN" />
    </Background>
  )
}

export default Slide1
