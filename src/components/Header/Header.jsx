import React from 'react'
import { Link } from 'gatsby'

import { Logo } from '../'
import cls from './Header.module.sass'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export const Header = () => {
  return (
    <header className={cls.header}>
      <Link to='/'>
        <Logo />
      </Link>
      <ThemeSwitch />
    </header>
  )
}
