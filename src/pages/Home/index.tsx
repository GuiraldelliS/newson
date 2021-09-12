import React, { useEffect, useState } from 'react'

import ArticleCard from '../../components/ArticleCard'
import { Header } from '../../components/Header'
import { getNews } from '../../services/api.service'
import { ArticleType } from '../../types/article.type'
import styles from './styles.module.scss'

export function Home(): JSX.Element {
  const [articles, setArticles] = useState<ArticleType[]>([])
  useEffect(() => {
    getNews().then((news) => setArticles(news.articles))
  }, [])

  return (
    <div className="Home">
      <Header />
      <div className={styles.posts}>
        {articles.map((article) => (
          <ArticleCard key={`article-${article.id}`} article={article} />
        ))}
      </div>
    </div>
  )
}
