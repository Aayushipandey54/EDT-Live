import type { Combo } from '../types'

const CDN = 'https://cdn.shopify.com/s/files/1/0647/1437/5267/files'

export const combos: Combo[] = [
  {
    id: 'lifestyle-upgrade',
    slug: 'lifestyle-upgrade',
    name: 'Lifestyle Upgrade Trio (LUMA + FLOW + SUKI)',
    description:
      'Three iconic EDT essentials in one transformative bundle: LUMA PureGlass™ Air Fryer, FLOW Smart Kettle, and SUKI Care-Dryer™.',
    productIds: ['luma-double-stack', 'flow-kettle', 'suki-care-dryer'],
    price: 23499,
    compareAt: 37997,
    savings: 14498,
    image: `${CDN}/e6f2c552-afc7-487c-8ec9-7a14e09367c5_2_1.webp?v=1791395088`,
  },
  {
    id: 'kitchen-upgrade',
    slug: 'kitchen-upgrade',
    name: 'Kitchen Upgrade Combo (LUMA + FLOW)',
    description:
      'The foundational Everyday Extraordinary kitchen set: LUMA 6-in-1 PureGlass™ Air Fryer paired with FLOW Smart Kettle.',
    productIds: ['luma-origin-orange', 'flow-kettle'],
    price: 14999,
    compareAt: 23998,
    savings: 8999,
    image: `${CDN}/Combos_G_O_copy_3_1.webp?v=1781088295`,
  },
  {
    id: 'luma-origin-orange-combo',
    slug: 'luma-origin-orange-air-fryer-combo',
    name: 'LUMA Origin Orange Complete Air Fryer Combo',
    description:
      'LUMA Origin Orange bundled with Dual PureGlass™ Bowls (4.5L + 2.5L) & PureGrill Steel Rack.',
    productIds: ['luma-origin-orange', '2-5l-pureglass-bowl', 'puregrill-rack'],
    price: 13999,
    compareAt: 19997,
    savings: 5998,
    image: `${CDN}/Combos_G_O_copy_3_1.webp?v=1781088295`,
  },
  {
    id: 'luma-grey-combo',
    slug: 'luma-grey-matter-air-fryer-combo',
    name: 'LUMA Grey Matter Complete Air Fryer Combo',
    description:
      'LUMA Grey Matter with both 4.5L + 2.5L PureGlass™ bowls for flexible weeknight culinary prep.',
    productIds: ['luma-grey', '2-5l-pureglass-bowl'],
    price: 12999,
    compareAt: 18998,
    savings: 5999,
    image: `${CDN}/Combos_G_O_copy_2.webp?v=1781088295`,
  },
  {
    id: 'dual-bowl-combo',
    slug: 'dual-bowl-combo',
    name: '2.5L & 4.5L PureGlass™ Dual Bowl Set',
    description:
      'Both genuine Borosilicate PureGlass™ bowls bundled together at exclusive multi-pack pricing.',
    productIds: ['2-5l-pureglass-bowl', '4-5l-pureglass-bowl'],
    price: 8499,
    compareAt: 9998,
    savings: 1499,
    image: `${CDN}/Combos_2_BOWLS.webp?v=1778137546`,
  },
]

export function getComboBySlug(slug: string) {
  return combos.find((c) => c.slug === slug || c.id === slug)
}
