import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { stories } from '../data/stories'
import type { Story } from '../types'
import styles from './Stories.module.css'

export function StoriesPage() {
  const [filter, setFilter] = useState<string>('all')
  const [activeStory, setActiveStory] = useState<Story | null>(null)

  const categories = ['all', 'Kitchen Life', 'Real Cooks', 'Design & Home']

  const filtered = stories.filter((s) => {
    if (filter === 'all') return true
    return s.category === filter
  })

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Real Homes</span>
        <h1 className="section-title">Everyday Extraordinary Stories.</h1>
        <p className="section-lead">
          Real homes, honest meals, and genuine routines across India featuring LUMA, FLOW, and SUKI.
        </p>

        {/* Categories */}
        <div className={styles.filterRow}>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={filter === c ? styles.pillActive : styles.pill}
              onClick={() => setFilter(c)}
            >
              {c === 'all' ? 'All Stories' : c}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className={styles.grid}>
          {filtered.map((story) => (
            <article key={story.id} className={styles.card}>
              <div
                className={styles.mediaBox}
                onClick={() => setActiveStory(story)}
                style={{ cursor: story.videoUrl ? 'pointer' : 'default' }}
              >
                <img src={story.image} alt={story.title} />
                <span className={styles.categoryBadge}>{story.category}</span>
                {story.videoUrl && (
                  <div className={styles.videoPlayIcon}>
                    <Play size={28} fill="#fff" />
                  </div>
                )}
              </div>
              <div className={styles.body}>
                <h3>{story.title}</h3>
                <p className={styles.quote}>“{story.quote}”</p>
                <p className={styles.narrative}>{story.body}</p>
                <footer className={styles.footer}>
                  <div>
                    <strong>{story.author}</strong> · {story.location}
                  </div>
                  <span className={styles.productTag}>{story.productUsed}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* Video / Detail Modal */}
        {activeStory && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setActiveStory(null)}
          >
            <div
              className={styles.modalCard}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setActiveStory(null)}
                aria-label="Close story"
              >
                <X size={18} />
              </button>

              {activeStory.videoUrl ? (
                <video
                  src={activeStory.videoUrl}
                  controls
                  autoPlay
                  className={styles.modalVideo}
                />
              ) : (
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  className={styles.modalVideo}
                  style={{ objectFit: 'cover' }}
                />
              )}

              <div className={styles.modalBody}>
                <span className="eyebrow">{activeStory.productUsed}</span>
                <h2>{activeStory.title}</h2>
                <p style={{ fontStyle: 'italic', marginBlock: '0.75rem', color: 'var(--edt-ink)' }}>
                  “{activeStory.quote}”
                </p>
                <p style={{ color: 'var(--edt-muted)', lineHeight: 1.6 }}>
                  {activeStory.body}
                </p>
                <p style={{ marginTop: '1rem', fontWeight: 600, fontSize: '0.9rem' }}>
                  — {activeStory.author}, {activeStory.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
