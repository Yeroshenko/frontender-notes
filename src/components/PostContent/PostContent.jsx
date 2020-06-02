import React from 'react'

import cls from './PostContent.module.sass'

export const PostContent = ({ children }) => (
  <div className={cls.postContent}>{children}</div>
)
