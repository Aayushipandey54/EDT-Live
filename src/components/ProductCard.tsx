import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '../types'
import { formatINR } from '../data/products'
import { useCart } from '../context/CartContext'
import { StarRating } from './StarRating'
import styles from './ProductCard.module.css'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  const discount =
    product.compareAt && product.compareAt > product.price
      ? Math.round((1 - product.price / product.compareAt) * 100)
      : null

  return (
    <article className={styles.card}>
      <Link to={`/product/${product.slug}`} className={styles.media}>
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        <div className={styles.badges}>
          {product.isOfficial === false && (
            <span className={`${styles.badge} ${styles.recommended}`}>Curated Care</span>
          )}
          {product.isNew && <span className={styles.badge}>New</span>}
          {product.bestSeller && (
            <span className={`${styles.badge} ${styles.best}`}>Best seller</span>
          )}
          {discount ? (
            <span className={`${styles.badge} ${styles.sale}`}>-{discount}%</span>
          ) : null}
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} size="sm" />
          <span className={styles.reviews}>({product.reviewCount})</span>
        </div>
        <h3 className={styles.name}>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className={styles.tagline}>{product.tagline}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatINR(product.price)}</span>
          {product.compareAt ? (
            <span className={styles.compare}>{formatINR(product.compareAt)}</span>
          ) : null}
        </div>
        <p className={styles.meta}>{product.delivery}</p>
        <div className={styles.actions}>
          <Link className="btn btn-ghost" to={`/product/${product.slug}`}>
            Details
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addItem(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={16} /> Add
          </button>
        </div>
      </div>
    </article>
  )
}
