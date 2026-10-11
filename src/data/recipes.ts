import type { Recipe } from '../types'

export const recipes: Recipe[] = [
  {
    id: 'tandoori-broccoli',
    slug: 'tandoori-broccoli',
    title: 'Charred Tandoori Broccoli Bites',
    time: '22 min',
    difficulty: 'Easy',
    category: 'Snacks',
    isVeg: true,
    appliance: 'LUMA PureGlass Air Fryer',
    applianceSlug: 'luma-origin-orange',
    summary:
      'Smoky charred tips, succulent tender stalks. LUMA’s PureGrill mode delivers tandoor-level flavour without charcoal or heavy oil.',
    image:
      'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=1200&q=80',
    videoUrl:
      'https://edtworld.com/cdn/shop/videos/c/vp/848c3876a8a246c09a45ed29d33f8bf5/848c3876a8a246c09a45ed29d33f8bf5.HD-1080p-2.5Mbps-79441716.mp4?v=0',
    baseServings: 2,
    ingredients: [
      { name: 'Fresh broccoli florets', amount: 250, unit: 'g', scalable: true },
      { name: 'Thick hung curd / greek yogurt', amount: 3, unit: 'tbsp', scalable: true },
      { name: 'Roasted besan (gram flour)', amount: 1, unit: 'tbsp', scalable: true },
      { name: 'Ginger-garlic paste', amount: 1, unit: 'tsp', scalable: true },
      { name: 'Degi mirch / Kashmiri chilli powder', amount: 1, unit: 'tsp', scalable: true },
      { name: 'Garam masala & roasted cumin', amount: 0.5, unit: 'tsp', scalable: true },
      { name: 'Kasuri methi (crushed)', amount: 0.5, unit: 'tsp', scalable: true },
      { name: 'Mustard oil', amount: 1, unit: 'tsp', scalable: true },
      { name: 'Chaat masala & lemon juice', amount: 1, unit: 'pinch', scalable: false, notes: 'To finish' },
    ],
    steps: [
      {
        step: 1,
        title: 'Marination',
        instruction:
          'In a bowl, whisk hung curd, roasted besan, mustard oil, ginger-garlic paste, and spices until smooth. Gently fold in dry broccoli florets ensuring even coating. Rest for 10 minutes.',
      },
      {
        step: 2,
        title: 'Arrange in PureGlass™',
        instruction:
          'Place the PureGrill Rack inside the LUMA PureGlass™ bowl. Arrange marinated broccoli florets in a single layer with 1cm breathing room between pieces.',
        preset: 'PureGrill Mode',
      },
      {
        step: 3,
        title: 'Air Grill',
        instruction:
          'Set LUMA to Grill Mode at 180°C for 14 minutes. Watch through the 360° transparent glass as the edges develop a deep, aromatic char.',
        temp: '180°C',
        time: '14 min',
        preset: 'Grill',
      },
      {
        step: 4,
        title: 'Garnish & Serve',
        instruction:
          'Transfer to a platter, dust generously with chaat masala, squeeze fresh lemon juice, and serve hot with mint chutney.',
      },
    ],
    tips: [
      'Ensure broccoli florets are completely dry before marinating so the curd clings firmly.',
      'Use the PureGrill rack for 360° bottom airflow so you do not need to flip halfway.',
    ],
  },

  {
    id: 'misal-toast',
    slug: 'misal-toast',
    title: 'Crispy Kolhapuri Misal Toast Cubes',
    time: '15 min',
    difficulty: 'Easy',
    category: 'Breakfast',
    isVeg: true,
    appliance: 'LUMA PureGlass Air Fryer',
    applianceSlug: 'luma-origin-orange',
    summary:
      'Buttery, spicy air-fried pav cubes infused with Kolhapuri misal spices and crunchy farsan garnish. Fast Sunday nostalgia.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    videoUrl:
      'https://cdn.shopify.com/videos/c/o/v/9a7177444ccf433db4b03d8228fc9792.mp4',
    baseServings: 2,
    ingredients: [
      { name: 'Fresh ladi pav cubes', amount: 4, unit: 'pcs', scalable: true },
      { name: 'Melted salted butter', amount: 2, unit: 'tbsp', scalable: true },
      { name: 'Misal masala / Goda masala', amount: 1.5, unit: 'tsp', scalable: true },
      { name: 'Red chilli powder', amount: 0.5, unit: 'tsp', scalable: true },
      { name: 'Finely chopped red onion', amount: 2, unit: 'tbsp', scalable: true },
      { name: 'Fresh coriander', amount: 1, unit: 'tbsp', scalable: true },
      { name: 'Spicy Kolhapuri farsan', amount: 3, unit: 'tbsp', scalable: true, notes: 'For garnish' },
    ],
    steps: [
      {
        step: 1,
        title: 'Spice Butter Toss',
        instruction:
          'Whisk misal masala into warm melted butter. Toss bite-sized pav cubes until evenly absorbed.',
      },
      {
        step: 2,
        title: 'Crisping in LUMA',
        instruction:
          'Spread pav cubes evenly in the 4.5L PureGlass™ bowl. Run Bake/Air Fry mode at 165°C for 8 minutes until edges turn deeply golden.',
        temp: '165°C',
        time: '8 min',
        preset: 'Air Fry',
      },
      {
        step: 3,
        title: 'Street-Style Topping',
        instruction:
          'Tip hot croutons into serving bowls, scatter with chopped onions, fresh coriander, spicy farsan, and a lime squeeze.',
      },
    ],
    tips: ['Slightly stale day-old pav yields the crunchiest texture.'],
  },

  {
    id: 'chai-ritual',
    slug: 'chai-ritual',
    title: 'FLOW Authentic Adrak & Elaichi Chai Ritual',
    time: '8 min',
    difficulty: 'Easy',
    category: 'Drinks',
    isVeg: true,
    appliance: 'FLOW Smart Kettle',
    applianceSlug: 'flow',
    summary:
      'Exact 95°C water extraction pulls pure ginger heat and cardamom aroma without scorch or bitterness. Calm morning bliss.',
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80',
    videoUrl:
      'https://edtworld.com/cdn/shop/videos/c/vp/6dac31fc408a4f24a18f6bc7e3326280/6dac31fc408a4f24a18f6bc7e3326280.HD-1080p-2.5Mbps-88228778.mp4?v=0',
    baseServings: 2,
    ingredients: [
      { name: 'Filtered fresh water', amount: 350, unit: 'ml', scalable: true },
      { name: 'Crushed fresh ginger root', amount: 15, unit: 'g', scalable: true },
      { name: 'Green cardamom pods (crushed)', amount: 3, unit: 'pods', scalable: true },
      { name: 'Strong Assam CTC tea leaves', amount: 2.5, unit: 'tsp', scalable: true },
      { name: 'Whole milk', amount: 150, unit: 'ml', scalable: true },
      { name: 'Jaggery / raw cane sugar', amount: 2, unit: 'tsp', scalable: true },
    ],
    steps: [
      {
        step: 1,
        title: 'Precision Water Boil',
        instruction:
          'Fill FLOW with filtered water. Set FLOW Kettle to Chai Preset (100°C boil) to release rapid rolling heat.',
        temp: '100°C',
        time: '3 min',
        preset: 'Chai Preset',
      },
      {
        step: 2,
        title: 'Ginger & Cardamom Steep',
        instruction:
          'Add bruised ginger and crushed cardamom pods directly into the hot water. Allow essential oils to bloom.',
      },
      {
        step: 3,
        title: 'Tea Extraction & Milk Pour',
        instruction:
          'Add Assam CTC tea leaves and simmer for 2 minutes. Pour warm milk, bring to a frothy crest, and engage FLOW 60-min hold to keep a second cup piping hot.',
        preset: 'Hold 60m',
      },
    ],
    tips: [
      'Crush the ginger rather than grating it to prevent cloudy sedimentation.',
      'FLOW’s gooseneck balance gives a clean, high aerating pour into clay kulhads.',
    ],
  },

  {
    id: 'traybake-thali',
    slug: 'traybake-thali',
    title: 'Dual-Zone Weeknight Paneer Traybake Thali',
    time: '28 min',
    difficulty: 'Medium',
    category: 'Mains',
    isVeg: true,
    appliance: 'LUMA PureGlass Air Fryer',
    applianceSlug: 'luma-double-stack',
    summary:
      'Cook an entire wholesome thali simultaneously using Dual Bowls: spiced paneer in the 4.5L bowl and cumin roasted roots in the 2.5L bowl.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    videoUrl:
      'https://cdn.shopify.com/videos/c/o/v/f87d038cb44c4846be34aa8830149291.mp4',
    baseServings: 2,
    ingredients: [
      { name: 'Fresh malai paneer cubes', amount: 200, unit: 'g', scalable: true },
      { name: 'Bell peppers & diced onions', amount: 150, unit: 'g', scalable: true },
      { name: 'Baby potatoes / cauliflower florets', amount: 200, unit: 'g', scalable: true },
      { name: 'Mustard oil marinade', amount: 2, unit: 'tbsp', scalable: true },
      { name: 'Jeera & coriander powder', amount: 1, unit: 'tsp', scalable: true },
      { name: 'Salt & crushed black pepper', amount: 1, unit: 'tsp', scalable: true },
    ],
    steps: [
      {
        step: 1,
        title: 'Dual Bowl Setup',
        instruction:
          'Place spiced baby potatoes and cauliflower florets in the 2.5L bowl. Place marinated paneer cubes and peppers in the 4.5L primary bowl.',
      },
      {
        step: 2,
        title: 'Simultaneous Roasting',
        instruction:
          'Run Roast Mode at 185°C. Veggies roast to caramelized tenderness while paneer cubes develop crispy blistered skins without turning rubbery.',
        temp: '185°C',
        time: '20 min',
        preset: 'Roast Mode',
      },
      {
        step: 3,
        title: 'Thali Plating',
        instruction:
          'Serve directly from the elegant PureGlass™ bowls onto dinner plates with warm phulkas, cucumber raita, and spiced lemon pickle.',
      },
    ],
    tips: [
      'Cut vegetables into uniform 2cm dice so all components finish simultaneously.',
    ],
  },
]

export function getRecipeBySlug(slug: string) {
  return recipes.find((r) => r.slug === slug || r.id === slug)
}
