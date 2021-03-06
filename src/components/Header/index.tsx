import React from 'react'

import newsonLogo from '../../assets/logo.svg'
import { Search } from '../Search'
import styles from './styles.module.scss'

export function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topics}>
        <a href="/">
          <img
            src={newsonLogo}
            alt="Logotipo do site de notícias newson."
            width="50"
            height="50"
          />
        </a>
      </div>
      <Search />
    </div>
  )
}
