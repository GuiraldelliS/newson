import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import { ArticleType } from '../../types/article.type'
import styles from './styles.module.scss'

type ArticleCardProps = {
  article: Omit<ArticleType, 'id'>
}

export default function ArticleCard({
  article: { authors, link, media, publishedDate, summary, title }
}: ArticleCardProps): JSX.Element {
  const authorText = authors.length === 1 ? authors[0] : authors.join(', ')
  return (
    <div className={styles.articleCard}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={media} alt={title} />
      </a>
      <div className={styles.content}>
        <LinesEllipsis
          text={title}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="h2"
        />
        <LinesEllipsis
          text={summary}
          maxLine="4"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="p"
        />
        <div className={styles.cardFooter}>
          <span>{publishedDate.toLocaleDateString()}</span>
          <span>{authorText && authorText}</span>
          <a href={link} target="_blank" rel="noreferrer">
            Leia mais
          </a>
        </div>
      </div>
    </div>
  )
}
