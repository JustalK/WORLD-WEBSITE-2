/**
 * The module managing the slide 2 of the Home page
 * @module Home/slide2
 */
import React from 'react'
import Background from '@src/components/Background'
import { useThree } from '@react-three/fiber'
import Title from '@src/components/Title'
import { MATERIAL_NOISE } from '@src/constants/materials'
import { TEXT_H2, TEXT_SPAN } from '@src/constants/texts'
import { LOVE_1, LOVE_2 } from '@src/constants/images'
import Image from '@src/components/Image'

/**
 * @function Slide2
 * Create the slide 2
 * @param {function} handleOnClick The function to call when we want to change page
 * @return {Object} Return the dom of the Slide2
 */
const Slide2 = () => {
  const { viewport } = useThree()

  return (
    <Background material={MATERIAL_NOISE} slide={1}>
      <Title
        position={[0, 0.6 * (viewport.height / 2), 0]}
        text="PORTFOLIO"
        size={TEXT_H2}
      />
      <Title
        position={[0, 0, 0]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna mi, sollicitudin sit amet metus sed, dignissim pharetra dolor. Vestibulum eu porttitor nunc, et euismod mi. Fusce ut neque elit. Donec convallis blandit aliquam. Integer ut iaculis nulla. Etiam malesuada risus ac felis fringilla lacinia. Proin turpis dui, fermentum nec est ac, feugiat consequat dui. Praesent interdum, risus ut laoreet venenatis, arcu risus luctus mauris, a vestibulum nunc mi eu metus. Nullam et feugiat mauris. Suspendisse potenti. Donec nec congue nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        size={TEXT_SPAN}
      />
      <Image
        position={[0, -4, 0]}
        texturePath={LOVE_1}
        textureHoverPath={LOVE_2}
      />
    </Background>
  )
}

export default Slide2
