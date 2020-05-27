import React from 'react'
import { Link } from 'gatsby'

import { HeaderWrap } from '../elements'
import { Logo } from './'

export const Header = () => {
  return (
    <HeaderWrap>
      <Link to='/'>
        <Logo />
      </Link>
    </HeaderWrap>
  )
}
