import { useState, type FormEvent } from 'react'
import styles from './Secondary.module.css'

const faqs = [
  {
    q: 'What are support hours?',
    a: 'Monday to Saturday, 10:00 AM to 7:00 PM IST.',
  },
  {
    q: 'How do I claim warranty?',
    a: 'Email support@edtworld.com with your order ID and issue photos. We’ll guide replacement or repair under the 1-year warranty.',
  },
  {
    q: 'What is the replacement policy?',
    a: 'Eligible products can be replaced within 7 days if unused and in original packaging — see policy details with your order confirmation.',
  },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Support</span>
        <h1 className="section-title">We’re here for the everyday.</h1>
        <p className="section-lead">
          Reach support, claim warranty, or ask a buying question — clear paths, no maze.
        </p>

        <div className={styles.split}>
          <div className={styles.panel}>
            <h2>Contact channels</h2>
            <ul className={styles.contactList}>
              <li>
                Email:{' '}
                <a href="mailto:support@edtworld.com">support@edtworld.com</a>
              </li>
              <li>
                Phone: <a href="tel:+919429694917">+91 94296 94917</a>
              </li>
              <li>Hours: Mon–Sat, 10:00 AM – 7:00 PM</li>
              <li>
                WhatsApp chat:{' '}
                <a href="https://wa.me/919429694917" target="_blank" rel="noreferrer">
                  Open WhatsApp
                </a>
              </li>
            </ul>

            <h2 className={styles.faqTitle}>FAQs</h2>
            <div className={styles.faqs}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <form className={styles.panel} onSubmit={onSubmit}>
            <h2>Send a message</h2>
            {sent ? (
              <p className={styles.success}>
                Thanks — this demo form doesn’t send email, but your flow is ready.
              </p>
            ) : (
              <>
                <label>
                  Name
                  <input required name="name" />
                </label>
                <label>
                  Email
                  <input required type="email" name="email" />
                </label>
                <label>
                  Message
                  <textarea required name="message" rows={5} />
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
