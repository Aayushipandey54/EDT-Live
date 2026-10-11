import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronUp,
  Pause,
  Play,
  Plus,
  ShoppingBag,
  Sparkles,
  Volume2,
  VolumeX,
  Wind,
  Zap,
  X,
} from 'lucide-react'
import { products } from '../data/products'
import { TrustStrip } from '../components/TrustStrip'
import { ModeSwitcher } from '../components/ModeSwitcher'
import { useCart } from '../context/CartContext'
import { StarRating } from '../components/StarRating'
import { reviews } from '../data/reviews'
import styles from './Beauty.module.css'

interface Reel {
  id: string
  videoUrl: string
  title: string
  handle: string
  hairType: string
}

const customerReels: Reel[] = [
  {
    id: 'reel-1',
    videoUrl: '/assets/real 2.mp4',
    title: 'Drying 3A curls without heat damage',
    handle: '@kavyacurls',
    hairType: 'Curly (3A)',
  },
  {
    id: 'reel-2',
    videoUrl: '/assets/real 3.mp4',
    title: 'From damp to bouncy blowout in 8 mins',
    handle: '@ananyabeauty',
    hairType: 'Wavy & Thick',
  },
  {
    id: 'reel-3',
    videoUrl: '/assets/real 4.mp4',
    title: 'Testing AirSense™ thermal taper logic',
    handle: '@techbytanvi',
    hairType: 'Chemically Treated',
  },
  {
    id: 'reel-4',
    videoUrl: '/assets/real 5.mp4',
    title: 'Zero frizz in 90% Mumbai humidity',
    handle: '@pooja_glam',
    hairType: 'Coarse Frizzy',
  },
  {
    id: 'reel-5',
    videoUrl: '/assets/real 6.mp4',
    title: 'Diffuser attachment routine review',
    handle: '@curlyhairindia',
    hairType: 'Tight Curls',
  },
]

export function BeautyPage() {
  const { addItem, openCart } = useCart()
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlayingHero, setIsPlayingHero] = useState(true)
  const [heroSound, setHeroSound] = useState(false)

  const toggleHeroPlay = () => {
    if (videoRef.current) {
      if (isPlayingHero) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlayingHero(!isPlayingHero)
    }
  }
  const [activeTab, setActiveTab] = useState<'care' | 'lab' | 'tech' | 'compare'>('care')
  const [activeHairType, setActiveHairType] = useState<'wavy' | 'curly' | 'treated' | 'straight'>('wavy')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeModalReel, setActiveModalReel] = useState<Reel | null>(null)
  const [buyBoxDismissed, setBuyBoxDismissed] = useState(false)

  const sukiProduct = products.find((p) => p.slug === 'suki') || products[0]
  const sukiReviews = reviews.filter((r) => r.productId === 'suki')

  const handleAddToCart = () => {
    addItem(sukiProduct.id)
    openCart()
  }

  const handleBuyNow = () => {
    addItem(sukiProduct.id)
    navigate('/checkout')
  }

  const scrollToSection = (id: string, tab: 'care' | 'lab' | 'tech' | 'compare') => {
    setActiveTab(tab)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.beautyWrapper}>
      {/* 1. BEAUTY HERO — WITH TOP TITLE BANNER & FRONT FLOATING POP BUY BOX */}
      <section className={styles.beautyHero} aria-label="Beauty Launch">
        {/* Responsive Video/Image Background */}
        <div className={styles.heroMediaWrap}>
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            muted={!heroSound}
            loop
            playsInline
            poster="https://edtworld.com/cdn/shop/files/WEBSITE_1-02_1.webp?v=1791445709&width=1920"
          >
            <source src="/assets/home-page.mp4" type="video/mp4" />
            <img
              src="https://edtworld.com/cdn/shop/files/WEBSITE_1-02_1.webp?v=1791445709&width=1920"
              alt="SUKI Care-Dryer in use"
              className={styles.heroImgDesktop}
            />
          </video>
        </div>

        {/* Top Centered Header (Exact match to Screenshot 1) */}
        <div className={styles.meetSukiBanner}>
          <span className={styles.meetEyebrow}>MEET &nbsp; S U K I</span>
          <h1 className={styles.meetTitle}>
            <strong>India’s 1<sup>st</sup> Care-Dryer™</strong> that retains 100% hair strength.
          </h1>
        </div>

        {/* FLOATING POP BUY BOX ON THE FRONT (Screenshot 2 with Dismiss X) */}
        <AnimatePresence>
          {!buyBoxDismissed ? (
            <motion.div
              className={styles.frontPopBuyBox}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.tieredDropHeader}>
                <div className={styles.tierActive}>
                  <span className={styles.tierDot} />
                  FIRST DIBS | 200 UNITS
                  <strong style={{ marginLeft: '4px' }}>₹8,499</strong>
                </div>
                <div className={styles.tierInactive}>250 UNITS · ₹X,X99</div>
                <div className={styles.tierInactive}>300 UNITS · ₹X,X99</div>
                <div className={styles.tierInactive}>FINAL STOP · ₹X,X99</div>
                <button
                  type="button"
                  className={styles.popDismissBtn}
                  onClick={() => setBuyBoxDismissed(true)}
                  title="Dismiss card"
                  aria-label="Dismiss card"
                >
                  <X size={15} />
                </button>
              </div>

              <div className={styles.buyBoxBody}>
                <div className={styles.buyBoxThumb}>
                  <img src="/assets/suki-styled-1a.webp" alt="SUKI Care-Dryer" />
                </div>

                <div className={styles.buyBoxDetails}>
                  <h3 className={styles.buyBoxTitle}>SUKI Care-Dryer™ Launch Drop</h3>
                  <p className={styles.buyBoxSubtitle}>
                    India’s 1st Care-Dryer™ that retains 100% hair strength. Senses moisture 100x/sec and tapers temperature before cuticles scorch.
                  </p>
                  <div className={styles.buyBoxPriceRow}>
                    <span className={styles.buyBoxPrice}>₹8,499</span>
                    <span className={styles.buyBoxCompare}>₹13,999</span>
                    <span className={styles.buyBoxDiscount}>39% OFF</span>
                  </div>
                  <span className={styles.buyBoxTax}>MRP Inclusive of all taxes</span>
                  <p className={styles.buyBoxEmi}>
                    No Cost EMI from ₹422/month · <Link to="/product/suki">View options →</Link>
                  </p>
                </div>

                <div className={styles.buyBoxCtas}>
                  <button
                    type="button"
                    className={styles.buyNowBtn}
                    onClick={handleBuyNow}
                  >
                    BUY NOW · ₹8,499
                  </button>
                  <button
                    type="button"
                    className={styles.addToCartBtn}
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              type="button"
              className={styles.reopenPopBtn}
              onClick={() => setBuyBoxDismissed(false)}
              aria-label="Open Launch Drop Box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Sparkles size={14} color="#dae135" />
              <span>SUKI Launch Drop · ₹8,499</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Sound & Playback Controls */}
        <div className={styles.heroControlsWrap}>
          <button
            type="button"
            className={styles.soundBtn}
            onClick={toggleHeroPlay}
            aria-label={isPlayingHero ? 'Pause video' : 'Play video'}
          >
            {isPlayingHero ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            type="button"
            className={styles.soundBtn}
            onClick={() => setHeroSound((s) => !s)}
            aria-label={heroSound ? 'Mute sound' : 'Enable sound'}
          >
            {heroSound ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>

        {/* Bottom Center Docked Mode Switcher */}
        <div className={styles.dockedSwitcher}>
          <ModeSwitcher currentMode="beauty" />
        </div>
      </section>

      {/* 2. DISTINCT BEAUTY STICKY SUBNAV TABS */}
      <nav className={styles.beautySubHeader} aria-label="Beauty sections">
        <div className={`container ${styles.subHeaderInner}`}>
          <div className={styles.subHeaderBrand}>
            <span className={styles.brandTitle}>SUKI</span>
            <span className={styles.brandBadge}>CARE-DRYER™</span>
          </div>

          <div className={styles.subHeaderTabs}>
            <button
              type="button"
              className={activeTab === 'care' ? styles.subTabActive : styles.subTab}
              onClick={() => scrollToSection('care-drying', 'care')}
            >
              CARE-DRYING™
            </button>
            <button
              type="button"
              className={activeTab === 'lab' ? styles.subTabActive : styles.subTab}
              onClick={() => scrollToSection('lab-tests', 'lab')}
            >
              LAB TESTS
            </button>
            <button
              type="button"
              className={activeTab === 'tech' ? styles.subTabActive : styles.subTab}
              onClick={() => scrollToSection('tech', 'tech')}
            >
              TECH & SPECS
            </button>
            <button
              type="button"
              className={activeTab === 'compare' ? styles.subTabActive : styles.subTab}
              onClick={() => scrollToSection('comparison', 'compare')}
            >
              COMPARISON
            </button>
          </div>

          <button
            type="button"
            className={styles.quickBuyNavBtn}
            onClick={handleAddToCart}
          >
            GET SUKI · ₹8,499
          </button>
        </div>
      </nav>

      {/* 3. ASSURANCES TRUST STRIP */}
      <TrustStrip />

      {/* 4. REAL LIFE PERSPECTIVE GALLERY CARDS */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#65a30d' }}>Designed for Humans</span>
              <h2 className="section-title">SUKI in real perspective.</h2>
              <p className="section-lead">
                Balanced 410g aerospace chassis, magnetic snap attachments, and acoustic tuning that lets you hold a conversation.
              </p>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img src="/assets/suki-gallery-1.webp" alt="SUKI with Magnetic Precision Concentrator" />
              <div className={styles.galleryOverlay}>
                <span>Magnetic Styling Concentrator</span>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/assets/suki-gallery-3.webp" alt="SUKI resting on vanity" />
              <div className={styles.galleryOverlay}>
                <span>Space Neon Minimalist Finish</span>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/assets/suki-styled-1a.webp" alt="SUKI ergonomic in hand" />
              <div className={styles.galleryOverlay}>
                <span>410g Center-Balanced Grip</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: CARE-DRYING TECH ("Head Here: Drying Is a Care Chore?") */}
      <section id="care-drying" className={styles.careDryingSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#65a30d' }}>Care-Drying™ Logic</span>
              <h2 className="section-title">Head Here: Drying Is a Care Chore?</h2>
              <p className="section-lead">
                Every hair type reacts differently to thermal exposure. Choose your hair profile to see how CareDry™ adapts in real time.
              </p>
            </div>
          </div>

          {/* Hair Type Selector Tabs */}
          <div className={styles.hairTabs}>
            <button
              type="button"
              className={activeHairType === 'wavy' ? styles.hairTabActive : styles.hairTab}
              onClick={() => setActiveHairType('wavy')}
            >
              Wavy Hair (2A–2C)
            </button>
            <button
              type="button"
              className={activeHairType === 'curly' ? styles.hairTabActive : styles.hairTab}
              onClick={() => setActiveHairType('curly')}
            >
              Curly & Coily (3A–4C)
            </button>
            <button
              type="button"
              className={activeHairType === 'treated' ? styles.hairTabActive : styles.hairTab}
              onClick={() => setActiveHairType('treated')}
            >
              Chemically Treated
            </button>
            <button
              type="button"
              className={activeHairType === 'straight' ? styles.hairTabActive : styles.hairTab}
              onClick={() => setActiveHairType('straight')}
            >
              Fine & Straight
            </button>
          </div>

          <div className={styles.careDemoGrid}>
            <div className={styles.careCopyCard}>
              <div className={styles.careTag}>ADAPTIVE THERMAL PROFILE</div>
              {activeHairType === 'wavy' && (
                <>
                  <h3>Controlled Airspeed with Zero Frizz</h3>
                  <p>
                    Wavy cuticles tend to splay when hit with turbulent hot air. SUKI creates laminar high-velocity airflow that dries the roots fast while keeping mid-lengths smooth and defined.
                  </p>
                </>
              )}
              {activeHairType === 'curly' && (
                <>
                  <h3>Clump Definition & Shrinkage Retention</h3>
                  <p>
                    Pairs with the magnetic deep-bowl diffuser. Airflow gently disperses around curl clumps without disturbing the pattern, cutting drying time by 55%.
                  </p>
                </>
              )}
              {activeHairType === 'treated' && (
                <>
                  <h3>Max Cuticle Cortex Protection</h3>
                  <p>
                    Bleached or keratin-treated strands lack protective lipids. SUKI never exceeds 68°C on treated mode, avoiding moisture boiling and split ends.
                  </p>
                </>
              )}
              {activeHairType === 'straight' && (
                <>
                  <h3>Root Lift with Gloss Seal</h3>
                  <p>
                    High volume root stimulation without flattening the crown. Plasma ions eliminate static flyaways in dry winter conditions.
                  </p>
                </>
              )}

              <ul className={styles.careStatsList}>
                <li>
                  <strong>100x/sec</strong>
                  <span>AirSense™ thermal sampling</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>Tensile strength retention</span>
                </li>
                <li>
                  <strong>2.3x</strong>
                  <span>Natural light reflection</span>
                </li>
              </ul>
            </div>

            <div className={styles.careVideoCard}>
              <video
                controls
                playsInline
                className={styles.demoVideo}
                poster="https://edtworld.com/cdn/shop/files/WEBSITE_1-01_1.webp?v=1791445721&width=1080"
              >
                <source src="/assets/patent-pending-care-algorithm.mp4" type="video/mp4" />
              </video>
              <span className={styles.videoCaption}>
                PATENT-PENDING CAREDRY™ ALGORITHM IN REAL-TIME OPERATION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: CLINICAL LAB TESTS */}
      <section id="lab-tests" className={styles.labSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#38bdf8' }}>Verified Trichology</span>
              <h2 className="section-title">Clinically-tested CareDry™ Health.</h2>
              <p className="section-lead">
                Lab evaluations on Indian hair subjected to repeated weekly styling cycles.
              </p>
            </div>
          </div>

          <div className={styles.labGrid}>
            <div className={styles.labMetricCard}>
              <span className={styles.labBigNum}>100%</span>
              <h4>Tensile Hair Strength Retained</h4>
              <p>
                Zero loss of elongation elasticity. Hair cortex protein bonds remain intact after 120 drying sessions.
              </p>
            </div>

            <div className={styles.labMetricCard}>
              <span className={styles.labBigNum}>+2.3x</span>
              <h4>Natural Gloss & Shine</h4>
              <p>
                Plasma ions seal micro-cuticle gaps, allowing light to reflect uniformly off the hair surface.
              </p>
            </div>

            <div className={styles.labMetricCard}>
              <span className={styles.labBigNum}>0°</span>
              <h4>Thermal Hot-Spot Spikes</h4>
              <p>
                Dual temperature sensors guarantee airflow never surpasses the danger threshold, preventing bubbles in hair shafts.
              </p>
            </div>
          </div>

          <div className={styles.labVideoWrap}>
            <video
              controls
              playsInline
              className={styles.labVideo}
              poster="https://edtworld.com/cdn/shop/files/Front-NoUI.webp?v=1790483281&width=1920"
            >
              <source src="/assets/clinically-tested.mp4" type="video/mp4" />
            </video>
            <div className={styles.labVideoMeta}>
              <h4>Clinical Trichoscopy Demonstration</h4>
              <p>
                Comparative hair fiber stress test under polarized electron microscopy. Watch the difference in cuticle integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: TECH SCHEMATIC SPECS (SCREENSHOT 1 REPLICA) */}
      <section id="tech" className={styles.techSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#dae135' }}>Inside The Machine</span>
              <h2 className="section-title">Schematic Specs & Architecture.</h2>
              <p className="section-lead">
                Precision engineering that fits salon-grade intelligence into an ultra-balanced 410g body.
              </p>
            </div>
          </div>

          {/* Interactive Exploded Diagram Grid */}
          <div className={styles.schematicGrid}>
            <div className={styles.schematicCol}>
              <div className={styles.specCallout}>
                <div className={styles.specIconWrap}>
                  <Zap size={22} />
                </div>
                <div>
                  <h4>AirSense™ Dual Sensors</h4>
                  <p>
                    Engineered with dual sensors that think 100x/sec to keep the airflow temperature precise to the degree and well-within the hair-safe window.
                  </p>
                </div>
              </div>

              <div className={styles.specCallout}>
                <div className={styles.specIconWrap}>
                  <Wind size={22} />
                </div>
                <div>
                  <h4>Clinically-tested CareDry™ Algorithm</h4>
                  <p>
                    Patent-pending technology that releases precise intelligent heat that maintains 100% of your hair strength even after multiple uses.
                  </p>
                </div>
              </div>

              <div className={styles.specCallout}>
                <div className={styles.specIconWrap}>
                  <Sparkles size={22} />
                </div>
                <div>
                  <h4>Plasma Ion Care</h4>
                  <p>
                    Plasma ions help higher cuticle moisture retention for deeper conditioning, smoother hair and healthy scalp micro-environments.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.schematicMediaCol}>
              <img
                src="/assets/suki-styled-1a.webp"
                alt="SUKI Care-Dryer Exploded Tech View"
                className={styles.schematicImg}
              />
              <div className={styles.schematicVideoWrap}>
                <video
                  controls
                  playsInline
                  className={styles.schematicVideo}
                >
                  <source src="/assets/ultra-fast-care-drying.mp4" type="video/mp4" />
                </video>
                <span>ULTRA-FAST CARE-DRYING™ PERFORMANCE BENCHMARK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: 3-WAY COMPARISON TABLE (SUKI vs Conventional vs Dyson) */}
      <section id="comparison" className={styles.compareSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Direct Comparison</span>
              <h2 className="section-title">SUKI vs Conventional vs Luxury.</h2>
              <p className="section-lead">
                Compare verified metrics across everyday blow dryers and premium styling tools.
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Capability & Metric</th>
                  <th className={styles.sukiCol}>SUKI Care-Dryer™</th>
                  <th>Conventional Dryers</th>
                  <th>Luxury Styling Dryers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hair Strength Retention</strong></td>
                  <td className={styles.sukiCol}><strong>100% (Lab Verified)</strong></td>
                  <td>66% (Severe heat fatigue)</td>
                  <td>82% (High heat baseline)</td>
                </tr>
                <tr>
                  <td><strong>Thermal Sampling Rate</strong></td>
                  <td className={styles.sukiCol}><strong>100x / second</strong></td>
                  <td>None (Static element)</td>
                  <td>40x / second</td>
                </tr>
                <tr>
                  <td><strong>Adaptive Heat Taper</strong></td>
                  <td className={styles.sukiCol}><strong>Yes (CareDry™ Tech)</strong></td>
                  <td>No (Fixed high temp)</td>
                  <td>No (Fixed settings)</td>
                </tr>
                <tr>
                  <td><strong>Weight Balance</strong></td>
                  <td className={styles.sukiCol}><strong>410g (Ergonomic center)</strong></td>
                  <td>750g–850g (Top heavy)</td>
                  <td>680g</td>
                </tr>
                <tr>
                  <td><strong>Motor Architecture</strong></td>
                  <td className={styles.sukiCol}><strong>110,000 RPM Whisper</strong></td>
                  <td>20,000 RPM Carbon Brush</td>
                  <td>110,000 RPM Brushless</td>
                </tr>
                <tr>
                  <td><strong>Pricing</strong></td>
                  <td className={styles.sukiCol}><strong>₹8,499 (Launch Price)</strong></td>
                  <td>₹2,999 – ₹4,999</td>
                  <td>₹39,900 – ₹49,900</td>
                </tr>
                <tr>
                  <td><strong>Warranty & Support</strong></td>
                  <td className={styles.sukiCol}><strong>2 Year Full Replacement</strong></td>
                  <td>6 Months Limited</td>
                  <td>2 Year Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. SECTION: DESIGNED ACCESSORIES & ROUTINE BUNDLE */}
      <section className={styles.accessoriesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#65a30d' }}>Designed Accessories</span>
              <h2 className="section-title">Complete Your Hair Routine.</h2>
              <p className="section-lead">
                Precision magnetic attachments engineered specifically for Indian curl patterns and daily routines.
              </p>
            </div>
          </div>

          <div className={styles.accessoriesGrid}>
            <div className={styles.accessoryCard}>
              <img src="/assets/InTheBox3.webp" alt="Magnetic Deep Diffuser" />
              <h4>Magnetic Deep Diffuser</h4>
              <p>For defined curl clumps without frizz or flattening.</p>
              <div className={styles.accessoryFooter}>
                <span>₹1,499</span>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ minHeight: '2.2rem', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={handleAddToCart}
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>

            <div className={styles.accessoryCard}>
              <img src="/assets/InTheBox1.webp" alt="Precision Styling Concentrator" />
              <h4>Styling Concentrator</h4>
              <p>High-velocity focused airflow for sleek blowouts.</p>
              <div className={styles.accessoryFooter}>
                <span style={{ color: '#16a34a', fontWeight: 700 }}>INCLUDED IN BOX</span>
                <span className={styles.includedTag}>Standard</span>
              </div>
            </div>

            <div className={styles.accessoryCard}>
              <img src="/assets/InTheBox5.webp" alt="Heat-Safe Silicone Mat" />
              <h4>Heat-Safe Silicone Mat</h4>
              <p>Protects delicate dressing vanity surfaces from warmth.</p>
              <div className={styles.accessoryFooter}>
                <span>₹699</span>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ minHeight: '2.2rem', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={handleAddToCart}
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>

            <div className={styles.accessoryCard}>
              <img src="/assets/InTheBox4.webp" alt="Quick Start Hair Health Guide" />
              <h4>Quick Start Care Guide</h4>
              <p>Trichologist-backed routines for Indian hair textures.</p>
              <div className={styles.accessoryFooter}>
                <span style={{ color: '#16a34a', fontWeight: 700 }}>INCLUDED IN BOX</span>
                <span className={styles.includedTag}>Standard</span>
              </div>
            </div>
          </div>

          {/* CURATED BEAUTY ROUTINE BUNDLE PROMO */}
          <div className={styles.routineBundlePromo}>
            <div className={styles.bundleCopy}>
              <span className={styles.bundleBadge}>OFFICIAL ROUTINE BUNDLE</span>
              <h3>SUKI Care-Dryer™ + Diffuser + Wall Mount Kit</h3>
              <p>
                Everything you need for salon-finish blowouts and defined curls at home. Save ₹2,498 with this limited launch bundle.
              </p>
              <div className={styles.bundlePriceRow}>
                <span className={styles.bundlePrice}>₹9,999</span>
                <span className={styles.bundleCompare}>₹12,497</span>
                <span className={styles.bundleSavings}>Save ₹2,498</span>
              </div>
            </div>

            <button
              type="button"
              className={`btn btn-primary ${styles.bundleBuyBtn}`}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} /> Add Complete Routine Bundle
            </button>
          </div>
        </div>
      </section>

      {/* 10. SECTION: REAL CUSTOMER VIDEO REELS (SCREENSHOT 2 REPLICA) */}
      <section className={styles.reelsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" style={{ color: '#dae135' }}>Real Experiences</span>
              <h2 className="section-title">Show me the Care-Dryer in real life!</h2>
              <p className="section-lead">
                Watch real community creators, doctors, and hair purists dry their hair with SUKI.
              </p>
            </div>
          </div>

          <div className={styles.reelsTrack}>
            {customerReels.map((reel) => (
              <div
                key={reel.id}
                className={styles.reelCard}
                onClick={() => setActiveModalReel(reel)}
                role="button"
                tabIndex={0}
                aria-label={`Watch ${reel.title}`}
              >
                <video
                  src={reel.videoUrl}
                  muted
                  loop
                  playsInline
                  className={styles.reelVideoThumb}
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className={styles.reelPlayOverlay}>
                  <div className={styles.reelPlayBtn}>
                    <Play size={18} fill="#fff" />
                  </div>
                </div>
                <div className={styles.reelInfo}>
                  <span className={styles.reelTag}>{reel.hairType}</span>
                  <h4 className={styles.reelTitle}>{reel.title}</h4>
                  <span className={styles.reelHandle}>{reel.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REVIEWS & COMMUNITY FEEDBACK */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Verified Owners</span>
              <h2 className="section-title">What people are saying about SUKI.</h2>
            </div>
          </div>

          <div className={styles.reviewsGrid}>
            {sukiReviews.map((r) => (
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

      {/* 12. FAQ ACCORDION */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Got Questions?</span>
              <h2 className="section-title">Frequently Asked Questions.</h2>
            </div>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: 'What is CareDry™ and how does it prevent heat damage?',
                a: 'Conventional hair dryers blow fixed wattage heat that boils water inside the hair shaft as it dries out. SUKI’s CareDry™ algorithm constantly senses moisture evaporation and tapers down heat dynamically 100 times per second, ensuring temperature never surpasses the safe keratin protein window.',
              },
              {
                q: 'How does SUKI perform on thick, curly, or frizzy Indian hair?',
                a: 'SUKI was developed specifically with Indian hair textures in mind. The 110,000 RPM high-velocity airflow penetrates dense roots quickly without relying on scorching heat, while the Plasma Ion Shield neutralizes humidity frizz and static flyaways.',
              },
              {
                q: 'What attachments are included in the box?',
                a: 'Every SUKI Care-Dryer comes with the Magnetic Precision Styling Concentrator, the Quick Start Hair Health Guide, and the braided salon cord with cord organizer. The Magnetic Deep Diffuser and Silicone Mat can be added as routine accessories.',
              },
              {
                q: 'What is the warranty and replacement guarantee?',
                a: 'SUKI is backed by an official 2-Year Full Replacement Guarantee and a 7-day hassle-free replacement window for any transit defects.',
              },
            ].map((faq, idx) => (
              <div key={faq.q} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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

      {/* REEL VIDEO MODAL */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalReel(null)}
          >
            <motion.div
              className={styles.modalCard}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setActiveModalReel(null)}
                aria-label="Close video"
              >
                <X size={22} />
              </button>
              <video
                src={activeModalReel.videoUrl}
                controls
                autoPlay
                playsInline
                className={styles.modalVideo}
              />
              <div className={styles.modalMeta}>
                <h4>{activeModalReel.title}</h4>
                <p>{activeModalReel.handle} · {activeModalReel.hairType}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
