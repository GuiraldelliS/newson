import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import { ArticleType } from '../../types/article.type'
import styles from './styles.module.scss'

type ArticleCardProps = {
  article: Omit<ArticleType, 'id'>
}

export function ArticleCard({
  article: { authors, link, media, publishedDate, summary, title }
}: ArticleCardProps): JSX.Element {
  const getAuthorText = (authors: string[]) => {
    const [mainAuthor] = authors
    if (mainAuthor.length < 15) {
      return mainAuthor
    }
    return mainAuthor.substring(0, 20) + '\u2026'
  }

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
          maxLine="5"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="p"
        />
        <div className={styles.cardFooter}>
          <span>{publishedDate.toLocaleDateString()}</span>
          <span>{authors[0] && getAuthorText(authors)}</span>
          <a href={link} target="_blank" rel="noreferrer">
            Leia mais
          </a>
        </div>
      </div>
    </div>
  )
}
