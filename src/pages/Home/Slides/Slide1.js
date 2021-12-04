/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import Background from '@src/components/Background'
import Image from '@src/components/Image'
import Title from '@src/components/Title'
import { LOVE_1, LOVE_2 } from '@src/constants/images'
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
      <Title position={[0, 0, 0]} text="Title Test" />
      <Image
        position={[0, -4, 0]}
        texturePath={LOVE_1}
        textureHoverPath={LOVE_2}
      />
    </Background>
  )
}

export default Slide1
