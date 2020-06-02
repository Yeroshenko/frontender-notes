import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import cls from './PostCard.module.sass'

export const PostCard = ({ size, imgFluid, date, title, to }) => (
  <Link to={to} className={cn(cls.postCard, { [cls.largePostCard]: size === 'large' })}>
    <div className={cls.postImageWrap}>
      <Img fluid={imgFluid} className={cls.postImage} />
    </div>
    <div className={cls.postInfo}>
      <data className={cls.postData}>{date}</data>
      <h3 className={cls.postTitle}>{title}</h3>
    </div>
  </Link>
)
