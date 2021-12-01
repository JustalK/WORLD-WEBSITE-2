/**
 * The module managing the slide 1 of the Home page
 * @module Home/slide1
 */
import React from 'react'
import { useThree } from '@react-three/fiber'
import { SLIDE } from '@src/constants/layers'
import Image from '@src/components/Image'
import Title from '@src/components/Title'
import { LOVE_1, LOVE_2 } from '@src/constants/images'

/**
 * @function Slide1
 * Create the slide 1
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide1
 */
const Slide1 = ({ handleOnClick }) => {
  const viewport = useThree((state) => state.viewport)
  return (
    <mesh position={[0, 0, 0]} renderOrder={SLIDE} onClick={handleOnClick}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshPhongMaterial />
      <Title position={[0, 0, 0]} text="Title Test" />
      <Image
        position={[0, -4, 0]}
        texturePath={LOVE_1}
        textureHoverPath={LOVE_2}
      />
    </mesh>
  )
}

export default Slide1
