import Link from 'next/link'

import { FC } from 'react'

import { SearchInput } from '@/components/molecules/SearchInput'

import styles from './Navbar.module.scss'
import { NavbarProps } from './Navbar.types'

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.wrapper}>
      <SearchInput />
      <div className={styles.links}>
        <Link href={'/'}>Login</Link>
        <Link href={'/profile'}>Profile</Link>
      </div>
    </nav>
  )
}
