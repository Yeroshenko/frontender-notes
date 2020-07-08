import React from 'react'
import { Link } from 'gatsby'

import { Logo, ThemeSwitch } from 'components'
import { TelegramIcon } from 'icons'
import cls from './Header.module.sass'

export const Header = () => (
  <header className={cls.header}>
    <Link to='/' className={cls.link} rel='noopener noreferrer'>
      <Logo />
    </Link>
    <a
      className={cls.socialIcon}
      href='https://t.me/young_esthate'
      target='_blank'
      rel='noopener noreferrer'
    >
      <TelegramIcon />
    </a>
    <ThemeSwitch />
  </header>
)
