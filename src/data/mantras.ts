import { Mantra } from '../types';

export const MANTRAS_DATA: Mantra[] = [
  {
    id: 'hanuman-chalisa',
    slug: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    devanagariTitle: 'हनुमान चालीसा',
    subtitle: 'A 40-verse hymn in praise of Lord Hanuman authored by Goswami Tulsidas.',
    deityId: 'hanuman',
    category: 'Chalisa',
    durationMinutes: '09:30',
    durationSeconds: 570,
    description: 'The Hanuman Chalisa is one of the most revered and chanted devotional texts in Hinduism. Composed in Awadhi Hindi by Saint Tulsidas in the 16th century, reciting these 40 verses invokes mental fortitude, divine protection, physical vitality, and spiritual liberation.',
    benefits: [
      'Overcomes fear, anxiety, and negative psychological influences.',
      'Instills courage, self-confidence, and steadfast focus.',
      'Protects from afflictions and unforeseen obstacles.',
      'Deepens single-minded devotion to Lord Rama and Sri Hanuman.'
    ],
    traditionalContext: 'Traditionally recited daily during morning or evening prayers, particularly on Tuesdays and Saturdays. Devotees chant with a pure heart after bathing.',
    sources: ['Ramcharitmanas tradition by Goswami Tulsidas (c. 1575 CE)'],
    tags: ['Hanuman', 'Tuesday', 'Protection', 'Courage', 'Chanting'],
    relatedMantraIds: ['bajrang-baan', 'hanuman-ashtak', 'om-namah-shivaya'],
    relatedDeityIds: ['hanuman', 'shiva', 'rama'],
    relatedStoryIds: ['why-hanuman-devotee', 'hanuman-lifting-dronagiri'],
    verses: [
      {
        id: 'hc-doha-1',
        number: 1,
        verseType: 'doha',
        devanagari: 'श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥',
        transliteration: 'śrīguru carana saroja raja, nija manu mukuru sudhāri |\nbaranau raghubara bimala jasu, jo dāyaku phala cāri ||',
        englishTranslation: 'Cleansing the mirror of my mind with the dust from the Lotus-feet of Divine Guru, I describe the unblemished glory of Lord Rama, which bestows four fruits of Righteousness (Dharma), Wealth (Artha), Pleasure (Kama), and Liberation (Moksha).',
        hindiMeaning: 'अपने गुरु के चरण कमलों की धूलि से अपने मन रूपी दर्पण को पवित्र करके, मैं श्री रघुवीर के उस निर्मल यश का वर्णन करता हूँ जो धर्म, अर्थ, काम और मोक्ष रूपी चारों फल प्रदान करने वाला है।',
        explanation: 'The opening Doha sets an attitude of humility. The "mirror of the mind" must be wiped clean of ego before embarking on sacred chanting.',
        timestampStart: 0,
        timestampEnd: 15
      },
      {
        id: 'hc-doha-2',
        number: 2,
        verseType: 'doha',
        devanagari: 'बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥',
        transliteration: 'buddhihīna tanu jānike, sumirau pavana-kumāra |\nbala buddhi bidyā dehu mohi, harahu kalesa bikāra ||',
        englishTranslation: 'Considering myself to be devoid of wisdom, I remember you, O Son of the Wind-God. Bestow upon me strength, intellect, and spiritual knowledge, and remove my afflictions and impurities.',
        hindiMeaning: 'हे पवनपुत्र! मैं स्वयं को शरीर और बुद्धि से हीन जानकर आपका स्मरण करता हूँ। मुझे बल, बुद्धि और विद्या प्रदान कीजिए तथा मेरे समस्त क्लेशों व दुर्गुणों को दूर कीजिए।',
        explanation: 'A sincere prayer for internal transformation—asking for physical energy (Bala), discrimination (Buddhi), and true knowledge (Vidya).',
        timestampStart: 15,
        timestampEnd: 30
      },
      {
        id: 'hc-chaupai-1',
        number: 3,
        verseType: 'chaupai',
        devanagari: 'जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥1॥',
        transliteration: 'jaya hanumāna jñāna guna sāgara |\njaya kapīsa tihu loka ujāgara ||1||',
        englishTranslation: 'Victory to Lord Hanuman, the ocean of divine wisdom and virtues! Victory to the Monkey Lord who illuminates all three cosmic realms!',
        hindiMeaning: 'ज्ञान और गुणों के सागर श्री हनुमान जी की जय हो! तीनों लोकों में अपनी कीर्ति फैलाने वाले कपिश्रेष्ठ की जय हो!',
        explanation: 'Verse 1 begins the 40 Chaupais celebrating Hanuman as the infinite ocean of virtuous qualities and cosmic illumination.',
        timestampStart: 30,
        timestampEnd: 42
      },
      {
        id: 'hc-chaupai-2',
        number: 4,
        verseType: 'chaupai',
        devanagari: 'राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा॥2॥',
        transliteration: 'rāma dūta atulita bala dhāmā |\nañjani-putra pavanasuta nāmā ||2||',
        englishTranslation: 'You are the emissary of Lord Rama, the abode of incomparable strength, known as Anjani\'s son and the Son of the Wind God.',
        hindiMeaning: 'आप श्रीराम के निष्ठावान दूत और अतुलनीय बल के धाम हैं। आप माता अंजनी के पुत्र तथा पवनसुत नाम से विख्यात हैं।',
        explanation: 'Highlights Hanuman\'s cosmic heritage and his supreme duty as Sri Rama\'s trusted envoy.',
        timestampStart: 42,
        timestampEnd: 54
      },
      {
        id: 'hc-chaupai-3',
        number: 5,
        verseType: 'chaupai',
        devanagari: 'महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥3॥',
        transliteration: 'mahābīra bikrama bajarangī |\nkumati nivāra sumati ke sangī ||3||',
        englishTranslation: 'O Great Hero of thunderbolt-like strength! You dispel foolish thoughts and guide those who cherish pure wisdom.',
        hindiMeaning: 'आप महावीर, अतिशय पराक्रमी और वज्र के समान कठोर अंग वाले हैं। आप कुबुद्धि को दूर करने वाले और सुबुद्धि के सदा संगी हैं।',
        explanation: 'Bajarangi means one whose body is as resilient as a diamond (Vajra). He converts negative mind-states (Kumati) into noble understanding (Sumati).',
        timestampStart: 54,
        timestampEnd: 66
      },
      {
        id: 'hc-chaupai-4',
        number: 6,
        verseType: 'chaupai',
        devanagari: 'कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥4॥',
        transliteration: 'kanchana barana birāja subesā |\nkānana kundala kuncita kesā ||4||',
        englishTranslation: 'Your complexion shines like pure gold, adorned in majestic attire, wearing elegant earrings and adorned with beautiful curly locks.',
        hindiMeaning: 'आपका वर्ण स्वर्ण के समान दैदिप्यमान है। आप सुंदर वस्त्रों से सुशोभित हैं। आपके कानों में कुंडल और केश घुंघराले हैं।',
        explanation: 'Reflects Hanuman\'s divine radiance and graceful spiritual form.',
        timestampStart: 66,
        timestampEnd: 78
      },
      {
        id: 'hc-chaupai-20',
        number: 20,
        verseType: 'chaupai',
        devanagari: 'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हारे तेते॥20॥',
        transliteration: 'durgama kāja jagata ke jete |\nsugama anugraha tumhāre tete ||20||',
        englishTranslation: 'Whatever arduous or impossible tasks exist in this world become effortlessly achievable by your divine grace.',
        hindiMeaning: 'इस संसार में जितने भी कठिन से कठिन कार्य हैं, वे आपकी कृपा से अत्यंत सुलभ और सरल हो जाते हैं।',
        explanation: 'A celebrated verse chanted when facing immense challenges or life milestones.',
        timestampStart: 180,
        timestampEnd: 195
      },
      {
        id: 'hc-chaupai-36',
        number: 36,
        verseType: 'chaupai',
        devanagari: 'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥36॥',
        transliteration: 'sankata katai mitai saba pīrā |\njo sumirai hanumata balabīrā ||36||',
        englishTranslation: 'All hardship is severed and all pain is dissolved for one who remembers the valiant and powerful Lord Hanuman.',
        hindiMeaning: 'जो महावीर हनुमान जी का निरंतर स्मरण करता है, उसके समस्त संकट कट जाते हैं और सारी पीड़ा मिट जाती है।',
        explanation: 'Affirms the healing power of sincere remembrance (Smarana).',
        timestampStart: 360,
        timestampEnd: 375
      }
    ]
  },
  {
    id: 'gayatri-mantra',
    slug: 'gayatri-mantra',
    title: 'Gayatri Mantra',
    devanagariTitle: 'गायत्री मंत्र',
    subtitle: 'The universal Vedic prayer illuminating the human intellect with divine light.',
    deityId: 'saraswati',
    category: 'Mantra',
    durationMinutes: '04:15',
    durationSeconds: 255,
    description: 'Found in the Rigveda (3.62.10), the Gayatri Mantra is an ancient solar prayer addressed to Savitur (the divine source of all existence). It prays for the illumination of our higher intellect so we may discern eternal truth from transient delusion.',
    benefits: [
      'Enhances mental clarity, concentration, and intuitive insight.',
      'Purifies subtle energy channels (Nadis) and balances the mind.',
      'Bestows spiritual vigor and inner calm.'
    ],
    traditionalContext: 'Traditionally chanted during Sandhyavandanam (dawn, noon, and dusk) or during morning meditation facing east.',
    sources: ['Rigveda Samhita (Mandala 3, Sukta 62, Mantra 10)'],
    tags: ['Vedic', 'Rigveda', 'Intellect', 'Light', 'Meditation'],
    relatedMantraIds: ['om-namah-shivaya', 'mahamrityunjaya-mantra'],
    relatedDeityIds: ['saraswati', 'shiva', 'vishnu'],
    relatedStoryIds: ['saraswati-creation-sound'],
    verses: [
      {
        id: 'gm-v1',
        number: 1,
        verseType: 'mantra',
        devanagari: 'ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात्॥',
        transliteration: 'om bhūr bhuvaḥ svaḥ |\ntat savitur vareṇyaṁ |\nbhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        englishTranslation: 'We meditate upon the spiritual radiance of that adorable Supreme Creator (Savitur). May That Divine Light illuminate and guide our intellect toward ultimate truth.',
        hindiMeaning: 'हम उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा का ध्यान करते हैं। वह परमात्मा हमारी बुद्धि को सन्मार्ग में प्रेरित करे।',
        explanation: 'Breakdown: Om = primordial sound; Bhur, Bhuvah, Swaha = physical, astral, and celestial realms; Tat Savitur Varenyam = that divine source worthy of worship; Bhargo Devasya Dhimahi = we meditate on that luminous glory; Dhiyo Yo Nah Prachodayat = may that divine force awaken our intellect.',
        timestampStart: 0,
        timestampEnd: 60
      }
    ]
  },
  {
    id: 'mahamrityunjaya-mantra',
    slug: 'mahamrityunjaya-mantra',
    title: 'Mahamrityunjaya Mantra',
    devanagariTitle: 'महामृत्युंजय मंत्र',
    subtitle: 'The great death-conquering and healing mantra from the Rigveda.',
    deityId: 'shiva',
    category: 'Mantra',
    durationMinutes: '05:45',
    durationSeconds: 345,
    description: 'Also known as the Tryambakam Mantra, this profound verse addressed to Lord Shiva (Tryambaka, the Three-Eyed One) prays for liberation from the cycle of attachment, physical ailments, and spiritual death, just as a ripe cucumber naturally detaches from its vine.',
    benefits: [
      'Promotes deep physical healing, vitality, and longevity.',
      'Dissolves fear of death, disease, and emotional bondage.',
      'Sustains peacefulness during intense life transitions.'
    ],
    traditionalContext: 'Chanted 108 times during times of health recovery, birthdays, or deep night contemplation.',
    sources: ['Rigveda (7.59.12), Yajurveda (Taittiriya Samhita)'],
    tags: ['Shiva', 'Healing', 'Longevity', 'Protection', 'Mantra'],
    relatedMantraIds: ['om-namah-shivaya', 'shiv-tandav-stotram'],
    relatedDeityIds: ['shiva'],
    relatedStoryIds: ['why-shiva-third-eye'],
    verses: [
      {
        id: 'mm-v1',
        number: 1,
        verseType: 'mantra',
        devanagari: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥',
        transliteration: 'om tryambakaṁ yajāmahe sugandhiṁ puṣṭi-vardhanam |\nurvārukam-iva bandhanān-mṛtyor-mukṣīya mā\'mṛtāt ||',
        englishTranslation: 'We worship the Three-Eyed Lord Shiva, who is fragrant and who nourishes all beings. Just as a ripe cucumber is severed effortlessly from its creeper stem, may He liberate us from death and bondage, but never from immortality (the Truth).',
        hindiMeaning: 'हम त्रिनेत्रधारी भगवान शिव की पूजा करते हैं, जो सुगंधित हैं और सभी जीवों का पोषण करते हैं। जैसे पका हुआ खरबूजा बेल के बंधन से मुक्त हो जाता है, वैसे ही हम मृत्यु और सांसारिक बंधनों से मुक्त हों, किंतु अमरता से कभी विमुख न हों।',
        explanation: 'Tryambakam refers to Shiva\'s three eyes (Sun, Moon, and Fire/Wisdom). Urvarukam-iva bandhanan describes effortless spiritual maturity and liberation without painful resistance.',
        timestampStart: 0,
        timestampEnd: 60
      }
    ]
  },
  {
    id: 'shiv-tandav-stotram',
    slug: 'shiv-tandav-stotram',
    title: 'Shiv Tandav Stotram',
    devanagariTitle: 'शिव तांडव स्तोत्रम्',
    subtitle: 'Rhythmic cosmic hymn composed by King Ravana describing Shiva\'s sublime dance.',
    deityId: 'shiva',
    category: 'Stotram',
    durationMinutes: '08:15',
    durationSeconds: 495,
    description: 'Composed by Ravana, the king of Lanka and ardent devotee of Shiva, the Shiv Tandav Stotram is famous for its intricate Sanskrit meter, dynamic internal rhyming, and vivid description of Mahadev\'s cosmic dance of creation and dissolution.',
    benefits: [
      'Awakens dormant inner vigor, courage, and power.',
      'Purifies articulation and mastery over rhythm and speech.',
      'Destroys inertia (Tamas) and arrogance.'
    ],
    traditionalContext: 'Best recited in the evening or during Pradosh hours with rhythmic drumming or chanting.',
    sources: ['Classical Sanskrit Devotional Literature attributed to Ravana'],
    tags: ['Shiva', 'Cosmic Dance', 'Rhythm', 'Stotram', 'Ravana'],
    relatedMantraIds: ['om-namah-shivaya', 'mahamrityunjaya-mantra'],
    relatedDeityIds: ['shiva'],
    relatedStoryIds: ['why-shiva-third-eye'],
    verses: [
      {
        id: 'sts-v1',
        number: 1,
        verseType: 'stanza',
        devanagari: 'जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥1॥',
        transliteration: 'jaṭāṭavīgalajjalapravāhapāvitasthale\ngale\'valambya lambitāṁ bhujaṅgatuṅgamālikām |\nḍamaḍḍamaḍḍamaḍḍamanninādavadḍamarvayaṁ\ncakāra caṇḍatāṇḍavaṁ tanotu naḥ śivaḥ śivam ||1||',
        englishTranslation: 'With His matted hair sanctified by the holy waters flowing through forest-like locks, His neck wrapped in high-crested serpents as garlands, and His Damru resounding Damat-Damat-Damat, Lord Shiva performed the passionate Tandava dance. May That Auspicious Shiva bestow endless prosperity upon us!',
        hindiMeaning: 'जिनकी जटारूपी गुफा से बहती हुई गंगा जी की निर्मल धाराएँ उनके कंठ को पवित्र करती हैं, जिनके गले में विशाल सर्पों का हार लटका हुआ है, और जो डमरू की डम-डम ध्वनि के साथ भयंकर तांडव नृत्य करते हैं, वे भगवान शिव हमारा कल्याण करें।',
        explanation: 'Stanza 1 sets the high-energy auditory meter with alliterative sounds (Damat-Damat-Damat) mimicking Shiva\'s damru.',
        timestampStart: 0,
        timestampEnd: 45
      }
    ]
  },
  {
    id: 'om-namah-shivaya',
    slug: 'om-namah-shivaya',
    title: 'Om Namah Shivaya',
    devanagariTitle: 'ॐ नमः शिवाय',
    subtitle: 'The sacred Panchakshara (five-syllable) mantra of universal consciousness.',
    deityId: 'shiva',
    category: 'Mantra',
    durationMinutes: '03:30',
    durationSeconds: 210,
    description: 'Originating in the Shri Rudram chant of the Krishna Yajurveda, Om Namah Shivaya is the foundational mantra of Shiva worship. The five syllables Na-Ma-Si-Va-Ya represent the five cosmic elements: Earth, Water, Fire, Air, and Ether.',
    benefits: [
      'Harmonizes the five elemental energies within the subtle body.',
      'Calms an agitated mind and brings silent meditation.',
      'Universal prayer suitable for all people without restriction.'
    ],
    traditionalContext: 'Chanted repeatedly (Japa) during silent meditation or japa mala practice.',
    sources: ['Shri Rudram (Yajurveda Taittiriya Samhita 4.5, 4.7)'],
    tags: ['Shiva', 'Panchakshara', 'Meditation', 'Peace'],
    relatedMantraIds: ['mahamrityunjaya-mantra', 'shiv-tandav-stotram'],
    relatedDeityIds: ['shiva'],
    relatedStoryIds: ['why-shiva-third-eye'],
    verses: [
      {
        id: 'ons-v1',
        number: 1,
        verseType: 'mantra',
        devanagari: 'ॐ नमः शिवाय',
        transliteration: 'om namaḥ śivāya',
        englishTranslation: 'Om, I bow down to Lord Shiva, the embodiment of auspiciousness and pure consciousness.',
        hindiMeaning: 'ॐ, मैं कल्याणकारी, मंगलमयी भगवान शिव को नमन करता हूँ।',
        explanation: 'Na = Earth, Ma = Water, Shi = Fire, Va = Air, Ya = Ether. Chanting this aligns individual consciousness with elemental cosmic balance.',
        timestampStart: 0,
        timestampEnd: 30
      }
    ]
  },
  {
    id: 'ganesh-mantra',
    slug: 'ganesh-mantra',
    title: 'Ganesha Vighna Nashana Mantra',
    devanagariTitle: 'गणेश विघ्न नाशन मंत्र',
    subtitle: 'Vakra-Tunda Mahakaya prayer for clearing obstacles and blessing auspicious starts.',
    deityId: 'ganesha',
    category: 'Mantra',
    durationMinutes: '03:10',
    durationSeconds: 190,
    description: 'A classic Sanskrit invocation recited before initiating any study, business venture, travel, or sacred ritual to ensure smooth progress and divine wisdom.',
    benefits: [
      'Removes subtle internal and external hurdles.',
      'Invokes clarity, good luck, and auspicious timing.'
    ],
    traditionalContext: 'Recited at the opening of any new day, exam, event, or project.',
    sources: ['Ganesha Purana & Traditional Liturgy'],
    tags: ['Ganesha', 'Obstacles', 'Auspicious', 'Beginnings'],
    relatedMantraIds: ['gayatri-mantra', 'hanuman-chalisa'],
    relatedDeityIds: ['ganesha'],
    relatedStoryIds: ['why-ganesha-elephant-head'],
    verses: [
      {
        id: 'gm-v1',
        number: 1,
        verseType: 'mantra',
        devanagari: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
        transliteration: 'vakratuṇḍa mahākāya sūryakoṭi samaprabha |\nnirvighnaṁ kuru me deva sarvakāryeṣu sarvadā ||',
        englishTranslation: 'O Lord with the curved trunk, immense physical form, and radiance equal to ten million suns! Please make all my endeavors free of obstacles, always.',
        hindiMeaning: 'घुमावदार सूंड वाले, विशाल शरीर वाले, और करोड़ सूर्य के समान तेजस्वी हे देव गणेश! मेरे समस्त कार्यों को सदा विघ्न-रहित करने की कृपा करें।',
        explanation: 'Vakratunda symbolizes bending away worldly rigidity. Surya Koti Samaprabha signifies the blinding brilliance of divine wisdom.',
        timestampStart: 0,
        timestampEnd: 30
      }
    ]
  }
];
