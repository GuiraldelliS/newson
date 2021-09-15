import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react'
import Loader from 'react-loader-spinner'

import { SearchContext } from '../../contexts/SearchContext'
import { getNews } from '../../services/api.service'
import { NewsType } from '../../types/news.type'
import { ArticleCard } from '../ArticleCard'
import { Pagination } from '../Pagination'
import styles from './styles.module.scss'

export default function Main(): JSX.Element {
  const { searchContextState } = useContext(SearchContext)

  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState<NewsType | null>(null)
  const [page, setPage] = useState(1)

  const handleLoadNews = useCallback(
    (pageNumber) => {
      setLoading(true)
      getNews(
        searchContextState === '' ? 'Tecnologia' : searchContextState,
        pageNumber
      ).then((response) => {
        setNews(response)
        setLoading(false)
      })
    },
    [searchContextState]
  )

  const prevContextState = useRef(searchContextState)
  useEffect(() => {
    if (prevContextState.current !== searchContextState) {
      prevContextState.current = searchContextState
      handleLoadNews(1)
      setPage(1)
      return
    }
    handleLoadNews(page)
  }, [page, searchContextState])

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader type="ThreeDots" color="#1D1b26" height={100} width={100} />
      </div>
    )
  }

  if (news !== null && news.status !== 'ok' && news.articles === undefined) {
    return (
      <div className={styles.center}>
        <h1>Não foram encontrados resultados para sua pesquisa</h1>
      </div>
    )
  }

  return (
    <div>
      {news && (
        <>
          <div className={styles.articles}>
            {news.articles?.map((article) => (
              <ArticleCard key={`article-${article.id}`} article={article} />
            ))}
          </div>
          <div className={styles.center}>
            <Pagination
              page={page}
              totalPages={news.totalPages}
              setPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  )
}
