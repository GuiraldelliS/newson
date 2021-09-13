import React, { useEffect, useState } from 'react'

import { getNews } from '../../services/api.service'
import { NewsType } from '../../types/news.type'
import { ArticleCard } from '../ArticleCard'
import { Pagination } from '../Pagination'
import styles from './styles.module.scss'

export default function Main(): JSX.Element {
  const [news, setNews] = useState<NewsType | null>(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getNews('Tecnologia', page).then((news) => {
      setNews(news)
    })
  }, [page])
  return (
    <div>
      <div className={styles.articles}>
        {news &&
          news.articles.map((article) => (
            <ArticleCard key={`article-${article.id}`} article={article} />
          ))}
      </div>
      {news && (
        <div className={styles.pagination}>
          <Pagination
            page={page}
            totalPages={news.totalPages}
            setPage={setPage}
          />
        </div>
      )}
      {console.log(news)}
    </div>
  )
}
