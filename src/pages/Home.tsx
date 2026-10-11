import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChefHat } from 'lucide-react'
import { Hero } from '../components/Hero'
import { FeaturedIn } from '../components/FeaturedIn'
import { TrustStrip } from '../components/TrustStrip'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { reviews } from '../data/reviews'
import { news } from '../data/news'
import { RealStories } from '../components/RealStories'
import { StarRating } from '../components/StarRating'
import styles from './Home.module.css'

export function HomePage() {
  // Best sellers collection (LUMA Origin Orange, FLOW Kettle, Dual Bowls, etc.)
  const featured = products.filter((p) => p.bestSeller || p.badge).slice(0, 4)
  const homeReviews = reviews.slice(0, 3)
  const homeNews = news.slice(0, 3)

  return (
    <>
      {/* 1. Hero with Video Carousel & Front Docked Mode Switcher */}
      <Hero />

      {/* 2. "Featured In" Publication Logo Marquee */}
      <FeaturedIn />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 3. Best Sellers Collection */}
      <section className={`section ${styles.collection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Our collection</span>
              <h2 className="section-title">Best sellers for the smart kitchen.</h2>
              <p className="section-lead">
                Discover FLOW and LUMA — designed to feel like home, engineered to cook with confidence.
              </p>
            </div>
            <Link to="/shop" className="btn btn-ghost">
              View all products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-products">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Lifestyle & Philosophy */}
      <section className={styles.lifestyle}>
        <div className={`container ${styles.lifestyleGrid}`}>
          <motion.div
            className={styles.lifestyleCopy}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Everyday Extraordinary</span>
            <h2 className="section-title">Sell the kitchen life, not just the appliance.</h2>
            <p className="section-lead">
              Orange is the colour of a new dawn. We design for everyday life —
              safe, beautiful, and a little more joyful than sterile appliance aisles.
            </p>
            <ul className={styles.storyList}>
              <li>
                <strong>What does EDT mean?</strong>
                <span>Everyday Design & Technology. High performance hardware with human soul.</span>
              </li>
              <li>
                <strong>Why anime packaging?</strong>
                <span>Because this category was done looking soulless and corporate.</span>
              </li>
              <li>
                <strong>Why Origin Orange?</strong>
                <span>To challenge the sterile sea of grey plastic and chrome appliances.</span>
              </li>
              <li>
                <strong>Why 100% PureGlass™?</strong>
                <span>Because toxic PFAS non-stick coatings have no place in healthy cooking.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.lifestyleMedia}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0647/1437/5267/files/pdp-1.webp?v=1783381040"
              alt="LUMA Origin Orange in a modern Indian kitchen"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Real Stories & Creator Wall */}
      <RealStories />

      {/* 5. Recipe Ramsay - AI Kitchen OS */}
      <section className={styles.aiOs}>
        <div className={`container ${styles.aiInner}`}>
          <div>
            <span className="eyebrow">Recipe Ramsay</span>
            <h2 className="section-title">India’s 1st AI Kitchen OS on WhatsApp.</h2>
            <p className="section-lead">
              Your answer to “Aaj kya banaye?” — instant recipe guidance and preset recommendations tuned directly to LUMA and FLOW.
            </p>
            <div className={styles.aiCtas}>
              <Link to="/recipes" className="btn btn-primary">
                <ChefHat size={18} /> Discover Recipes
              </Link>
              <a
                className="btn btn-ghost"
                href="https://wa.me/919429694917"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
              alt="Delicious Indian dishes made with LUMA PureGlass"
            />
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Community Voices</span>
              <h2 className="section-title">Loved in kitchens across India.</h2>
              <p className="section-lead">
                Real feedback from home chefs, busy parents, and tea purists.
              </p>
            </div>
          </div>

          <div className={styles.reviewsGrid}>
            {homeReviews.map((r) => (
              <div key={r.id} className={styles.reviewCard}>
                <div className={styles.ratingRow}>
                  <StarRating rating={r.rating} />
                  {r.verified && <span className={styles.verified}>Verified Buyer</span>}
                </div>
                <h3 className={styles.reviewTitle}>“{r.title}”</h3>
                <p className={styles.reviewBody}>{r.body}</p>
                <span className={styles.reviewAuthor}>— {r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Press & Media Coverage */}
      <section className={styles.newsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Press & Editorial</span>
              <h2 className="section-title">In the headlines.</h2>
            </div>
            <Link to="/news" className="btn btn-ghost">
              All press coverage <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.newsGrid}>
            {homeNews.map((n) => (
              <article key={n.id} className={styles.newsCard}>
                <span className={styles.newsSource}>{n.source}</span>
                <h3 className={styles.newsCardTitle}>{n.title}</h3>
                <p className={styles.newsExcerpt}>{n.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
