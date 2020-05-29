import React from 'react'
import { Link } from 'gatsby'

import cls from './Pagination.module.sass'

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <div className={cls.pagination} isFirst={isFirst} isLast={isLast}>
      <Link className={cls.paginationItem} to={nextPage}>
        nextPage
      </Link>
      <Link className={cls.paginationItem} to={prevPage}>
        prevPage
      </Link>
    </div>
  )
}
