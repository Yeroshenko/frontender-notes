import React from 'react'
import cn from 'classnames'
import cls from './PostCard.module.sass'

export const PostCard = ({ size, image, date, title }) => {
  return (
    <div className={cn(cls.postCard, { [cls.largePostCard]: size === 'large' })}>
      <img src={image} alt={title} className={cls.postImage} />
      <div className={cls.postInfo}>
        <data className={cls.postData}>{date}</data>
        <h3 className={cls.postTitle}>{title}</h3>
      </div>
    </div>
  )
}
