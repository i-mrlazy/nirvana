import { Deity } from '../types';

export const DEITIES_DATA: Deity[] = [
  {
    id: 'shiva',
    slug: 'shiva',
    name: 'Shiva',
    devanagariName: 'शिव',
    title: 'The Auspicious One',
    epithet: 'Mahadev, Nataraja, Bholenath',
    description: 'Experience the divine grace of Mahadev, the destroyer of ego and the transformer within the sacred Trimurti.',
    fullBiography: 'Lord Shiva is one of the principal deities of Hinduism, representing the supreme cosmic consciousness, meditation, asceticism, and the transformative cycle of time and destruction of delusion. Resting upon Mount Kailash, he embodies both serene stillness and dynamic cosmic energy (Tandava).',
    image: '/images/shiva.jpg',
    category: 'Trimurti',
    mantraIds: ['om-namah-shivaya', 'mahamrityunjaya-mantra'],
    stotraIds: ['shiv-tandav-stotram', 'lingashtakam', 'shiva-panchakshara'],
    names108Sample: [
      { devanagari: 'ॐ शिवाय नमः', transliteration: 'Om Shivaya Namah', meaning: 'The Always Pure One' },
      { devanagari: 'ॐ महेश्वराय नमः', transliteration: 'Om Maheshwaraya Namah', meaning: 'The Great Lord' },
      { devanagari: 'ॐ शम्भवे नमः', transliteration: 'Om Shambhave Namah', meaning: 'The Bestower of Happiness' },
      { devanagari: 'ॐ पशुपतये नमः', transliteration: 'Om Pashupataye Namah', meaning: 'Lord of All Living Beings' },
      { devanagari: 'ॐ नीलकण्ठाय नमः', transliteration: 'Om Neelakanthaya Namah', meaning: 'The Blue-Throated Redeemer' }
    ],
    stories: [
      { id: 'why-shiva-third-eye', title: 'The Third Eye of Shiva', teaser: 'Shiva\'s third eye represents the eye of wisdom beyond dualistic perception...' },
      { id: 'samudra-manthan-halahala', title: 'Drinking the Halahala Poison', teaser: 'How Mahadev swallowed the lethal cosmic poison to protect all creation...' }
    ],
    festivals: [
      { name: 'Maha Shivratri', dateInfo: '14th day of Krishna Paksha in Phalguna', description: 'The great night of Shiva celebrating cosmic union and spiritual awakening.' },
      { name: 'Pradosh Vrat', dateInfo: 'Bi-monthly on 13th Tithi', description: 'Auspicious bi-weekly twilight fast dedicated to Shiva.' }
    ],
    temples: [
      { name: 'Kashi Vishwanath', location: 'Varanasi, Uttar Pradesh', importance: 'One of the most sacred Jyotirlingas on the banks of Ganges.' },
      { name: 'Kedarnath Temple', location: 'Rudraprayag, Uttarakhand', importance: 'High-altitude Himalayan Jyotirlinga surrounded by snow peaks.' },
      { name: 'Somnath Temple', location: 'Prabhas Patan, Gujarat', importance: 'First among the twelve holy Jyotirlinga shrines.' }
    ],
    symbols: [
      { name: 'Damru', iconName: 'music_note', meaning: 'The primordial drum that generated the cosmic sound of creation (AUM).' },
      { name: 'Ganga', iconName: 'water_drop', meaning: 'The celestial river flowing gracefully from Mahadev\'s matted locks.' },
      { name: 'Rudraksha', iconName: 'nature', meaning: 'Tears of compassion that bestow spiritual protection and healing.' },
      { name: 'Vasuki', iconName: 'pest_control_rodent', meaning: 'The cosmic serpent around his neck, symbolizing mastery over ego and time.' }
    ],
    family: [
      { name: 'Goddess Parvati', relation: 'Divine Consort', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop' },
      { name: 'Lord Ganesha', relation: 'Son, Wisdom God', image: 'https://images.unsplash.com/photo-1567591377030-de198b9d5186?q=80&w=400&auto=format&fit=crop', deityId: 'ganesha' },
      { name: 'Nandi', relation: 'Divine Vehicle & Devotee', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
      { name: 'Lord Kartikeya', relation: 'Son, War General', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f22?q=80&w=400&auto=format&fit=crop' }
    ],
    relatedDeityIds: ['hanuman', 'ganesha', 'parvati', 'vishnu']
  },
  {
    id: 'hanuman',
    slug: 'hanuman',
    name: 'Hanuman',
    devanagariName: 'हनुमान्',
    title: 'The Embodiment of Devotion',
    epithet: 'Bajrangbali, Pawanputra, Anjaneya',
    description: 'Immerse yourself in the strength, selfless service, courage, and unconditional devotion to Lord Rama.',
    fullBiography: 'Lord Hanuman is the divine vanara hero of the Ramayana, revered across India as the supreme exemplar of Bhakti (devotion), physical power, intellect, and humility. Born to Anjana and Kesari through the blessing of Vayu (Wind God), Hanuman is an avatar of Shiva.',
    image: '/images/hanuman.jpg',
    category: 'Vedic',
    mantraIds: ['hanuman-chalisa', 'bajrang-baan', 'hanuman-ashtak'],
    stotraIds: ['hanuman-chalisa', 'sundarkand'],
    names108Sample: [
      { devanagari: 'ॐ आञ्जनेयाय नमः', transliteration: 'Om Anjaneyaya Namah', meaning: 'Son of Anjana' },
      { devanagari: 'ॐ महावीरय नमः', transliteration: 'Om Mahaviraya Namah', meaning: 'Great Hero of Valor' },
      { devanagari: 'ॐ मारुतात्मजाय नमः', transliteration: 'Om Marutatmajaya Namah', meaning: 'Son of the Wind' },
      { devanagari: 'ॐ रामदूताय नमः', transliteration: 'Om Ramadutaya Namah', meaning: 'Trusted Messenger of Rama' }
    ],
    stories: [
      { id: 'why-hanuman-devotee', title: 'Why Hanuman is the Ultimate Devotee', teaser: 'When Hanuman tore open his chest to reveal Rama and Sita inside his heart...' },
      { id: 'hanuman-lifting-dronagiri', title: 'Lifting the Dronagiri Mountain', teaser: 'How Hanuman carried an entire mountain to deliver the life-saving Sanjeevani herb...' }
    ],
    festivals: [
      { name: 'Hanuman Jayanti', dateInfo: 'Full moon day (Purnima) of Chaitra', description: 'Celebration of Lord Hanuman\'s birth with collective Chalisa recitations.' }
    ],
    temples: [
      { name: 'Sankat Mochan Temple', location: 'Varanasi, Uttar Pradesh', importance: 'Founded by Saint Tulsidas, renowned for relieving hardships.' },
      { name: 'Hanumangarhi', location: 'Ayodhya, Uttar Pradesh', importance: 'Historic hill shrine overlooking Ayodhya city.' },
      { name: 'Salasar Balaji', location: 'Churu, Rajasthan', importance: 'Famous shrine dedicated to Balaji Hanuman.' }
    ],
    symbols: [
      { name: 'Gada (Mace)', iconName: 'shield', meaning: 'Symbol of moral sovereignty and immense physical strength.' },
      { name: 'Sanjeevani', iconName: 'nature', meaning: 'Life-restoring divine herb representing hope and healing.' },
      { name: 'Ram Nam', iconName: 'favorite', meaning: 'The name of Lord Rama inscribed in every cell of his being.' }
    ],
    family: [
      { name: 'Mata Anjana', relation: 'Mother', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop' },
      { name: 'Kesari', relation: 'Father', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
      { name: 'Vayu Deva', relation: 'Spiritual Father / Wind God', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f22?q=80&w=400&auto=format&fit=crop' }
    ],
    relatedDeityIds: ['shiva', 'rama', 'sita']
  },
  {
    id: 'ganesha',
    slug: 'ganesha',
    name: 'Ganesha',
    devanagariName: 'गणेश',
    title: 'The Remover of Obstacles',
    epithet: 'Vighnaharta, Ganapati, Vinayaka',
    description: 'Invoke the lord of new beginnings, intellect, wisdom, and auspiciousness before any vital journey.',
    fullBiography: 'Lord Ganesha is the elephant-headed deity invoked at the start of every sacred rite, journey, or new enterprise. He represents supreme intellect, discernment (Buddhi), and the harmony between human and cosmic wisdom.',
    image: '/images/ganesha.jpg',
    category: 'Ganapati',
    mantraIds: ['ganesh-mantra', 'om-gan-ganapataye'],
    stotraIds: ['sankata-nashana-ganesha-stotram', 'ganesh-atharvashirsha'],
    names108Sample: [
      { devanagari: 'ॐ सुमुखाय नमः', transliteration: 'Om Sumukhaya Namah', meaning: 'The One with a Gracious Face' },
      { devanagari: 'ॐ एकदन्ताय नमः', transliteration: 'Om Ekadantaya Namah', meaning: 'The Single-Tusked One' },
      { devanagari: 'ॐ कपिलाय नमः', transliteration: 'Om Kapilaya Namah', meaning: 'The Golden Complexioned' },
      { devanagari: 'ॐ लम्बोदराय नमः', transliteration: 'Om Lambodaraya Namah', meaning: 'The Large-Bellied Lord of Universe' }
    ],
    stories: [
      { id: 'why-ganesha-elephant-head', title: 'Why Ganesha Has an Elephant Head', teaser: 'The profound symbol of intellect and duty created by Goddess Parvati...' },
      { id: 'ganesha-circumambulating-parents', title: 'Circling the Cosmic Parents', teaser: 'How Ganesha proved that one\'s parents are the entire universe...' }
    ],
    festivals: [
      { name: 'Ganesh Chaturthi', dateInfo: 'Bhadrapada Shukla Chaturthi', description: 'Grand 10-day festival celebrating Vinayaka\'s presence.' },
      { name: 'Sankashti Chaturthi', dateInfo: 'Monthly 4th Tithi after Full Moon', description: 'Monthly fasting day to eliminate all obstacles.' }
    ],
    temples: [
      { name: 'Siddhivinayak Temple', location: 'Mumbai, Maharashtra', importance: 'World-famous shrine where prayers are fulfilled.' },
      { name: 'Ashtavinayak Temples', location: 'Maharashtra State', importance: 'Eight ancient self-manifested (Swayambhu) Ganesha shrines.' }
    ],
    symbols: [
      { name: 'Modak', iconName: 'cake', meaning: 'Sweet reward of spiritual wisdom and self-realization.' },
      { name: 'Pasha (Noose)', iconName: 'link', meaning: 'Tool to draw devotees closer to truth and restrain desires.' },
      { name: 'Mooshak (Mouse)', iconName: 'pest_control', meaning: 'Mastery over restlessness, desires, and ego.' }
    ],
    family: [
      { name: 'Lord Shiva', relation: 'Father', image: '/images/shiva.jpg', deityId: 'shiva' },
      { name: 'Goddess Parvati', relation: 'Mother', image: '/images/parvati.jpg' },
      { name: 'Lord Kartikeya', relation: 'Brother', image: '/images/kartikey.jpg' }
    ],
    relatedDeityIds: ['shiva', 'parvati', 'lakshmi']
  },
  {
    id: 'lakshmi',
    slug: 'lakshmi',
    name: 'Lakshmi',
    devanagariName: 'लक्ष्मी',
    title: 'Goddess of Wealth & Grace',
    epithet: 'Mahalakshmi, Shri, Kamala',
    description: 'Bestower of spiritual and material abundance, purity, auspiciousness, and righteous prosperity.',
    fullBiography: 'Goddess Lakshmi is the divine consort of Lord Vishnu and the deity governing wealth, fortune, royal majesty, fertility, and inner light. Emerging from the Churning of the Ocean (Samudra Manthan) seated on a blooming lotus, she grants Sri (auspicious radiance).',
    image: '/images/lakshmi.jpg',
    category: 'Tridevi',
    mantraIds: ['lakshmi-mantra', 'sree-suktam'],
    stotraIds: ['kanakadhara-stotram', 'lakshmi-ashtottara'],
    names108Sample: [
      { devanagari: 'ॐ प्रकृत्यै नमः', transliteration: 'Om Prakrityai Namah', meaning: 'Personification of Nature' },
      { devanagari: 'ॐ विक्रत्यै नमः', transliteration: 'Om Vikrityai Namah', meaning: 'Multi-Faceted Divine Energy' },
      { devanagari: 'ॐ विद्यायै नमः', transliteration: 'Om Vidyayai Namah', meaning: 'Embodiment of Knowledge' },
      { devanagari: 'ॐ पद्मायै नमः', transliteration: 'Om Padmayai Namah', meaning: 'The Lotus Goddess' }
    ],
    stories: [
      { id: 'samudra-manthan-lakshmi', title: 'The Churning of the Ocean', teaser: 'How Mahalakshmi emerged from the ocean of milk to choose Lord Vishnu...' },
      { id: 'kanakadhara-story', title: 'Adi Shankara and Kanakadhara', teaser: 'How Saint Shankara composed hymns causing a rain of golden amlas...' }
    ],
    festivals: [
      { name: 'Diwali (Lakshmi Pujan)', dateInfo: 'Kartik Amavasya', description: 'Festival of lights welcoming Lakshmi into prosperous homes.' },
      { name: 'Varalakshmi Vratam', dateInfo: 'Friday before Shravana Purnima', description: 'Sacred fast performed by householders for family well-being.' }
    ],
    temples: [
      { name: 'Mahalakshmi Temple', location: 'Kolhapur, Maharashtra', importance: 'Major Shakti Peetha dedicated to Karveer Nivasini Lakshmi.' },
      { name: 'Sripuram Golden Temple', location: 'Vellore, Tamil Nadu', importance: 'Gilded temple set in a star-shaped spiritual park.' }
    ],
    symbols: [
      { name: 'Padma (Lotus)', iconName: 'eco', meaning: 'Purity, detachment, and blooming wisdom in worldly waters.' },
      { name: 'Gold Coins', iconName: 'monetization_on', meaning: 'Righteous wealth earned through ethical labor (Dharma).' },
      { name: 'Elephants (Gaja)', iconName: 'water', meaning: 'Royal majesty, strength, and continuous showers of grace.' }
    ],
    family: [
      { name: 'Lord Vishnu', relation: 'Divine Consort', image: '/images/vishnu.jpg' }
    ],
    relatedDeityIds: ['vishnu', 'ganesha', 'saraswati']
  },
  {
    id: 'krishna',
    slug: 'krishna',
    name: 'Krishna',
    devanagariName: 'कृष्ण',
    title: 'The Supreme Teacher & Lover of Souls',
    epithet: 'Govinda, Gopala, Vasudeva, Yogeshwara',
    description: 'The eighth avatar of Vishnu who delivered the Bhagavad Gita and taught the path of selfless duty (Karma Yoga).',
    fullBiography: 'Lord Krishna is one of the most beloved deities in Sanatana Dharma. Born in Mathura and raised in Vrindavan, Krishna\'s life encompasses enchanted childhood pastimes, the destruction of tyrants, the timeless songs of divine love with Radha, and the philosophical peak of the Bhagavad Gita.',
    image: '/images/krishna.jpg',
    category: 'Avatara',
    mantraIds: ['hare-krishna-mahantra', 'krishna-moola-mantra'],
    stotraIds: ['madhurashtakam', 'bhagavad-gita-summary'],
    names108Sample: [
      { devanagari: 'ॐ कृष्णाय नमः', transliteration: 'Om Krishnaya Namah', meaning: 'The All-Attractive One' },
      { devanagari: 'ॐ गोविन्दाय नमः', transliteration: 'Om Govindaya Namah', meaning: 'Protector of Cows and Earth' },
      { devanagari: 'ॐ गोपालाय नमः', transliteration: 'Om Gopalaya Namah', meaning: 'Cowherd Friend of All' },
      { devanagari: 'ॐ योगेश्वराय नमः', transliteration: 'Om Yogeshwaraya Namah', meaning: 'Master of All Yoga' }
    ],
    stories: [
      { id: 'why-krishna-lifted-govardhan', title: 'Why Krishna Lifted Mount Govardhan', teaser: 'Protecting the villagers of Vrindavan with a single pinky finger...' },
      { id: 'krishna-gita-sermon', title: 'The Message of the Bhagavad Gita', teaser: 'Impartial wisdom delivered on the battlefield of Kurukshetra...' }
    ],
    festivals: [
      { name: 'Janmashtami', dateInfo: 'Bhadrapada Krishna Ashtami', description: 'Midnight birth celebration of Lord Krishna with music and fasts.' },
      { name: 'Holi', dateInfo: 'Phalguna Purnima', description: 'Festival of vibrant colors celebrating divine love in Vrindavan.' }
    ],
    temples: [
      { name: 'Banke Bihari Temple', location: 'Vrindavan, Uttar Pradesh', importance: 'Heart of Radha-Krishna devotion in Braj.' },
      { name: 'Dwarkadhish Temple', location: 'Dwarka, Gujarat', importance: 'Historic kingdom temple on the western coast.' },
      { name: 'Jagannath Puri', location: 'Puri, Odisha', importance: 'Grand chariot festival (Ratha Yatra) temple.' }
    ],
    symbols: [
      { name: 'Bansi (Flute)', iconName: 'graphic_eq', meaning: 'The divine call awakening soul consciousness.' },
      { name: 'Peacock Feather', iconName: 'auto_awesome', meaning: 'Absorption of all colors into divine grace.' },
      { name: 'Cow', iconName: 'pets', meaning: 'Gentleness, motherly care, and sacred earth.' }
    ],
    family: [
      { name: 'Goddess Radha', relation: 'Eternal Divine Energy / Beloved', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop' },
      { name: 'Vasudeva & Devaki', relation: 'Birth Parents', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nanda & Yashoda', relation: 'Foster Parents', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop' }
    ],
    relatedDeityIds: ['vishnu', 'radha', 'rama']
  },
  {
    id: 'durga',
    slug: 'durga',
    name: 'Durga',
    devanagariName: 'दुर्गा',
    title: 'The Invincible Divine Mother',
    epithet: 'Mahishasuramardini, Chandika, Jagadamba',
    description: 'The supreme feminine energy (Shakti) shielding devotees from negativity, fear, and cosmic ignorance.',
    fullBiography: 'Goddess Durga represents the unified warrior strength of all divine forces created to defeat the demon Mahishasura. Riding a lion and bearing ten arms with celestial weapons, Durga radiates fierce maternal protection and unyielding justice.',
    image: '/images/durga.jpg',
    category: 'Tridevi',
    mantraIds: ['durga-mantra', 'navarna-mantra'],
    stotraIds: ['durga-saptashati', 'mahishasura-mardini-stotram'],
    names108Sample: [
      { devanagari: 'ॐ दुर्गायै नमः', transliteration: 'Om Durgayai Namah', meaning: 'The Invincible One' },
      { devanagari: 'ॐ शिवायै नमः', transliteration: 'Om Shivayai Namah', meaning: 'The Auspicious Mother' },
      { devanagari: 'ॐ जगदम्बिकायै नमः', transliteration: 'Om Jagadambikayai Namah', meaning: 'Mother of the Universe' }
    ],
    stories: [
      { id: 'story-of-mahishasuramardini', title: 'The Victory Over Mahishasura', teaser: 'How Divine Shakti restored cosmic balance during Navratri...' }
    ],
    festivals: [
      { name: 'Navratri', dateInfo: 'Ashvina Shukla Pratipada to Navami', description: 'Nine nights honoring Navadurga avatars.' },
      { name: 'Dussehra / Vijayadashami', dateInfo: 'Ashvina Shukla Dashami', description: 'Triumph of righteousness over evil forces.' }
    ],
    temples: [
      { name: 'Kamakhya Temple', location: 'Guwahati, Assam', importance: 'Supreme Tantric Shakti Peetha shrine.' },
      { name: 'Vaishno Devi', location: 'Katra, Jammu & Kashmir', importance: 'Sacred cave shrine in the Trikuta mountains.' }
    ],
    symbols: [
      { name: 'Lion (Simha)', iconName: 'pets', meaning: 'Mastery over unrestrained power and primal instincts.' },
      { name: 'Trishul (Trident)', iconName: 'flash_on', meaning: 'Removal of physical, mental, and spiritual afflictions.' }
    ],
    family: [
      { name: 'Lord Shiva', relation: 'Divine Consort', image: '/images/shiva.jpg', deityId: 'shiva' }
    ],
    relatedDeityIds: ['shiva', 'lakshmi', 'saraswati']
  },
  {
    id: 'vishnu',
    slug: 'vishnu',
    name: 'Vishnu',
    devanagariName: 'विष्णु',
    title: 'The Preserver of the Universe',
    epithet: 'Narayana, Hari, Madhava',
    description: 'The supreme guardian who reincarnates whenever righteousness wanes to restore cosmic order.',
    fullBiography: 'Lord Vishnu is the supreme preserver within the Hindu Trinity. Reclining upon the thousand-headed serpent Adishesha in the cosmic ocean of milk (Kshira Sagara), Vishnu descends through Dashavatara (10 avatars) to sustain cosmic law (Dharma).',
    image: '/images/vishnu.jpg',
    category: 'Trimurti',
    mantraIds: ['om-namo-narayanaya', 'vishnu-moola-mantra'],
    stotraIds: ['vishnu-sahasranama'],
    names108Sample: [
      { devanagari: 'ॐ विष्णवे नमः', transliteration: 'Om Vishnave Namah', meaning: 'The All-Pervading Lord' },
      { devanagari: 'ॐ जिष्णवे नमः', transliteration: 'Om Jishnave Namah', meaning: 'The Ever-Victorious' },
      { devanagari: 'ॐ नारायणाय नमः', transliteration: 'Om Narayanaya Namah', meaning: 'Refuge of All Souls' }
    ],
    stories: [
      { id: 'story-of-narasimha', title: 'The Story of Narasimha Avatar', teaser: 'Protecting the young devotee Prahlada from the tyrant Hiranyakashipu...' }
    ],
    festivals: [
      { name: 'Ekadashi Vrat', dateInfo: 'Bi-monthly on 11th Tithi', description: 'Sacred fast dedicated to Lord Vishnu for mind detoxification.' }
    ],
    temples: [
      { name: 'Tirumala Venkateswara', location: 'Tirupati, Andhra Pradesh', importance: 'Sacred shrine of Balaji on the Seven Hills.' },
      { name: 'Padmanabhaswamy Temple', location: 'Thiruvananthapuram, Kerala', importance: 'Historic temple housing Vishnu in Ananthasayana posture.' }
    ],
    symbols: [
      { name: 'Sankha (Conch)', iconName: 'volume_up', meaning: 'Sound of primeval creation generating victory over chaos.' },
      { name: 'Sudarshana Chakra', iconName: 'rotate_right', meaning: 'Wheel of time and supreme protection.' }
    ],
    family: [
      { name: 'Goddess Lakshmi', relation: 'Consort', image: '/images/lakshmi.jpg', deityId: 'lakshmi' }
    ],
    relatedDeityIds: ['lakshmi', 'krishna', 'rama', 'shiva']
  },
  {
    id: 'saraswati',
    slug: 'saraswati',
    name: 'Saraswati',
    devanagariName: 'सरस्वती',
    title: 'Goddess of Knowledge & Arts',
    epithet: 'Sharada, Veenapani, Vani',
    description: 'Divine inspiration for students, artists, scholars, and spiritual seekers yearning for pure speech and wisdom.',
    fullBiography: 'Goddess Saraswati is the deity of speech (Vak), wisdom, music, arts, and learning. Clad in pristine white garments seated on a white lotus or swan, she holds the Veena, representing tuning one\'s mind to cosmic rhythm.',
    image: '/images/saraswati.jpg',
    category: 'Tridevi',
    mantraIds: ['saraswati-mantra', 'gayatri-mantra'],
    stotraIds: ['saraswati-stotram'],
    names108Sample: [
      { devanagari: 'ॐ सरस्वती नमः', transliteration: 'Om Saraswatyai Namah', meaning: 'Flowing Stream of Knowledge' }
    ],
    stories: [
      { id: 'saraswati-creation-sound', title: 'The Creation of Vedic Sound', teaser: 'How Saraswati brought order and melody to cosmic thought...' }
    ],
    festivals: [
      { name: 'Vasant Panchami', dateInfo: 'Magha Shukla Panchami', description: 'Festival welcoming spring and honoring Saraswati with yellow offerings.' }
    ],
    temples: [
      { name: 'Gnana Saraswati Temple', location: 'Basar, Telangana', importance: 'Renowned shrine where children begin their education (Aksharabhyasam).' }
    ],
    symbols: [
      { name: 'Veena', iconName: 'music_note', meaning: 'Harmony of mind, body, and intellect tuned to higher truth.' },
      { name: 'Pustaka (Book)', iconName: 'menu_book', meaning: 'Vedic scripture and objective knowledge.' }
    ],
    family: [],
    relatedDeityIds: ['lakshmi', 'durga', 'ganesha']
  }
];
