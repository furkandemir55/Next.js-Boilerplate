import { FC } from 'react'

import cn from 'classnames'

import styles from './Input.module.scss'
import { InputProps, InputSize } from './Input.types'

export const Input: FC<InputProps> = ({ size = InputSize.S, ...props }) => {
  return (
    <input
      {...props}
      className={cn(
        styles.wrapper,
        props.className,
        cn({
          [styles.small]: size === InputSize.S,
          [styles.large]: size === InputSize.L,
        }),
      )}
    />
  )
}
