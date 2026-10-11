import { useMemo, useState } from 'react'
import { stores } from '../data/stores'
import styles from './Secondary.module.css'

export function StoreLocatorPage() {
  const [city, setCity] = useState('All')
  const cities = useMemo(
    () => ['All', ...Array.from(new Set(stores.map((s) => s.city)))],
    [],
  )
  const filtered =
    city === 'All' ? stores : stores.filter((s) => s.city === city)

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Stores</span>
        <h1 className="section-title">Try EDT in person.</h1>
        <p className="section-lead">
          Experience LUMA and FLOW at partner locations across India.
        </p>

        <div className={styles.chips}>
          {cities.map((c) => (
            <button
              key={c}
              type="button"
              className={city === c ? styles.chipActive : styles.chip}
              onClick={() => setCity(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.storeGrid}>
          {filtered.map((s) => (
            <article key={s.id} className={styles.store}>
              <h2>{s.name}</h2>
              <p className={styles.city}>{s.city}</p>
              <p>{s.address}</p>
              <p>{s.hours}</p>
              <a href={`tel:${s.phone.replace(/\s/g, '')}`}>{s.phone}</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
