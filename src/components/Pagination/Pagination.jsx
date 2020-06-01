import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'

import cls from './Pagination.module.sass'

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  console.log(isLast, isFirst)
  return (
    <div
      className={cn(
        cls.pagination,
        { [cls.paginationIsFirst]: isFirst === true },
        { [cls.paginationIsLast]: isLast === true }
      )}
    >
      <Link className={cls.paginationItem} to={prevPage}>
        prevPage
      </Link>
      <Link className={cls.paginationItem} to={nextPage}>
        nextPage
      </Link>
    </div>
  )
}
