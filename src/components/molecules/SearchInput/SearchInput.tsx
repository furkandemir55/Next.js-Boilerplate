'use client'

import { FC, FormEvent } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'

import styles from './SearchInput.module.scss'
import { SearchInputProps } from './SearchInput.types'

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = 'Search something..',
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form
      className={styles.wrapper}
      onSubmit={onSubmit}
    >
      <Input placeholder={placeholder} />
      <Button
        icon={'search'}
        label={'Search'}
        type={'submit'}
      />
    </form>
  )
}
