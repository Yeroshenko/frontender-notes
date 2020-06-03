import React from 'react'

import cls from './PostTitle.module.sass'
import { Sparkles } from 'components/Sparkles/Sparkles'

export const PostTitle = ({ title, style }) => (
  <Sparkles style={style}>
    <h1 className={cls.postTitle}>
      {title}
    </h1>
  </Sparkles>
)
