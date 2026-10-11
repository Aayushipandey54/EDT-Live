import { useState } from 'react'
import {
  Gift,
  PartyPopper,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  MessageCircle,
  Mail,
  ShoppingBag,
  Box,
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatINR } from '../data/products'
import styles from './Gifting.module.css'

interface HamperItem {
  id: string
  productId: string
  title: string
  subtitle: string
  image: string
  price: number
  compareAt: number
  savings: number
  badge: string
  freeGiftName: string
  freeGiftWorth: number
  inclusions: string[]
}

const GIFT_HAMPERS: HamperItem[] = [
  {
    id: 'festive-kitchen-hamper',
    productId: 'luma-origin-orange',
    title: 'The Royal Festive Kitchen Hamper',
    subtitle: 'LUMA 4.5L PureGlass™ Air Fryer with signature luxury black & satin-orange gift presentation.',
    image: '/assets/gifting-hero.webp',
    price: 8999,
    compareAt: 12999,
    savings: 4000,
    badge: 'Bestselling Festive Hamper',
    freeGiftName: '100x PureGlass™ Butter Paper Liners + Pro Cleaning Kit',
    freeGiftWorth: 1148,
    inclusions: [
      'LUMA 4.5L PureGlass™ Air Fryer in Origin Orange',
      'Luxury Hard-Bound Black Gift Box with Orange Silk Ribbon',
      'Handwritten Calligraphy Message Card',
      'FREE 100x Butter Paper Liners (Worth ₹499)',
      'FREE PureGlass™ Bio-Enzyme Cleaner Kit (Worth ₹649)',
      '1-Year Brand Replacement Guarantee',
    ],
  },
  {
    id: 'chai-coffee-ritual-hamper',
    productId: 'flow',
    title: 'The Artisan Morning Rituals Set',
    subtitle: 'FLOW Borosilicate Smart Kettle with organic descaling care and kraft keepsake box.',
    image: 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files/Kettle_Grey_4.webp?v=1783084797',
    price: 3899,
    compareAt: 5499,
    savings: 1600,
    badge: 'Housewarming Favourite',
    freeGiftName: 'MineralCare Bio-Citric Descaling Powder (Pack of 4)',
    freeGiftWorth: 449,
    inclusions: [
      'FLOW 1.8L Borosilicate Smart Glass Electric Kettle',
      'Rustic Kraft Gift Box with Hand-Tied Satin Ribbon',
      'Botanical Embossed Greeting Card',
      'FREE MineralCare Natural Bio-Citric Descaler Pack (Worth ₹449)',
      'EDT Organic Cotton Everyday Tote Bag',
      '1-Year Official Warranty Card',
    ],
  },
  {
    id: 'luxe-beauty-care-suite',
    productId: 'suki-care-dryer',
    title: 'The Haute Care & Glow Suite',
    subtitle: 'SUKI Care-Dryer™ with plasma ion cuticle preservation and bespoke luxury packaging.',
    image: '/assets/suki-styled-1a.webp',
    price: 8499,
    compareAt: 13999,
    savings: 5500,
    badge: 'Luxury Beauty Gift',
    freeGiftName: 'Magnetic Concentrator + Diffuser + PureGlass™ Cleaner Kit',
    freeGiftWorth: 1899,
    inclusions: [
      'SUKI Care-Dryer™ with CareDry™ Adaptive Heat',
      'Magnetic Precision Concentrator & Curl Diffuser Nozzles',
      'Midnight Matte Gift Box with Silver Foiled Seal',
      'FREE PureGlass™ Pro Appliance Care Kit (Worth ₹649)',
      'Silky Heat-Resistant Travel Pouch',
      '2-Year Official Replacement Guarantee',
    ],
  },
]

export function GiftingPage() {
  const { addItem, openCart } = useCart()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryData, setInquiryData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '25-50 units',
    notes: '',
  })

  const handleAddHamper = (productId: string) => {
    addItem(productId)
    openCart()
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const scrollToHampers = () => {
    const el = document.getElementById('curated-hampers')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.giftingWrapper}>
      {/* 1. HERO SECTION (Exact Match to User Attached Mockup media_1791715729140.jpg) */}
      <section className={styles.heroSection} aria-label="EDT Gifting Hero">
        <div className={styles.heroContainer}>
          {/* Left Hero Column */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>GIFTING</span>
            <h1 className={styles.heroTitle}>
              Thoughtful Gifts<br />for Every Moment
            </h1>
            <p className={styles.heroSubtitle}>
              From festive celebrations to special milestones, EDT makes gifting effortless with premium products and beautiful packaging.
            </p>

            {/* 4 Iconic Category Badges from Mockup */}
            <div className={styles.categoryBadgeGrid}>
              <div className={styles.categoryBadgeItem}>
                <div className={styles.categoryBadgeIcon}>
                  <Gift size={22} />
                </div>
                <span className={styles.categoryBadgeLabel}>Corporate Gifting</span>
              </div>

              <div className={styles.categoryBadgeItem}>
                <div className={styles.categoryBadgeIcon}>
                  <PartyPopper size={22} />
                </div>
                <span className={styles.categoryBadgeLabel}>Festive Gifting</span>
              </div>

              <div className={styles.categoryBadgeItem}>
                <div className={styles.categoryBadgeIcon}>
                  <Heart size={22} />
                </div>
                <span className={styles.categoryBadgeLabel}>Personalised Gifts</span>
              </div>

              <div className={styles.categoryBadgeItem}>
                <div className={styles.categoryBadgeIcon}>
                  <Sparkles size={22} />
                </div>
                <span className={styles.categoryBadgeLabel}>Exclusive Bundles</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className={styles.heroActions}>
              <button
                type="button"
                className={styles.exploreCtaBtn}
                onClick={scrollToHampers}
              >
                Explore Gifting <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Hero Column: Photo from Mockup */}
          <div className={styles.heroImageWrap}>
            <img
              src="/assets/gifting-hero.webp"
              alt="EDT Luxury Gifting Hamper with black gift box, satin ribbon, greeting card, candle and air fryer"
              className={styles.heroImage}
            />
            <div className={styles.heroImageBadge}>
              <Box size={16} />
              <span>Signature EDT Keepsake Unboxing Included</span>
            </div>
          </div>
        </div>

        {/* Decorative Golden Curve Wave */}
        <svg
          className={styles.heroCurveLine}
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C320,65 520,10 820,35 C1120,60 1320,20 1440,30"
            stroke="#e29b53"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </section>

      {/* 2. FREE ACCESSORY / GIFT PROMOTION CALLOUT STRIP */}
      <section className={styles.freeGiftBanner} aria-label="Complimentary Accessories Promotion">
        <div className={styles.freeGiftInner}>
          <div className={styles.freeGiftLeft}>
            <div className={styles.freeGiftIcon}>
              <Gift size={20} />
            </div>
            <div className={styles.freeGiftText}>
              <h3>
                Free Premium Accessories with Every Gift Purchase!
                <span className={styles.freeGiftTag}>Complimentary</span>
              </h3>
              <p>
                Order any EDT appliance or hamper today and receive matching <span className={styles.freeGiftHighlight}>Butter Paper Liners, Descaling Care, or Pro Cleaning Kits (Worth up to ₹1,148)</span> automatically at ₹0.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-sm"
            style={{ background: '#dae135', color: '#000', fontWeight: 800 }}
            onClick={scrollToHampers}
          >
            Claim Free Gifts →
          </button>
        </div>
      </section>

      {/* 3. CURATED GIFT HAMPERS SECTION */}
      <section id="curated-hampers" className={styles.packagesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>READY-TO-SHIP SETS</span>
          <h2 className={styles.sectionTitle}>Curated Luxury Gift Hampers</h2>
          <p className={styles.sectionLead}>
            Packaged in our signature high-density keepsake rigid box with hand-tied satin ribbons, botanical greetings, and complimentary accessories.
          </p>
        </div>

        <div className={styles.hampersGrid}>
          {GIFT_HAMPERS.map((hamper) => (
            <article key={hamper.id} className={styles.hamperCard}>
              <span className={styles.hamperCardBadge}>{hamper.badge}</span>
              <div className={styles.hamperImageWrap}>
                <img
                  src={hamper.image}
                  alt={hamper.title}
                  className={styles.hamperImage}
                />
              </div>

              <div className={styles.body || styles.hamperBody}>
                <h3 className={styles.hamperTitle}>{hamper.title}</h3>
                <p className={styles.hamperDesc}>{hamper.subtitle}</p>

                {/* Free Accessory Callout */}
                <div className={styles.hamperFreeGiftPill}>
                  <Gift size={22} color="#d96924" />
                  <div>
                    <strong>FREE GIFT INCLUDED:</strong>
                    <span>{hamper.freeGiftName} (Worth {formatINR(hamper.freeGiftWorth)})</span>
                  </div>
                </div>

                <ul className={styles.hamperInclusions}>
                  {hamper.inclusions.map((inc, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} color="#16a34a" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.hamperPriceRow}>
                  <span className={styles.hamperPrice}>{formatINR(hamper.price)}</span>
                  <span className={styles.hamperCompare}>{formatINR(hamper.compareAt)}</span>
                  <span className={styles.hamperSavings}>Save {formatINR(hamper.savings)}</span>
                </div>

                <button
                  type="button"
                  className={styles.hamperOrderBtn}
                  onClick={() => handleAddHamper(hamper.productId)}
                >
                  <ShoppingBag size={18} /> Add Gift Hamper to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CORPORATE & BULK GIFTING INQUIRY BUILDER */}
      <section className={styles.corporateSection}>
        <div className={styles.corporateContainer}>
          <div className={styles.corporateInfo}>
            <span className={styles.sectionEyebrow}>BESPOKE ORDERS</span>
            <h2>Corporate & Milestone Gifting</h2>
            <p>
              Elevate your festive Diwali gifts, corporate offsites, client gratitude hampers, and wedding registries with bespoke EDT appliance suites.
            </p>

            <div className={styles.corporatePerks}>
              <div className={styles.perkItem}>
                <CheckCircle2 size={20} className={styles.perkCheck} />
                <div className={styles.perkText}>
                  <strong>Custom Laser Engraving & Branded Sleeves</strong>
                  <span>Add your company logo, recipient names, or bespoke greetings.</span>
                </div>
              </div>

              <div className={styles.perkItem}>
                <CheckCircle2 size={20} className={styles.perkCheck} />
                <div className={styles.perkText}>
                  <strong>Doorstep Pan-India Multi-Address Dispatch</strong>
                  <span>We ship directly to each team member or client’s residence.</span>
                </div>
              </div>

              <div className={styles.perkItem}>
                <CheckCircle2 size={20} className={styles.perkCheck} />
                <div className={styles.perkText}>
                  <strong>Volume Tier Discounts + Free Accessory Bundling</strong>
                  <span>Special enterprise pricing with complimentary accessories included.</span>
                </div>
              </div>
            </div>

            <div className={styles.corporateDirectContacts}>
              <a
                href="https://wa.me/919772765400?text=Hi%20EDT%20team,%20I%20am%20interested%20in%20Corporate%20and%20Festive%20Gifting%20bundles."
                target="_blank"
                rel="noreferrer"
                className={styles.waContactBtn}
              >
                <MessageCircle size={18} /> WhatsApp Concierge (+91 97727 65400)
              </a>
              <a
                href="mailto:gifting@edtlife.com?subject=Corporate%20Gifting%20Inquiry"
                className={styles.emailContactBtn}
              >
                <Mail size={18} /> gifting@edtlife.com
              </a>
            </div>
          </div>

          {/* Instant Inquiry Form */}
          <div className={styles.inquiryCard}>
            <h3>Request Corporate Catalog & Quote</h3>
            <p>Our dedicated gifting concierge responds within 2 business hours.</p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1c1917' }}>
                  Inquiry Received!
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#57534e', marginBottom: '1.5rem' }}>
                  Thank you! Our Corporate Gifting Specialist will reach out with volume pricing and custom catalog.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aayushi Pandey"
                    className={styles.formInput}
                    value={inquiryData.name}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, name: e.target.value })
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Tech Studio"
                    className={styles.formInput}
                    value={inquiryData.company}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, company: e.target.value })
                    }
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className={styles.formInput}
                      value={inquiryData.email}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={inquiryData.phone}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Estimated Quantity</label>
                  <select
                    className={styles.formSelect}
                    value={inquiryData.quantity}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, quantity: e.target.value })
                    }
                  >
                    <option value="10-25 units">10 – 25 Units</option>
                    <option value="26-50 units">26 – 50 Units (15% Corporate Tier)</option>
                    <option value="51-100 units">51 – 100 Units (20% Corporate Tier)</option>
                    <option value="100+ units">100+ Units (Enterprise Custom Box)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Special Notes or Timeline</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Diwali delivery across 45 addresses in Mumbai & Bangalore"
                    className={styles.formTextarea}
                    value={inquiryData.notes}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, notes: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className={styles.submitInquiryBtn}>
                  Get Corporate Quote & Catalog →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. GIFTING VALUES STRIP */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Box size={24} />
            </div>
            <h4>Plastic-Free Luxury Packaging</h4>
            <p>100% recyclable, elegant rigid gift boxes that turn unboxing into an unforgettable sensory event.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Truck size={24} />
            </div>
            <h4>Pan-India Express Delivery</h4>
            <p>Seamless door-to-door delivery with real-time tracking directly sent to you and your recipients.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <ShieldCheck size={24} />
            </div>
            <h4>Full Warranty & Recipient Care</h4>
            <p>Every gift carries our comprehensive 1 to 2-year warranty with direct home pickup service.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Gift size={24} />
            </div>
            <h4>Complimentary Free Accessories</h4>
            <p>Butter paper liners, bio-enzyme care sprays, and descaling packs bundled at ₹0 value.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
