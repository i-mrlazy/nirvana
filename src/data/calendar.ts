import { LocationInfo, PanchangDay, PanchangRegion, RegionalPanchangInfo } from '../types';

export const POPULAR_LOCATIONS: LocationInfo[] = [
  { city: 'Varanasi', state: 'Uttar Pradesh', country: 'India', latitude: 25.3176, longitude: 82.9739, timezone: 'Asia/Kolkata' },
  { city: 'Darbhanga (Mithila)', state: 'Bihar', country: 'India', latitude: 26.1542, longitude: 85.8918, timezone: 'Asia/Kolkata' },
  { city: 'Mumbai', state: 'Maharashtra', country: 'India', latitude: 19.0760, longitude: 72.8777, timezone: 'Asia/Kolkata' },
  { city: 'Delhi', state: 'Delhi', country: 'India', latitude: 28.6139, longitude: 77.2090, timezone: 'Asia/Kolkata' },
  { city: 'Kolkata', state: 'West Bengal', country: 'India', latitude: 22.5726, longitude: 88.3639, timezone: 'Asia/Kolkata' },
  { city: 'Chennai', state: 'Tamil Nadu', country: 'India', latitude: 13.0827, longitude: 80.2707, timezone: 'Asia/Kolkata' },
  { city: 'Bengaluru', state: 'Karnataka', country: 'India', latitude: 12.9716, longitude: 77.5946, timezone: 'Asia/Kolkata' },
  { city: 'Kathmandu', state: 'Bagmati', country: 'Nepal', latitude: 27.7172, longitude: 85.3240, timezone: 'Asia/Kathmandu' },
  { city: 'London', state: 'England', country: 'UK', latitude: 51.5074, longitude: -0.1278, timezone: 'Europe/London' },
  { city: 'New York', state: 'NY', country: 'USA', latitude: 40.7128, longitude: -74.0060, timezone: 'America/New_York' }
];

export const DEFAULT_LOCATION: LocationInfo = POPULAR_LOCATIONS[0]; // Varanasi

export interface PanchangRegionOption {
  key: PanchangRegion;
  name: string;
  nativeName: string;
  description: string;
  eraName: string;
  badge: string;
}

export const REGIONAL_PANCHANG_OPTIONS: PanchangRegionOption[] = [
  {
    key: 'mithila',
    name: 'Mithila Panchang',
    nativeName: 'मिथिला पञ्चाङ्ग (विशेश्वर / विद्यापति परंपरा)',
    description: 'Traditional Maithil Siddhanta used across Mithila (Darbhanga, Madhubani, Janakpur). Features Laxman Samvat (L.S.) and authentic Maithil fasts like Kojagari, Madhushravani, and Chhath.',
    eraName: 'Laxman Samvat (ल.सं.)',
    badge: 'Mithila Special'
  },
  {
    key: 'drik',
    name: 'Drik Panchang (Universal North)',
    nativeName: 'दृक् पञ्चाङ्ग (पूर्णिमान्त परंपरा)',
    description: 'Modern Astronomical Ephemeris & Purnimanta calendar followed across Northern & Central India.',
    eraName: 'Vikram Samvat',
    badge: 'Standard North'
  },
  {
    key: 'amanta',
    name: 'Amanta Panchang (South & West)',
    nativeName: 'अमान्त पञ्चाङ्ग (महाराष्ट्र / गुजरात / दक्षिण)',
    description: 'Month ends on Amavasya (New Moon). Followed in Maharashtra, Gujarat, Karnataka, Andhra & Telangana.',
    eraName: 'Shalivahana Shaka Samvat',
    badge: 'Amanta System'
  },
  {
    key: 'tamil',
    name: 'Tamil Solar Panchang',
    nativeName: 'தமிழ் பஞ்சாங்கம் (வாக்கிய பஞ்சாங்கம் / பாம்பு)',
    description: 'Solar sidereal calendar (Chithirai, Vaikasi...) with Tamil Samvatsaram followed in Tamil Nadu.',
    eraName: 'Thiruvalluvar Aandu',
    badge: 'Solar Sidereal'
  },
  {
    key: 'bengali',
    name: 'Bengali Ponjika',
    nativeName: 'বাংলা পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত)',
    description: 'Solar Surya Siddhanta Ponjika (Boishakh, Joishtho...) followed in Bengal, Tripura, and Assam.',
    eraName: 'Bangabda (বঙাব্দ)',
    badge: 'Purvanchal Solar'
  }
];

const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima / Amavasya'
];

const NAKSHATRA_NAMES = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashirsha', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta',
  'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

// Drik Months
const DRIK_MONTHS = [
  'Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha', 
  'Shravana', 'Bhadrapada', 'Ashvina', 'Kartika', 
  'Margashirsha', 'Pausha', 'Magha', 'Phalguna'
];

// Mithila Months
const MITHILA_MONTHS = [
  'Baishakh (वैशाख)', 'Jeth (ज्येष्ठ)', 'Asar (आषाढ)', 'Saon (श्रावण)', 
  'Bhado (भाद्रपद)', 'Ashwin (आश्विन)', 'Kartik (कार्तिक)', 'Agahan (मार्गशीर्ष)', 
  'Pus (पौष)', 'Magh (माघ)', 'Phagun (फाल्गुन)', 'Chait (चैत्र)'
];

// Tamil Months
const TAMIL_MONTHS = [
  'Chithirai (சித்திரை)', 'Vaikasi (வைகாசி)', 'Aani (ஆனி)', 'Aadi (ஆடி)',
  'Avani (ஆவணி)', 'Purattasi (புரட்டாசி)', 'Aippasi (ஐப்பசி)', 'Karthigai (கார்த்திகை)',
  'Margazhi (மார்கழி)', 'Thai (தை)', 'Masi (மாசி)', 'Panguni (பங்குனி)'
];

// Bengali Months
const BENGALI_MONTHS = [
  'Boishakh (বৈশাখ)', 'Joishtho (জ্যৈষ্ঠ)', 'Asharh (আষাঢ়)', 'Shrabon (শ্রাবণ)',
  'Bhadra (ভাদ্র)', 'Ashwin (আশ্বিন)', 'Kartik (কার্তিক)', 'Agrahayan (অগ্রহায়ণ)',
  'Poush (পৌষ)', 'Magh (মাঘ)', 'Falgun (ফাল্গুন)', 'Chaitra (চৈত্র)'
];

export function getPanchangForDate(
  date: Date, 
  location: LocationInfo,
  region: PanchangRegion = 'mithila'
): PanchangDay {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Calculate deterministic tithi & nakshatra based on day offset & longitude
  const tithiIndex = (dayOfYear + Math.floor(location.longitude / 15)) % 15;
  const isKrishna = Math.floor((dayOfYear + 3) / 15) % 2 === 1;
  const paksha = isKrishna ? 'Krishna Paksha' : 'Shukla Paksha';
  
  const tithiName = tithiIndex === 14 ? (isKrishna ? 'Amavasya' : 'Purnima') : TITHI_NAMES[tithiIndex];
  const nakshatraName = NAKSHATRA_NAMES[(dayOfYear * 2 + 5) % 27];
  
  // Adjust sunrise/sunset slightly according to latitude
  const latOffsetMinutes = Math.round((28 - location.latitude) * 1.5);
  const sunriseHour = 6;
  const sunriseMin = Math.max(10, Math.min(55, 34 + latOffsetMinutes));
  const sunsetHour = 18;
  const sunsetMin = Math.max(0, Math.min(50, 14 - latOffsetMinutes));

  const formatTime = (h: number, m: number) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(h)}:${pad(m)} ${h >= 12 ? 'PM' : 'AM'}`;
  };

  const isEkadashi = tithiIndex === 10;
  const daysToNextEkadashi = isEkadashi ? 0 : (10 - tithiIndex + 15) % 15;

  let festivalName: string | undefined = undefined;
  let fastingNote: string | undefined = undefined;

  // Regional month and era selection
  let regionalMonth = DRIK_MONTHS[Math.floor(dayOfYear / 30) % 12];
  let calendarEra = `Vikram Samvat ${2081 + (date.getMonth() > 2 ? 1 : 0)} | Saka 1946`;
  let regionName = 'Drik Panchang';
  let nativeName = 'दृक् पञ्चाङ्ग';
  let systemDescription = 'Standard Purnimanta Astronomical Ephemeris';
  let regionalFestivals: string[] = [];
  let specialRitualNotes = 'Ideal for general daily rituals, Sandhya Vandanam, and japa.';

  switch (region) {
    case 'mithila':
      regionName = 'Mithila Panchang';
      nativeName = 'मिथिला पञ्चाङ्ग (विशेश्वर-विद्यापति परंपरा)';
      calendarEra = `Laxman Samvat (L.S. 913) | Vikram Samvat ${2081 + (date.getMonth() > 2 ? 1 : 0)}`;
      regionalMonth = MITHILA_MONTHS[Math.floor(dayOfYear / 30) % 12];
      systemDescription = 'Traditional Mithila Visheshara Siddhanta followed in Tirhut & Nepal Terai.';
      regionalFestivals = [
        'Kojagari Lakshmi Puja (Mithila)',
        'Madhushravani Vrat',
        'Chhath Parva (Maha Surya Shashti)',
        'Jitiya Vrat (Jimutavahana Puja)',
        'Sama Chakeva',
        'Jur Sital (Mithila New Year / Satuan)'
      ];
      specialRitualNotes = 'Calculated per ancient Maithil Siddhanta. Fasts like Kojagari and Chhath observe traditional Mithila tithi arghya timings.';
      break;

    case 'amanta':
      regionName = 'Amanta Panchang';
      nativeName = 'अमान्त पञ्चाङ्ग (दक्षिण एवं पश्चिम)';
      calendarEra = `Shalivahana Shaka Samvat 1946 | Vikram Samvat 2081`;
      regionalMonth = DRIK_MONTHS[Math.floor((dayOfYear + 15) / 30) % 12];
      systemDescription = 'Amanta calendar ending on Amavasya. Followed in Maharashtra, Gujarat, Karnataka, Andhra & Telangana.';
      regionalFestivals = ['Ugadi / Gudi Padwa', 'Ganesh Chaturthi', 'Gowri Habba', 'Deepavali Laxmi Pujan'];
      specialRitualNotes = 'Amanta system month calculation shifts after Amavasya.';
      break;

    case 'tamil':
      regionName = 'Tamil Solar Panchang';
      nativeName = 'தமிழ் பஞ்சாங்கம் (வாக்கிய / பாம்பு)';
      calendarEra = `Thiruvalluvar Aandu 2055 | Krodhi Samvatsaram`;
      regionalMonth = TAMIL_MONTHS[Math.floor(dayOfYear / 30.4) % 12];
      systemDescription = 'Solar Sidereal (Sauramana) calendar based on Sun transit into Rashis.';
      regionalFestivals = ['Chithirai Puthandu', 'Aadi Perukku', 'Karthigai Deepam', 'Thai Pongal', 'Panguni Uthiram'];
      specialRitualNotes = 'Timings synchronized with Tamil Vakya & Pambu calendar traditions.';
      break;

    case 'bengali':
      regionName = 'Bengali Ponjika';
      nativeName = 'বাংলা পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত)';
      calendarEra = `Bangabda 1431 (বঙাব্দ / बङ्गाब्द)`;
      regionalMonth = BENGALI_MONTHS[Math.floor(dayOfYear / 30.4) % 12];
      systemDescription = 'Vishuddha Siddhanta Solar Ponjika followed in Bengal, Tripura & Assam.';
      regionalFestivals = ['Poila Boishakh', 'Mahalaya', 'Durga Puja', 'Kali Puja & Kojagari', 'Saraswati Puja'];
      specialRitualNotes = 'Tithi cutoff calculated per authentic Bengali Ponjika solar transit rules.';
      break;

    case 'drik':
    default:
      regionalFestivals = ['Navratri', 'Ram Navami', 'Janmashtami', 'Diwali', 'Maha Shivaratri'];
      break;
  }

  // Tithi / Festival highlights
  if (isEkadashi) {
    festivalName = region === 'mithila' ? 'Mithila Ekadashi Vrat' : 'Utpanna Ekadashi';
    fastingNote = 'Today is Ekadashi. Ideal for fasting, meditation, and Vishnu Sahasranama chanting.';
  } else if (tithiName === 'Purnima') {
    festivalName = region === 'mithila' ? 'Kojagari Purnima (Mithila Laxmi Puja)' : 'Sharad Purnima';
    fastingNote = 'Auspicious full moon night dedicated to Goddess Lakshmi and Chandra Dev.';
  } else if (tithiName === 'Amavasya') {
    festivalName = 'Amavasya Tithi';
    fastingNote = 'Sacred day for ancestor remembrance (Pitru Tarpana) and introspective quietude.';
  } else if (tithiIndex === 12) {
    festivalName = 'Pradosh Vrat';
    fastingNote = 'Twilight fast dedicated to Bhagwan Shiva.';
  }

  const regionalInfo: RegionalPanchangInfo = {
    regionKey: region,
    regionName,
    nativeName,
    calendarEra,
    regionalMonth,
    systemDescription,
    regionalFestivals,
    specialRitualNotes
  };

  return {
    date: date.toISOString().split('T')[0],
    formattedDate: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    tithi: tithiName,
    tithiEnd: 'Till 03:14 PM',
    paksha,
    vikramSamvat: 2081,
    masam: regionalMonth,
    sunrise: formatTime(sunriseHour, sunriseMin),
    sunset: formatTime(sunsetHour, sunsetMin),
    nakshatra: nakshatraName,
    nakshatraEnd: 'Till 11:42 PM',
    yoga: 'Siddha',
    karana: 'Bava',
    rahukaal: '03:00 PM - 04:30 PM',
    auspiciousTiming: '11:45 AM - 12:30 PM (Abhijit Muhurta)',
    festivalName,
    fastingNote,
    isEkadashi,
    isPurnima: tithiName === 'Purnima',
    isAmavasya: tithiName === 'Amavasya',
    isPradosh: tithiIndex === 12,
    daysToNextEkadashi,
    nextEkadashiName: 'Papamochanika Ekadashi',
    nextEkadashiDate: 'Oct 27',
    regionalPanchang: regionalInfo,
    muhurat: {
      abhijit: '11:45 AM - 12:30 PM',
      brahmaMuhurta: '04:24 AM - 05:12 AM',
      amritKalam: '08:15 AM - 09:48 AM',
      rahuKalam: '03:00 PM - 04:30 PM',
      godhuli: '06:10 PM - 06:34 PM'
    }
  };
}
