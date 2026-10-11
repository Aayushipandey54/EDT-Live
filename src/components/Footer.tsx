import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            EDT
          </Link>
          <p>
            Everyday Design & Technology. High performance hardware with human soul — transforming everyday rituals across kitchen and beauty.
          </p>
        </div>

        <div>
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/shop?category=home-kitchen">Home & Kitchen</Link>
            </li>
            <li>
              <Link to="/beauty">Beauty × Tech (SUKI)</Link>
            </li>
            <li>
              <Link to="/shop?category=combos">Combos & Bundles</Link>
            </li>
            <li>
              <Link to="/shop?category=accessories">Accessories & Spares</Link>
            </li>
            <li>
              <Link to="/shop?category=care">Care & Maintenance</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/recipes">Recipes & AI Kitchen</Link>
            </li>
            <li>
              <Link to="/stories">Real Stories</Link>
            </li>
            <li>
              <Link to="/gifting">Corporate & Festive Gifting</Link>
            </li>
            <li>
              <Link to="/store-locator">Store Locator</Link>
            </li>
            <li>
              <Link to="/news">News & Media</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Need Assistance?</h3>
          <p>
            Write to{' '}
            <a href="mailto:support@edtworld.com">support@edtworld.com</a> or
            call <a href="tel:+919429694917">+91 94296 94917</a>.
          </p>
          <p className={styles.hours}>Mon–Sat, 10:00 AM – 7:00 PM</p>
          <p className={styles.gift}>
            WhatsApp:{' '}
            <a href="https://wa.me/919429694917" target="_blank" rel="noreferrer">
              +91 94296 94917
            </a>
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} EDTLIFE TECHNOLOGY PVT LTD. All rights reserved.</p>
        <p className={styles.address}>
          OFFICE NO 67B, CWTS 181, GOPAL MANSION CHS LTD, GURUNANAK ROAD, Bandra West, Mumbai,
          Maharashtra-400050
        </p>
      </div>
    </footer>
  )
}
