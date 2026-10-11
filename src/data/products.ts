import type { Product } from '../types'

const CDN = 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files'

export const products: Product[] = [
  // --- BEAUTY CATEGORY ---
  {
    id: 'suki-care-dryer',
    slug: 'suki',
    name: 'SUKI Care-Dryer™',
    tagline: 'World’s 1st Care-Dryer™ that thinks while it dries.',
    category: 'beauty',
    department: 'beauty',
    price: 8499,
    compareAt: 13999,
    rating: 4.9,
    reviewCount: 142,
    badge: 'Beauty × Tech Launch',
    bestSeller: true,
    isNew: true,
    isOfficial: true,
    emiFrom: 422,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Space Neon'],
    images: [
      '/assets/suki-styled-1a.webp',
      '/assets/suki-gallery-1.webp',
      '/assets/suki-gallery-3.webp',
      'https://edtworld.com/cdn/shop/files/Front-NoUI.webp?v=1790483281&width=1920',
    ],
    video: '/assets/ultra-fast-care-drying.mp4',
    benefits: [
      'CareDry™ algorithm releases adaptive, intelligent heat tuned to Indian hair',
      'Dual AirSense™ sensors monitor air stream 100 times per second',
      'Plasma Ion Care preserves cuticle moisture and locks in natural hydration',
      '1.9x to 2.3x more natural shine with zero fixed-heat damage',
      'Maintains 100% hair tensile strength even after prolonged weekly use',
    ],
    features: [
      {
        title: 'CareDry™ Adaptive Algorithm',
        description:
          'Monitors drying progress in real-time, tapering heat automatically as hair dries to prevent cuticle scorching.',
      },
      {
        title: 'AirSense™ Micro-Sensors',
        description:
          '100 temperature checks every second keep thermal exposure in the clinically proven safe zone.',
      },
      {
        title: 'Plasma Ion Shield',
        description:
          'Generates millions of balanced ions to neutralize frizz, smooth cuticles, and seal moisture into hair shafts.',
      },
    ],
    specs: [
      { label: 'Technology', value: 'CareDry™ Adaptive Heat + Plasma Ion' },
      { label: 'Sensor Sampling', value: 'AirSense™ 100x / second' },
      { label: 'Airflow Speed', value: '110,000 RPM Brushless Motor' },
      { label: 'Heat Settings', value: '4 Intelligent Temperature Modes' },
      { label: 'Weight', value: 'Ultra-lightweight 410g ergonomic body' },
      { label: 'Warranty', value: '2 Year Official Replacement Guarantee' },
    ],
    inTheBox: [
      'SUKI Care-Dryer™ in Space Neon',
      'Magnetic Precision Styling Concentrator',
      'Diffuser Attachment for waves & curls',
      'Braided 1.8m salon cord with cable strap',
      'Quick Start Hair Health Guide',
    ],
    compatibleWith: ['Magnetic Styling Nozzle', 'Diffuser Nozzle'],
    faqs: [
      {
        q: 'What makes SUKI different from conventional blow dryers?',
        a: 'Standard dryers blast unmonitored fixed heat that boils moisture inside the hair cortex. SUKI’s CareDry™ algorithm constantly senses moisture levels and adjusts heat 100 times/second.',
      },
      {
        q: 'Is it suitable for chemically treated or coloured Indian hair?',
        a: 'Yes. SUKI was tested specifically on chemically treated, frizzy, and heat-compromised hair textures, preserving up to 100% tensile strength.',
      },
      {
        q: 'What is the return and replacement policy?',
        a: 'SUKI comes with a 7-day replacement window for defects and a comprehensive 2-year warranty.',
      },
    ],
    description:
      'Engineered at the intersection of beauty and deep tech. SUKI eliminates heat damage without slowing you down, bringing salon gloss and clinical cuticle care to your daily morning routine.',
  },

  // --- HOME & KITCHEN: LUMA AIR FRYERS ---
  {
    id: 'luma-double-stack',
    slug: 'luma-double-stack',
    name: 'LUMA Double Stack',
    tagline: '6-in-1 PureGlass™ air fryer with Dual Bowls [4.5L + 2.5L].',
    category: 'air-fryer',
    department: 'home-kitchen',
    price: 10899,
    compareAt: 14999,
    rating: 4.9,
    reviewCount: 384,
    badge: 'Dual Bowl System',
    bestSeller: true,
    isNew: true,
    isOfficial: true,
    emiFrom: 442,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Grey Matter', 'Origin Orange'],
    images: [
      `${CDN}/First_Image.webp?v=1791383086`,
      `${CDN}/FirstImage-2.webp?v=1791378979`,
      `${CDN}/Grey-4_449c8301-0039-486d-8a14-576ad8f8772a.webp?v=1791378978`,
      `${CDN}/Grey-5_2f234eb2-b177-4629-8678-59b17e0935a1.webp?v=1791378978`,
      `${CDN}/Grey-6_a9c229c2-0cf5-47fe-bdfb-53e8414768b7.webp?v=1791378978`,
      `${CDN}/Grey-7_6d5d6ddb-9053-43ca-9f59-1aaba6b2bad2.webp?v=1791378978`,
      `${CDN}/Grey-8_ed8ed695-5593-46e0-963e-0a9cc986025c.webp?v=1791378978`,
    ],
    video: '/assets/modular-dual-bowl-system.mp4',
    benefits: [
      'Dual PureGlass™ bowls (4.5L + 2.5L) allow independent cooking, prepping & serving',
      '100% non-toxic borosilicate glass — zero Teflon, zero microplastics, zero toxic fumes',
      '360° visual cooking allows monitoring without heat-loss from opening drawers',
      'NutriRetain™ airflow preserves vitamins and crunch while cutting 90% oil',
      'Pre-programmed for Indian taste palettes and staple recipes',
    ],
    features: [
      {
        title: 'Two-Bowl Swappable Architecture',
        description:
          'Cook sides in the 2.5L bowl and mains in the 4.5L bowl. Take them straight from the fryer to the dining table.',
      },
      {
        title: 'PureGlass™ 360° Chamber',
        description:
          'Crystal-clear borosilicate glass cleans effortlessly in warm soapy water and never absorbs stains or turmeric.',
      },
      {
        title: 'High-Velocity Cyclone Airflow',
        description:
          '1600W top heating combined with precision convection gives uniform crispness from samosas to roasted paneer.',
      },
    ],
    specs: [
      { label: 'Capacity', value: 'Dual Bowls [4.5L Main + 2.5L Prep Bowl]' },
      { label: 'Cooking Modes', value: '6-in-1: Air Fry, Bake, Roast, Grill, Reheat, Dehydrate' },
      { label: 'Bowl Material', value: '100% Borosilicate PureGlass™ (Thermal Shock Proof)' },
      { label: 'Power Consumption', value: '1600 Watts' },
      { label: 'Warranty', value: '1 Year Brand Warranty + 7 Days Replacement' },
    ],
    inTheBox: [
      'LUMA Smart Convection Base Unit',
      '4.5L PureGlass™ Primary Bowl',
      '2.5L PureGlass™ Secondary Bowl',
      'PureGrill Food-Grade Steel Crisper Rack',
      'Heat-Resistant Silicone Resting Mat',
      'Recipe Ramsay AI Kitchen Starter Guide',
    ],
    compatibleWith: [
      'airfryer-butter-paper',
      'pureglass-cleaner-kit',
      'puregrill-rack',
      '2-5l-pureglass-bowl',
      '4-5l-pureglass-bowl',
    ],
    faqs: [
      {
        q: 'Is the glass fragile or will it crack under high heat?',
        a: 'LUMA PureGlass™ uses industrial thermal-shock-resistant borosilicate glass engineered to handle extreme temperature fluctuations up to 300°C safely.',
      },
      {
        q: 'How does cooking in glass differ from metal basket air fryers?',
        a: 'Glass is completely inert. It does not leach chemical coatings (PTFE/PFOA) into your food and doesn’t retain pungent lingering smells from previous meals.',
      },
    ],
    description:
      'LUMA Double Stack redefines home cooking. With dual stackable PureGlass™ bowls and transparent 360° view, prepare vibrant, healthy meals with complete visual clarity.',
  },

  {
    id: 'luma-origin-orange',
    slug: 'luma-origin-orange',
    name: 'LUMA Origin Orange',
    tagline: 'India’s first 360° PureGlass™ Air Fryer in our iconic hero finish.',
    category: 'air-fryer',
    department: 'home-kitchen',
    price: 10499,
    compareAt: 14999,
    rating: 4.8,
    reviewCount: 312,
    badge: 'Iconic Brand Color',
    bestSeller: true,
    isOfficial: true,
    emiFrom: 422,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Origin Orange'],
    images: [
      `${CDN}/pdp-1.webp?v=1783381040`,
      `${CDN}/pdp-2.webp?v=1783381040`,
      `${CDN}/3.webp?v=1782373729`,
      `${CDN}/pdp-4d.webp?v=1783381260`,
      `${CDN}/pdp-5.webp?v=1783381040`,
      `${CDN}/pdp-6.webp?v=1783381040`,
    ],
    video: '/assets/goodbye-dry-dishes.mp4',
    benefits: [
      '7-in-1 intelligent cooking — air fry, bake, roast, toast, grill & more',
      'PureGlass™ chamber keeps flavours clean, fresh, and free from coatings',
      'NutriRetain™ protects vitamins while crisping to golden perfection',
      'Signature Origin Orange finish brightens modern kitchen countertops',
    ],
    features: [
      {
        title: 'PureGlass™ 360°',
        description:
          'See your food while it cooks. Glass cleans in seconds and keeps your kitchen free of greasy lingering smells.',
      },
      {
        title: 'NutriRetain™',
        description:
          'Intelligent thermal curves lock in moisture and nutrients without requiring continuous babysitting.',
      },
      {
        title: 'AI Kitchen OS Ready',
        description:
          'Pair with Recipe Ramsay on WhatsApp for instant recipe assistance tuned specifically to LUMA modes.',
      },
    ],
    specs: [
      { label: 'Capacity', value: '4.5L PureGlass™ Chamber' },
      { label: 'Finish', value: 'Origin Orange Matte Heat-Resistant Polycarbonate' },
      { label: 'Modes', value: '7-in-1 Smart Presets' },
      { label: 'Power', value: '1600W Rapid Convection' },
      { label: 'Warranty', value: '1 Year Warranty' },
    ],
    inTheBox: [
      'LUMA Origin Orange Base Unit',
      '4.5L PureGlass™ Bowl',
      'PureGrill Steel Crisper Rack',
      'Power Cable with Indian 3-Pin Plug',
      'User Manual & Recipe Quick Guide',
    ],
    compatibleWith: [
      'airfryer-butter-paper',
      'pureglass-cleaner-kit',
      'puregrill-rack',
      '2-5l-pureglass-bowl',
      '4-5l-pureglass-bowl',
    ],
    faqs: [
      {
        q: 'Can I cook both vegetarian and non-vegetarian dishes in the same glass bowl?',
        a: 'Yes! Unlike coated plastic or metal baskets that absorb aromas, non-porous borosilicate glass washes clean with zero odor carryover.',
      },
    ],
    description:
      'Origin Orange is the colour of a new dawn. Designed to break the monotony of sterile kitchen appliances with joy, warmth, and culinary precision.',
  },

  {
    id: 'luma-grey',
    slug: 'luma-grey',
    name: 'LUMA Grey Matter',
    tagline: 'Quiet luxury and PureGlass™ intelligence in a sleek, architectural grey.',
    category: 'air-fryer',
    department: 'home-kitchen',
    price: 10499,
    compareAt: 14999,
    rating: 4.8,
    reviewCount: 248,
    badge: 'Minimalist Edition',
    bestSeller: false,
    isOfficial: true,
    emiFrom: 422,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Grey Matter'],
    images: [
      `${CDN}/Grey-1_2.webp?v=1784639748`,
      `${CDN}/Grey-2_fafd6457-0124-4f30-946b-c45786d2be0c.webp?v=1784632279`,
      `${CDN}/Grey-3_34fa861f-6248-4f9b-be65-6ebbd6ed5080.webp?v=1784632279`,
      `${CDN}/Grey-4_d82e3be8-9c42-4d3c-aa9c-596af11153ef.webp?v=1784632279`,
      `${CDN}/Grey-5_80607a89-ff8a-49b7-8358-20fb0ed73641.webp?v=1784632279`,
    ],
    benefits: [
      'Same PureGlass™ intelligence in a quiet, subdued aesthetic',
      'Fits seamlessly into monochromatic, stone, and contemporary kitchen decor',
      'Full 7-in-1 versatility with zero-chemical glass chamber',
    ],
    features: [
      {
        title: 'Architectural Slate Finish',
        description: 'Fingerprint-resistant matte texture that looks right at home in modern open layouts.',
      },
      {
        title: 'Precision Heat Uniformity',
        description: 'Advanced air baffle design provides even browning without hot spots.',
      },
    ],
    specs: [
      { label: 'Capacity', value: '4.5L PureGlass™' },
      { label: 'Color', value: 'Grey Matter Satin' },
      { label: 'Power', value: '1600W Convection' },
      { label: 'Warranty', value: '1 Year Warranty' },
    ],
    inTheBox: [
      'LUMA Grey Matter Base Unit',
      '4.5L PureGlass™ Chamber',
      'Steel Grill Rack',
      'Documentation',
    ],
    compatibleWith: [
      'airfryer-butter-paper',
      'pureglass-cleaner-kit',
      'puregrill-rack',
      '2-5l-pureglass-bowl',
      '4-5l-pureglass-bowl',
    ],
    faqs: [],
    description: 'LUMA Grey Matter brings quiet confidence to countertop cooking.',
  },

  {
    id: 'luma-core',
    slug: 'luma-core',
    name: 'LUMA Core',
    tagline: 'Essential PureGlass™ power for small countertops and starting kitchens.',
    category: 'air-fryer',
    department: 'home-kitchen',
    price: 8999,
    compareAt: 12499,
    rating: 4.6,
    reviewCount: 186,
    badge: 'Best Value',
    bestSeller: false,
    isOfficial: true,
    emiFrom: 355,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Core Black'],
    images: [
      `${CDN}/1_2.webp?v=1782462699`,
      `${CDN}/2_7ad42acb-5e6c-443f-9803-f778bc974226.webp?v=1782382355`,
      `${CDN}/3.webp?v=1782373729`,
      `${CDN}/4.webp?v=1782373729`,
      `${CDN}/5_c58daadc-7853-4ff3-8ac1-d4c43fde4af1.webp?v=1782373729`,
    ],
    benefits: [
      'PureGlass™ cooking chamber at an accessible price point',
      'Compact footprint ideal for smaller kitchens or couple households',
      'Full compatibility with Recipe Ramsay WhatsApp assistant',
    ],
    features: [
      {
        title: 'Compact Counter Profile',
        description: 'Maximum bowl capacity in a space-conscious vertical design.',
      },
    ],
    specs: [
      { label: 'Capacity', value: '4L PureGlass™' },
      { label: 'Power', value: '1500W' },
      { label: 'Warranty', value: '1 Year Warranty' },
    ],
    inTheBox: ['LUMA Core Unit', '4L PureGlass™ Bowl', 'Crisper Rack', 'Manual'],
    compatibleWith: ['puregrill-rack'],
    faqs: [],
    description: 'LUMA Core provides the non-toxic glass cooking experience in a streamlined package.',
  },

  // --- HOME & KITCHEN: FLOW KETTLES ---
  {
    id: 'flow-kettle',
    slug: 'flow',
    name: 'FLOW Smart Kettle',
    tagline: 'Precise temperature control, serene pouring, everyday ritual.',
    category: 'kettle',
    department: 'home-kitchen',
    price: 5099,
    compareAt: 8999,
    rating: 4.9,
    reviewCount: 156,
    badge: 'Popular Ritual',
    bestSeller: true,
    isNew: true,
    isOfficial: true,
    emiFrom: 201,
    delivery: 'Free express shipping in 2–4 days',
    colors: ['Rubik White', 'Dune Warm'],
    images: [
      `${CDN}/Anim_1-10.png?v=1783085009`,
      `${CDN}/GreyAnim0sss_1.webp?v=1783138472`,
      'https://edtworld.com/cdn/shop/files/preview_images/848c3876a8a246c09a45ed29d33f8bf5.thumbnail.0000000000_small.jpg?v=1774434225',
    ],
    video: 'https://edtworld.com/cdn/shop/videos/c/vp/6dac31fc408a4f24a18f6bc7e3326280/6dac31fc408a4f24a18f6bc7e3326280.HD-1080p-2.5Mbps-88228778.mp4?v=0',
    benefits: [
      'Tailored temperature presets for Adrak Chai, Pour-over, Green Tea & Baby formula',
      'Ultra-silent rapid boiling technology keeps mornings peaceful',
      'Keep-warm hold mode ensures water stays at precise brewing heat for 60 minutes',
      'Counter-balanced ergonomic gooseneck spout for an effortless, splash-free pour',
    ],
    features: [
      {
        title: 'Strix Accurate Thermostat',
        description: 'World-leading thermal sensing dials in heat to single-degree precision.',
      },
      {
        title: '60-Minute Temp Hold',
        description: 'Your second cup is always waiting at the exact drinking temperature.',
      },
      {
        title: 'Food-Grade Stainless Interior',
        description: 'Zero plastic contact with boiling water — pure taste, zero endocrine disruptors.',
      },
    ],
    specs: [
      { label: 'Capacity', value: '1.5 Liters' },
      { label: 'Presets', value: '4 Dedicated Heat Profiles (70°C, 80°C, 90°C, 100°C)' },
      { label: 'Interior', value: 'Food-Grade 304 Stainless Steel Interior' },
      { label: 'Power', value: '1800W Rapid Boil' },
      { label: 'Warranty', value: '1 Year Brand Warranty' },
    ],
    inTheBox: [
      'FLOW Kettle Body',
      '360° Swivel Digital Power Base with Cord Wrap',
      'Spout Dust Cover',
      'Brew Guide',
    ],
    compatibleWith: ['kettle-descaling-powder'],
    faqs: [
      {
        q: 'Does water come into contact with plastic inside FLOW?',
        a: 'No. The entire inner vessel, spout, and inner lid are seamless 304 stainless steel.',
      },
    ],
    description: 'FLOW transforms heating water from a mechanical chore into an intentional daily ceremony.',
  },

  // --- ACCESSORIES & SPARES (OFFICIAL) ---
  {
    id: 'puregrill-rack',
    slug: 'puregrill-rack',
    name: 'PureGrill Steel Rack',
    tagline: 'High-airflow stainless steel grill rack for LUMA air fryers.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 899,
    compareAt: 1099,
    rating: 4.7,
    reviewCount: 78,
    badge: 'Essential Accessory',
    isOfficial: true,
    delivery: 'Ships within 24–48 hours',
    colors: ['Brushed Steel'],
    images: [
      `${CDN}/grill_final_pdp_-_4_1.webp?v=1783672648`,
      `${CDN}/grill_final_pdp_-_2_1.webp?v=1783672650`,
      `${CDN}/grillPDPfinal-3.webp?v=1783670950`,
      `${CDN}/GRILLPDPfinal.webp?v=1783670950`,
    ],
    benefits: [
      'Elevates veggies, paneer, and snacks for 360° bottom airflow without manual flipping',
      'Dishwasher safe 304 grade food-safe stainless steel',
      'Non-scratch silicone feet protect PureGlass™ bowl bottom',
    ],
    features: [
      {
        title: 'Dual-Level Airflow',
        description: 'Raises ingredients 2cm above the base so hot cyclone air wraps underneath.',
      },
    ],
    specs: [
      { label: 'Material', value: 'SUS304 Food-Grade Stainless Steel' },
      { label: 'Compatibility', value: 'LUMA Origin Orange, LUMA Double Stack, LUMA Grey' },
      { label: 'Dishwasher Safe', value: 'Yes' },
    ],
    inTheBox: ['1x PureGrill Steel Rack with protective silicone footings'],
    faqs: [],
    description: 'Get deep golden crusts and authentic tandoor grill lines inside your LUMA air fryer.',
  },

  {
    id: '2-5l-pureglass-bowl',
    slug: '2-5l-pureglass-bowl',
    name: '2.5L PureGlass™ Spare Bowl',
    tagline: 'Compact secondary bowl for prep, sides, and dual-zone cooking.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 3999,
    compareAt: 3999,
    rating: 4.8,
    reviewCount: 49,
    isOfficial: true,
    delivery: 'Ships in 2–4 days',
    colors: ['Clear Borosilicate'],
    images: [
      `${CDN}/2-5_Front.webp?v=1771307156`,
      `${CDN}/Combos_Bowls.webp?v=1778662503`,
    ],
    benefits: [
      'Swap quickly between spicy marinades and kids’ snacks without washing in between',
      'Table-ready design — serve directly from the fryer to lunch table',
      '100% inert, zero-chemical glass',
    ],
    features: [
      {
        title: 'Thermal-Resistant Borosilicate',
        description: 'Withstands rapid temperature shifts up to 300°C without risk of micro-fractures.',
      },
    ],
    specs: [
      { label: 'Volume', value: '2.5 Liters' },
      { label: 'Dishwasher Safe', value: 'Yes' },
    ],
    inTheBox: ['1x 2.5L PureGlass™ Bowl with heat-resistant handle'],
    faqs: [],
    description: 'Keep a spare bowl ready for effortless meal transitions during weeknight cooking.',
  },

  {
    id: '4-5l-pureglass-bowl',
    slug: '4-5l-pureglass-bowl',
    name: '4.5L PureGlass™ Primary Bowl',
    tagline: 'Full-size replacement/spare bowl for family meals and whole roasts.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 5999,
    compareAt: 5999,
    rating: 4.9,
    reviewCount: 37,
    isOfficial: true,
    delivery: 'Ships in 2–4 days',
    colors: ['Clear Borosilicate'],
    images: [
      `${CDN}/4-5_Front.webp?v=1771306749`,
      `${CDN}/Combos_Bowls.webp?v=1778662503`,
    ],
    benefits: [
      'Generous 4.5L capacity easily fits a whole chicken, large thali traybakes, or snacks for 6',
      'Durable ergonomic cool-touch handle integrated into the bowl rim',
    ],
    features: [
      {
        title: 'Full Family Capacity',
        description: 'Engineered for batch cooking, biryani dum reheating, and large party appetizers.',
      },
    ],
    specs: [
      { label: 'Volume', value: '4.5 Liters' },
      { label: 'Dishwasher Safe', value: 'Yes' },
    ],
    inTheBox: ['1x 4.5L PureGlass™ Primary Bowl'],
    faqs: [],
    description: 'The standard high-capacity bowl for LUMA air fryers.',
  },

  {
    id: 'everyday-tote',
    slug: 'everyday-tote',
    name: 'EDT Everyday Tote',
    tagline: 'Heavyweight organic cotton tote for weekend markets and coffee runs.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 649,
    compareAt: 899,
    rating: 4.8,
    reviewCount: 65,
    badge: 'Brand Lifestyle',
    isOfficial: true,
    delivery: 'Ships in 2–3 days',
    colors: ['Natural Canvas & Orange'],
    images: [
      `${CDN}/416723828_11650363_1.webp?v=1779974621`,
      `${CDN}/bag1.webp?v=1780490736`,
      `${CDN}/bag2.webp?v=1780490737`,
      `${CDN}/426449577_9b3a68b3-957b-4eb6-9872-54ce849feb4a.webp?v=1779974619`,
    ],
    benefits: [
      '400 GSM heavyweight organic canvas built to carry heavy grocery loads',
      'Dual reinforced handles for hand carry and shoulder sling comfort',
      'Signature minimal EDT logo mark and contrast orange interior binding',
    ],
    features: [
      {
        title: 'Reinforced Box Gusset',
        description: 'Stands upright while packing vegetables or farmer’s market finds.',
      },
    ],
    specs: [
      { label: 'Dimensions', value: '42cm x 38cm x 12cm' },
      { label: 'Fabric', value: '100% Unbleached Organic Cotton Canvas' },
    ],
    inTheBox: ['1x EDT Everyday Tote'],
    faqs: [],
    description: 'Carry the Everyday Extraordinary spirit on your daily rituals.',
  },

  {
    id: 'airfryer-butter-paper',
    slug: 'butter-paper-liners',
    name: 'PureGlass™ Butter Paper Liners (Pack of 100)',
    tagline: 'Food-grade unbleached perforated butter paper for mess-free baking & crisping.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 499,
    compareAt: 699,
    rating: 4.8,
    reviewCount: 82,
    badge: 'Baking Essential',
    isOfficial: true,
    delivery: 'Ships in 2–3 days',
    colors: ['Natural Unbleached'],
    images: [
      `${CDN}/Combos_Bowls.webp?v=1778662503`,
      `${CDN}/pdp-4d.webp?v=1783381260`,
    ],
    benefits: [
      '100% unbleached virgin wood pulp — food-grade, chlorine-free and non-toxic',
      'Heat-resistant up to 230°C (450°F) for safe air frying, baking, and roasting',
      'Engineered perforated air holes preserve 360° cyclonic convection heat circulation',
      'Prevents sticky marinades and molten cheese from adhering to borosilicate glass',
    ],
    features: [
      {
        title: 'Precision Bowl Fit',
        description:
          'Pre-cut round shape fits both 4.5L and 2.5L LUMA PureGlass™ bowls without curling or bunching.',
      },
      {
        title: 'Zero Chemical Bleach',
        description:
          'Natural unbleached parchment keeps food pure and free of chlorine dioxins.',
      },
    ],
    specs: [
      { label: 'Quantity', value: '100 Pre-Cut Round Sheets' },
      { label: 'Diameter', value: '20 cm (Fits 4.5L & 2.5L Bowls)' },
      { label: 'Heat Rating', value: 'Up to 230°C / 450°F' },
      { label: 'Material', value: '100% Unbleached Food-Grade Parchment' },
    ],
    inTheBox: ['100x PureGlass™ Butter Paper Liners in Dispenser Box'],
    compatibleWith: ['luma-origin-orange', 'luma-double-stack', 'luma-grey'],
    faqs: [
      {
        q: 'Do I need to grease the butter paper before cooking?',
        a: 'No. The double-sided food-safe silicone coating provides natural non-stick release without extra oil or butter.',
      },
      {
        q: 'Can the paper catch fire if preheating empty?',
        a: 'Always place food on the paper before turning on the appliance so the weight keeps the paper weighted down and away from the top heating element.',
      },
    ],
    description:
      'The essential mess-free accessory for LUMA air fryers. Makes post-cooking cleanup effortless while maintaining complete hot air circulation.',
  },

  {
    id: 'pureglass-cleaner-kit',
    slug: 'cleaner-kit',
    name: 'PureGlass™ Pro Appliance Cleaner Kit',
    tagline: 'Non-scratch plant-based bio-enzyme spray, dual-texture microfiber & detail brush.',
    category: 'accessories',
    department: 'home-kitchen',
    price: 649,
    compareAt: 899,
    rating: 4.9,
    reviewCount: 94,
    badge: 'Appliance Care',
    isOfficial: true,
    delivery: 'Ships in 2–3 days',
    colors: ['Pro Care Pack'],
    images: [
      `${CDN}/GreyAnim0sss_1.webp?v=1783138472`,
      `${CDN}/pdp-5.webp?v=1783381040`,
    ],
    benefits: [
      'Plant-based bio-enzyme formula cuts grease and stubborn oil film without scratching glass',
      'Streak-free formula leaves 100% crystal-clear visibility on 360° PureGlass™ bowls',
      'Ultra-dense 400 GSM dual-pile microfiber cloth leaves zero lint or haze',
      'Ergonomic soft bristle detailing brush safely cleans heating element guards and air vents',
    ],
    features: [
      {
        title: 'Food-Prep Safe Formula',
        description:
          'Free of harsh petroleum solvents, ammonia, or lingering chemical fragrances. Rinses clean with water.',
      },
      {
        title: 'Multi-Surface Protection',
        description:
          'Safe for borosilicate glass, brushed stainless steel grill racks, and matte exterior housings.',
      },
    ],
    specs: [
      { label: 'Spray Volume', value: '250 ml Bio-Enzyme Formula' },
      { label: 'Microfiber Towel', value: '2x 400 GSM Edgeless Glass Towels' },
      { label: 'Detailing Brush', value: '1x Anti-Scratch Soft Nylon Bristle Brush' },
      { label: 'Ingredients', value: 'Bio-Enzymes, Plant Surfactants, Citrus Extract' },
    ],
    inTheBox: [
      '1x 250ml PureGlass™ Bio-Enzyme Cleaner Spray',
      '2x Dual-Pile Glass Polishing Microfiber Towels',
      '1x Soft Detailing Vent Brush',
    ],
    compatibleWith: ['luma-origin-orange', 'luma-double-stack', 'flow', 'luma-grey'],
    faqs: [
      {
        q: 'Can I use this spray on other kitchen appliances?',
        a: 'Yes, it works exceptionally well on ovens, microwaves, glass cooktops, and kettles.',
      },
    ],
    description:
      'Keep your EDT appliances looking and performing brand new. Formulated specifically to preserve the pristine optical clarity of PureGlass™ without micro-scratches.',
  },

  // --- PROPOSED CARE & COMPATIBLE MAINTENANCE PRODUCTS (PHASE 4: CLEARLY DISTINGUISHED) ---
  {
    id: 'airfryer-baking-liners',
    slug: 'airfryer-silicone-liners',
    name: 'PureGlass Reusable Silicone Baking Liners (Set of 2)',
    tagline: 'Food-safe perforated liners for zero-mess baking and saucy dishes.',
    category: 'care',
    department: 'home-kitchen',
    price: 799,
    compareAt: 999,
    rating: 4.6,
    reviewCount: 32,
    badge: 'Recommended Care',
    isOfficial: false,
    delivery: 'Ships within 48 hours',
    colors: ['Origin Orange', 'Slate Grey'],
    images: [
      `${CDN}/Combos_Bowls.webp?v=1778662503`,
      `${CDN}/pdp-4d.webp?v=1783381260`,
    ],
    benefits: [
      'Recommended accessory: Prevents sticky sauces from sticking during marinades & bakes',
      'Heat resistant platinum food-grade silicone up to 240°C',
      'Reusable 1000+ times — eco-friendly alternative to disposable parchment paper',
    ],
    features: [
      {
        title: 'Precision Air Vents',
        description: 'Engineered hole pattern maintains cyclonic convection airflow underneath.',
      },
    ],
    specs: [
      { label: 'Material', value: 'BPA-Free Platinum Food Silicone' },
      { label: 'Compatibility', value: 'LUMA 4.5L & 2.5L PureGlass Bowls' },
      { label: 'Type', value: 'Compatible Curated Recommendation' },
    ],
    inTheBox: ['1x 4.5L Fit Liner', '1x 2.5L Fit Liner'],
    faqs: [
      {
        q: 'Is this an official EDT manufactured item?',
        a: 'This is a curated, verified compatible recommendation carefully tested to match LUMA bowl dimensions and safety thresholds.',
      },
    ],
    description:
      'A curated accessory for making cleanup after barbecue wings and paneer roasts even faster.',
  },

  {
    id: 'kettle-descaling-powder',
    slug: 'kettle-descaling-pack',
    name: 'MineralCare Bio-Citric Descaling Powder (Pack of 4)',
    tagline: '100% natural citric descaler to keep FLOW Kettle boiling silently.',
    category: 'care',
    department: 'home-kitchen',
    price: 449,
    compareAt: 599,
    rating: 4.8,
    reviewCount: 54,
    badge: 'Kettle Maintenance',
    isOfficial: false,
    delivery: 'Ships within 48 hours',
    colors: ['Natural Bio-Sachet'],
    images: [
      `${CDN}/GreyAnim0sss_1.webp?v=1783138472`,
      `${CDN}/Anim_1-10.png?v=1783085009`,
    ],
    benefits: [
      'Recommended maintenance: Removes hard-water calcium scale without harsh chemicals',
      'Restores rapid boil speed and silent operation',
      'Plant-based, 100% biodegradable and non-toxic formula',
    ],
    features: [
      {
        title: 'Pre-Measured Single Use Sachets',
        description: 'Simply add 1 sachet to 1L of water, boil, let sit for 15 minutes, and rinse.',
      },
    ],
    specs: [
      { label: 'Quantity', value: '4 x 25g Treatment Sachets' },
      { label: 'Origin', value: 'Natural Citrus Fruit Extracts' },
      { label: 'Recommended Frequency', value: 'Once every 4–6 weeks' },
    ],
    inTheBox: ['4x MineralCare Descaling Sachets', 'Kettle Care Instructions'],
    faqs: [],
    description:
      'Specially recommended for Indian municipal and borewell water to maintain peak performance in FLOW.',
  },
]

import { combos } from './combos'

export function getProductBySlug(slug: string): Product | undefined {
  const found = products.find((p) => p.slug === slug || p.id === slug)
  if (found) return found
  const combo = combos.find((c) => c.slug === slug || c.id === slug)
  if (combo) {
    return {
      id: combo.id,
      slug: combo.slug,
      name: combo.name,
      tagline: combo.description,
      category: 'combos',
      department: 'home-kitchen',
      price: combo.price,
      compareAt: combo.compareAt,
      rating: 4.9,
      reviewCount: 48,
      badge: combo.savings ? `Save ₹${combo.savings}` : 'Bundle Deal',
      delivery: 'Free express shipping in 2–4 days',
      colors: [],
      images: [combo.image],
      benefits: ['Curated multi-product bundle', 'Exclusive bundle pricing savings'],
      features: [],
      specs: [],
      faqs: [],
      description: combo.description,
    }
  }
  return undefined
}

export function getProductById(id: string): Product | undefined {
  return getProductBySlug(id)
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}
