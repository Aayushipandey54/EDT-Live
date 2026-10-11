import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Sparkles, Utensils, Video } from 'lucide-react'
import { recipes } from '../data/recipes'
import styles from './Recipes.module.css'

export function RecipesPage() {
  const [category, setCategory] = useState<string>('all')
  const [vegOnly, setVegOnly] = useState(false)
  const [search, setSearch] = useState('')

  const categories = ['all', 'Breakfast', 'Mains', 'Snacks', 'Drinks']

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (category !== 'all' && r.category !== category) return false
      if (vegOnly && !r.isVeg) return false
      if (search.trim()) {
        const q = search.toLowerCase()
        return (
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.appliance.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [category, vegOnly, search])

  return (
    <div className="section">
      <div className="container">
        {/* Recipe Header */}
        <div className={styles.header}>
          <span className="eyebrow">Culinary OS</span>
          <h1 className="section-title">Recipes tuned for LUMA & FLOW.</h1>
          <p className="section-lead">
            Educational, step-by-step Indian recipes crafted for PureGlass™ air frying and precision water extraction.
          </p>

          {/* AI WhatsApp Banner */}
          <div className={styles.aiBanner}>
            <div className={styles.aiCopy}>
              <div className={styles.aiTitle}>
                <Sparkles size={18} color="var(--edt-orange)" />
                <strong>Pair with Recipe Ramsay on WhatsApp</strong>
              </div>
              <p>
                Ask “Aaj kya banaye?” based on vegetables in your fridge, and get instant cooking mode and timing recommendations.
              </p>
            </div>
            <a
              href="https://wa.me/919429694917"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Launch Recipe Ramsay
            </a>
          </div>
        </div>

        {/* Discovery Filter Controls */}
        <div className={styles.filtersBar}>
          <div className={styles.categoryPills}>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={category === c ? styles.pillActive : styles.pill}
                onClick={() => setCategory(c)}
              >
                {c === 'all' ? 'All Recipes' : c}
              </button>
            ))}
          </div>

          <div className={styles.searchRow}>
            <input
              type="search"
              placeholder="Search recipes, ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <label className={styles.vegCheck}>
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => setVegOnly(e.target.checked)}
              />
              Pure Vegetarian
            </label>
          </div>
        </div>

        {/* Recipe Discovery Grid */}
        <div className={styles.recipeGrid}>
          {filtered.map((recipe) => (
            <article key={recipe.id} className={styles.recipeCard}>
              <Link to={`/recipes/${recipe.slug}`} className={styles.mediaWrap}>
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
                <span className={styles.applianceBadge}>
                  <Utensils size={13} /> {recipe.appliance.split(' ')[0]}
                </span>
                {recipe.videoUrl && (
                  <span className={styles.videoBadge}>
                    <Video size={13} /> Video Inside
                  </span>
                )}
              </Link>
              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.metaCategory}>{recipe.category}</span>
                  <span className={styles.metaTime}>
                    <Clock size={13} /> {recipe.time}
                  </span>
                  <span className={styles.metaDiff}>{recipe.difficulty}</span>
                </div>
                <h3 className={styles.recipeTitle}>
                  <Link to={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
                </h3>
                <p className={styles.recipeSummary}>{recipe.summary}</p>
                <div className={styles.cardFooter}>
                  <Link
                    to={`/recipes/${recipe.slug}`}
                    className="btn btn-primary"
                    style={{ minHeight: '2.4rem', fontSize: '0.85rem', width: '100%' }}
                  >
                    View Recipe & Servings
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
