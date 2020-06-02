import React from 'react'

import cls from './Logo.module.sass'
import { Sparkles } from 'components'

export const Logo = () => (
  <div className={cls.logo}>
    <Sparkles>Frontend notes</Sparkles>
  </div>
)
