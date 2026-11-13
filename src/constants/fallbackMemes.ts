export interface FallbackMeme {
  url: string
  title: string
  category: string
  rarity: string
}

// Curated backup memes with verified 200 OK Cloudflare R2 URLs
export const FALLBACK_MEMES: FallbackMeme[] = [
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C7VeMb0tjUg.jpg',
    title: 'Capsule Drop #101',
    category: 'Synced',
    rarity: 'Common',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/Db5adb1w0rf.webp',
    title: 'Unhinged Drop #102',
    category: 'Synced',
    rarity: 'Rare',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DbXOjEERFrR.jpg',
    title: 'Chaos Vault #103',
    category: 'Synced',
    rarity: 'Epic',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZjBSX5lHFz_2.jpg',
    title: 'Unhinged Drop #108',
    category: 'Synced',
    rarity: 'Rare',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C5_UT-ExBuw.jpg',
    title: 'Random Capsule Drop #402',
    category: 'Synced',
    rarity: 'Common',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/Daggq7NjzJX_3.jpg',
    title: 'Unhinged Drop #205',
    category: 'Everyday Life',
    rarity: 'Common',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C-1AoAgSZdK_2.jpg',
    title: 'Capsule Drop #206',
    category: 'Everyday Life',
    rarity: 'Rare',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZ_zoyFl2ll_2.jpg',
    title: 'Dank Core #207',
    category: 'Everyday Life',
    rarity: 'Epic',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DKIzIp1N67i_4.jpg',
    title: 'Chaos Drop #208',
    category: 'Pop Culture',
    rarity: 'Common',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZThR9GjcbE_2.jpg',
    title: 'Capsule Vault #209',
    category: 'Everyday Life',
    rarity: 'Rare',
  },
]
