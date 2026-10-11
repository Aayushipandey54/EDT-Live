import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { ShopPage } from './pages/Shop'
import { ProductPage } from './pages/Product'
import { CheckoutPage } from './pages/Checkout'
import { CombosPage } from './pages/Combos'
import { RecipesPage } from './pages/Recipes'
import { RecipeDetailPage } from './pages/RecipeDetail'
import { BeautyPage } from './pages/Beauty'
import { StoriesPage } from './pages/Stories'
import { GiftingPage } from './pages/Gifting'
import { ContactPage } from './pages/Contact'
import { StoreLocatorPage } from './pages/StoreLocator'
import { NewsPage } from './pages/News'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'beauty', element: <BeautyPage /> },
      { path: 'stories', element: <StoriesPage /> },
      { path: 'product/:slug', element: <ProductPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'combos', element: <CombosPage /> },
      { path: 'recipes', element: <RecipesPage /> },
      { path: 'recipes/:slug', element: <RecipeDetailPage /> },
      { path: 'gifting', element: <GiftingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'store-locator', element: <StoreLocatorPage /> },
      { path: 'news', element: <NewsPage /> },
    ],
  },
])

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
