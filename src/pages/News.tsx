import { news } from '../data/news'
import styles from './Secondary.module.css'

export function NewsPage() {
  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Press</span>
        <h1 className="section-title">Latest news.</h1>
        <p className="section-lead">
          Product launches, brand films, and funding coverage from across the web.
        </p>
        <div className={styles.newsList}>
          {news.map((n) => (
            <article key={n.id} className={styles.newsItem}>
              <div className={styles.newsMeta}>
                <span>{n.source}</span>
                <time dateTime={n.date}>
                  {new Date(n.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2>{n.title}</h2>
              <p>{n.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
