import React from 'react'

import { PostCard } from 'components'
import cls from './PostCardWrap.module.sass'

export const PostCardWrap = () => {
  return (
    <div className={cls.postCardWrap}>
      <PostCard
        size='large'
        image='https://wallpapercave.com/wp/wp2382523.jpg'
        date='26.05.2020'
        title='Как сделать темную тему для сайта используя CSS'
      />
      <PostCard
        image='https://wallpapercave.com/wp/wp2382523.jpg'
        date='26.05.2020'
        title='Как сделать темную тему для сайта используя CSS'
      />
      <PostCard
        image='https://wallpapercave.com/wp/wp2382523.jpg'
        date='26.05.2020'
        title='Как сделать темную тему для сайта используя CSS'
      />
      <PostCard
        image='https://wallpapercave.com/wp/wp2382523.jpg'
        date='26.05.2020'
        title='Как сделать темную тему для сайта используя CSS'
      />
      <PostCard
        image='https://wallpapercave.com/wp/wp2382523.jpg'
        date='26.05.2020'
        title='Как сделать темную тему для сайта используя CSS'
      />
    </div>
  )
}
