import { FC } from 'react'

import { LoginForm } from '@/components/organisms/LoginForm'

import styles from './HomeTemplate.module.scss'
import { HomeTemplateProps } from './HomeTemplate.types'

export const HomeTemplate: FC<HomeTemplateProps> = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
    </div>
  )
}
