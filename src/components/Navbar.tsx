import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { SearchModal } from './SearchModal'
import styles from './Navbar.module.css'

// Official EDT top navigation links (No Beauty here - Beauty is accessed via Front Hero Switcher)
const links = [
  { to: '/', label: 'HOME', end: true },
  { to: '/shop', label: 'SHOP' },
  { to: '/recipes', label: 'RECIPES' },
  { to: '/gifting', label: 'GIFTING' },
  { to: '/store-locator', label: 'STORE LOCATOR' },
  { to: '/contact', label: 'CONTACT' },
]

export function Navbar() {
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHeroPage = location.pathname === '/' || location.pathname === '/beauty'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerClass = [
    styles.header,
    isHeroPage ? styles.heroNav : styles.standardNav,
    scrolled ? styles.scrolled : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={headerClass}>
        <div className={styles.bar}>
          {/* Left: Brand Logo & Mobile Toggle */}
          <div className={styles.left}>
            <button
              type="button"
              className={styles.mobileToggle}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
              EDT<span className={styles.trademark}>™</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={'end' in l ? l.end : false}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions (User, Search, Cart) */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="User Account"
            >
              <User size={19} />
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={19} />
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label={`Cart, ${itemCount} items`}
              onClick={openCart}
            >
              <ShoppingBag size={19} />
              {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
          <nav aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={'end' in l ? l.end : false}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/beauty"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileLink}
            >
              EXPLORE BEAUTY (SUKI)
            </NavLink>
            <NavLink
              to="/stories"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileLink}
            >
              STORIES
            </NavLink>
            <NavLink
              to="/news"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileLink}
            >
              NEWS & PRESS
            </NavLink>
          </nav>
        </div>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
