export type ScriptMode = 'devanagari' | 'transliteration' | 'english' | 'meaning' | 'all';

export type ScreenType = 
  | 'home' 
  | 'mantra-detail' 
  | 'deity-detail' 
  | 'calendar' 
  | 'stories' 
  | 'story-detail'
  | 'practices' 
  | 'deities'
  | 'mantras'
  | 'bookmarks'
  | 'horoscope'
  | 'palmistry';

export type PanchangRegion = 'drik' | 'mithila' | 'amanta' | 'tamil' | 'bengali';

export interface RegionalPanchangInfo {
  regionKey: PanchangRegion;
  regionName: string;
  nativeName: string;
  calendarEra: string;
  regionalMonth: string;
  systemDescription: string;
  regionalFestivals?: string[];
  specialRitualNotes?: string;
}

export interface LocationInfo {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface Verse {
  id: string;
  number: number;
  verseType?: 'doha' | 'chaupai' | 'sloka' | 'mantra' | 'stanza';
  devanagari: string;
  transliteration: string;
  englishTranslation: string;
  hindiMeaning?: string;
  explanation?: string;
  timestampStart?: number; // seconds into audio
  timestampEnd?: number;
}

export interface Mantra {
  id: string;
  slug: string;
  title: string;
  devanagariTitle?: string;
  subtitle: string;
  deityId: string;
  category: 'Chalisa' | 'Mantra' | 'Stotram' | 'Sahasranama' | 'Ashtakam' | 'Aarti';
  durationMinutes: string;
  durationSeconds: number;
  audioUrl?: string;
  description: string;
  benefits: string[];
  verses: Verse[];
  pronunciationNotes?: string;
  traditionalContext: string;
  sources: string[];
  tags: string[];
  relatedMantraIds: string[];
  relatedDeityIds: string[];
  relatedStoryIds: string[];
}

export interface Deity {
  id: string;
  slug: string;
  name: string;
  devanagariName: string;
  title: string;
  epithet: string;
  description: string;
  fullBiography: string;
  image: string;
  category: 'Trimurti' | 'Tridevi' | 'Avatara' | 'Ganapati' | 'Vedic';
  mantraIds: string[];
  stotraIds: string[];
  names108Sample: { devanagari: string; transliteration: string; meaning: string }[];
  stories: { id: string; title: string; teaser: string }[];
  festivals: { name: string; dateInfo: string; description: string }[];
  temples: { name: string; location: string; importance: string }[];
  symbols: { name: string; iconName: string; meaning: string }[];
  family: { name: string; relation: string; image: string; deityId?: string }[];
  relatedDeityIds: string[];
}

export interface PanchangDay {
  date: string; // YYYY-MM-DD
  formattedDate: string;
  tithi: string;
  tithiEnd: string;
  paksha: 'Shukla Paksha' | 'Krishna Paksha';
  vikramSamvat: number;
  masam: string;
  sunrise: string;
  sunset: string;
  nakshatra: string;
  nakshatraEnd: string;
  yoga: string;
  karana: string;
  rahukaal: string;
  auspiciousTiming: string;
  festivalName?: string;
  fastingNote?: string;
  isEkadashi?: boolean;
  isPurnima?: boolean;
  isAmavasya?: boolean;
  isPradosh?: boolean;
  daysToNextEkadashi?: number;
  nextEkadashiName?: string;
  nextEkadashiDate?: string;
  regionalPanchang?: RegionalPanchangInfo;
  muhurat: {
    abhijit: string;
    brahmaMuhurta: string;
    amritKalam: string;
    rahuKalam: string;
    godhuli: string;
  };
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  question: string;
  summary: string;
  content: string[];
  deityId: string;
  readingTimeMinutes: number;
  category: 'Mythology' | 'Symbolism' | 'Scripture' | 'Philosophy';
  image?: string;
  sources: string[];
  relatedStoryIds: string[];
  relatedMantraIds: string[];
}

export interface PracticeOption {
  id: string;
  title: string;
  dayOrOccasion: string;
  targetDeity: string;
  summary: string;
  recommendedMantras: string[];
  traditionalBeliefs: string;
  practicesList: string[];
}

export interface SearchResult {
  id: string;
  type: 'mantra' | 'deity' | 'calendar' | 'story' | 'practice' | 'horoscope' | 'palmistry';
  title: string;
  subtitle: string;
  badge: string;
  targetScreen: ScreenType;
  targetId: string;
}

export interface HoroscopeSign {
  id: string;
  sanskritName: string;
  englishName: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  symbol: string;
  dateRange: string;
  traits: string[];
  todayPrediction: {
    general: string;
    career: string;
    finance: string;
    health: string;
    love: string;
    luckyNumber: number;
    luckyColor: string;
    favorableTiming: string;
    mantraSuggestion: string;
    recommendedMantraId?: string;
    remedy: string;
  };
}

export interface PalmistryTopic {
  id: string;
  title: string;
  sanskritTerm: string;
  category: 'Major Lines' | 'Mounts (Grahas)' | 'Hand Shapes' | 'Sacred Markings';
  summary: string;
  locationDescription: string;
  significance: string;
  variations: {
    type: string;
    meaning: string;
  }[];
  tips: string[];
  imagePlaceholder?: string;
}
