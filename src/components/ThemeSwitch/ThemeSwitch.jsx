import React, { useState } from 'react'
import cn from 'classnames'

import cls from './ThemeSwitch.module.sass'

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => setChecked(!checked)

  return (
    <div className={cn(cls.switchWrapper, { [cls.isChecked]: checked })}>
      <label className={cls.toggle}>
        <input
          type='checkbox'
          className={cls.switch}
          checked={checked}
          onChange={toggleChecked}
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

export default ThemeSwitch
