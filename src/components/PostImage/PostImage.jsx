import React from 'react'
import Img from 'gatsby-image'

import cls from './PostImage.module.sass'

export const PostImage = ({ imgFluid, style }) => (
  <Img fluid={imgFluid} className={cls.postImage} style={style} />
)
