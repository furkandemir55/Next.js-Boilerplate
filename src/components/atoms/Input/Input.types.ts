import { ComponentPropsWithoutRef } from 'react'

export enum InputSize {
  S = 'S',
  L = 'L',
}
export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: InputSize
}
