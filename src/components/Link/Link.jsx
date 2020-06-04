import React from 'react'
import cls from './Link.module.sass'

export const Link = ({ href, children }) => {
  return (
    <a className={cls.link} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
