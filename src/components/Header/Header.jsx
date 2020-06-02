import React from 'react'
import { Link } from 'gatsby'

import { Logo, ThemeSwitch } from 'components'
import cls from './Header.module.sass'

export const Header = () => (
  <header className={cls.header}>
    <Link to='/' className={cls.link}>
      <Logo />
    </Link>
    <ThemeSwitch />
  </header>
)
