import React from 'react'

import cls from './Container.module.sass'

export const Container = ({ children }) =>
  <div className={cls.container}>{children}</div>
