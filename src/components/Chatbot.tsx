import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Minus,
  RefreshCw,
  Send,
  ShoppingBag,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import styles from './Chatbot.module.css'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: string
  suggestedProduct?: {
    id: string
    name: string
    price: number
    image: string
    slug: string
  }
  quickReplies?: string[]
}

const INITIAL_SUGGESTIONS = [
  'Why PureGlass over Teflon?',
  'How does SUKI protect hair?',
  'Suggest a quick recipe',
  'How to clean PureGlass',
  'Warranty & delivery details',
]

/**
 * Attractive Futuristic ED Logo
 * Sleek metallic ring, fiery gradient core, modern geometric "ED" lettering, and neon sparkle.
 */
export function EdLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.edSvg}
    >
      <defs>
        <linearGradient id="edGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7a00" />
          <stop offset="60%" stopColor="#ff3d00" />
          <stop offset="100%" stopColor="#dae135" />
        </linearGradient>
        <radialGradient id="edCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#111418" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Orbit Ring */}
      <circle
        cx="18"
        cy="18"
        r="16.5"
        stroke="url(#edGradMain)"
        strokeWidth="1.75"
        strokeDasharray="4 2"
        opacity="0.9"
      />

      {/* Inner Core Disc */}
      <circle cx="18" cy="18" r="14" fill="#0d1014" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
      <circle cx="18" cy="18" r="13" fill="url(#edCoreGlow)" />

      {/* Letter 'E' */}
      <path
        d="M10.5 12 H16.5 M10.5 18 H15 M10.5 24 H16.5 M10.5 12 V24"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'D' */}
      <path
        d="M19 12 H21.8 C24.6 12 26.5 14.5 26.5 18 C26.5 21.5 24.6 24 21.8 24 H19 V12 Z"
        stroke="url(#edGradMain)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* AI Cyber Sparkle */}
      <circle cx="28.5" cy="8.5" r="2.2" fill="#dae135" />
    </svg>
  )
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const { addItem, openCart } = useCart()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Namaste! 👋 I am **ED**, your EDT smart assistant. I am trained on our 100% PureGlass™ kitchen technology and SUKI CareDry™ hair science.\n\nHow can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: INITIAL_SUGGESTIONS,
    },
  ])

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const generateBotReply = (query: string): Message => {
    const q = query.toLowerCase().trim()
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // 1. PUREGLASS / TEFLON / SAFETY
    if (q.includes('teflon') || q.includes('pureglass') || q.includes('safe') || q.includes('toxic') || q.includes('plastic') || q.includes('pfas')) {
      const luma = products.find((p) => p.slug === 'luma-origin-orange') || products[0]
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Traditional air fryers use metal baskets coated in Teflon (PTFE/PFAS) that degrade over 200°C and can leach microplastics into food.\n\n✨ **EDT LUMA uses 100% PureGlass™** — medical-grade, 5mm thick heavy borosilicate glass.\n• Zero PFAS, zero microplastics\n• 360° transparent view (no guessing or opening to check)\n• Naturally non-porous and dishwasher safe.',
        timestamp: now,
        suggestedProduct: {
          id: luma.id,
          name: luma.name,
          price: luma.price,
          image: luma.images[0],
          slug: luma.slug,
        },
        quickReplies: ['How to clean PureGlass', 'LUMA recipe presets', 'Butter paper liners'],
      }
    }

    // 2. SUKI CARE-DRYER / BEAUTY / HAIR CARE
    if (q.includes('suki') || q.includes('hair') || q.includes('dryer') || q.includes('curl') || q.includes('frizz') || q.includes('caredry') || q.includes('beauty')) {
      const suki = products.find((p) => p.slug === 'suki') || products[2]
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '✨ **SUKI Care-Dryer™ is India’s 1st Care-Dryer**:\n\n• **CareDry™ Algorithm**: Monitors moisture 100x/sec and automatically tapers temperature as hair dries, retaining 100% keratin strength.\n• **High-Speed Motor**: 110,000 RPM hyper-sonic airflow for ultra-fast drying without cuticle scorch.\n• **Plasma Ion Shield**: Emits 200M negative ions/cm³ to seal cuticles and neutralize humidity frizz.\n• **Ultra-Lightweight**: Only 410g with 3 magnetic styling attachments included.',
        timestamp: now,
        suggestedProduct: {
          id: suki.id,
          name: 'SUKI Care-Dryer™',
          price: suki.price,
          image: suki.images[0],
          slug: suki.slug,
        },
        quickReplies: ['Hair types SUKI works with', 'Attachments included', 'How much does SUKI weigh?'],
      }
    }

    // 3. RECIPES & COOKING
    if (q.includes('recipe') || q.includes('cook') || q.includes('paneer') || q.includes('fries') || q.includes('samosa') || q.includes('chicken') || q.includes('snack')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Here are 3 top recipes tuned specifically for LUMA 360° PureGlass™:\n\n1. **Tandoori Paneer Tikka**: 200°C for 10-12 mins. Perfectly charred edges with a juicy center.\n2. **Crispy Sweet Potato Fries**: 180°C for 14 mins with 1 tsp cold-pressed mustard oil.\n3. **Reheating Samosas / Puffs**: 165°C for 6 mins. Restores bakery-fresh crunch with zero extra oil.\n\nTip: You can watch the browning process live without opening the bowl!',
        timestamp: now,
        quickReplies: ['More recipes', 'What presets does LUMA have?', 'Pair with Recipe Ramsay'],
      }
    }

    // 4. CLEANING & ACCESSORIES
    if (q.includes('clean') || q.includes('wash') || q.includes('dishwasher') || q.includes('butter paper') || q.includes('kit') || q.includes('liner') || q.includes('accessory')) {
      const paper = products.find((p) => p.slug === 'butter-paper-liners')
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '🧼 **Cleaning LUMA PureGlass is effortless**:\n• Borosilicate glass is completely non-porous, so oils do not stick or absorb odours.\n• Wash directly under warm soapy water or place in the dishwasher!\n\n💡 **Recommended Accessories**:\n• **PureGlass™ Butter Paper Liners (Pack of 100)** — ₹499: Perforated airflow holes for zero-mess baking.\n• **PureGlass™ Pro Appliance Cleaner Kit** — ₹649: Plant-based streak-free degreaser spray.',
        timestamp: now,
        suggestedProduct: paper ? {
          id: paper.id,
          name: paper.name,
          price: paper.price,
          image: paper.images[0],
          slug: paper.slug,
        } : undefined,
        quickReplies: ['View accessories', 'Why PureGlass over Teflon?', 'Warranty details'],
      }
    }

    // 5. FLOW SMART KETTLE
    if (q.includes('flow') || q.includes('kettle') || q.includes('chai') || q.includes('tea') || q.includes('boil') || q.includes('coffee')) {
      const flow = products.find((p) => p.slug === 'flow') || products[1]
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '☕ **FLOW Smart Kettle (1.7L)** is crafted for tea and chai enthusiasts:\n\n• Dedicated **Chai Profile**: Rolling boil followed by an automatic low simmer to extract full spice flavour.\n• **Brew Temperatures**: 80°C for delicate Green Tea, 92°C for pour-over coffee, 100°C for herbal infusions.\n• **60-Minute Keep Warm**: Maintains exact temperature so your next cup is always ready.\n• UK Strix™ controller for precision & safety.',
        timestamp: now,
        suggestedProduct: {
          id: flow.id,
          name: flow.name,
          price: flow.price,
          image: flow.images[0],
          slug: flow.slug,
        },
        quickReplies: ['Buy FLOW Kettle', 'Chai rituals', 'Suggest a recipe'],
      }
    }

    // 6. WARRANTY, SHIPPING, RETURNS, EMI
    if (q.includes('warranty') || q.includes('return') || q.includes('delivery') || q.includes('ship') || q.includes('emi') || q.includes('replacement')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '🛡️ **EDT Care & Policies**:\n\n• **Standard Warranty**: 1-Year comprehensive warranty on LUMA & FLOW, 2-Year warranty on SUKI Care-Dryer.\n• **7-Day Hassle-Free Replacement**: Guaranteed doorstep pickup for any transit issue.\n• **Express Pan-India Shipping**: Delivered within 2-4 business days in protective custom anime packaging.\n• **Payment Options**: Cash on Delivery, UPI, Cards, and No-Cost EMI up to 12 months.',
        timestamp: now,
        quickReplies: ['Chat with human on WhatsApp', 'Shop collection', 'Why PureGlass over Teflon?'],
      }
    }

    // 7. DEFAULT HELPFUL FALLBACK
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `I'm ED, here to guide you with:\n\n• **LUMA PureGlass™ Air Fryer**: 360° non-toxic glass cooking\n• **SUKI Care-Dryer™**: 100% hair strength retention with CareDry™ technology\n• **FLOW Smart Kettle**: Dedicated chai & temperature presets\n• **Recipes, Cleaning & Warranties**`,
      timestamp: now,
      quickReplies: INITIAL_SUGGESTIONS,
    }
  }

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input
    if (!query.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate smart AI typing delay
    setTimeout(() => {
      const botResponse = generateBotReply(query)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: 'Chat history cleared. How can I assist you with EDT products or recipes?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: INITIAL_SUGGESTIONS,
      },
    ])
  }

  return (
    <>
      {/* Sleek Floating Trigger Button (Compact, doesn't overshade other components) */}
      <div className={styles.floatingTriggerWrap}>
        <button
          type="button"
          className={`${styles.triggerBtn} ${isOpen ? styles.triggerActive : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close ED Assistant' : 'Open ED Assistant'}
          title="Chat with ED"
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <>
              <div className={styles.logoWrap}>
                <EdLogo size={24} />
                <span className={styles.onlinePulse} />
              </div>
              <span className={styles.triggerLabel}>ED</span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerInfo}>
                <div className={styles.avatarWrap}>
                  <EdLogo size={26} />
                  <span className={styles.statusDot} />
                </div>
                <div>
                  <div className={styles.headerTitleRow}>
                    <h3 className={styles.headerTitle}>ED</h3>
                    <span className={styles.aiBadge}>AI ASSISTANT</span>
                  </div>
                  <p className={styles.headerStatus}>Recipe Ramsay & CareDry™ Intelligence</p>
                </div>
              </div>

              <div className={styles.headerActions}>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={clearChat}
                  title="Clear Conversation"
                  aria-label="Clear Conversation"
                >
                  <RefreshCw size={13} />
                </button>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  aria-label="Minimize"
                >
                  <Minus size={15} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className={styles.messagesContainer}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${
                    msg.sender === 'user' ? styles.userRow : styles.botRow
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className={styles.botAvatar}>
                      <EdLogo size={18} />
                    </div>
                  )}

                  <div className={styles.bubbleWrap}>
                    <div
                      className={`${styles.bubble} ${
                        msg.sender === 'user' ? styles.userBubble : styles.botBubble
                      }`}
                    >
                      <div className={styles.messageText}>
                        {msg.text.split('\n').map((line, lIdx) => (
                          <span key={lIdx}>
                            {line.includes('**') ? (
                              <strong
                                dangerouslySetInnerHTML={{
                                  __html: line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
                                }}
                              />
                            ) : (
                              line
                            )}
                            <br />
                          </span>
                        ))}
                      </div>

                      <span className={styles.timestamp}>{msg.timestamp}</span>
                    </div>

                    {/* Product Recommendation Card inside Chat */}
                    {msg.suggestedProduct && (
                      <div className={styles.productCard}>
                        <img
                          src={msg.suggestedProduct.image}
                          alt={msg.suggestedProduct.name}
                          className={styles.productThumb}
                        />
                        <div className={styles.productInfo}>
                          <h4 className={styles.productName}>{msg.suggestedProduct.name}</h4>
                          <span className={styles.productPrice}>
                            ₹{msg.suggestedProduct.price.toLocaleString('en-IN')}
                          </span>
                          <div className={styles.productActions}>
                            <Link
                              to={`/product/${msg.suggestedProduct.slug}`}
                              className={styles.viewLink}
                              onClick={() => setIsOpen(false)}
                            >
                              Details
                            </Link>
                            <button
                              type="button"
                              className={styles.quickAddBtn}
                              onClick={() => {
                                addItem(msg.suggestedProduct!.id)
                                openCart()
                              }}
                            >
                              <ShoppingBag size={12} /> Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quick Reply Chips */}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className={styles.chipsWrap}>
                        {msg.quickReplies.map((chip, cIdx) => (
                          <button
                            key={cIdx}
                            type="button"
                            className={styles.chipBtn}
                            onClick={() => handleSend(chip)}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className={`${styles.messageRow} ${styles.botRow}`}>
                  <div className={styles.botAvatar}>
                    <EdLogo size={18} />
                  </div>
                  <div className={`${styles.bubble} ${styles.botBubble}`}>
                    <div className={styles.typingDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className={styles.inputArea}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Ask ED about LUMA, SUKI, recipes..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.textInput}
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className={styles.sendBtn}
                  aria-label="Send query to ED"
                >
                  <Send size={15} />
                </button>
              </div>

              <div className={styles.footerNote}>
                <span>Powered by ED · EDT Artificial Intelligence OS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
