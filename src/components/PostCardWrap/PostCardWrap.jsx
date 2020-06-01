import React from 'react'
import { PostCard } from 'components'

import cls from './PostCardWrap.module.sass'

export const PostCardWrap = ({ posts }) => {
  posts[0].size = 'large'
  return (
    <div className={cls.postCardWrap}>
      {posts &&
        posts.map(post => {
          const { size } = post || null
          const { date, slug, title, postImage } = post.node.frontmatter
          return (
            <PostCard
              key={slug}
              date={date}
              title={title}
              imgFluid={postImage.childImageSharp.fluid}
              size={size}
            />
          )
        })}
    </div>
  )
}
