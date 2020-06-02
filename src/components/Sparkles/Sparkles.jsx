import React, { useState } from 'react'

import { randomInt, range } from 'utils'
import { useRandomInterval, usePrefersReducedMotion } from 'hooks'
import cls from './Sparkles.module.sass'

const DEFAULT_COLOR = '#FFD500'

const generateSparkle = color => {
  return {
    id: String(randomInt(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: randomInt(10, 20),
    style: {
      top: randomInt(0, 100) + '%',
      left: randomInt(0, 100) + '%',
      zIndex: randomInt(0, 3)
    }
  }
}

export const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle(color))
  })

  const prefersReducedMotion = usePrefersReducedMotion()

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color)

      const now = Date.now()

      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < 750
      })

      nextSparkles.push(sparkle)

      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  )

  return (
    <span className={cls.wrapper} {...delegated}>
      {sparkles.map(sparkle => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className={cls.childWrapper}>{children}</span>
    </span>
  )
}

const SparkleInstance = ({ color, size, style }) => {
  const path =
    'M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z'
  return (
    <span className={cls.sparkleWrapper} style={style}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 160 160'
        fill='none'
        className={cls.sparkleInstance}
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  )
}
