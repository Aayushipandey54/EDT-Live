import { PackageCheck, RefreshCw, Shield, Truck } from 'lucide-react'
import styles from './TrustStrip.module.css'

const items = [
  { icon: Truck, label: 'Free shipping' },
  { icon: Shield, label: '1 year warranty' },
  { icon: RefreshCw, label: '7 day replacement' },
  { icon: PackageCheck, label: 'Secure payment' },
]

export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="Purchase assurances">
      <div className={`container ${styles.inner}`}>
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className={styles.item}>
            <Icon size={20} strokeWidth={1.75} aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
