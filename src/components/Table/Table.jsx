import React from 'react'

import cls from './Table.module.sass'

export const Table = ({ children }) => (
  <div className={cls.tableWrap}>
    <table>{children}</table>
  </div>
)
