import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Bookmark,
  ChevronRight,
  Clock,
  Flame,
  Printer,
  Sparkles,
  Utensils,
} from 'lucide-react'
import { getRecipeBySlug } from '../data/recipes'
import styles from './RecipeDetail.module.css'

export function RecipeDetailPage() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug ?? '')

  // Servings selector: 2 | 4 | 6
  const [servings, setServings] = useState<2 | 4 | 6>(2)
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({})
  const [isSaved, setIsSaved] = useState(false)

  // Serving multiplier based on baseServings = 2
  const multiplier = useMemo(() => {
    return servings / 2
  }, [servings])

  if (!recipe) {
    return (
      <div className="section container" style={{ textAlign: 'center', paddingBlock: '6rem' }}>
        <h1 className="section-title">Recipe Not Found</h1>
        <p className="section-lead" style={{ marginInline: 'auto' }}>
          The requested culinary guide is not available.
        </p>
        <Link to="/recipes" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Recipes
        </Link>
      </div>
    )
  }

  function toggleCheck(name: string) {
    setCheckedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  function formatAmount(amount: number, scalable: boolean = true) {
    if (!scalable) return amount
    const val = amount * multiplier
    return Number.isInteger(val) ? val.toString() : val.toFixed(1)
  }

  return (
    <div className={`section ${styles.pageWrap}`}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/recipes">Recipes</Link>
          <ChevronRight size={14} />
          <span>{recipe.title}</span>
        </nav>

        {/* Top 2-Column Section */}
        <div className={styles.topLayout}>
          {/* Left: Video Player & Recipe Info */}
          <div className={styles.videoColumn}>
            <div className={styles.videoCard}>
              {recipe.videoUrl ? (
                <video
                  src={recipe.videoUrl}
                  poster={recipe.image}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className={styles.videoFallbackImg}
                />
              )}
            </div>

            <div className={styles.recipeBio}>
              <div className={styles.badgeRow}>
                <span className={styles.applianceTag}>
                  <Utensils size={14} /> {recipe.appliance}
                </span>
                <span className="eyebrow" style={{ margin: 0 }}>
                  {recipe.category}
                </span>
                {recipe.isVeg && (
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--edt-success)',
                    }}
                  >
                    ● 100% Vegetarian
                  </span>
                )}
              </div>

              <h1 className={styles.title}>{recipe.title}</h1>
              <p className={styles.summary}>{recipe.summary}</p>

              <div className={styles.metaBar}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Cook Time</span>
                  <span className={styles.metaVal}>{recipe.time}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Difficulty</span>
                  <span className={styles.metaVal}>{recipe.difficulty}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Appliance</span>
                  <span className={styles.metaVal}>{recipe.appliance.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Structured Ingredients Panel with Serving Selector */}
          <aside className={styles.ingredientsPanel} aria-label="Ingredients & Servings">
            <div className={styles.servingSelectorBox}>
              <div className={styles.servingLabel}>
                <span>Yield / Serving Size</span>
                <strong style={{ color: 'var(--edt-orange-deep)' }}>
                  {servings} People
                </strong>
              </div>

              <div className={styles.servingButtons} role="radiogroup" aria-label="Select servings">
                <button
                  type="button"
                  className={servings === 2 ? styles.servingBtnActive : styles.servingBtn}
                  onClick={() => setServings(2)}
                  aria-checked={servings === 2}
                  role="radio"
                >
                  2 People
                </button>
                <button
                  type="button"
                  className={servings === 4 ? styles.servingBtnActive : styles.servingBtn}
                  onClick={() => setServings(4)}
                  aria-checked={servings === 4}
                  role="radio"
                >
                  4 People
                </button>
                <button
                  type="button"
                  className={servings === 6 ? styles.servingBtnActive : styles.servingBtn}
                  onClick={() => setServings(6)}
                  aria-checked={servings === 6}
                  role="radio"
                >
                  6 People
                </button>
              </div>
            </div>

            <div className={styles.ingredientsList}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                Checklist ({recipe.ingredients.length} items)
              </h3>

              {recipe.ingredients.map((ing) => {
                const isChecked = !!checkedIngredients[ing.name]
                return (
                  <label
                    key={ing.name}
                    className={styles.ingredientRow}
                    onClick={() => toggleCheck(ing.name)}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // handled by label click
                      aria-label={ing.name}
                    />
                    <div className={isChecked ? styles.ingredientTextChecked : undefined}>
                      <span className={styles.ingredientAmount}>
                        {formatAmount(ing.amount, ing.scalable !== false)} {ing.unit}
                      </span>{' '}
                      {ing.name}
                      {ing.notes && (
                        <span className={styles.ingredientNotes}>{ing.notes}</span>
                      )}
                    </div>
                  </label>
                )
              })}
            </div>

            {/* Utilities: Print & Save */}
            <div className={styles.utilitiesRow}>
              <button
                type="button"
                className={styles.utilBtn}
                onClick={() => window.print()}
              >
                <Printer size={15} /> Print Recipe
              </button>
              <button
                type="button"
                className={`${styles.utilBtn} ${isSaved ? styles.utilBtnSaved : ''}`}
                onClick={() => setIsSaved((s) => !s)}
              >
                <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
                {isSaved ? 'Saved' : 'Save Recipe'}
              </button>
            </div>
          </aside>
        </div>

        {/* Step-by-Step Cooking Instructions */}
        <section className={styles.instructionsSection}>
          <span className="eyebrow">Method</span>
          <h2 className="section-title">Step-by-Step Instructions.</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepsList}>
              {recipe.steps.map((st) => (
                <div key={st.step} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{st.step}</div>
                  <div className={styles.stepContent}>
                    {st.title && <h3 className={styles.stepTitle}>{st.title}</h3>}
                    <p className={styles.stepInstruction}>{st.instruction}</p>

                    {(st.temp || st.time || st.preset) && (
                      <div className={styles.stepBadges}>
                        {st.preset && (
                          <span className={styles.stepBadge}>
                            <Sparkles size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            {st.preset}
                          </span>
                        )}
                        {st.temp && (
                          <span className={styles.stepBadge}>
                            <Flame size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            {st.temp}
                          </span>
                        )}
                        {st.time && (
                          <span className={styles.stepBadge}>
                            <Clock size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            {st.time}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar with Tips & Shop Appliance CTA */}
            <div className={styles.tipsSidebar}>
              <div className={styles.applianceHeroBox}>
                <h4>Cook with {recipe.appliance}</h4>
                <p>
                  This recipe is calibrated for the exact convective heat flow and temperature curve of {recipe.appliance}.
                </p>
                <Link
                  to={`/product/${recipe.applianceSlug}`}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Shop {recipe.appliance.split(' ')[0]}
                </Link>
              </div>

              {recipe.tips && recipe.tips.length > 0 && (
                <div className={styles.tipsBox}>
                  <h4>
                    <Sparkles size={16} color="var(--edt-orange)" />
                    Chef’s Kitchen Tips
                  </h4>
                  <ul>
                    {recipe.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
