import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles, X } from 'lucide-react'
import styles from './RealStories.module.css'

interface CreatorStory {
  id: string
  name: string
  handle?: string
  role: string
  followers?: string
  image: string
  quote: string
  highlight: string
  product: string
}

const stories: CreatorStory[] = [
  {
    id: 'luke-coutinho',
    name: 'Luke Coutinho',
    role: 'Integrative Lifestyle & Holistic Nutrition Expert',
    image: '/assets/stories/luke-coutinho.webp',
    quote: 'Zero Teflon, zero toxic PFAS coatings. True health begins with the pure materials your food touches.',
    highlight: 'Pure Borosilicate Glass',
    product: 'LUMA PureGlass Origin Orange',
  },
  {
    id: 'farah-terence',
    name: 'Farah Khan & Terence Lewis',
    role: 'Bollywood Directors & Renowned Choreographers',
    image: '/assets/stories/farah-terence.webp',
    quote: 'Crispy samosas and kebabs without drowning in oil! An absolute showstopper that sits proudly on our kitchen counter.',
    highlight: '360° Glass Convection',
    product: 'LUMA PureGlass Air Fryer',
  },
  {
    id: 'nauheed-cyrusi',
    name: 'Nauheed Cyrusi',
    role: 'Actress & Lifestyle Creator',
    image: '/assets/stories/nauheed-cyrusi.webp',
    quote: 'Unboxing LUMA was pure joy! The aesthetics are stunning and it makes everyday home cooking so fun and fast.',
    highlight: 'Anime-Inspired Design',
    product: 'LUMA Origin Orange (4.5L)',
  },
  {
    id: 'tejasswi-prakash',
    name: 'Tejasswi Prakash',
    handle: '@tejasswiprakash',
    role: 'Popular Actress & Television Star',
    image: '/assets/stories/tejasswi-prakash.webp',
    quote: 'My everyday kitchen companion. Watching the food crisp up live through 360° glass is so satisfying!',
    highlight: 'Live View Cooking',
    product: 'LUMA PureGlass',
  },
  {
    id: 'krish-ashok',
    name: 'Krish Ashok',
    handle: '@_masalalab',
    role: 'Author of Masala Lab · Food Scientist',
    followers: '1.4M followers',
    image: '/assets/stories/krish-ashok.webp',
    quote: 'The Science of Airfrying — borosilicate glass retains radiant heat evenly without microplastic leaching risks.',
    highlight: 'The Science of Airfrying',
    product: 'LUMA PureGlass System',
  },
  {
    id: 'yasmin-karachiwala',
    name: 'Yasmin Karachiwala',
    handle: '@yasminkarachiwala',
    role: 'Celebrity Fitness Instructor',
    followers: '1.1M followers',
    image: '/assets/stories/yasmin-karachiwala.webp',
    quote: 'Healthy, guilt-free eating made effortless for the whole family. Perfect macros with zero chemical coatings.',
    highlight: 'Guilt-Free Fitness Meals',
    product: 'LUMA Dual Bowl System',
  },
]

export function RealStories() {
  const [selectedStory, setSelectedStory] = useState<CreatorStory | null>(null)

  return (
    <section className={styles.section} aria-label="Real Stories with LUMA">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagWrap}>
            <span className={styles.tag}>
              <Sparkles size={13} /> REAL VOICES & CELEBRITIES
            </span>
          </div>
          <h2 className={styles.title}>Real stories. Loved by India’s top creators.</h2>
          <p className={styles.subtitle}>
            From Bollywood icons to celebrity nutritionists and food scientists, see how creators bring EDT LUMA into their daily health routines.
          </p>
        </div>

        {/* Stories Grid */}
        <div className={styles.grid}>
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedStory(story)}
            >
              <div className={styles.imageWrap}>
                <img
                  src={story.image}
                  alt={`${story.name} cooking with EDT LUMA`}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.badgeOverlay}>
                  <span className={styles.highlightPill}>{story.highlight}</span>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{story.name}</h3>
                  {story.handle && (
                    <span className={styles.verifiedBadge} title="Verified Creator">
                      <CheckCircle2 size={14} />
                    </span>
                  )}
                </div>

                <div className={styles.roleRow}>
                  <span className={styles.role}>{story.role}</span>
                  {story.followers && (
                    <span className={styles.followers}>{story.followers}</span>
                  )}
                </div>

                <p className={styles.quote}>“{story.quote}”</p>

                <div className={styles.productTag}>
                  <span className={styles.productDot} />
                  <span>{story.product}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Panorama Banner Strip */}
        <div className={styles.bannerContainer}>
          <div className={styles.bannerHeader}>
            <span className={styles.bannerLabel}>PANORAMIC CREATOR SPOTLIGHT</span>
          </div>
          <div className={styles.bannerImageWrap}>
            <img
              src="/assets/stories/real-stories-banner.webp"
              alt="EDT LUMA celebrity and creator wall"
              className={styles.bannerImage}
            />
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className={styles.modalBackdrop} onClick={() => setSelectedStory(null)}>
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setSelectedStory(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className={styles.modalGrid}>
                <div className={styles.modalImageWrap}>
                  <img src={selectedStory.image} alt={selectedStory.name} className={styles.modalImage} />
                </div>
                <div className={styles.modalBody}>
                  <span className={styles.modalHighlight}>{selectedStory.highlight}</span>
                  <h3 className={styles.modalName}>{selectedStory.name}</h3>
                  <p className={styles.modalRole}>{selectedStory.role}</p>
                  {selectedStory.followers && (
                    <span className={styles.modalFollowers}>
                      <span style={{ fontSize: '0.9rem' }}>📸</span> {selectedStory.handle} · {selectedStory.followers}
                    </span>
                  )}
                  <blockquote className={styles.modalQuote}>
                    “{selectedStory.quote}”
                  </blockquote>
                  <div className={styles.modalProduct}>
                    <strong>Featured Appliance:</strong> {selectedStory.product}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
