import React, { useContext, useState } from 'react'

import searchImage from '../../assets/search.svg'
import { SearchContext } from '../../contexts/SearchContext'
import styles from './styles.module.scss'

export function Search(): JSX.Element {
  const { setSearchContextState } = useContext(SearchContext)
  const [search, setSearch] = useState('')
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSearchContextState(search)
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Digite o tópico pelo qual deseja procurar"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button type="submit">
          <img src={searchImage} alt="Ícone de busca" />
        </button>
      </form>
    </div>
  )
}
