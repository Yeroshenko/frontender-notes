import React from 'react'
import cn from 'classnames'

import cls from './Span.module.sass'

export const Span = ({ className, ...props }) => (
  <span
    {...props}
    className={cn(className, {
      [cls.imageWrapper]: className === 'gatsby-resp-image-wrapper'
    })}
  />
)
