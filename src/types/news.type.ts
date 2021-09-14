import { ArticleType } from './article.type'

export type NewsType = {
  page: number
  pageSize: number
  status: string
  totalPages: number
  articles: ArticleType[] | undefined
}
