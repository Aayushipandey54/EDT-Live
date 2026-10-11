import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatINR, getProductById } from '../data/products'
import styles from './Checkout.module.css'

type Step = 'cart' | 'details' | 'review' | 'success'

export function CheckoutPage() {
  const { items, subtotal, setQuantity, removeItem, clearCart } = useCart()
  const [step, setStep] = useState<Step>('cart')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  })

  function onDetailsSubmit(e: FormEvent) {
    e.preventDefault()
    setStep('review')
  }

  function placeOrder() {
    clearCart()
    setStep('success')
  }

  if (step === 'success') {
    return (
      <div className={`section container ${styles.success}`}>
        <span className="eyebrow">Demo complete</span>
        <h1 className="section-title">Order placed (demo).</h1>
        <p className="section-lead">
          This is a frontend-only checkout. No payment was processed.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Continue shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="section container">
        <h1 className="section-title">Your cart is empty.</h1>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <span className="eyebrow">Checkout</span>
          <h1 className="section-title">Almost extraordinary.</h1>

          <ol className={styles.steps}>
            {(['cart', 'details', 'review'] as Step[]).map((s) => (
              <li key={s} className={step === s ? styles.stepActive : styles.step}>
                {s}
              </li>
            ))}
          </ol>

          {step === 'cart' && (
            <div className={styles.panel}>
              <ul className={styles.list}>
                {items.map((item) => {
                  const product = getProductById(item.productId)
                  if (!product) return null
                  return (
                    <li key={item.productId}>
                      <img src={product.images[0]} alt="" />
                      <div>
                        <strong>{product.name}</strong>
                        <span>{formatINR(product.price)}</span>
                        <div className={styles.qty}>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.productId, item.quantity - 1)}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.productId, item.quantity + 1)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className={styles.remove}
                            onClick={() => removeItem(item.productId)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStep('details')}
              >
                Continue to details
              </button>
            </div>
          )}

          {step === 'details' && (
            <form className={styles.panel} onSubmit={onDetailsSubmit}>
              <div className={styles.fields}>
                {(
                  [
                    ['name', 'Full name'],
                    ['email', 'Email'],
                    ['phone', 'Phone'],
                    ['address', 'Address'],
                    ['city', 'City'],
                    ['pincode', 'PIN code'],
                  ] as const
                ).map(([key, label]) => (
                  <label key={key}>
                    {label}
                    <input
                      required
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </label>
                ))}
              </div>
              <div className={styles.rowBtns}>
                <button type="button" className="btn btn-ghost" onClick={() => setStep('cart')}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Review order
                </button>
              </div>
            </form>
          )}

          {step === 'review' && (
            <div className={styles.panel}>
              <h2>Shipping to</h2>
              <p className={styles.summary}>
                {form.name}
                <br />
                {form.address}, {form.city} {form.pincode}
                <br />
                {form.email} · {form.phone}
              </p>
              <p className={styles.note}>Demo mode — no card details required.</p>
              <div className={styles.rowBtns}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setStep('details')}
                >
                  Back
                </button>
                <button type="button" className="btn btn-primary" onClick={placeOrder}>
                  Place demo order
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className={styles.summaryCard}>
          <h2>Order summary</h2>
          <div className={styles.line}>
            <span>Subtotal</span>
            <strong>{formatINR(subtotal)}</strong>
          </div>
          <div className={styles.line}>
            <span>Shipping</span>
            <strong>Free</strong>
          </div>
          <div className={`${styles.line} ${styles.total}`}>
            <span>Total</span>
            <strong>{formatINR(subtotal)}</strong>
          </div>
          <ul className={styles.assurances}>
            <li>1 year warranty</li>
            <li>7 day replacement</li>
            <li>Secure demo checkout</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
