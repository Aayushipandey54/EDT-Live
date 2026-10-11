import { Link } from 'react-router-dom'
import { Gift, Minus, Plus, Trash2, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatINR, getProductById } from '../data/products'
import styles from './CartDrawer.module.css'

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    setQuantity,
    removeItem,
    subtotal,
    itemCount,
  } = useCart()

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <header className={styles.header}>
          <div>
            <h2>Cart</h2>
            <p>{itemCount} item{itemCount === 1 ? '' : 's'}</p>
          </div>
          <button type="button" onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </header>

        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
              <Link to="/shop" className="btn btn-primary" onClick={closeCart}>
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              {items.some((i) => i.isFreeGift) && (
                <div className={styles.cartPromoBanner}>
                  <Gift size={16} />
                  <span>Free accessory unlocked & included with your order!</span>
                </div>
              )}
              <ul className={styles.list}>
                {items.map((item) => {
                  const product = getProductById(item.productId)
                  if (!product) return null
                  return (
                    <li
                      key={`${item.productId}-${item.isFreeGift ? 'free' : 'paid'}`}
                      className={styles.row}
                    >
                      <img src={product.images[0]} alt="" />
                      <div className={styles.meta}>
                        {item.isFreeGift && (
                          <span className={styles.freeGiftTag}>
                            <Gift size={12} /> Complimentary Gift
                          </span>
                        )}
                        <Link to={`/product/${product.slug}`} onClick={closeCart}>
                          {product.name}
                        </Link>
                        {item.isFreeGift ? (
                          <span className={styles.freeGiftPrice}>
                            ₹0 FREE <del>{formatINR(product.price)}</del>
                          </span>
                        ) : (
                          <span>{formatINR(product.price)}</span>
                        )}
                        <div className={styles.qty}>
                          {!item.isFreeGift && (
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                setQuantity(item.productId, item.quantity - 1)
                              }
                            >
                              <Minus size={14} />
                            </button>
                          )}
                          <span>
                            {item.quantity} {item.isFreeGift ? 'Unit (Free)' : ''}
                          </span>
                          {!item.isFreeGift && (
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                setQuantity(item.productId, item.quantity + 1)
                              }
                            >
                              <Plus size={14} />
                            </button>
                          )}
                          <button
                            type="button"
                            className={styles.remove}
                            aria-label="Remove item"
                            onClick={() => removeItem(item.productId)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>

        {items.length > 0 && (
          <footer className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <strong>{formatINR(subtotal)}</strong>
            </div>
            <p className={styles.note}>Demo checkout — no real payment.</p>
            <Link
              to="/checkout"
              className={`btn btn-primary ${styles.checkout}`}
              onClick={closeCart}
            >
              Checkout
            </Link>
          </footer>
        )}
      </aside>
    </>
  )
}
