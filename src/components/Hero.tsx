import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from 'lucide-react'
import { ModeSwitcher } from './ModeSwitcher'
import styles from './Hero.module.css'

/**
 * CONFIGURABLE CAMPAIGN VIDEO SLOT
 * You can replace desktopVideo, mobileVideo, posterImage, or fallbackImage here
 * whenever your custom video is ready, without changing any component logic.
 */
export const REPLACEABLE_CAMPAIGN_SLOT = {
  id: 'campaign-lifestyle-slot',
  eyebrow: 'Everyday Extraordinary',
  brandTag: 'EDT × LIFE',
  title: 'Designed for real kitchens.',
  lead: 'Lifestyle-first appliances that look like home décor and cook with confidence.',
  desktopVideo: '/assets/output.mp4',
  mobileVideo: '/assets/output.mp4',
  posterImage:
    'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/HeroThumbnail-Anime_16-90.webp?v=1765782306',
  fallbackImage:
    'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/HeroThumbnail-Anime_16-90.webp?v=1765782306',
  primary: { to: '/shop', label: 'Shop collection' },
  secondary: { to: '/stories', label: 'Explore stories' },
}

export interface HeroSlide {
  id: string
  eyebrow: string
  brandTag?: string
  title: string
  lead: string
  video?: string
  poster: string
  fallbackImage?: string
  isConfigurableSlot?: boolean
  primary: { to: string; label: string }
  secondary?: { to: string; label: string }
}

const slides: HeroSlide[] = [
  {
    id: REPLACEABLE_CAMPAIGN_SLOT.id,
    eyebrow: REPLACEABLE_CAMPAIGN_SLOT.eyebrow,
    brandTag: REPLACEABLE_CAMPAIGN_SLOT.brandTag,
    title: REPLACEABLE_CAMPAIGN_SLOT.title,
    lead: REPLACEABLE_CAMPAIGN_SLOT.lead,
    video: REPLACEABLE_CAMPAIGN_SLOT.desktopVideo,
    poster: REPLACEABLE_CAMPAIGN_SLOT.posterImage,
    fallbackImage: REPLACEABLE_CAMPAIGN_SLOT.fallbackImage,
    isConfigurableSlot: true,
    primary: REPLACEABLE_CAMPAIGN_SLOT.primary,
    secondary: REPLACEABLE_CAMPAIGN_SLOT.secondary,
  },
  {
    id: 'luma-origin-orange',
    eyebrow: 'Hero product',
    brandTag: 'EDT LUMA',
    title: 'LUMA Origin Orange.',
    lead: 'India’s 1st 360° PureGlass™ air fryer — return to yourself with everyday extraordinary cooking.',
    video:
      'https://edtworld.com/cdn/shop/videos/c/vp/fb2bd67303224f51b15332a9f0ed5a1f/fb2bd67303224f51b15332a9f0ed5a1f.HD-1080p-7.2Mbps-85930165.mp4?v=0',
    poster:
      'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/HeroThumbnail-Anime_16-90.webp?v=1765782306',
    primary: { to: '/product/luma-origin-orange', label: 'Discover LUMA' },
    secondary: { to: '/shop?category=home-kitchen', label: 'Kitchen collection' },
  },
  {
    id: 'flow-kettle',
    eyebrow: 'New launch',
    brandTag: 'EDT FLOW',
    title: 'FLOW Smart Kettle.',
    lead: 'Precise heat. Calm pours. Dedicated chai & brew profiles with 60-minute keep-warm hold.',
    video:
      'https://edtworld.com/cdn/shop/videos/c/vp/6dac31fc408a4f24a18f6bc7e3326280/6dac31fc408a4f24a18f6bc7e3326280.HD-1080p-2.5Mbps-88228778.mp4?v=0',
    poster:
      'https://edtworld.com/cdn/shop/files/preview_images/848c3876a8a246c09a45ed29d33f8bf5.thumbnail.0000000000_small.jpg?v=1774434225',
    primary: { to: '/product/flow', label: 'Buy FLOW' },
    secondary: { to: '/recipes', label: 'Chai rituals' },
  },
  {
    id: 'luma-in-action',
    eyebrow: 'See it cook',
    brandTag: '360° PUREGLASS™',
    title: 'Meet LUMA in action.',
    lead: 'Watch food sizzle through transparent borosilicate glass. Zero Teflon, zero microplastics, zero guesswork.',
    video:
      'https://edtworld.com/cdn/shop/videos/c/vp/848c3876a8a246c09a45ed29d33f8bf5/848c3876a8a246c09a45ed29d33f8bf5.HD-1080p-2.5Mbps-79441716.mp4?v=0',
    poster:
      'https://edtworld.com/cdn/shop/files/preview_images/848c3876a8a246c09a45ed29d33f8bf5.thumbnail.0000000000_small.jpg?v=1774434225',
    primary: { to: '/shop?category=home-kitchen', label: 'Shop air fryers' },
    secondary: { to: '/recipes', label: 'Explore recipes' },
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const touchStartX = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }, [])

  // Auto advance timer
  useEffect(() => {
    if (!isPlaying) return
    const delay = index === 0 ? 8000 : 7000
    const timer = window.setInterval(nextSlide, delay)
    return () => window.clearInterval(timer)
  }, [index, isPlaying, nextSlide])

  // Reload video element on slide transition
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => {})
    }
  }, [index])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  }

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
    touchStartX.current = null
  }

  const slide = slides[index]

  return (
    <section
      className={styles.hero}
      aria-label="Featured campaigns"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slide.video ? (
            <video
              ref={videoRef}
              className={styles.bg}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
            >
              <source src={slide.video} type="video/mp4" />
              {slide.fallbackImage && (
                <img
                  src={slide.fallbackImage}
                  alt={slide.title}
                  className={styles.bg}
                />
              )}
            </video>
          ) : (
            <img
              src={slide.poster}
              alt={slide.title}
              className={styles.bg}
            />
          )}

          <div className={styles.veil} />

          <div className={styles.content}>
            <div className={styles.copyBox}>
              {slide.brandTag && (
                <motion.span
                  className={styles.brandBadge}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {slide.brandTag}
                </motion.span>
              )}

              <motion.span
                className="eyebrow"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.16 }}
              >
                {slide.eyebrow}
              </motion.span>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.24 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className={styles.lead}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.32 }}
              >
                {slide.lead}
              </motion.p>

              <motion.div
                className={styles.ctas}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link to={slide.primary.to} className="btn btn-primary">
                  {slide.primary.label}
                </Link>
                {slide.secondary && (
                  <Link to={slide.secondary.to} className="btn btn-light">
                    {slide.secondary.label}
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <button
        type="button"
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Docked Mode Switcher (EXPLORE HOME & KITCHEN vs EXPLORE BEAUTY) */}
      <div className={styles.dockedSwitcher}>
        <ModeSwitcher currentMode="kitchen" />
      </div>

      {/* Right Controls Bar: Dots + Pause/Play */}
      <div className={styles.controlsBar}>
        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.playbackBtn}
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919429694917"
        target="_blank"
        rel="noreferrer"
        className={styles.floatingWhatsApp}
        aria-label="Chat with EDT on WhatsApp"
      >
        <MessageCircle size={24} color="#ffffff" />
      </a>
    </section>
  )
}
