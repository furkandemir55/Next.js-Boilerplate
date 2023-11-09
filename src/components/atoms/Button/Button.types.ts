import { ComponentProps } from 'react'

import { IconProps } from '@/components/atoms/Icon/Icon.types'

export enum ButtonVariant {
  VARIANT1 = 'VARIANT1',
}
export interface ButtonProps extends ComponentProps<'button'> {
  label?: string
  icon?: IconProps['name']
  variant?: ButtonVariant
}
