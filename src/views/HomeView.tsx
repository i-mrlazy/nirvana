import React, { useMemo } from 'react';
import { Search, Calendar as CalendarIcon, ArrowRight, Play, BookOpen, Sparkles, ChevronRight, MapPin, Quote, Shield, Compass, Hand } from 'lucide-react';
import { ScreenType, LocationInfo, PanchangDay } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  getLocalizedDeities, 
  getLocalizedMantras, 
  getLocalizedPanchang 
} from '../i18n/localizedData';

interface HomeViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
  onOpenSearchModal: () => void;
  selectedLocation: LocationInfo;
  panchang: PanchangDay;
  onOpenLocationModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenSearchModal,
  selectedLocation,
  panchang: rawPanchang,
  onOpenLocationModal
}) => {
  const { language, t } = useLanguage();

  const deities = useMemo(() => getLocalizedDeities(language), [language]);
  const mantras = useMemo(() => getLocalizedMantras(language), [language]);
  const panchang = useMemo(() => getLocalizedPanchang(rawPanchang, language), [rawPanchang, language]);

  const featuredMantra = mantras[0]; // Hanuman Chalisa

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Hero Section - Geometric Balance Banner */}
      <section className="relative rounded-2xl overflow-hidden shadow-sm min-h-[380px] flex flex-col justify-center items-center text-center p-6 md:p-12 border border-[#E5E1DA] dark:border-[#2A2A2A]">
        {/* Background Image with Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.55) 0%, rgba(20, 20, 20, 0.85) 100%), url('/images/shiva-red.svg')`
          }}
        />

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 rounded bg-[#FF9933] text-white text-[10px] uppercase font-bold tracking-[0.2em] shadow-sm">
            {t('appSubtitle')}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight tracking-tight">
            Mantras. Scriptures. Traditions.
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto font-sans font-normal leading-relaxed">
            A quiet digital platform for Vedic wisdom, original Devanagari text, English translations, and location-accurate Panchang calculations.
          </p>

          {/* Quick Search Trigger */}
          <div className="w-full max-w-xl mx-auto pt-4">
            <button
              onClick={onOpenSearchModal}
              className="w-full h-12 bg-[#FDFCFB]/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md rounded-lg shadow-lg px-5 flex items-center justify-between gap-3 text-left border border-[#E5E1DA] hover:border-[#FF9933] transition-all group"
            >
              <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-[#F5F2EF]">
                <Search className="size-4 text-[#FF9933] group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
                  {t('searchPlaceholder')}
                </span>
              </div>
              <span className="bg-[#FF9933] text-white px-4 py-1.5 rounded text-xs font-bold shadow-sm hidden sm:inline-block">
                {t('search')}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Fast Filters */}
      <section className="flex flex-wrap gap-2 justify-center">
        {[
          { label: 'Hanuman Chalisa', target: 'mantra-detail', targetId: 'hanuman-chalisa' },
          { label: 'Gayatri Mantra', target: 'mantra-detail', targetId: 'gayatri-mantra' },
          { label: 'Lord Shiva', target: 'deity-detail', targetId: 'shiva' },
          { label: t('todayPanchang'), target: 'calendar', targetId: '' },
          { label: 'Mahamrityunjaya Mantra', target: 'mantra-detail', targetId: 'mahamrityunjaya-mantra' },
          { label: t('practices'), target: 'practices', targetId: 'tuesday-practice' }
        ].map((pill, idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(pill.target as ScreenType, pill.targetId)}
            className="px-3.5 py-1.5 rounded bg-[#FFFFFF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] text-xs font-semibold hover:border-[#FF9933] hover:text-[#8B4513] dark:hover:text-[#FF9933] transition-all border border-[#E5E1DA] dark:border-[#333333]"
          >
            {pill.label}
          </button>
        ))}
      </section>

      {/* Today's Spiritual Calendar Widget */}
      <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] rounded-xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/5 rounded-bl-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] rounded-lg shrink-0">
              <CalendarIcon className="size-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">
                {t('todayPanchang')}
              </p>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
                {panchang.paksha}, {panchang.tithi}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">
                {t('sunrise')}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] dark:text-[#F5F2EF]">
                {panchang.sunrise}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">
                {t('sunset')}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] dark:text-[#F5F2EF]">
                {panchang.sunset}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">
                {t('tithi')}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] dark:text-[#F5F2EF]">
                {panchang.tithi}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">
                {t('changeLocation')}
              </span>
              <button
                onClick={onOpenLocationModal}
                className="text-sm font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1 hover:underline"
              >
                {selectedLocation.city}
                <MapPin className="size-3 text-[#FF9933]" />
              </button>
            </div>
          </div>
        </div>

        {panchang.fastingNote && (
          <div className="mt-6 p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-lg border border-[#E5E1DA] dark:border-[#333333] text-xs text-[#1A1A1A] dark:text-[#F5F2EF] flex items-center gap-2.5">
            <Sparkles className="size-4 text-[#FF9933] shrink-0" />
            <span>{panchang.fastingNote}</span>
          </div>
        )}
      </section>


      {/* Explore the Dharma - Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
            Explore the Platform
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4513] dark:text-[#FF9933]">
            Structured Knowledge
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('mantras')}
            className="group relative rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 flex flex-col justify-between min-h-[200px] cursor-pointer hover:border-[#FF9933] transition-all"
          >
            <div>
              <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] w-fit rounded-lg mb-4 border border-[#FF9933]/20">
                <BookOpen className="size-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] mb-2 group-hover:text-[#FF9933] transition-colors">
                Mantra & Stotra Library
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                Complete verses in Devanagari, English transliteration, word meanings, and traditional context.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>Browse All Mantras</span>
              <ArrowRight className="size-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate('calendar')}
            className="group relative rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 flex flex-col justify-between min-h-[200px] cursor-pointer hover:border-[#FF9933] transition-all"
          >
            <div>
              <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] w-fit rounded-lg mb-4 border border-[#FF9933]/20">
                <CalendarIcon className="size-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] mb-2 group-hover:text-[#FF9933] transition-colors">
                Hindu Panchang & Festivals
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                Dynamic calculations for Tithi, Nakshatra, Rahukaal, Ekadashi dates, and major festivals.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>View Full Calendar</span>
              <ArrowRight className="size-4" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate('practices')}
            className="group relative rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 flex flex-col justify-between min-h-[200px] cursor-pointer hover:border-[#FF9933] transition-all"
          >
            <div>
              <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] w-fit rounded-lg mb-4 border border-[#FF9933]/20">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] mb-2 group-hover:text-[#FF9933] transition-colors">
                Guided Daily Practice
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                Curated chanting recommendations aligned with specific days, deities, or spiritual goals.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>Explore Practices</span>
              <ArrowRight className="size-4" />
            </div>
          </div>

          {/* Card 4 - Horoscope */}
          <div 
            onClick={() => onNavigate('horoscope')}
            className="group relative rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 flex flex-col justify-between min-h-[200px] cursor-pointer hover:border-[#FF9933] transition-all"
          >
            <div>
              <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] w-fit rounded-lg mb-4 border border-[#FF9933]/20">
                <Compass className="size-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] mb-2 group-hover:text-[#FF9933] transition-colors">
                Daily Rashifal & Astrology
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                Zodiac predictions for all 12 Rasis, lucky numbers, colors, and planetary remedies.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>Read Your Horoscope</span>
              <ArrowRight className="size-4" />
            </div>
          </div>

          {/* Card 5 - Palmistry */}
          <div 
            onClick={() => onNavigate('palmistry')}
            className="group relative rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 flex flex-col justify-between min-h-[200px] cursor-pointer hover:border-[#FF9933] transition-all"
          >
            <div>
              <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] w-fit rounded-lg mb-4 border border-[#FF9933]/20">
                <Hand className="size-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] mb-2 group-hover:text-[#FF9933] transition-colors">
                Palmistry (Hastarekha Shastra)
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                Comprehensive guide to hand lines, planetary mounts (Grahas), shapes, and sacred markings.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>Learn Palmistry</span>
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Focus: Hanuman Chalisa */}
      <section className="bg-[#1A1A1A] text-white rounded-2xl overflow-hidden shadow-lg border border-[#333333]">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <span className="text-[#FF9933] font-bold text-[10px] uppercase tracking-[0.2em] block">
              FEATURED STOTRA
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              {featuredMantra.title}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
              {featuredMantra.subtitle} Complete 40 chaupais with synchronized audio, pronunciation notes, and traditional context.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('mantra-detail', 'hanuman-chalisa')}
                className="bg-[#FF9933] text-white px-6 py-3 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-[#E08520] transition-colors shadow-sm"
              >
                <Play className="size-4 fill-current" />
                <span>Listen & Read Verses</span>
              </button>
              <button
                onClick={() => onNavigate('mantra-detail', 'hanuman-chalisa')}
                className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-lg font-bold text-xs hover:border-[#FF9933] hover:text-[#FF9933] transition-colors"
              >
                Read Meanings
              </button>
            </div>
          </div>

          <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden border border-white/20 shrink-0">
            <img
              src="/images/hanuman.webp"
              alt="Lord Hanuman meditating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sacred Deities Gallery */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
            Sacred Deities
          </h2>
          <button
            onClick={() => onNavigate('deities')}
            className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1 hover:underline"
          >
            <span>View All Deities</span>
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {deities.slice(0, 6).map((deity) => (
            <button
              key={deity.id}
              onClick={() => onNavigate('deity-detail', deity.id)}
              className="group text-center space-y-2 focus:outline-none"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden p-1 border border-[#E5E1DA] dark:border-[#333333] group-hover:border-[#FF9933] transition-all bg-[#FFFFFF] dark:bg-[#1A1A1A]">
                <img
                  src={deity.image}
                  alt={deity.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933] transition-colors">
                {deity.name}
              </h4>
            </button>
          ))}
        </div>
      </section>

      {/* Daily Scripture Verse */}
      <section className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 py-8 border-t border-b border-[#E5E1DA] dark:border-[#2A2A2A]">
        <Quote className="size-8 text-[#FF9933] opacity-80" />
        <h3 className="font-serif text-xl md:text-2xl text-[#8B4513] dark:text-[#FF9933] leading-relaxed sanskrit-glow font-medium">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |<br />
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||
        </h3>
        <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] italic leading-relaxed">
          "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction."
        </p>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B4513] dark:text-[#FF9933]">
          BHAGAVAD GITA 2.47
        </span>
      </section>
    </div>
  );
};

