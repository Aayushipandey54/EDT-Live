import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Sparkles } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { combos } from '../data/combos'
import type { Product } from '../types'
import styles from './Shop.module.css'

export type ShopCategoryTab =
  | 'all'
  | 'home-kitchen'
  | 'beauty'
  | 'combos'
  | 'accessories'
  | 'care'

const categories: { id: ShopCategoryTab; label: string; badge?: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'home-kitchen', label: 'Home & Kitchen' },
  { id: 'beauty', label: 'Beauty × Tech', badge: 'New' },
  { id: 'combos', label: 'Combos & Bundles', badge: 'Save' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'care', label: 'Care & Maintenance' },
]

const sorts = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export function ShopPage({ initialTab }: { initialTab?: ShopCategoryTab }) {
  const [params, setParams] = useSearchParams()
  const categoryParam = params.get('category') as ShopCategoryTab | null

  const activeCategory: ShopCategoryTab = useMemo(() => {
    if (initialTab) return initialTab
    if (categoryParam && categories.some((c) => c.id === categoryParam)) {
      return categoryParam
    }
    // Backward compatibility for old params
    if (categoryParam === ('air-fryer' as any) || categoryParam === ('kettle' as any)) {
      return 'home-kitchen'
    }
    return 'all'
  }, [categoryParam, initialTab])

  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')
  const [bestOnly, setBestOnly] = useState(false)

  // Map combos into unified Product format for the Combos tab
  const comboProducts: Product[] = useMemo(() => {
    return combos.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      tagline: c.description,
      category: 'combos',
      department: 'home-kitchen',
      price: c.price,
      compareAt: c.compareAt,
      rating: 4.9,
      reviewCount: 52,
      badge: c.savings ? `Save ₹${c.savings}` : 'Bundle Value',
      bestSeller: true,
      delivery: 'Free express shipping in 2–4 days',
      colors: [],
      images: [c.image],
      benefits: ['Curated multi-product bundle', 'Exclusive bundle pricing savings'],
      features: [],
      specs: [],
      faqs: [],
      description: c.description,
    }))
  }, [])

  const filtered = useMemo(() => {
    let list: Product[] = []

    if (activeCategory === 'combos') {
      list = [...comboProducts]
    } else if (activeCategory === 'beauty') {
      list = products.filter((p) => p.department === 'beauty' || p.category === 'beauty')
    } else if (activeCategory === 'home-kitchen') {
      list = products.filter(
        (p) =>
          p.department === 'home-kitchen' &&
          p.category !== 'care' &&
          p.category !== 'accessories',
      )
    } else if (activeCategory === 'accessories') {
      list = products.filter((p) => p.category === 'accessories')
    } else if (activeCategory === 'care') {
      list = products.filter((p) => p.category === 'care')
    } else {
      // 'all' includes core products and flagship combos
      list = [...products, ...comboProducts.slice(0, 3)]
    }

    if (bestOnly) {
      list = list.filter((p) => p.bestSeller)
    }

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      )
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller))
    }

    return list
  }, [activeCategory, comboProducts, bestOnly, query, sort])

  function selectCategory(id: ShopCategoryTab) {
    if (id === 'all') {
      params.delete('category')
    } else {
      params.set('category', id)
    }
    setParams(params)
  }

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Catalog</span>
        <h1 className="section-title">Shop EDT</h1>
        <p className="section-lead">
          Explore everyday design & technology across intelligent kitchenware, transformative beauty, and curated bundles.
        </p>

        {/* Category Tabs */}
        <div className={styles.categoryTabs} role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === c.id}
              className={activeCategory === c.id ? styles.tabActive : styles.tab}
              onClick={() => selectCategory(c.id)}
            >
              {c.label}
              {c.badge && <span className={styles.tabBadge}>{c.badge}</span>}
            </button>
          ))}
        </div>

        {/* Informational Sub-banner for Specific Tabs */}
        {activeCategory === 'combos' && (
          <div className={styles.tabBanner}>
            <Sparkles size={18} />
            <span>
              <strong>Bundled Savings:</strong> Save up to ₹14,498 when you pair LUMA, FLOW, and SUKI together. All bundles include full individual warranties.
            </span>
          </div>
        )}

        {activeCategory === 'care' && (
          <div className={styles.tabBannerCare}>
            <span>
              <strong>Curated Care & Maintenance:</strong> Recommended bio-citric descaling packs and platinum food-grade silicone liners verified compatible with LUMA & FLOW.
            </span>
          </div>
        )}

        {/* Search, Filter & Sort Controls */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search products, modes, appliances..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search products"
            />
          </div>

          <div className={styles.filterGroup}>
            <select
              aria-label="Sort products"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={styles.select}
            >
              {sorts.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>

            <label className={styles.check}>
              <input
                type="checkbox"
                checked={bestOnly}
                onChange={(e) => setBestOnly(e.target.checked)}
              />
              Best sellers only
            </label>
          </div>
        </div>

        <p className={styles.count}>
          Showing {filtered.length} product{filtered.length === 1 ? '' : 's'}
        </p>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No products match your current filters or search query.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setQuery('')
                setBestOnly(false)
                selectCategory('all')
              }}
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid-products">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
