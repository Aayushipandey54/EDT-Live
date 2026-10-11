import styles from './StarRating.module.css'

export function StarRating({
  rating,
  size = 'md',
}: {
  rating: number
  size?: 'sm' | 'md'
}) {
  const full = Math.floor(rating)
  const partial = rating - full >= 0.5
  return (
    <span
      className={`${styles.stars} ${size === 'sm' ? styles.sm : ''}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < full || (i === full && partial)
        return (
          <span key={i} className={filled ? styles.filled : styles.empty}>
            ★
          </span>
        )
      })}
    </span>
  )
}
