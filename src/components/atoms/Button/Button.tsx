import { FC } from 'react'

import cn from 'classnames'

import { Icon } from '@/components/atoms/Icon'

import styles from './Button.module.scss'
import { ButtonProps, ButtonVariant } from './Button.types'

export const Button: FC<ButtonProps> = ({
  label,
  icon,
  variant = ButtonVariant.VARIANT1,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(styles.wrapper, props.className, {
        [styles.variant1]: variant === ButtonVariant.VARIANT1,
      })}
    >
      {icon && (
        <Icon
          name={icon}
          size={24}
        />
      )}
      {label}
    </button>
  )
}
