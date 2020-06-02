import React from 'react'

import cls from './PostTitle.module.sass'

export const PostTitle = ({ title, style }) => (
  <h1 className={cls.postTitle} style={style}>
    {title}
  </h1>
)
