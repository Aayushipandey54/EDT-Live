import { Link } from 'react-router-dom'
import { Flame, Sparkles } from 'lucide-react'
import styles from './ModeSwitcher.module.css'

export interface ModeSwitcherProps {
  currentMode: 'kitchen' | 'beauty'
  className?: string
}

export function ModeSwitcher({ currentMode, className = '' }: ModeSwitcherProps) {
  return (
    <nav
      className={`${styles.switcherContainer} ${className}`}
      role="tablist"
      aria-label="Discover EDT categories"
    >
      {/* Home & Kitchen Tab */}
      <Link
        to="/"
        className={`${styles.tab} ${
          currentMode === 'kitchen' ? styles.activeKitchen : styles.inactiveTab
        }`}
        role="tab"
        aria-selected={currentMode === 'kitchen'}
      >
        <span className={styles.iconWrapKitchen}>
          <Flame size={15} strokeWidth={2.4} />
        </span>
        <div className={styles.textWrap}>
          <span className={styles.labelPrefix}>EXPLORE</span>
          <span className={styles.labelTitle}>Home & Kitchen</span>
        </div>
      </Link>

      {/* Beauty Tab */}
      <Link
        to="/beauty"
        className={`${styles.tab} ${
          currentMode === 'beauty' ? styles.activeBeauty : styles.inactiveTab
        }`}
        role="tab"
        aria-selected={currentMode === 'beauty'}
      >
        <span className={styles.iconWrapBeauty}>
          <Sparkles size={15} strokeWidth={2.4} />
        </span>
        <div className={styles.textWrap}>
          <span className={styles.labelPrefix}>EXPLORE</span>
          <span className={styles.labelTitle}>Beauty · SUKI</span>
        </div>
      </Link>
    </nav>
  )
}
