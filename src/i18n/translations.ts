export type LanguageCode = 
  | 'en' 
  | 'hi' 
  | 'bn' 
  | 'ta' 
  | 'te' 
  | 'mr' 
  | 'gu' 
  | 'kn' 
  | 'ml' 
  | 'pa';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navigation
    home: 'Home',
    mantras: 'Mantras & Stotras',
    deities: 'Deities',
    panchang: 'Panchang',
    horoscope: 'Horoscope',
    rashifal: 'Daily Rashifal',
    palmistry: 'Palmistry',
    stories: 'Stories',
    practices: 'Daily Practice',
    bookmarks: 'Bookmarks',
    library: 'Library',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'Search',
    searchPlaceholder: 'Search mantras, deities, scriptures...',
    changeLocation: 'Location',
    save: 'Save',
    saved: 'Saved',
    share: 'Share',
    copied: 'Copied!',
    listen: 'Listen & Chant Along',
    pause: 'Pause',
    close: 'Close',
    readMore: 'Read More',
    viewAll: 'View All',
    selectLocation: 'Select Location',
    useMyLocation: 'Use My Current Location',

    // Panchang
    todayPanchang: 'Today\'s Panchang',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    tithi: 'Tithi',
    nakshatra: 'Nakshatra',
    paksha: 'Paksha',
    vikramSamvat: 'Vikram Samvat',
    rahukaal: 'Rahukaal',
    auspiciousTiming: 'Auspicious Time',

    // Horoscope
    selectRasi: 'Select Your Rasi (Zodiac Sign)',
    moonSignGuidance: 'Moon Sign Guidance',
    rulingPlanet: 'Ruling Planet',
    luckyNumber: 'Lucky Number',
    luckyColor: 'Lucky Color',
    favorableTiming: 'Favorable Timing',
    vedicRemedy: 'Vedic Remedy (Upaya)',
    fullOverview: 'Full Overview',
    careerFinance: 'Career & Finance',
    healthEnergy: 'Health & Energy',
    loveFamily: 'Love & Family',

    // Palmistry
    hastarekha: 'Hastarekha Shastra (Palmistry)',
    majorLines: 'Major Lines',
    mounts: 'Mounts (Grahas)',
    sacredMarkings: 'Sacred Markings',
    handShapes: 'Hand Shapes',

    // Practices
    startJapa: 'Start Japa Counter',
    meditationTimer: 'Meditation Timer',
    breathingEx: 'Pranayama Breathing',

    // Footer
    disclaimer: 'Respectful reference tool for Hindu spiritual texts, daily panchang, and classical traditions.',
  },

  hi: {
    // Navigation
    home: 'होम',
    mantras: 'मंत्र एवं स्तोत्र',
    deities: 'देवी-देवता',
    panchang: 'पंचांग',
    horoscope: 'राशिफल',
    rashifal: 'दैनिक राशिफल',
    palmistry: 'हस्तरेखा शास्त्र',
    stories: 'कथाएं एवं आख्यान',
    practices: 'दैनिक साधना',
    bookmarks: 'सहेजे गए पाठ',
    library: 'पुस्तकालय',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'खोजें',
    searchPlaceholder: 'मंत्र, देवता, स्तोत्र या कथा खोजें...',
    changeLocation: 'स्थान',
    save: 'सहेजें',
    saved: 'सहेजा गया',
    share: 'साझा करें',
    copied: 'कॉपी हुआ!',
    listen: 'सुनें और पाठ करें',
    pause: 'रोकें',
    close: 'बंद करें',
    readMore: 'आगे पढ़ें',
    viewAll: 'सभी देखें',
    selectLocation: 'स्थान चुनें',
    useMyLocation: 'मेरा वर्तमान स्थान प्रयोग करें',

    // Panchang
    todayPanchang: 'आज का पंचांग',
    sunrise: 'सूर्योदय',
    sunset: 'सूर्यास्त',
    tithi: 'तिथि',
    nakshatra: 'नक्षत्र',
    paksha: 'पक्ष',
    vikramSamvat: 'विक्रम संवत',
    rahukaal: 'राहुकाल',
    auspiciousTiming: 'शुभ मुहूर्त',

    // Horoscope
    selectRasi: 'अपनी राशि चुनें',
    moonSignGuidance: 'चंद्र राशि फलादेश',
    rulingPlanet: 'स्वामी ग्रह',
    luckyNumber: 'शुभ अंक',
    luckyColor: 'शुभ रंग',
    favorableTiming: 'शुभ समय',
    vedicRemedy: 'वैदिक उपाय एवं मंत्र',
    fullOverview: 'संपूर्ण अवलोकन',
    careerFinance: 'करियर एवं वित्त',
    healthEnergy: 'स्वास्थ्य एवं ऊर्जा',
    loveFamily: 'प्रेम एवं परिवार',

    // Palmistry
    hastarekha: 'हस्तरेखा शास्त्र (सामुद्रिक विज्ञान)',
    majorLines: 'मुख्य रेखाएं',
    mounts: 'ग्रह पर्वत',
    sacredMarkings: 'शुभ चिन्ह',
    handShapes: 'हाथ के प्रकार',

    // Practices
    startJapa: 'जाप माला शुरू करें',
    meditationTimer: 'ध्यान समय',
    breathingEx: 'प्राणायाम अभ्यास',

    // Footer
    disclaimer: 'सनातन आध्यात्मिक ग्रंथों, पंचांग तथा शास्त्रीय परंपराओं का आदरपूर्वक संदर्भ ग्रंथ।',
  },

  bn: {
    // Navigation
    home: 'হোম',
    mantras: 'মন্ত্র ও স্তোত্র',
    deities: 'দেবী-দেবতা',
    panchang: 'পঞ্জিকা',
    horoscope: 'রাশিফল',
    rashifal: 'দৈনিক রাশিফল',
    palmistry: 'হস্তরেখা শাস্ত্র',
    stories: 'ধর্মীয় গল্প',
    practices: 'দৈনিক সাধনা',
    bookmarks: 'সংরক্ষিত',
    library: 'গ্রন্থাগার',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'অনুসন্ধান',
    searchPlaceholder: 'মন্ত্র, দেবতা বা স্তোত্র খুঁজুন...',
    changeLocation: 'স্থান',
    save: 'সংরক্ষণ',
    saved: 'সংরক্ষিত',
    share: 'শেয়ার',
    copied: 'কপি হয়েছে!',
    listen: 'শুনুন ও জপ করুন',
    pause: 'থামান',
    close: 'বন্ধ করুন',
    readMore: 'আরও পড়ুন',
    viewAll: 'সব দেখুন',
    selectLocation: 'স্থান নির্বাচন করুন',
    useMyLocation: 'বর্তমান অবস্থান ব্যবহার করুন',

    // Panchang
    todayPanchang: 'আজকের পঞ্জিকা',
    sunrise: 'সূর্যোদয়',
    sunset: 'সূর্যাস্ত',
    tithi: 'তিথি',
    nakshatra: 'নক্ষত্র',
    paksha: 'পক্ষ',
    vikramSamvat: 'বিক্রম সংবৎ',
    rahukaal: 'রাহুকাল',
    auspiciousTiming: 'শুভ সময়',

    // Horoscope
    selectRasi: 'আপনার রাশি নির্বাচন করুন',
    moonSignGuidance: 'চন্দ্র রাশিভিত্তিক পরামর্শ',
    rulingPlanet: 'অধিপতি গ্রহ',
    luckyNumber: 'শুভ সংখ্যা',
    luckyColor: 'শুভ রঙ',
    favorableTiming: 'অনুকূল সময়',
    vedicRemedy: 'বৈদিক প্রতিকার ও মন্ত্র',
    fullOverview: 'সম্পূর্ণ বিবরণ',
    careerFinance: 'কর্মজীবন ও অর্থ',
    healthEnergy: 'স্বাস্থ্য ও শক্তি',
    loveFamily: 'প্রেম ও পরিবার',

    // Palmistry
    hastarekha: 'হস্তরেখা বিচার',
    majorLines: 'প্রধান রেখাসমূহ',
    mounts: 'গ্রহ পর্বত',
    sacredMarkings: 'পবিত্র চিহ্ন',
    handShapes: 'হাতের ধরন',

    // Practices
    startJapa: 'জপ গণনা শুরু করুন',
    meditationTimer: 'ধ্যান টাইমার',
    breathingEx: 'প্রাণায়াম অনুশীলন',

    // Footer
    disclaimer: 'সনাতন ধর্মীয় গ্রন্থ, পঞ্জিকা ও বৈদিক ঐতিহ্যের শ্রদ্ধাশীল রেফারেন্স।',
  },

  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    mantras: 'मंत्र आणि स्तोत्रे',
    deities: 'देवता',
    panchang: 'पंचांग',
    horoscope: 'राशीभविष्य',
    rashifal: 'दैनिक राशीभविष्य',
    palmistry: 'हस्तशास्त्र',
    stories: 'धार्मिक कथा',
    practices: 'दैनिक साधना',
    bookmarks: 'जतन केलेले',
    library: 'ग्रंथालय',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'शोधा',
    searchPlaceholder: 'मंत्र, देवता किंवा कथा शोधा...',
    changeLocation: 'स्थान',
    save: 'जतन करा',
    saved: 'जतन केले',
    share: 'शेअर करा',
    copied: 'कॉपी झाले!',
    listen: 'ऐका आणि म्हणा',
    pause: 'थांबवा',
    close: 'बंद करा',
    readMore: 'अधिक वाचा',
    viewAll: 'सर्व पहा',
    selectLocation: 'स्थान निवडा',
    useMyLocation: 'माझे सध्याचे स्थान वापरा',

    // Panchang
    todayPanchang: 'आजचे पंचांग',
    sunrise: 'सूर्योदय',
    sunset: 'सूर्यास्त',
    tithi: 'तिथी',
    nakshatra: 'नक्षत्र',
    paksha: 'पक्ष',
    vikramSamvat: 'विक्रम संवत',
    rahukaal: 'राहू काळ',
    auspiciousTiming: 'शुभ मुहूर्त',

    // Horoscope
    selectRasi: 'तुमची राशी निवडा',
    moonSignGuidance: 'चंद्र राशीभविष्य',
    rulingPlanet: 'स्वामी ग्रह',
    luckyNumber: 'शुभ अंक',
    luckyColor: 'शुभ रंग',
    favorableTiming: 'शुभ वेळ',
    vedicRemedy: 'वैदिक उपाय आणि मंत्र',
    fullOverview: 'संपूर्ण माहिती',
    careerFinance: 'करिअर आणि वित्त',
    healthEnergy: 'आरोग्य आणि ऊर्जा',
    loveFamily: 'प्रेम आणि कुटुंब',

    // Palmistry
    hastarekha: 'हस्तरेखा शास्त्र',
    majorLines: 'मुख्य रेषा',
    mounts: 'ग्रह पर्वत',
    sacredMarkings: 'शुभ चिन्हे',
    handShapes: 'हाताचे प्रकार',

    // Practices
    startJapa: 'जप माळ सुरू करा',
    meditationTimer: 'ध्यान वेळ',
    breathingEx: 'प्राणायाम सराव',

    // Footer
    disclaimer: 'सनातन अध्यात्मिक ग्रंथ, पंचांग आणि परंपरांचा आदरपूर्वक संदर्भ ग्रंथ.',
  },

  te: {
    // Navigation
    home: 'హోమ్',
    mantras: 'మంత్రాలు & స్తోత్రాలు',
    deities: 'దేవతలు',
    panchang: 'పంచాంగం',
    horoscope: 'రాశిఫలాలు',
    rashifal: 'దినఫలాలు',
    palmistry: 'హస్తసాముద్రికం',
    stories: 'భక్తి కథలు',
    practices: 'నిత్య సాధన',
    bookmarks: 'సేవ్ చేసినవి',
    library: 'గ్రంథాలయం',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'శోధించండి',
    searchPlaceholder: 'మంత్రాలు, దేవుళ్ళు లేదా కథలు వెతకండి...',
    changeLocation: 'ప్రాంతం',
    save: 'సేవ్ చేయి',
    saved: 'సేవ్ అయింది',
    share: 'షేర్ చేయి',
    copied: 'కాపీ అయింది!',
    listen: 'విని జపించండి',
    pause: 'ఆపండి',
    close: 'మూసివేయి',
    readMore: 'మరిన్ని చదవండి',
    viewAll: 'అన్నీ చూడండి',
    selectLocation: 'నగరం ఎంచుకోండి',
    useMyLocation: 'నా ప్రస్తుత ప్రాంతం వాడండి',

    // Panchang
    todayPanchang: 'నేటి పంచాంగం',
    sunrise: 'సూర్యోదయం',
    sunset: 'సూర్యాస్తమయం',
    tithi: 'తిథి',
    nakshatra: 'నక్షత్రం',
    paksha: 'పక్షం',
    vikramSamvat: 'విక్రమ సంపత్',
    rahukaal: 'రాహుకాలం',
    auspiciousTiming: 'శుభ ముహూర్తం',

    // Horoscope
    selectRasi: 'మీ రాశిని ఎంచుకోండి',
    moonSignGuidance: 'రాశి ఫలాలు',
    rulingPlanet: 'అధిపతి గ్రహం',
    luckyNumber: 'అదృష్ట సంఖ్య',
    luckyColor: 'అదృష్ట రంగు',
    favorableTiming: 'అనుకూల సమయం',
    vedicRemedy: 'వైదిక పరిహారాలు & మంత్రాలు',
    fullOverview: 'పూర్తి వివరాలు',
    careerFinance: 'ఉద్యోగం & ఆర్థికం',
    healthEnergy: 'ఆరోగ్యం & శక్తి',
    loveFamily: 'ప్రేమ & కుటుంబం',

    // Palmistry
    hastarekha: 'హస్తసాముద్రిక శాస్త్రం',
    majorLines: 'ముఖ్య రేఖలు',
    mounts: 'గ్రహ పర్వతాలు',
    sacredMarkings: 'పవిత్ర గుర్తులు',
    handShapes: 'చేతి రకాలు',

    // Practices
    startJapa: 'జప లెక్కింపు ప్రారంభించండి',
    meditationTimer: 'ధ్యానం సమయం',
    breathingEx: 'ప్రాణాయామ సాధన',

    // Footer
    disclaimer: 'సనాతన ఆధ్యాత్మిక గ్రంథాలు, పంచాంగం మరియు వైదిక సంప్రదాయాల సమాచార వేదిక.',
  },

  ta: {
    // Navigation
    home: 'முகப்பு',
    mantras: 'மந்திரங்கள் & ஸ்தோத்திரங்கள்',
    deities: 'தெய்வங்கள்',
    panchang: 'பஞ்சாங்கம்',
    horoscope: 'ராசிபலன்',
    rashifal: 'தினசரி ராசிபலன்',
    palmistry: 'கைரேகை ஜோதிடம்',
    stories: 'பக்தி கதைகள்',
    practices: 'தினசரி வழிபாடு',
    bookmarks: 'சேமிக்கப்பட்டவை',
    library: 'நூலகம்',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'தேடுக',
    searchPlaceholder: 'மந்திரங்கள், தெய்வங்கள் தேடுக...',
    changeLocation: 'இடம்',
    save: 'சேமி',
    saved: 'சேமிக்கப்பட்டது',
    share: 'பகிர்',
    copied: 'நகலெடுக்கப்பட்டது!',
    listen: 'கேட்டு ஜபிக்கவும்',
    pause: 'நிறுத்து',
    close: 'மூடு',
    readMore: 'மேலும் படிக்க',
    viewAll: 'அனைத்தும் பார்க்க',
    selectLocation: 'இடத்தை தேர்ந்தெடுக்கவும்',
    useMyLocation: 'எனது தற்போதைய இடத்தை பயன்படுத்து',

    // Panchang
    todayPanchang: 'இன்றைய பஞ்சாங்கம்',
    sunrise: 'சூரியோதயம்',
    sunset: 'சூரியாஸ்தமனம்',
    tithi: 'திதி',
    nakshatra: 'நட்சத்திரம்',
    paksha: 'பட்சம்',
    vikramSamvat: 'விக்ரம் சம்வத்',
    rahukaal: 'ரகு காலம்',
    auspiciousTiming: 'நல்ல நேரம்',

    // Horoscope
    selectRasi: 'உங்கள் ராசியை தேர்ந்தெடுக்கவும்',
    moonSignGuidance: 'ராசி பலன்கள்',
    rulingPlanet: 'ஆட்சி கிரகம்',
    luckyNumber: 'அதிர்ஷ்ட எண்',
    luckyColor: 'அதிர்ஷ்ட நிறம்',
    favorableTiming: 'சாதகமான நேரம்',
    vedicRemedy: 'வேத பரிகாரங்கள் & மந்திரங்கள்',
    fullOverview: 'முழு விபரம்',
    careerFinance: 'தொழில் & நிதி',
    healthEnergy: 'சுகாதாரம் & சக்தி',
    loveFamily: 'அன்பு & குடும்பம்',

    // Palmistry
    hastarekha: 'கைரேகை சாஸ்திரம்',
    majorLines: 'முக்கிய ரேகைகள்',
    mounts: 'கிரக மேடுகள்',
    sacredMarkings: 'புனித குறியீடுகள்',
    handShapes: 'கைகளின் வடிவங்கள்',

    // Practices
    startJapa: 'ஜப எண்ணிக்கை தொடங்கு',
    meditationTimer: 'தியான நேரம்',
    breathingEx: 'பிராணாயாம பயிற்சி',

    // Footer
    disclaimer: 'ஆன்மீக நூல்கள், பஞ்சாங்கம் மற்றும் பாரம்பரிய வழிபாடுகளுக்கான தகவல் மையம்.',
  },

  gu: {
    // Navigation
    home: 'હોમ',
    mantras: 'મંત્રો અને સ્તોત્રો',
    deities: 'દેવી-દેવતા',
    panchang: 'પંચાંગ',
    horoscope: 'રાશિફળ',
    rashifal: 'દૈનિક રાશિફળ',
    palmistry: 'હસ્તરેખા શાસ્ત્ર',
    stories: 'ધાર્મિક વાર્તાઓ',
    practices: 'દૈનિક સાધના',
    bookmarks: 'સાચવેલ',
    library: 'પુસ્તકાલય',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'શોધો',
    searchPlaceholder: 'મંત્ર, દેવતા અથવા સ્તોત્ર શોધો...',
    changeLocation: 'સ્થાન',
    save: 'સાચવો',
    saved: 'સાચવેલ છે',
    share: 'શેર કરો',
    copied: 'કોપી થયું!',
    listen: 'સાંભળો અને જાપ કરો',
    pause: 'અટકાવો',
    close: 'બંધ કરો',
    readMore: 'વધુ વાંચો',
    viewAll: 'બધા જુઓ',
    selectLocation: 'સ્થાન પસંદ કરો',
    useMyLocation: 'મારું વર્તમાન સ્થાન વાપરો',

    // Panchang
    todayPanchang: 'આજનું પંચાંગ',
    sunrise: 'સૂર્યોદય',
    sunset: 'સૂર્યાસ્ત',
    tithi: 'તિથિ',
    nakshatra: 'નક્ષત્ર',
    paksha: 'પક્ષ',
    vikramSamvat: 'વિક્રમ સંવત',
    rahukaal: 'રાહુકાળ',
    auspiciousTiming: 'શુભ મુહૂર્ત',

    // Horoscope
    selectRasi: 'તમારી રાશિ પસંદ કરો',
    moonSignGuidance: 'ચંદ્ર રાશિ ફળ',
    rulingPlanet: 'સ્વામી ગ્રહ',
    luckyNumber: 'શુભ અંક',
    luckyColor: 'શુભ રંગ',
    favorableTiming: 'શુભ સમય',
    vedicRemedy: 'વૈદિક ઉપાય અને મંત્રો',
    fullOverview: 'સંપૂર્ણ વિગતો',
    careerFinance: 'કરિયર અને નાણાં',
    healthEnergy: 'આરોગ્ય અને ઊર્જા',
    loveFamily: 'પ્રેમ અને પરિવાર',

    // Palmistry
    hastarekha: 'હસ્તરેખા વિજ્ઞાન',
    majorLines: 'મુખ્ય રેખાઓ',
    mounts: 'ગ્રહ પર્વત',
    sacredMarkings: 'શુભ ચિહ્નો',
    handShapes: 'હાથના પ્રકાર',

    // Practices
    startJapa: 'જપ માળા શરૂ કરો',
    meditationTimer: 'ધ્યાન સમય',
    breathingEx: 'પ્રાણાયામ અભ્યાસ',

    // Footer
    disclaimer: 'સનાતન આધ્યાત્મિક ગ્રંથો અને પંચાંગનો સન્માનપૂર્વક સંદર્ભ સંગ્રહ.',
  },

  kn: {
    // Navigation
    home: 'ಮುಖ್ಯಪುಟ',
    mantras: 'ಮಂತ್ರಗಳು ಮತ್ತು ಸ್ತೋತ್ರಗಳು',
    deities: 'ದೇವತೆಗಳು',
    panchang: 'ಪಂಚಾಂಗ',
    horoscope: 'ರಾಶಿಫಲ',
    rashifal: 'ದೈನಂದಿನ ರಾಶಿಫಲ',
    palmistry: 'ಹಸ್ತಸಾಮುದ್ರಿಕ',
    stories: 'ಭಕ್ತಿ ಕಥೆಗಳು',
    practices: 'ದೈನಂದಿನ ಸಾಧನೆ',
    bookmarks: 'ಉಳಿಸಿದವು',
    library: 'ಗ್ರಂಥಾಲಯ',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'ಹುಡುಕಿ',
    searchPlaceholder: 'ಮಂತ್ರಗಳು, ದೇವತೆಗಳನ್ನು ಹುಡುಕಿ...',
    changeLocation: 'ಸ್ಥಳ',
    save: 'ಉಳಿಸಿ',
    saved: 'ಉಳಿಸಲಾಗಿದೆ',
    share: 'ಹಂಚಿಕೊಳ್ಳಿ',
    copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
    listen: 'ಕೇಳಿ ಮತ್ತು ಜಪಿಸಿ',
    pause: 'ನಿಲ್ಲಿಸಿ',
    close: 'ಮುಚ್ಚಿ',
    readMore: 'ಮತ್ತಷ್ಟು ಓದಿ',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
    selectLocation: 'ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ',
    useMyLocation: 'ನನ್ನ ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ',

    // Panchang
    todayPanchang: 'ಇಂದಿನ ಪಂಚಾಂಗ',
    sunrise: 'ಸೂರ್ಯೋದಯ',
    sunset: 'ಸೂರ್ಯಾಸ್ತ',
    tithi: 'ತಿಥಿ',
    nakshatra: 'ನಕ್ಷತ್ರ',
    paksha: 'ಪಕ್ಷ',
    vikramSamvat: 'ವಿಕ್ರಮ ಸಂವತ್',
    rahukaal: 'ರಾಹುಕಾಲ',
    auspiciousTiming: 'ಶುಭ ಮುಹೂರ್ತ',

    // Horoscope
    selectRasi: 'ನಿಮ್ಮ ರಾಶಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    moonSignGuidance: 'ರಾಶಿ ಫಲಗಳು',
    rulingPlanet: 'ಅಧಿಪತಿ ಗ್ರಹ',
    luckyNumber: 'ಅದೃಷ್ಟ ಸಂಖ್ಯೆ',
    luckyColor: 'ಅದೃಷ್ಟ ಬಣ್ಣ',
    favorableTiming: 'ಅನುಕೂಲಕರ ಸಮಯ',
    vedicRemedy: 'ವೈದಿಕ ಪರಿಹಾರ ಮತ್ತು ಮಂತ್ರಗಳು',
    fullOverview: 'ಸಂಪೂರ್ಣ ಮಾಹಿತಿ',
    careerFinance: 'ಉದ್ಯೋಗ ಮತ್ತು ಹಣಕಾಸು',
    healthEnergy: 'ಆರೋಗ್ಯ ಮತ್ತು ಶಕ್ತಿ',
    loveFamily: 'ಪ್ರೀತಿ ಮತ್ತು ಕುಟುಂಬ',

    // Palmistry
    hastarekha: 'ಹಸ್ತಸಾಮುದ್ರಿಕ ಶಾಸ್ತ್ರ',
    majorLines: 'ಪ್ರಮುಖ ರೇಖೆಗಳು',
    mounts: 'ಗ್ರಹ ಪರ್ವತಗಳು',
    sacredMarkings: 'ಪವಿತ್ರ ಚಿಹ್ನೆಗಳು',
    handShapes: 'ಕೈಗಳ ಪ್ರಕಾರಗಳು',

    // Practices
    startJapa: 'ಜಪ ಲೆಕ್ಕಚಾರ ಪ್ರಾರಂಭಿಸಿ',
    meditationTimer: 'ಧ್ಯಾನ ಸಮಯ',
    breathingEx: 'ಪ್ರಾಣಾಯಾಮ ಅಭ್ಯಾಸ',

    // Footer
    disclaimer: 'ಸನಾತನ ಆಧ್ಯಾತ್ಮಿಕ ಗ್ರಂಥಗಳು ಮತ್ತು ಪಂಚಾಂಗದ ಗೌರವಾನ್ವಿತ ಮಾಹಿತಿ ವೇದಿಕೆ.',
  },

  ml: {
    // Navigation
    home: 'ഹോം',
    mantras: 'മന്ത്രങ്ങളും സ്തോത്രങ്ങളും',
    deities: 'ദേവീദേവന്മാർ',
    panchang: 'പഞ്ചാംഗം',
    horoscope: 'രാശിഫലം',
    rashifal: 'ദിനഫലം',
    palmistry: 'ഹസ്തരേഖാ ശാസ്ത്രം',
    stories: 'ഭക്തികഥകൾ',
    practices: 'ദിനചര്യ',
    bookmarks: 'സൂക്ഷിച്ചവ',
    library: 'ഗ്രന്ഥശാല',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'തിരയുക',
    searchPlaceholder: 'മന്ത്രങ്ങൾ, ദേവന്മാർ എന്നിവ തിരയുക...',
    changeLocation: 'സ്ഥലം',
    save: 'സൂക്ഷിക്കുക',
    saved: 'സൂക്ഷിച്ചു',
    share: 'പങ്കുവെക്കുക',
    copied: 'കോപ്പി ചെയ്തു!',
    listen: 'കേൾക്കൂ, ജപിക്കൂ',
    pause: 'നിർത്തുക',
    close: 'അടയ്ക്കുക',
    readMore: 'കൂടുതൽ വായിക്കുക',
    viewAll: 'എല്ലാം കാണുക',
    selectLocation: 'സ്ഥലം തിരഞ്ഞെടുക്കുക',
    useMyLocation: 'എന്റെ നിലവിലുള്ള സ്ഥലം ഉപയോഗിക്കുക',

    // Panchang
    todayPanchang: 'ഇന്നത്തെ പഞ്ചാംഗം',
    sunrise: 'സൂര്യോദയം',
    sunset: 'സൂര്യാസ്തമയം',
    tithi: 'തിഥി',
    nakshatra: 'നക്ഷത്രം',
    paksha: 'പക്ഷം',
    vikramSamvat: 'വിക്രം സംവത്',
    rahukaal: 'രാഹുകാലം',
    auspiciousTiming: 'ശുഭ മുഹൂർത്തം',

    // Horoscope
    selectRasi: 'നിങ്ങളുടെ രാശി തിരഞ്ഞെടുക്കുക',
    moonSignGuidance: 'രാശിഫലങ്ങൾ',
    rulingPlanet: 'അധിപ ഗ്രഹം',
    luckyNumber: 'ഭാഗ്യ നമ്പർ',
    luckyColor: 'ഭാഗ്യ നിറം',
    favorableTiming: 'അനുകൂല സമയം',
    vedicRemedy: 'വൈദിക പരിഹാരങ്ങളും മന്ത്രങ്ങളും',
    fullOverview: 'പൂർണ്ണ വിവരങ്ങൾ',
    careerFinance: 'തൊഴിൽ & ധനം',
    healthEnergy: 'ആരോഗ്യം & ഊർജ്ജം',
    loveFamily: 'സ്നേഹം & കുടുംബം',

    // Palmistry
    hastarekha: 'ഹസ്തരേഖാ ശാസ്ത്രം',
    majorLines: 'പ്രധാന രേഖകൾ',
    mounts: 'ഗ്രഹ പർവ്വതങ്ങൾ',
    sacredMarkings: 'വിശുദ്ധ ചിഹ്നങ്ങൾ',
    handShapes: 'കൈകളുടെ രൂപങ്ങൾ',

    // Practices
    startJapa: 'ജപ എണ്ണം ആരംഭിക്കുക',
    meditationTimer: 'ധ്യാനം സമയം',
    breathingEx: 'പ്രാണായാമ പരിശീലനം',

    // Footer
    disclaimer: 'ആത്മീയ ഗ്രന്ഥങ്ങൾ, പഞ്ചാംഗം എന്നിവയുടെ വിവരശേഖരം.',
  },

  pa: {
    // Navigation
    home: 'ਹੋਮ',
    mantras: 'ਮੰਤਰ ਅਤੇ ਸਤੋਤਰ',
    deities: 'ਦੇਵੀ-ਦੇਵਤੇ',
    panchang: 'ਪੰਚਾਂਗ',
    horoscope: 'ਰਾਸ਼ੀਫਲ',
    rashifal: 'ਰੋਜ਼ਾਨਾ ਰਾਸ਼ੀਫਲ',
    palmistry: 'ਹੱਥ ਰੇਖਾ ਵਿਗਿਆਨ',
    stories: 'ਧਾਰਮਿਕ ਕਹਾਣੀਆਂ',
    practices: 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ',
    bookmarks: 'ਸੰਭਾਲੇ ਗਏ',
    library: 'ਲਾਈਬ੍ਰੇਰੀ',

    // App Branding
    appTitle: 'NIRVANA',
    appSubtitle: 'The Abstract Mind',

    // Actions
    search: 'ਖੋਜੋ',
    searchPlaceholder: 'ਮੰਤਰ, ਦੇਵਤੇ ਜਾਂ ਕਹਾਣੀਆਂ ਖੋਜੋ...',
    changeLocation: 'ਸਥਾਨ',
    save: 'ਸੰਭਾਲੋ',
    saved: 'ਸੰਭਾਲਿਆ ਗਿਆ',
    share: 'ਸਾਂਝਾ ਕਰੋ',
    copied: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    listen: 'ਸੁਣੋ ਅਤੇ ਪਾਠ ਕਰੋ',
    pause: 'ਰੋਕੋ',
    close: 'ਬੰਦ ਕਰੋ',
    readMore: 'ਹੋਰ ਪੜ੍ਹੋ',
    viewAll: 'ਸਾਰੇ ਵੇਖੋ',
    selectLocation: 'ਸਥਾਨ ਚੁਣੋ',
    useMyLocation: 'ਮੇਰਾ ਮੌਜੂਦਾ ਸਥਾਨ ਵਰਤੋ',

    // Panchang
    todayPanchang: 'ਅੱਜ ਦਾ ਪੰਚਾਂਗ',
    sunrise: 'ਸੂਰਜ ਚੜ੍ਹਨਾ',
    sunset: 'ਸੂਰਜ ਡੁੱਬਣਾ',
    tithi: 'ਤਿਥੀ',
    nakshatra: 'ਨਕਸ਼ਤਰ',
    paksha: 'ਪੱਖ',
    vikramSamvat: 'ਬਿਕਰਮੀ ਸੰਮਤ',
    rahukaal: 'ਰਾਹੂਕਾਲ',
    auspiciousTiming: 'ਸ਼ੁਭ ਮਹੂਰਤ',

    // Horoscope
    selectRasi: 'ਆਪਣੀ ਰਾਸ਼ੀ ਚੁਣੋ',
    moonSignGuidance: 'ਚੰਦਰ ਰਾਸ਼ੀ ਫਲ',
    rulingPlanet: 'ਸਵਾਮੀ ਗ੍ਰਹਿ',
    luckyNumber: 'ਸ਼ੁਭ ਅੰਕ',
    luckyColor: 'ਸ਼ੁਭ ਰੰਗ',
    favorableTiming: 'ਸ਼ੁਭ ਸਮਾਂ',
    vedicRemedy: 'ਵੈਦਿਕ ਉਪਾਅ ਅਤੇ ਮੰਤਰ',
    fullOverview: 'ਪੂਰਾ ਵੇਰਵਾ',
    careerFinance: 'ਕਰੀਅਰ ਅਤੇ ਧਨ',
    healthEnergy: 'ਸਿਹਤ ਅਤੇ ਊਰਜਾ',
    loveFamily: 'ਪਿਆਰ ਅਤੇ ਪਰਿਵਾਰ',

    // Palmistry
    hastarekha: 'ਹੱਥ ਰੇਖਾ ਵਿਗਿਆਨ',
    majorLines: 'ਮੁੱਖ ਰੇਖਾਵਾਂ',
    mounts: 'ਗ੍ਰਹਿ ਪਰਬਤ',
    sacredMarkings: 'ਸ਼ੁਭ ਚਿੰਨ੍ਹ',
    handShapes: 'ਹੱਥ ਦੇ ਪ੍ਰਕਾਰ',

    // Practices
    startJapa: 'ਜਾਪ ਮਾਲਾ ਸ਼ੁਰੂ ਕਰੋ',
    meditationTimer: 'ਧਿਆਨ ਸਮਾਂ',
    breathingEx: 'ਪ੍ਰਾਣਾਯਾਮ ਅਭਿਆਸ',

    // Footer
    disclaimer: 'ਸਨਾਤਨ ਆਤਮਿਕ ਗ੍ਰੰਥਾਂ ਅਤੇ ਪੰਚਾਂਗ ਦਾ ਸਤਿਕਾਰਯੋਗ ਸਰੋਤ।',
  }
};

export function getTranslation(lang: LanguageCode, key: string): string {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return dictionary[key] || TRANSLATIONS.en[key] || key;
}

/**
 * Detects whether the user is located in India based on browser API & location info.
 */
export function isUserInIndia(locationCountry?: string): boolean {
  if (locationCountry) {
    if (locationCountry.toLowerCase().includes('india') || locationCountry.toUpperCase() === 'IN') {
      return true;
    }
  }

  // Check timezone
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta') || timeZone.includes('Asia/Colombo')) {
      return true;
    }
  } catch (e) {
    // ignore
  }

  // Check browser languages
  if (typeof navigator !== 'undefined' && navigator.languages) {
    const hasIndianLang = navigator.languages.some(l => 
      l.endsWith('-IN') || l.startsWith('hi') || l.startsWith('bn') || l.startsWith('ta') || l.startsWith('te') || l.startsWith('mr') || l.startsWith('gu') || l.startsWith('kn') || l.startsWith('ml') || l.startsWith('pa')
    );
    if (hasIndianLang) return true;
  }

  return false;
}
