import { PalmistryTopic } from '../types';

export const PALMISTRY_DATA: PalmistryTopic[] = [
  // Major Lines
  {
    id: 'life-line',
    title: 'Life Line',
    sanskritTerm: 'Aayu Rekha / Pitri Rekha (आयु रेखा)',
    category: 'Major Lines',
    summary: 'Curves around the base of the thumb (Mount of Venus). Represents vitality, physical stamina, major life events, and overall life energy.',
    locationDescription: 'Originates between the thumb and index finger, sweeping downward in an arc towards the wrist.',
    significance: 'In Hastarekha Shastra, a deep, clear, un unbroken Life Line signifies robust vitality, strong immune resilience, and steady ancestral blessings. Length indicates energy flow, not strict lifespan.',
    variations: [
      { type: 'Deep and Clear Arc', meaning: 'High physical stamina, strong immunity, and enthusiasm for life.' },
      { type: 'Double Life Line (Guardian Angel Line)', meaning: 'Extraordinary protection, strong family support, and quick recovery from illness.' },
      { type: 'Chained or Broken Line', meaning: 'Periods of fluctuating physical energy or transformative health awareness.' },
      { type: 'Shorter Arc with Strong Fate Line', meaning: 'Vitality is complemented and fueled by mental strength and career determination.' }
    ],
    tips: [
      'Examine both hands: The passive hand (left for right-handed) shows potential from birth; the active hand shows actualized energy.',
      'A break with an overlapping branch indicates a major life change, relocation, or spiritual shift.'
    ]
  },
  {
    id: 'heart-line',
    title: 'Heart Line',
    sanskritTerm: 'Hridaya Rekha (हृदय रेखा)',
    category: 'Major Lines',
    summary: 'Runs horizontally across the top of the palm below the fingers. Governs emotional nature, relationships, empathy, and heart health.',
    locationDescription: 'Extends from under the pinky finger towards the Mount of Jupiter (index finger) or Mount of Saturn (middle finger).',
    significance: 'Reflects how one experiences love, handles emotional relationships, expresses empathy, and connects with others spiritually.',
    variations: [
      { type: 'Ends under Mount of Jupiter (Index)', meaning: 'Idealistic, deeply loving, generous in relationships, and spiritually compassionate.' },
      { type: 'Ends under Mount of Saturn (Middle)', meaning: 'Practical approach to love, values stability, self-reliant in emotions.' },
      { type: 'Curved Upward towards Index', meaning: 'Expressive, romantic, easily voices warmth and affection.' },
      { type: 'Straight & Horizontal', meaning: 'Emotionally guarded, calm under crisis, values logic in relationships.' }
    ],
    tips: [
      'Tiny upward branches off the Heart Line indicate positive emotional milestones and uplifting relationships.',
      'A clear line without islands suggests emotional peace and cardiac health.'
    ]
  },
  {
    id: 'head-line',
    title: 'Head Line',
    sanskritTerm: 'Masti Rekha / Matri Rekha (मस्तिष्क रेखा)',
    category: 'Major Lines',
    summary: 'Runs across the center of the palm between the Life Line and Heart Line. Represents intellect, focus, decision-making, and mental clarity.',
    locationDescription: 'Starts near the index finger/thumb junction and traverses horizontally or slopes downward across the palm.',
    significance: 'Reveals cognitive style, problem-solving ability, depth of memory, and creative vs. logical thinking tendencies.',
    variations: [
      { type: 'Straight & Horizontal', meaning: 'Logical, analytical, practical problem solver with sharp realistic focus.' },
      { type: 'Sloping Downward to Mount of Moon', meaning: 'High imagination, artistic talent, intuitive depth, and creative thinking.' },
      { type: 'Forked End (Writer\'s Fork)', meaning: 'Versatile mind combining logic with creative expression; adept at communication.' },
      { type: 'Joined with Life Line at Start', meaning: 'Cautious, thoughtful before acting, deeply respects family traditions.' }
    ],
    tips: [
      'A deep, clear Head Line without breaks denotes excellent concentration and mental resilience.',
      'Daily meditation strengthens mental focus and reduces stress marks around the Head Line.'
    ]
  },
  {
    id: 'fate-line',
    title: 'Fate Line / Destiny Line',
    sanskritTerm: 'Bhagya Rekha / Karma Rekha (भाग्य रेखा)',
    category: 'Major Lines',
    summary: 'Vertical line running up the center of the palm towards the middle finger (Mount of Saturn). Denotes career path, destiny, and life purpose.',
    locationDescription: 'Ascends from the wrist, Mount of Moon, or Life Line upward towards the Mount of Saturn (middle finger).',
    significance: 'Highlights how much external career stability, personal drive, and karmic destiny shape one\'s professional trajectory.',
    variations: [
      { type: 'Originates from Wrist to Saturn', meaning: 'Strong self-made destiny, clear goals from early youth.' },
      { type: 'Originates from Mount of Moon', meaning: 'Career success influenced by public support, arts, travel, or foreign connections.' },
      { type: 'Originates from Life Line', meaning: 'Self-earned success achieved through personal hard work and family backing.' },
      { type: 'Absent or Faint Line', meaning: 'Flexible career path with freedom to choose multiple diverse directions without rigid bounds.' }
    ],
    tips: [
      'The absence of a Fate Line does not mean lack of success—it simply means a self-directed, unconstrained path.',
      'An upward branch extending towards Jupiter signifies career promotions and leadership authority.'
    ]
  },
  {
    id: 'sun-line',
    title: 'Sun Line / Line of Fame',
    sanskritTerm: 'Surya Rekha (सूर्य रेखा)',
    category: 'Major Lines',
    summary: 'Runs vertically under the ring finger (Mount of Sun). Indicates fame, recognition, artistic brilliance, and overall prosperity.',
    locationDescription: 'Vertical line parallel to the Fate Line, pointing directly towards the base of the ring finger.',
    significance: 'Enhances the Fate Line. Bestows distinction, high reputation, aesthetic brilliance, and luck in public life.',
    variations: [
      { type: 'Deep and Straight under Ring Finger', meaning: 'High artistic talent, public recognition, and dignified reputation.' },
      { type: 'Starting from Head Line', meaning: 'Success and renown achieved in mid-life through intellectual achievements.' },
      { type: 'Multiple Parallel Sun Lines', meaning: 'Versatile talents across arts, music, writing, and leadership.' }
    ],
    tips: [
      'Surya Dev worship (offering water at sunrise) is traditionally believed in Vedic culture to strengthen the Mount of Sun and Sun Line.'
    ]
  },

  // Mounts of the Palm (Graha Parvats)
  {
    id: 'mount-jupiter',
    title: 'Mount of Jupiter',
    sanskritTerm: 'Guru Parvat (गुरु पर्वत)',
    category: 'Mounts (Grahas)',
    summary: 'Located directly at the base of the index finger. Represents leadership, wisdom, ambition, spirituality, and self-respect.',
    locationDescription: 'Fleshy cushion below the index finger (Tarjani).',
    significance: 'A well-developed Mount of Jupiter indicates high moral integrity, natural leadership, religious inclinations, and desire for knowledge.',
    variations: [
      { type: 'Firm & Well-Developed', meaning: 'Noble character, confident leadership, high regard for truth and ethics.' },
      { type: 'Flat or Depressed', meaning: 'Humility; may need to cultivate greater self-confidence and ambition.' },
      { type: 'Cross Mark on Mount', meaning: 'Auspicious mark signifying happy marriage and spiritual contentment.' }
    ],
    tips: [
      'Worship of Lord Vishnu or Guru Mantra enhances the positive vibrations of Guru Parvat.'
    ]
  },
  {
    id: 'mount-saturn',
    title: 'Mount of Saturn',
    sanskritTerm: 'Shani Parvat (शनि पर्वत)',
    category: 'Mounts (Grahas)',
    summary: 'Located at the base of the middle finger. Governs discipline, karma, duty, research, balance, and prudence.',
    locationDescription: 'Cushion below the middle finger (Madhyama).',
    significance: 'Reflects one\'s sense of responsibility, patience, ability to endure hardship, and interest in philosophy or deep research.',
    variations: [
      { type: 'Balanced & Smooth', meaning: 'Disciplined lifestyle, strong work ethic, balanced emotional composure.' },
      { type: 'Overdeveloped / Prominent', meaning: 'Introspective, reserved nature; loves solitary research and deep meditation.' }
    ],
    tips: [
      'Practicing selfless service (Sewa) and honesty pleases Shani Dev and balances Shani Parvat.'
    ]
  },
  {
    id: 'mount-sun',
    title: 'Mount of Sun',
    sanskritTerm: 'Surya Parvat (सूर्य पर्वत)',
    category: 'Mounts (Grahas)',
    summary: 'Located at the base of the ring finger. Represents fame, brilliance, creativity, radiance, and administrative capability.',
    locationDescription: 'Cushion below the ring finger (Anamika).',
    significance: 'Bestows warmth, magnetic charm, artistic flair, and public acclaim when well-raised and clear of negative marks.',
    variations: [
      { type: 'Prominent & Clear', meaning: 'Natural charm, artistic talent, leadership in administration or creative fields.' },
      { type: 'Star Mark present', meaning: 'Extraordinary renown and sudden fame in chosen career.' }
    ],
    tips: [
      'Chanting Aditya Hridayam or Gayatri Mantra energizes Surya Parvat.'
    ]
  },
  {
    id: 'mount-mercury',
    title: 'Mount of Mercury',
    sanskritTerm: 'Budh Parvat (बुध पर्वत)',
    category: 'Mounts (Grahas)',
    summary: 'Located at the base of the little finger. Governs intelligence, commerce, eloquence, medical/scientific aptitude, and diplomacy.',
    locationDescription: 'Cushion below the little finger (Kanishtha).',
    significance: 'Determines communication skills, business intellect, quick wit, and scientific curiosity.',
    variations: [
      { type: 'Raised & Firm', meaning: 'Sharp commercial sense, persuasive speech, adept in mathematics and communication.' },
      { type: 'Vertical Lines present (Medical Stigmata)', meaning: 'Natural healing touch, compassion for the sick, excellent counselor or healer.' }
    ],
    tips: [
      'Speaking the truth (Satya) and studying scripture enhances Budh Parvat.'
    ]
  },
  {
    id: 'mount-venus',
    title: 'Mount of Venus',
    sanskritTerm: 'Shukra Parvat (शुक्र पर्वत)',
    category: 'Mounts (Grahas)',
    summary: 'The large cushion at the base of the thumb enclosed by the Life Line. Represents love, beauty, vitality, passion, and luxury.',
    locationDescription: 'Broad area below the thumb.',
    significance: 'Reflects enthusiasm for life, appreciation for music and aesthetic beauty, marital harmony, and general vitality.',
    variations: [
      { type: 'Broad & Firmly Raised', meaning: 'Warmhearted, full of vitality, passionate, loves refined arts and comfort.' },
      { type: 'Grille pattern present', meaning: 'High emotional sensitivity and intense affection for family.' }
    ],
    tips: [
      'Surrounding oneself with clean, aesthetic surroundings and devotional music strengthens Shukra Parvat.'
    ]
  },

  // Hand Shapes (Elemental Types)
  {
    id: 'hand-types',
    title: 'Elemental Hand Types',
    sanskritTerm: 'Hastakara (हस्ताकार)',
    category: 'Hand Shapes',
    summary: 'Classification of hands based on the proportion of the palm and length of fingers into Earth, Air, Water, and Fire types.',
    locationDescription: 'Overall structural anatomy of palm and fingers.',
    significance: 'Establishes fundamental personality archetype, emotional temperament, and natural cognitive orientation.',
    variations: [
      { type: 'Earth Hand (Square Palm, Short Fingers)', meaning: 'Grounded, practical, dependable, loves nature, physically active, honest.' },
      { type: 'Air Hand (Square Palm, Long Fingers)', meaning: 'Intellectual, communicative, analytical, loves ideas, writing, and research.' },
      { type: 'Water Hand (Rectangular Palm, Long Fingers)', meaning: 'Sensitive, highly intuitive, artistic, empathetic, imaginative, deep feeler.' },
      { type: 'Fire Hand (Rectangular Palm, Short Fingers)', meaning: 'Energetic, dynamic, adventurous, natural leader, passionate, decisive.' }
    ],
    tips: [
      'Observe finger flexibility: Flexible fingers indicate mental adaptability; firm fingers indicate steadfast focus.'
    ]
  },

  // Sacred Markings
  {
    id: 'sacred-symbols',
    title: 'Sacred Markings & Symbols',
    sanskritTerm: 'Hastarekha Subha Chinha (शुभ चिन्ह)',
    category: 'Sacred Markings',
    summary: 'Auspicious yogas and sacred symbols found on the palm such as Trishul, Lotus, Fish, Star, Triangle, and Swastik.',
    locationDescription: 'Distinct line formations or markings appearing on mounts or line endings.',
    significance: 'In Samudrika Shastra, rare symbols indicate extraordinary divine grace, spiritual destiny, and unexpected life protection.',
    variations: [
      { type: 'Trishul (Trident Symbol)', meaning: 'Grace of Lord Shiva. Brings supreme victory, high authority, and spiritual power.' },
      { type: 'Matsya (Fish Symbol)', meaning: 'Wisdom, high repute, spiritual protection, prosperity, and auspicious foreign travels.' },
      { type: 'Padma (Lotus Symbol)', meaning: 'Pure spiritual awakening, detachment from worldly vices, honor, and Mahalakshmi grace.' },
      { type: 'Trikona (Triangle Symbol)', meaning: 'Protection against adversity, sharp intellect, scientific/occult wisdom.' },
      { type: 'Mystical Cross (Between Head & Heart Line)', meaning: 'Strong intuitive psychic gifts, deep interest in philosophy, astrology, and spiritual mysteries.' }
    ],
    tips: [
      'Auspicious marks shine brightest when accompanied by righteous living (Dharma) and daily prayer.'
    ]
  }
];
