import { FC } from 'react'

import styles from './ProfileTemplate.module.scss'
import { ProfileTemplateProps } from './ProfileTemplate.types'

export const ProfileTemplate: FC<ProfileTemplateProps> = () => {
  return <div className={styles.wrapper}>ProfileTemplate Component</div>
}
