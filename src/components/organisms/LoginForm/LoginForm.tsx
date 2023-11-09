import { FC } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'

import styles from './LoginForm.module.scss'
import { LoginFormProps } from './LoginForm.types'

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <form className={styles.wrapper}>
      <Input
        placeholder={'Email'}
        required
        type={'email'}
      />
      <Input
        hidden
        placeholder={'Password'}
        required
        type={'password'}
      />
      <Button
        label={'Login'}
        type={'submit'}
      />
    </form>
  )
}
