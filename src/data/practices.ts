import { PracticeOption } from '../types';

export const PRACTICES_DATA: PracticeOption[] = [
  {
    id: 'tuesday-practice',
    title: 'Tuesday Practice (Mangalvar)',
    dayOrOccasion: 'Tuesday',
    targetDeity: 'Hanuman',
    summary: 'Dedicated to Lord Hanuman for overcoming obstacles, fear, physical weakness, and building willpower.',
    recommendedMantras: ['hanuman-chalisa', 'bajrang-baan'],
    traditionalBeliefs: 'In Hindu tradition, Tuesday is governed by Mangala (Mars) and dedicated to Sri Hanuman. Reciting the Chalisa or Bajrang Baan on Tuesday brings inner vigor and protection.',
    practicesList: [
      'Light an oil lamp (diya) with sesame oil or mustard oil.',
      'Chant Hanuman Chalisa 1, 3, or 7 times with focused heart.',
      'Offer red flowers or boondi to Sri Hanuman if available.',
      'Practice truthfulness and refrain from anger throughout the day.'
    ]
  },
  {
    id: 'monday-practice',
    title: 'Monday Practice (Somvar)',
    dayOrOccasion: 'Monday',
    targetDeity: 'Shiva',
    summary: 'Dedicated to Lord Shiva for peace of mind, emotional clarity, health, and spiritual awakening.',
    recommendedMantras: ['om-namah-shivaya', 'mahamrityunjaya-mantra', 'shiv-tandav-stotram'],
    traditionalBeliefs: 'Monday is associated with Chandra (Moon) and Mahadev. Devotees chant Om Namah Shivaya to quiet mental turbulence and receive blessings.',
    practicesList: [
      'Offer fresh water or milk onto a Shiva Lingam or sacred stone.',
      'Chant Om Namah Shivaya 108 times using rudraksha beads.',
      'Observe light vegetarian meals or simple fast.',
      'Spend 10 minutes in silent breath observation after chanting.'
    ]
  },
  {
    id: 'morning-practice',
    title: 'Morning Awakening Practice (Pratah Smarami)',
    dayOrOccasion: 'Daily Morning',
    targetDeity: 'Universal Divine',
    summary: 'Essential morning mantras traditionally recited upon waking up to set an auspicious tone for the day.',
    recommendedMantras: ['gayatri-mantra', 'ganesh-mantra'],
    traditionalBeliefs: 'The early morning hours (Brahma Muhurta, approx. 4:00 AM - 6:00 AM) possess pure sattvic energy ideal for prayer.',
    practicesList: [
      'Upon opening your palms in the morning, remember Lakshmi, Saraswati, and Govinda.',
      'Touch the floor with reverence acknowledging Mother Earth (Prithvi).',
      'Chant Gayatri Mantra 3 to 11 times facing East during sunrise.',
      'Express gratitude for another day of life and purposeful duty.'
    ]
  },
  {
    id: 'meditation-practice',
    title: 'Meditation & Mind Quietude',
    dayOrOccasion: 'Anytime / Evening',
    targetDeity: 'Shiva / Universal Consciousness',
    summary: 'Simple sound-vibration practices for reducing stress, anxiety, and mental overthinking.',
    recommendedMantras: ['om-namah-shivaya', 'gayatri-mantra'],
    traditionalBeliefs: 'Mantras act as mental anchors ("man" = mind, "tra" = liberation/protection), guiding attention away from intrusive thoughts.',
    practicesList: [
      'Sit comfortably with spine erect and shoulders relaxed.',
      'Take 3 slow, deep abdominal breaths through the nose.',
      'Chant "OM" continuously on the exhalation, feeling resonance in chest and throat.',
      'Maintain gentle silence for 5 minutes after chanting.'
    ]
  },
  {
    id: 'festival-diwali',
    title: 'Festival of Lights (Diwali / Lakshmi Pujan)',
    dayOrOccasion: 'Diwali / Kartik Amavasya',
    targetDeity: 'Lakshmi & Ganesha',
    summary: 'Welcoming light, righteous wealth, harmony, and gratitude into the home.',
    recommendedMantras: ['ganesh-mantra'],
    traditionalBeliefs: 'Devotees clean homes, light ghee lamps (diyas), and worship Mahalakshmi alongside Vinayaka for prosperity grounded in ethics.',
    practicesList: [
      'Cleanse the living space and light traditional oil lamps.',
      'First invoke Lord Ganesha to remove obstacles.',
      'Recite Sri Suktam or Lakshmi Mantras with sincere devotion.',
      'Share food, sweets, and joy with family and those in need.'
    ]
  }
];
