import React from 'react'

type SearchContextType = {
  searchContextState: string
  setSearchContextState: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext({} as SearchContextType)
