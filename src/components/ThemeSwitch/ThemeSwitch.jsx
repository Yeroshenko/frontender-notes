import React, { useContext } from 'react'
import cn from 'classnames'

import { ThemeContext } from 'context'
import cls from './ThemeSwitch.module.sass'

export const ThemeSwitch = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <div className={cn(cls.switchWrapper, { [cls.isChecked]: colorMode === 'dark' })}>
      <label className={cls.toggle} >
        <input
          type='checkbox'
          label='Переключатель темы'
          className={cls.switch}
          checked={colorMode === 'dark'}
          onChange={e => setColorMode(e.target.checked ? 'dark' : 'light')}
        />
        <span className={cls.toggleHandler}>
          <span className={cn(cls.crater, cls.crater1)}></span>
          <span className={cn(cls.crater, cls.crater2)}></span>
          <span className={cn(cls.crater, cls.crater3)}></span>
        </span>
        <span className={cn(cls.star, cls.star1)}></span>
        <span className={cn(cls.star, cls.star2)}></span>
        <span className={cn(cls.star, cls.star3)}></span>
        <span className={cn(cls.star, cls.star4)}></span>
        <span className={cn(cls.star, cls.star5)}></span>
        <span className={cn(cls.star, cls.star6)}></span>
      </label>
    </div>
  )
}