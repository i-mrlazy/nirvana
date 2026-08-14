import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, Calendar as CalendarIcon, Sparkles, User, Bookmark, 
  ChevronRight, MapPin, Search, Play, Volume2, ArrowRight, Share2,
  Check, ArrowLeft, Clock, Shield, Star, Heart, Navigation
} from 'lucide-react';
import { ScreenType, LocationInfo, ScriptMode, PanchangRegion } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LocationModal } from './components/LocationModal';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { SEOProvider } from './components/SEOProvider';
import { Breadcrumbs } from './components/Breadcrumbs';

import { HomeView } from './views/HomeView';
import { MantraDetailView } from './views/MantraDetailView';
import { HoroscopeView } from './views/HoroscopeView';
import { PalmistryView } from './views/PalmistryView';

import { DEFAULT_LOCATION, getPanchangForDate, REGIONAL_PANCHANG_OPTIONS } from './data/calendar';
import { generatePanchangICS, downloadICSFile } from './utils/icsExport';
import { createSyntheticAudio, stopSyntheticAudio } from './utils/audio';
import { 
  getLocalizedStories, 
  getLocalizedDeities, 
  getLocalizedMantras, 
  getLocalizedPractices, 
  getLocalizedPanchang 
} from './i18n/localizedData';

import { parseURLToRoute, getURLForRoute, normalizeRoute } from './utils/router';
import { updateDocumentHead } from './utils/seo';

function AppContent() {
  const { language, t } = useLanguage();

  const initialRoute = useMemo(() => {
    if (typeof window !== 'undefined') {
      return parseURLToRoute(window.location.pathname);
    }
    return { screen: 'home' as ScreenType };
  }, []);

  const [currentScreen, setCurrentScreen] = useState<ScreenType>(initialRoute.screen);
  const [targetId, setTargetId] = useState<string>(initialRoute.targetId || 'hanuman-chalisa');
  const [bookmarks, setBookmarks] = useState<string[]>(['hanuman-chalisa', 'gayatri-mantra']);
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>(DEFAULT_LOCATION);
  const [selectedRegion, setSelectedRegion] = useState<PanchangRegion>('mithila');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sanatan_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sanatan_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sanatan_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Audio State
  const [currentPlayingTitle, setCurrentPlayingTitle] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Panchang Data
  const panchang = useMemo(() => {
    const rawPanchang = getPanchangForDate(new Date(), selectedLocation, selectedRegion);
    return getLocalizedPanchang(rawPanchang, language);
  }, [selectedLocation, selectedRegion, language]);

  // Localized Data
  const stories = useMemo(() => getLocalizedStories(language), [language]);
  const deities = useMemo(() => getLocalizedDeities(language), [language]);
  const mantras = useMemo(() => getLocalizedMantras(language), [language]);
  const practices = useMemo(() => getLocalizedPractices(language), [language]);

  // Handle browser back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const route = parseURLToRoute(window.location.pathname);
        setCurrentScreen(route.screen);
        if (route.targetId) {
          setTargetId(route.targetId);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle Navigation
  const handleNavigate = (screen: ScreenType, id?: string) => {
    const norm = normalizeRoute(screen, id);
    setCurrentScreen(norm.screen);
    if (norm.targetId) {
      setTargetId(norm.targetId);
    }
    const newPath = getURLForRoute(norm.screen, norm.targetId);
    if (typeof window !== 'undefined' && window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Bookmark
  const handleToggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Audio Handler
  const handlePlayAudio = (title: string) => {
    if (currentPlayingTitle === title && isPlaying) {
      stopSyntheticAudio();
      setIsPlaying(false);
      setCurrentPlayingTitle(null);
    } else {
      stopSyntheticAudio();
      createSyntheticAudio();
      setCurrentPlayingTitle(title);
      setIsPlaying(true);
    }
  };

  const handlePauseAudio = () => {
    stopSyntheticAudio();
    setIsPlaying(false);
  };

  // Render Views
  const renderContent = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenSearchModal={() => setIsSearchOpen(true)}
            selectedLocation={selectedLocation}
            panchang={panchang}
            onOpenLocationModal={() => setIsLocationOpen(true)}
          />
        );

      case 'mantra-detail':
        return (
          <MantraDetailView
            mantraId={targetId}
            onNavigate={handleNavigate}
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={bookmarks.includes(targetId)}
            onPlayAudio={handlePlayAudio}
          />
        );

      case 'deity-detail': {
        const cleanTarget = targetId?.toLowerCase().trim();
        const deity = deities.find(d => d.id.toLowerCase() === cleanTarget || d.slug.toLowerCase() === cleanTarget);

        if (!deity) {
          return (
            <div className="space-y-6 max-w-2xl mx-auto py-16 text-center">
              <Breadcrumbs
                items={[
                  { label: t('home'), screen: 'home' },
                  { label: t('deities'), screen: 'deities' },
                  { label: 'Not Found' }
                ]}
                onNavigate={handleNavigate}
              />
              <div className="p-8 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 shadow-xs">
                <h1 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">Deity Profile Not Found</h1>
                <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
                  The requested Hindu deity profile could not be found. Browse our complete deity collection below.
                </p>
                <button
                  onClick={() => handleNavigate('deities')}
                  className="px-5 py-2.5 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors"
                >
                  Browse All Deities
                </button>
              </div>
            </div>
          );
        }

        const relatedMantras = mantras.filter(m => deity.mantraIds.includes(m.id) || m.deityId === deity.id);

        return (
          <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            {/* Reusable Breadcrumbs */}
            <Breadcrumbs
              items={[
                { label: t('home'), screen: 'home' },
                { label: t('deities'), screen: 'deities' },
                { label: deity.name }
              ]}
              onNavigate={handleNavigate}
            />

            {/* Deity Header */}
            <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xs">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-[#E5E1DA] dark:border-[#333333] shrink-0">
                <img src={deity.image} alt={`Lord ${deity.name}`} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933]">
                  {deity.category}
                </span>
                <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
                  {deity.name} <span className="font-serif text-2xl text-[#8B4513] dark:text-[#FF9933]">({deity.devanagariName})</span>
                </h1>
                <p className="text-sm font-semibold text-[#FF9933]">{deity.title} • {deity.epithet}</p>
                <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                  {deity.fullBiography}
                </p>
              </div>
            </div>

            {/* Associated Mantras */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#1A1A1A] dark:text-[#F5F2EF]">
                {t('mantras')} & Stotrams for {deity.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedMantras.map(m => (
                  <a
                    key={m.id}
                    href={getURLForRoute('mantra-detail', m.slug)}
                    onClick={(e) => { e.preventDefault(); handleNavigate('mantra-detail', m.slug); }}
                    className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933] transition-all group flex justify-between items-center block"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{m.category}</span>
                      <h4 className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933]">{m.title}</h4>
                      <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] line-clamp-1 mt-0.5">{m.subtitle}</p>
                    </div>
                    <ArrowRight className="size-4 text-[#9A8F85] group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* 108 Names Sample */}
            <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
                Ashtottara Shatanamavali - {deity.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {deity.names108Sample.map((n, i) => (
                  <div key={i} className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded border border-[#E5E1DA] dark:border-[#333333]">
                    <div className="font-bold text-[#8B4513] dark:text-[#FF9933] font-serif">{n.devanagari}</div>
                    <div className="font-semibold text-[#1A1A1A] dark:text-[#F5F2EF]">{n.transliteration}</div>
                    <div className="text-[11px] text-[#6B7280] italic">{n.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case 'calendar': {
        const handleExportICS = () => {
          const icsContent = generatePanchangICS(panchang, selectedLocation.city);
          const dateStr = panchang.date;
          const filename = `Panchang_${selectedRegion}_${selectedLocation.city}_${dateStr}.ics`;
          downloadICSFile(filename, icsContent);
        };

        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            {/* Calendar Header */}
            <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">
                    AUTHENTIC REGIONAL HINDU PANCHANG
                  </span>
                  <h1 className="font-serif font-bold text-2xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">
                    {panchang.regionalPanchang?.regionName || 'NIRVANA Panchang'}
                  </h1>
                  <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] mt-1">
                    {panchang.formattedDate} • {selectedLocation.city}, {selectedLocation.country}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                  <button
                    onClick={handleExportICS}
                    className="px-3.5 py-2 bg-[#FF9933]/10 text-[#8B4513] dark:text-[#FF9933] border border-[#FF9933]/30 hover:bg-[#FF9933] hover:text-white transition-all text-xs font-bold rounded-lg flex items-center gap-1.5"
                    title="Export today's auspicious timings to Google Calendar / Outlook / iCal"
                  >
                    <CalendarIcon className="size-4" />
                    <span>Export (.ics)</span>
                  </button>

                  <button
                    onClick={() => setIsLocationOpen(true)}
                    className="px-3.5 py-2 bg-[#FF9933] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-[#E08520]"
                  >
                    <MapPin className="size-4" />
                    <span>{selectedLocation.city}</span>
                  </button>
                </div>
              </div>

              {/* Regional Panchang Tradition Selector */}
              <div className="space-y-2 pt-2 border-t border-[#E5E1DA] dark:border-[#2A2A2A]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4513] dark:text-[#FF9933] block">
                  Select Regional Panchang System / क्षेत्रीय पञ्चाङ्ग परंपरा:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {REGIONAL_PANCHANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedRegion(opt.key)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedRegion === opt.key
                          ? 'bg-[#FF9933] text-white border-[#FF9933] shadow-xs'
                          : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933]'
                      }`}
                    >
                      <div className="text-[11px] font-bold line-clamp-1">{opt.name}</div>
                      <div className={`text-[9px] line-clamp-1 ${selectedRegion === opt.key ? 'text-white/80' : 'text-[#6B7280]'}`}>
                        {opt.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Regional Banner */}
              {panchang.regionalPanchang && (
                <div className="p-4 bg-[#FDFCFB] dark:bg-[#141414] rounded-xl border border-[#FF9933]/30 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-serif font-bold text-sm text-[#8B4513] dark:text-[#FF9933]">
                      {panchang.regionalPanchang.nativeName}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF9933]/10 text-[#8B4513] dark:text-[#FF9933] border border-[#FF9933]/30">
                      {panchang.regionalPanchang.calendarEra}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                    {panchang.regionalPanchang.systemDescription}
                  </p>

                  {panchang.regionalPanchang.regionalFestivals && panchang.regionalPanchang.regionalFestivals.length > 0 && (
                    <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">
                        Key Regional Celebrations:
                      </span>
                      {panchang.regionalPanchang.regionalFestivals.map((f, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#FFFFFF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] text-[10px] font-semibold text-[#1A1A1A] dark:text-[#F5F2EF]">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Panchang Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-xl border border-[#E5E1DA] dark:border-[#333333]">
                  <span className="text-[10px] font-bold text-[#6B7280] block">{t('tithi')}</span>
                  <span className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.tithi}</span>
                  <span className="text-[9px] text-[#6B7280] block mt-0.5">{panchang.tithiEnd}</span>
                </div>
                <div className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-xl border border-[#E5E1DA] dark:border-[#333333]">
                  <span className="text-[10px] font-bold text-[#6B7280] block">{t('paksha')}</span>
                  <span className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.paksha}</span>
                </div>
                <div className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-xl border border-[#E5E1DA] dark:border-[#333333]">
                  <span className="text-[10px] font-bold text-[#6B7280] block">{t('nakshatra')}</span>
                  <span className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.nakshatra}</span>
                  <span className="text-[9px] text-[#6B7280] block mt-0.5">{panchang.nakshatraEnd}</span>
                </div>
                <div className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-xl border border-[#E5E1DA] dark:border-[#333333]">
                  <span className="text-[10px] font-bold text-[#6B7280] block">Masa / Month</span>
                  <span className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.masam}</span>
                </div>
              </div>

              {/* Detailed Muhurat & Timings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#333333] space-y-2">
                  <span className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
                    <Clock className="size-4 text-[#FF9933]" /> Daily Solar & Lunar Timings
                  </span>
                  <div className="space-y-1 text-xs text-[#6B7280]">
                    <div className="flex justify-between">
                      <span>{t('sunrise')}:</span>
                      <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.sunrise}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('sunset')}:</span>
                      <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.sunset}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Yoga:</span>
                      <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.yoga}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Karana:</span>
                      <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.karana}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#333333] space-y-2">
                  <span className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
                    <Sparkles className="size-4 text-[#FF9933]" /> Auspicious & Inauspicious Windows
                  </span>
                  <div className="space-y-1 text-xs text-[#6B7280]">
                    <div className="flex justify-between">
                      <span>Abhijit Muhurat:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{panchang.muhurat.abhijit}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Brahma Muhurta:</span>
                      <strong className="text-[#8B4513] dark:text-[#FF9933]">{panchang.muhurat.brahmaMuhurta}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Amrit Kalam:</span>
                      <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">{panchang.muhurat.amritKalam}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rose-500 font-semibold">{t('rahukaal')}:</span>
                      <strong className="text-rose-600 dark:text-rose-400">{panchang.muhurat.rahuKalam}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fasting / Vrat Notice */}
              {panchang.fastingNote && (
                <div className="p-4 bg-[#FF9933]/10 border border-[#FF9933]/30 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
                    <Star className="size-4" />
                    <span>{panchang.festivalName || 'Special Vrat Observation'}</span>
                  </div>
                  <p className="text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                    {panchang.fastingNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      }

      case 'mantras':
        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{t('library')}</span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{t('mantras')}</h1>
              <p className="text-xs md:text-sm text-[#6B7280]">Authentic Sanskrit texts, transliterations, audio chants, and line-by-line translations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mantras.map(m => (
                <div
                  key={m.id}
                  onClick={() => handleNavigate('mantra-detail', m.id)}
                  className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933] transition-all cursor-pointer group flex justify-between items-center"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{m.category}</span>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933]">{m.title}</h3>
                    <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] line-clamp-2 mt-1">{m.subtitle}</p>
                  </div>
                  <ArrowRight className="size-5 text-[#9A8F85] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'deities':
        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{t('deities')}</span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{t('deities')}</h1>
              <p className="text-xs md:text-sm text-[#6B7280]">Explore the divine attributes, iconography, temples, and stotrams of Hindu deities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {deities.map(deity => (
                <div
                  key={deity.id}
                  onClick={() => handleNavigate('deity-detail', deity.id)}
                  className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] overflow-hidden hover:border-[#FF9933] transition-all cursor-pointer group"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={deity.image} alt={deity.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{deity.category}</span>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933]">{deity.name}</h3>
                    <p className="text-xs text-[#6B7280] line-clamp-2">{deity.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stories':
        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{t('stories')}</span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{t('stories')}</h1>
              <p className="text-xs md:text-sm text-[#6B7280]">Clear answers to traditional questions with scriptural references.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.map(story => (
                <div
                  key={story.id}
                  onClick={() => handleNavigate('story-detail', story.id)}
                  className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 hover:border-[#FF9933] transition-all cursor-pointer group space-y-3"
                >
                  <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{story.category}</span>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933]">{story.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">{story.summary}</p>
                  <div className="text-xs font-bold text-[#FF9933] flex items-center gap-1 pt-2">
                    <span>{t('readMore')}</span>
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'story-detail': {
        const cleanTarget = targetId?.toLowerCase().trim();
        const story = stories.find(s => s.id.toLowerCase() === cleanTarget || s.slug.toLowerCase() === cleanTarget);

        if (!story) {
          return (
            <div className="space-y-6 max-w-2xl mx-auto py-16 text-center">
              <Breadcrumbs
                items={[
                  { label: t('home'), screen: 'home' },
                  { label: t('stories'), screen: 'stories' },
                  { label: 'Not Found' }
                ]}
                onNavigate={handleNavigate}
              />
              <div className="p-8 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 shadow-xs">
                <h1 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">Story Not Found</h1>
                <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
                  The requested spiritual story could not be found. Browse our complete collection of scriptural Q&A and lore below.
                </p>
                <button
                  onClick={() => handleNavigate('stories')}
                  className="px-5 py-2.5 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors"
                >
                  Browse All Stories
                </button>
              </div>
            </div>
          );
        }

        const relatedMantra = story.relatedMantraId ? mantras.find(m => m.id === story.relatedMantraId) : undefined;
        const relatedDeity = story.relatedDeityId ? deities.find(d => d.id === story.relatedDeityId) : undefined;

        return (
          <div className="space-y-8 max-w-3xl mx-auto pb-20 animate-in fade-in duration-300">
            <Breadcrumbs
              items={[
                { label: t('home'), screen: 'home' },
                { label: t('stories'), screen: 'stories' },
                { label: story.title }
              ]}
              onNavigate={handleNavigate}
            />

            <article className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{story.category}</span>
                {relatedDeity && (
                  <a
                    href={getURLForRoute('deity-detail', relatedDeity.slug)}
                    onClick={(e) => { e.preventDefault(); handleNavigate('deity-detail', relatedDeity.slug); }}
                    className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition-colors"
                  >
                    Lord {relatedDeity.name}
                  </a>
                )}
              </div>

              <h1 className="font-serif font-bold text-2xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{story.question}</h1>
              <div className="p-4 bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] rounded-lg text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] italic leading-relaxed">
                {story.summary}
              </div>

              <div className="space-y-4 text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {story.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {relatedMantra && (
                <div className="p-4 bg-[#FF9933]/10 border border-[#FF9933]/30 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase block">
                    ASSOCIATED DEVOTIONAL HYMN
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">{relatedMantra.title}</h4>
                      <p className="text-xs text-[#6B7280]">{relatedMantra.subtitle}</p>
                    </div>
                    <a
                      href={getURLForRoute('mantra-detail', relatedMantra.slug)}
                      onClick={(e) => { e.preventDefault(); handleNavigate('mantra-detail', relatedMantra.slug); }}
                      className="px-4 py-2 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors shrink-0 text-center"
                    >
                      Recite {relatedMantra.title}
                    </a>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#E5E1DA] dark:border-[#2A2A2A] text-xs text-[#6B7280] dark:text-[#9A8F85]">
                <strong>Scriptural References:</strong> {story.sources.join(', ')}
              </div>
            </article>
          </div>
        );
      }

      case 'practices':
        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{t('practices')}</span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{t('practices')}</h1>
              <p className="text-xs md:text-sm text-[#6B7280]">Select a day or spiritual intention to find matching mantras.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practices.map(practice => (
                <div
                  key={practice.id}
                  className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase px-2 py-0.5 rounded bg-[#FF9933]/10 border border-[#FF9933]/30">
                      {practice.dayOrOccasion}
                    </span>
                    <span className="text-xs font-bold text-[#6B7280]">{practice.targetDeity}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">{practice.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{practice.summary}</p>
                  
                  <div className="space-y-1.5 pt-2 border-t border-[#E5E1DA] dark:border-[#2A2A2A]">
                    <span className="text-[10px] font-bold text-[#8B4513] uppercase">Recommended Steps:</span>
                    <ul className="text-xs text-[#6B7280] space-y-1 list-disc list-inside">
                      {practice.practicesList.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'horoscope':
        return (
          <HoroscopeView
            onNavigate={handleNavigate}
            initialSignId={targetId}
          />
        );

      case 'palmistry':
        return (
          <PalmistryView
            onNavigate={handleNavigate}
            initialTopicId={targetId}
          />
        );

      case 'bookmarks': {
        const savedMantras = mantras.filter(m => bookmarks.includes(m.id));
        return (
          <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">{t('bookmarks')}</span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">{t('bookmarks')}</h1>
              <p className="text-xs md:text-sm text-[#6B7280]">Access your offline-available daily prayers quickly.</p>
            </div>

            {savedMantras.length === 0 ? (
              <div className="text-center p-12 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] text-[#6B7280]">
                <p className="text-sm font-medium">You haven't saved any mantras yet.</p>
                <button
                  onClick={() => handleNavigate('mantras')}
                  className="mt-4 px-4 py-2 bg-[#FF9933] text-white font-bold text-xs rounded-lg hover:bg-[#E08520]"
                >
                  Browse Mantras
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedMantras.map(m => (
                  <div
                    key={m.id}
                    onClick={() => handleNavigate('mantra-detail', m.id)}
                    className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933] transition-all cursor-pointer group flex justify-between items-center"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{m.category}</span>
                      <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933]">{m.title}</h3>
                      <p className="text-xs text-[#6B7280] line-clamp-1">{m.subtitle}</p>
                    </div>
                    <ArrowRight className="size-5 text-[#9A8F85] group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }

      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenSearchModal={() => setIsSearchOpen(true)}
            selectedLocation={selectedLocation}
            panchang={panchang}
            onOpenLocationModal={() => setIsLocationOpen(true)}
          />
        );
    }
  };

  return (
    <SEOProvider screen={currentScreen} targetId={targetId}>
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#141414] text-[#1A1A1A] dark:text-[#F5F2EF] flex flex-col font-sans transition-colors duration-200">
        {/* Header */}
        <Header
          onNavigate={handleNavigate}
          currentScreen={currentScreen}
          onOpenSearchModal={() => setIsSearchOpen(true)}
          onOpenLocationModal={() => setIsLocationOpen(true)}
          selectedLocation={selectedLocation}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          bookmarkCount={bookmarks.length}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>

        {/* Audio Player Bar */}
        <AudioPlayerBar
          currentTitle={currentPlayingTitle}
          isPlaying={isPlaying}
          onPlay={() => currentPlayingTitle && handlePlayAudio(currentPlayingTitle)}
          onPause={handlePauseAudio}
          onNavigate={handleNavigate}
        />

        {/* Footer */}
        <Footer 
          onNavigate={handleNavigate}
        />

        {/* Modals */}
        <GlobalSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={handleNavigate}
        />

        <LocationModal
          isOpen={isLocationOpen}
          onClose={() => setIsLocationOpen(false)}
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
      </div>
    </SEOProvider>
  );
}

export function App() {
  return (
    <LanguageProvider selectedLocation={DEFAULT_LOCATION}>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
