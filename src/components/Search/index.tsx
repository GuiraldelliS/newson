import React from 'react'

import searchImage from '../../assets/search.svg'
import styles from './styles.module.scss'

export function Search(): JSX.Element {
  return (
    <div className={styles.search}>
      <input
        type="text"
        name="search"
        placeholder="Digite o tópico pelo qual deseja procurar"
      />
      <img src={searchImage} alt="Ícone de busca" />
    </div>
  )
}
