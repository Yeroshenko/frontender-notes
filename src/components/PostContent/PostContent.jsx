import React from 'react'

import cls from './PostContent.module.sass'

export const PostContent = ({ children, publicationDate }) => (
  <div className={cls.postContent}>
    {children}
    {publicationDate && (
      <p className={cls.publicationDate}>Опубликовано: {publicationDate}</p>
    )}
  </div>
)
