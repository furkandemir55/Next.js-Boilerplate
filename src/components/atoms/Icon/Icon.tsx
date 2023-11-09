import { FC } from 'react'

import { IconProps } from './Icon.types'
import search from './paths/search'

const getPath = (name: IconProps['name']) => {
  switch (name) {
    case 'search':
      return { path: search, viewBox: '0 0 24 24' }
    default:
      return {}
  }
}

export const Icon: FC<IconProps> = ({ name, size = 14 }) => {
  const { path, viewBox } = getPath(name)
  return (
    <svg
      height={size}
      style={{ minWidth: size }}
      viewBox={viewBox}
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      {path}
    </svg>
  )
}
