import React from 'react'

import styles from './styles.module.scss'

type PaginationProps = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export function Pagination({
  page,
  totalPages,
  setPage
}: PaginationProps): JSX.Element {
  const first = Math.max(page - MAX_LEFT, 1)

  return (
    <ul className={styles.pagination}>
      <li>
        <button onClick={() => setPage(page - 1)}> Anterior </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
        .map((_, index) => index + first)
        .map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className={page === pageNumber ? styles.current : ''}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      <li>
        <button onClick={() => setPage(page + 1)}> Próxima </button>
      </li>
    </ul>
  )
}
