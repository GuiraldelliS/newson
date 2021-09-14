import React, { useState } from 'react'

import { Header } from '../../components/Header'
import Main from '../../components/Main'
import { SearchContext } from '../../contexts/SearchContext'

export function Home(): JSX.Element {
  const [searchContextState, setSearchContextState] = useState<string>('')
  return (
    <div>
      <SearchContext.Provider
        value={{ searchContextState, setSearchContextState }}
      >
        <Header />
        <Main />
      </SearchContext.Provider>
    </div>
  )
}
