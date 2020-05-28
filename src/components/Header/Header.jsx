import React from 'react'
import { Link } from 'gatsby'

import { Logo, ThemeSwitch } from 'components'
import cls from './Header.module.sass'

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
