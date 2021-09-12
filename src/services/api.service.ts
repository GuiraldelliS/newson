import axios from 'axios'

import { NewsType } from '../types/news.type'
import { randomTopic } from '../utils/topics'

const apiKey = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: 'https://free-news.p.rapidapi.com/v1/search',
  headers: {
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }
})

export const getNews = async (
  q = randomTopic(),
  page = 1,
  pageSize = 25,
  lang = 'pt'
): Promise<NewsType> => {
  const { data } = await api.get('', {
    params: { q, page, page_size: pageSize, lang }
  })

  const news: NewsType = {
    status: data.status,
    page: data.page,
    pageSize: data.page_size,
    totalPages: data.total_pages,
    articles: data.articles.map((article: any) => {
      return {
        id: article._id,
        title: article.title,
        summary: article.summary,
        link: article.link,
        media: article.media,
        authors: article.authors,
        publishedDate: new Date(article.published_date)
      }
    })
  }

  return news
}

export default api
