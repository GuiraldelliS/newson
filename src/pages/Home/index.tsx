import React from 'react'

import { Header } from '../../components/Header'
import Main from '../../components/Main'

export function Home(): JSX.Element {
  return (
    <div className="Home">
      <Header />
      <Main />
    </div>
  )
}
