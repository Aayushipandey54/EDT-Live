import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  ShieldCheck,
  RotateCcw,
  Truck,
  Play,
  ShoppingBag,
  Package,
  Gift,
} from 'lucide-react'
import { getProductBySlug, formatINR, products } from '../data/products'
import { reviews } from '../data/reviews'
import { useCart } from '../context/CartContext'
import { StarRating } from '../components/StarRating'
import { ProductCard } from '../components/ProductCard'
import { TrustStrip } from '../components/TrustStrip'
import styles from './Product.module.css'

export function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug ?? '')
  const { addItem } = useCart()

  // State
  const [activeMedia, setActiveMedia] = useState<number | 'video'>(0)
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors[0] ?? '',
  )
  const [quantity, setQuantity] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Derived calculations
  const discountPercent = useMemo(() => {
    if (!product || !product.compareAt || product.compareAt <= product.price)
      return null
    return Math.round((1 - product.price / product.compareAt) * 100)
  }, [product])

  const savingsAmount = useMemo(() => {
    if (!product || !product.compareAt || product.compareAt <= product.price)
      return null
    return product.compareAt - product.price
  }, [product])

  const productReviews = useMemo(
    () => (product ? reviews.filter((r) => r.productId === product.id) : []),
    [product],
  )

  // Find compatible accessories or care items
  const compatibleAccessories = useMemo(() => {
    if (!product) return []
    if (product.compatibleWith && product.compatibleWith.length > 0) {
      return products.filter((p) => product.compatibleWith?.includes(p.id) || product.compatibleWith?.includes(p.slug))
    }
    // Fallback: Show care or accessories
    if (product.category === 'air-fryer') {
      return products.filter((p) => p.category === 'accessories' || p.category === 'care').slice(0, 3)
    }
    if (product.category === 'kettle') {
      return products.filter((p) => p.slug === 'kettle-descaling-pack' || p.category === 'accessories').slice(0, 2)
    }
    return []
  }, [product])

  // Related products
  const related = useMemo(
    () =>
      product
        ? products
            .filter((p) => p.id !== product.id && p.department === product.department)
            .slice(0, 3)
        : [],
    [product],
  )

  if (!product) {
    return (
      <div className="section container" style={{ textAlign: 'center', paddingBlock: '6rem' }}>
        <h1 className="section-title">Product not found</h1>
        <p className="section-lead" style={{ marginInline: 'auto' }}>
          The requested product could not be located in our active catalog.
        </p>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Return to Shop
        </Link>
      </div>
    )
  }

  const currentProduct = product

  // Free Accessory / Complimentary Gift promotion for qualifying products
  const freeGift = useMemo(() => {
    if (!product) return null
    if (product.category === 'accessories' || product.category === 'care') return null

    if (product.category === 'air-fryer') {
      return {
        name: 'PureGlass™ Butter Paper Liners (Pack of 100)',
        productId: 'airfryer-butter-paper',
        worth: 499,
        image: 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/Combos_Bowls.webp?v=1778662503',
        description: '100% unbleached perforated butter paper (100 pre-cut round sheets) for mess-free air frying & baking.',
      }
    }

    if (product.category === 'kettle') {
      return {
        name: 'MineralCare Bio-Citric Descaling Powder (Pack of 4)',
        productId: 'kettle-descaling-powder',
        worth: 449,
        image: 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/GreyAnim0sss_1.webp?v=1783138472',
        description: 'Natural bio-citric descaling care to keep your FLOW kettle crystal-clear and boiling silently.',
      }
    }

    if (product.category === 'beauty') {
      return {
        name: 'PureGlass™ Pro Appliance Cleaner Kit & Polishers',
        productId: 'pureglass-cleaner-kit',
        worth: 649,
        image: 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/GreyAnim0sss_1.webp?v=1783138472',
        description: 'Bio-enzyme styling cleanser spray and dual-pile microfiber glass polishing cloth.',
      }
    }

    // Combos / Other appliances
    return {
      name: 'PureGlass™ Butter Paper Liners + Care Kit',
      productId: 'airfryer-butter-paper',
      worth: 1148,
      image: 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/Combos_Bowls.webp?v=1778662503',
      description: 'Exclusive multi-accessory care bundle included at zero cost with your order.',
    }
  }, [product])

  function handleAddToCart() {
    addItem(currentProduct.id, quantity)
    if (freeGift) {
      addItem(freeGift.productId, 1, true)
    }
  }

  function handleBuyNow() {
    addItem(currentProduct.id, quantity)
    if (freeGift) {
      addItem(freeGift.productId, 1, true)
    }
    navigate('/checkout')
  }

  return (
    <>
      <div className={`container ${styles.pdp}`}>
        {/* LEFT COLUMN: PRODUCT MEDIA GALLERY */}
        <div className={styles.gallery}>
          <div className={styles.heroMediaWrap}>
            <AnimatePresence mode="wait">
              {activeMedia === 'video' && product.video ? (
                <video
                  key="video"
                  src={product.video}
                  className={styles.heroVideo}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <motion.img
                  key={typeof activeMedia === 'number' ? activeMedia : 0}
                  src={
                    typeof activeMedia === 'number'
                      ? product.images[activeMedia] || product.images[0]
                      : product.images[0]
                  }
                  alt={product.name}
                  className={styles.heroImg}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>
            <div className={styles.zoomHint}>
              <span>Official EDT Asset</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbs} role="tablist" aria-label="Product thumbnails">
            {product.images.map((img, i) => (
              <button
                key={img}
                type="button"
                className={activeMedia === i ? styles.thumbActive : styles.thumb}
                onClick={() => setActiveMedia(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <img src={img} alt="" />
              </button>
            ))}

            {product.video && (
              <button
                type="button"
                className={activeMedia === 'video' ? styles.thumbActive : styles.thumb}
                onClick={() => setActiveMedia('video')}
                aria-label="Watch product video demonstration"
              >
                <img src={product.images[0]} alt="" />
                <div className={styles.videoThumbBadge}>
                  <Play size={18} fill="#fff" />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: PURCHASE & SPECIFICATIONS BUYBOX */}
        <div className={styles.buybox}>
          <div className={styles.badgeRow}>
            <span className={styles.categoryTag}>
              {product.department === 'beauty' ? 'Beauty × Tech' : 'Home & Kitchen'}
            </span>
            {product.badge && <span className="eyebrow">{product.badge}</span>}
            {product.isOfficial && (
              <span className={styles.officialBadge}>100% Genuine Brand</span>
            )}
          </div>

          <h1>{product.name}</h1>

          <div className={styles.ratingRow}>
            <StarRating rating={product.rating} />
            <span>
              <strong>{product.rating}</strong> / 5.0 ·{' '}
              <a href="#reviews" className={styles.reviewsLink}>
                {product.reviewCount} customer reviews
              </a>
            </span>
          </div>

          <p className={styles.tagline}>{product.tagline}</p>

          {/* Price Block */}
          <div className={styles.priceBlock}>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>{formatINR(product.price)}</span>
              {product.compareAt && (
                <span className={styles.comparePrice}>{formatINR(product.compareAt)}</span>
              )}
              {discountPercent && (
                <span className={styles.savingsBadge}>
                  {discountPercent}% OFF (Save {formatINR(savingsAmount || 0)})
                </span>
              )}
            </div>
            {product.emiFrom && (
              <p className={styles.emiText}>
                No Cost EMI available from ₹{product.emiFrom}/month
              </p>
            )}
          </div>

          {/* Variant Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className={styles.variantSection}>
              <span className={styles.variantLabel}>
                Finish / Shade: <strong>{selectedColor || product.colors[0]}</strong>
              </span>
              <div className={styles.variantOptions}>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={
                      selectedColor === color
                        ? styles.variantBtnActive
                        : styles.variantBtn
                    }
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Complimentary Free Accessory / Gift With Purchase Callout */}
          {freeGift && (
            <div className={styles.freeGiftPromo}>
              <div className={styles.freeGiftPromoHeader}>
                <span className={styles.freeGiftBadge}>
                  <Gift size={14} /> FREE ACCESSORY PROMOTION
                </span>
                <span className={styles.freeGiftWorth}>
                  Worth {formatINR(freeGift.worth)} · ₹0 FREE
                </span>
              </div>
              <div className={styles.freeGiftPromoBody}>
                <img
                  src={freeGift.image}
                  alt={freeGift.name}
                  className={styles.freeGiftPromoThumb}
                />
                <div className={styles.freeGiftPromoInfo}>
                  <span className={styles.freeGiftPromoTitle}>{freeGift.name}</span>
                  <p className={styles.freeGiftPromoDesc}>{freeGift.description}</p>
                  <div className={styles.freeGiftPricingRow}>
                    <span className={styles.freeGiftStrikethrough}>
                      {formatINR(freeGift.worth)}
                    </span>
                    <span className={styles.freeGiftFreeTag}>FREE (₹0)</span>
                    <span className={styles.freeGiftIncludedNote}>
                      ✓ Automatically included with this appliance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quantity & CTAs */}
          <div className={styles.purchaseControls}>
            <div className={styles.qtyPicker} aria-label="Select quantity">
              <button
                type="button"
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button
                type="button"
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              type="button"
              className={`btn btn-primary ${styles.addToCartBtn}`}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} /> Add to Cart
            </button>

            <button
              type="button"
              className={`btn btn-ghost ${styles.buyNowBtn}`}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          {/* Trust Guarantee Strip */}
          <div className={styles.trustPills}>
            <div className={styles.trustPill}>
              <Truck size={18} />
              <span>{product.delivery}</span>
            </div>
            <div className={styles.trustPill}>
              <ShieldCheck size={18} />
              <span>Official Warranty Included</span>
            </div>
            <div className={styles.trustPill}>
              <RotateCcw size={18} />
              <span>7-Day Replacement</span>
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--edt-muted)', marginTop: '0.5rem' }}>
            {product.description}
          </p>
        </div>
      </div>

      <TrustStrip />

      {/* SECTION: WHY IT MATTERS / KEY BENEFITS */}
      <section className={`section ${styles.sectionBlock}`}>
        <div className="container">
          <span className="eyebrow">Why It Matters</span>
          <h2 className="section-title">Designed with intention.</h2>
          <div className={styles.benefitsList}>
            {product.benefits.map((b) => (
              <div key={b} className={styles.benefitItem}>
                <Check size={20} className={styles.benefitCheck} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: VISUAL FEATURE STORYTELLING */}
      {product.features && product.features.length > 0 && (
        <section className={`section ${styles.sectionBlock}`}>
          <div className="container">
            <span className="eyebrow">Deep Dive</span>
            <h2 className="section-title">Engineering inside the form.</h2>
            <div className={styles.featuresGrid}>
              {product.features.map((feat) => (
                <article key={feat.title} className={styles.featureCard}>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION: TECHNICAL SPECIFICATIONS & WHAT'S IN THE BOX */}
      <section className={`section ${styles.sectionBlock}`}>
        <div className="container">
          <span className="eyebrow">Technical Details</span>
          <h2 className="section-title">Specifications & What’s In The Box.</h2>

          <div className={styles.specsBoxGrid}>
            <div>
              <table className={styles.specTable}>
                <tbody>
                  {product.specs.map((s) => (
                    <tr key={s.label}>
                      <th>{s.label}</th>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.inTheBoxCard}>
              <h3>
                <Package size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--edt-orange)' }} />
                What’s In The Box
              </h3>
              <ul className={styles.boxList}>
                {(product.inTheBox && product.inTheBox.length > 0
                  ? product.inTheBox
                  : [
                      `${product.name} Primary Base Unit`,
                      'Power Cable with Indian 3-Pin Plug',
                      'Quick Start Guide & Official Warranty Card',
                      'Recipe Ramsay Pairing Instructions',
                    ]
                ).map((item) => (
                  <li key={item}>
                    <Check size={16} color="var(--edt-success)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMPLETE YOUR SETUP (COMPATIBLE ACCESSORIES & CARE) */}
      {compatibleAccessories.length > 0 && (
        <section className={`section ${styles.sectionBlock}`}>
          <div className="container">
            <span className="eyebrow">Complete Your Setup</span>
            <h2 className="section-title">Compatible Accessories & Care.</h2>
            <p className="section-lead">
              Tested complementary tools and maintenance essentials for your {product.name}.
            </p>

            <div className={styles.setupGrid}>
              {compatibleAccessories.map((acc) => (
                <div key={acc.id} className={styles.setupCard}>
                  <img src={acc.images[0]} alt={acc.name} />
                  <h4>{acc.name}</h4>
                  <p>{acc.tagline}</p>
                  <div className={styles.setupPriceRow}>
                    <strong>{formatINR(acc.price)}</strong>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ minHeight: '2.2rem', padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
                      onClick={() => addItem(acc.id)}
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION: FAQ ACCORDION */}
      {product.faqs && product.faqs.length > 0 && (
        <section className={`section ${styles.sectionBlock}`}>
          <div className="container">
            <span className="eyebrow">Got Questions?</span>
            <h2 className="section-title">Frequently asked questions.</h2>
            <div className={styles.faqList}>
              {product.faqs.map((faq, idx) => (
                <div key={faq.q} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqTrigger}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === idx && (
                    <motion.div
                      className={styles.faqBody}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION: REVIEWS & CUSTOMER CONTENT */}
      <section id="reviews" className={`section ${styles.sectionBlock}`}>
        <div className="container">
          <span className="eyebrow">Customer Voices</span>
          <h2 className="section-title">Ratings & Verified Reviews.</h2>

          <div className={styles.reviewsLayout}>
            {/* Rating Breakdown card */}
            <div className={styles.ratingSummaryCard}>
              <div className={styles.scoreBig}>{product.rating}</div>
              <StarRating rating={product.rating} size="md" />
              <p style={{ fontSize: '0.88rem', color: 'var(--edt-muted)' }}>
                Based on {product.reviewCount} verified owners across India
              </p>

              <div className={styles.barsList}>
                <div className={styles.barRow}>
                  <span>5 ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '84%' }} />
                  </div>
                  <span>84%</span>
                </div>
                <div className={styles.barRow}>
                  <span>4 ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '12%' }} />
                  </div>
                  <span>12%</span>
                </div>
                <div className={styles.barRow}>
                  <span>3 ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '3%' }} />
                  </div>
                  <span>3%</span>
                </div>
                <div className={styles.barRow}>
                  <span>2 ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '1%' }} />
                  </div>
                  <span>1%</span>
                </div>
                <div className={styles.barRow}>
                  <span>1 ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '0%' }} />
                  </div>
                  <span>0%</span>
                </div>
              </div>
            </div>

            {/* Individual Reviews Grid */}
            <div className={styles.reviewsGrid}>
              {(productReviews.length > 0
                ? productReviews
                : [
                    {
                      id: 'rv1',
                      author: 'Priya Narayanan',
                      rating: 5,
                      title: 'Outstanding quality and design',
                      body: `Exceeded our expectations. You can instantly feel the difference in build quality compared to generic store appliances.`,
                      verified: true,
                    },
                    {
                      id: 'rv2',
                      author: 'Rishi Varma',
                      rating: 5,
                      title: 'Clean cooking and gorgeous counter presence',
                      body: `The glass cleaning is painless. Highly recommend pairing with the Recipe Ramsay WhatsApp assistant for presets!`,
                      verified: true,
                    },
                  ]
              ).map((rev) => (
                <div key={rev.id} className={styles.reviewItem}>
                  <div className={styles.reviewHead}>
                    <StarRating rating={rev.rating} size="sm" />
                    {rev.verified && (
                      <span className={styles.verifiedBadge}>
                        <Check size={12} style={{ verticalAlign: 'middle' }} /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <h4>{rev.title}</h4>
                  <p>{rev.body}</p>
                  <p className={styles.reviewAuthor}>— {rev.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className={`section ${styles.sectionBlock}`}>
          <div className="container">
            <span className="eyebrow">Recommendations</span>
            <h2 className="section-title">You may also love.</h2>
            <div className="grid-products" style={{ marginTop: '1.5rem' }}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
