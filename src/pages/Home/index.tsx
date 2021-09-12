import React, { useEffect, useState } from 'react'

import { getNews } from '../../services/api.service'
import { ArticleType } from '../../types/article.type'

function Home(): JSX.Element {
  const [articles, setArticles] = useState<ArticleType[]>([])
  useEffect(() => {
    getNews().then((news) => setArticles(news.articles))
  }, [])

  return (
    <div className="App">
      <h1>TITULO DA NOTICIA</h1>
      {articles.map((article) => (
        <h6 key={article.id}>{JSON.stringify(article)}</h6>
      ))}
    </div>
  )
}

export default Home
