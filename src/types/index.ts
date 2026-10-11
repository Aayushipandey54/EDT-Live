export type ProductCategory =
  | 'air-fryer'
  | 'kettle'
  | 'beauty'
  | 'combos'
  | 'accessories'
  | 'care'

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductFeature {
  title: string
  description: string
  icon?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: ProductCategory
  department?: 'home-kitchen' | 'beauty'
  price: number
  compareAt?: number
  rating: number
  reviewCount: number
  badge?: string
  bestSeller?: boolean
  isNew?: boolean
  emiFrom?: number
  delivery: string
  colors: string[]
  images: string[]
  video?: string
  benefits: string[]
  features: ProductFeature[]
  specs: ProductSpec[]
  inTheBox?: string[]
  compatibleWith?: string[]
  isOfficial?: boolean // Official EDT vs proposed accessory
  faqs: { q: string; a: string }[]
  description: string
}

export interface Combo {
  id: string
  slug: string
  name: string
  description: string
  productIds: string[]
  price: number
  compareAt: number
  image: string
  savings?: number
}

export interface RecipeIngredient {
  name: string
  amount: number
  unit: string
  notes?: string
  scalable?: boolean // true if multiplies with servings
}

export interface RecipeStep {
  step: number
  title?: string
  instruction: string
  temp?: string
  time?: string
  preset?: string
}

export interface Recipe {
  id: string
  slug: string
  title: string
  time: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  category: 'Breakfast' | 'Mains' | 'Snacks' | 'Drinks' | 'Desserts'
  isVeg: boolean
  appliance: 'LUMA PureGlass Air Fryer' | 'FLOW Smart Kettle' | 'LUMA & FLOW'
  applianceSlug: string
  summary: string
  image: string
  videoUrl?: string
  baseServings: 2
  ingredients: RecipeIngredient[]
  steps: RecipeStep[]
  tips?: string[]
}

export interface Story {
  id: string
  title: string
  author: string
  location: string
  productUsed: string
  category: 'Kitchen Life' | 'Real Cooks' | 'Design & Home'
  quote: string
  body: string
  image: string
  videoUrl?: string
  date: string
}

export interface Store {
  id: string
  name: string
  city: string
  address: string
  phone: string
  hours: string
}

export interface NewsItem {
  id: string
  slug: string
  title: string
  source: string
  date: string
  excerpt: string
  href?: string
}

export interface Review {
  id: string
  productId: string
  author: string
  rating: number
  title: string
  body: string
  date?: string
  verified: boolean
}

export interface CartItem {
  productId: string
  quantity: number
  selectedColor?: string
  isFreeGift?: boolean
}
