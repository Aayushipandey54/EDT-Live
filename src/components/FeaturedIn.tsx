import styles from './FeaturedIn.module.css'

interface MediaPublication {
  name: string
  logoSrc: string
  alt: string
  width?: number
}

const publications: MediaPublication[] = [
  {
    name: 'Financial Express',
    logoSrc: '/assets/press/financial-express.png',
    alt: 'Financial Express - Read to Lead',
  },
  {
    name: 'Brut',
    logoSrc: '/assets/press/brut.png',
    alt: 'Brut India',
  },
  {
    name: 'CNBC TV18',
    logoSrc: '/assets/press/cnbc-tv18.png',
    alt: 'CNBC TV18',
  },
  {
    name: 'Mint',
    logoSrc: '/assets/press/mint.png',
    alt: 'mint',
  },
  {
    name: 'The Hindu BusinessLine',
    logoSrc: '/assets/press/businessline.png',
    alt: 'The Hindu BusinessLine',
  },
  {
    name: 'The Times of India',
    logoSrc: '/assets/press/times-of-india.png',
    alt: 'The Times of India',
  },
  {
    name: 'The Economic Times',
    logoSrc: '/assets/press/economic-times.png',
    alt: 'The Economic Times',
  },
  {
    name: 'Campaign India',
    logoSrc: '/assets/press/campaign-india.png',
    alt: 'Campaign India',
  },
  {
    name: 'ELLE Gourmet',
    logoSrc: '/assets/press/elle-gourmet.png',
    alt: 'ELLE Gourmet',
  },
  {
    name: 'ET Brand Equity',
    logoSrc: '/assets/press/et-brand-equity.png',
    alt: 'ET Brand Equity',
  },
]

export function FeaturedIn() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...publications, ...publications, ...publications]

  return (
    <section className={styles.section} aria-label="Featured In Media Publications">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.title}>FEATURED IN</span>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((pub, idx) => (
            <div key={`${pub.name}-${idx}`} className={styles.mediaCard} title={pub.name}>
              <img
                src={pub.logoSrc}
                alt={pub.alt}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
