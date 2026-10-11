import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products } from '../data/products'
import { formatINR } from '../data/products'
import styles from './SearchModal.module.css'

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products.slice(0, 5)
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.includes(q),
    )
  }, [query])

  if (!open) return null

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Search">
      <button className={styles.backdrop} aria-label="Close search" onClick={onClose} />
      <div className={styles.panel}>
        <div className={styles.bar}>
          <Search size={18} aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search LUMA, FLOW, accessories…"
            aria-label="Search products"
          />
          <button type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <ul className={styles.results}>
          {results.length === 0 && (
            <li className={styles.empty}>No matches. Try “kettle” or “air fryer”.</li>
          )}
          {results.map((p) => (
            <li key={p.id}>
              <Link to={`/product/${p.slug}`} onClick={onClose} className={styles.result}>
                <img src={p.images[0]} alt="" />
                <div>
                  <strong>{p.name}</strong>
                  <span>{formatINR(p.price)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/shop" className={styles.all} onClick={onClose}>
          Browse all products →
        </Link>
      </div>
    </div>
  )
}
