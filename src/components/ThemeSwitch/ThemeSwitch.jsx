import React from 'react'
import cn from 'classnames'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import cls from './ThemeSwitch.module.sass'

const ThemeSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={cn(cls.switchWrapper, { [cls.isChecked]: theme === 'dark' })}>
          <label className={cls.toggle}>
            <input
              type='checkbox'
              className={cls.switch}
              checked={theme === 'dark'}
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
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
      )}
    </ThemeToggler>
  )
}

export default ThemeSwitch
