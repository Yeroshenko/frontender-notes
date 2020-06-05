import React from 'react'

import cls from './NotFound.module.sass'

export const NotFound = () => {
  return (
    <div className={cls.notFound}>
      <span className={cls.statusCode}>404</span>
      <span className={cls.statusText}>Not found</span>
    </div>
  )
}
