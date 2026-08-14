import React, { useState, useMemo } from 'react';
import { HoroscopeSign, ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedHoroscopes } from '../i18n/localizedData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getURLForRoute } from '../utils/router';
import { 
  Sparkles, Sun, Moon, ArrowRight, ShieldAlert,
  Compass, Heart, Briefcase, DollarSign,
  Activity, BookOpen, Clock, Check, Share2, Calendar
} from 'lucide-react';

interface HoroscopeViewProps {
  onNavigate: (screen: ScreenType, id?: string) => void;
  initialSignId?: string;
}

export const HoroscopeView: React.FC<HoroscopeViewProps> = ({ onNavigate, initialSignId }) => {
  const { language, t } = useLanguage();
  const horoscopes = useMemo(() => getLocalizedHoroscopes(language), [language]);

  const [selectedSignId, setSelectedSignId] = useState<string>(initialSignId || 'aries');

  React.useEffect(() => {
    if (initialSignId && horoscopes.some(h => h.id === initialSignId)) {
      setSelectedSignId(initialSignId);
    }
  }, [initialSignId, horoscopes]);

  const handleSelectSign = (signId: string) => {
    setSelectedSignId(signId);
    onNavigate('horoscope', signId);
  };
  const [activeTab, setActiveTab] = useState<'all' | 'career' | 'health' | 'love' | 'remedy'>('all');
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const selectedSign: HoroscopeSign | undefined = horoscopes.find(s => s.id === selectedSignId) || horoscopes[0];

  if (initialSignId && !horoscopes.some(h => h.id === initialSignId)) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto py-16 text-center">
        <Breadcrumbs
          items={[
            { label: t('home'), screen: 'home' },
            { label: t('rashifal'), screen: 'horoscope' },
            { label: 'Not Found' }
          ]}
          onNavigate={onNavigate}
        />
        <div className="p-8 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 shadow-xs">
          <h1 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">Zodiac Sign Not Found</h1>
          <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
            The requested zodiac sign prediction could not be found. Select your sign below.
          </p>
          <button
            onClick={() => onNavigate('horoscope', 'aries')}
            className="px-5 py-2.5 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors"
          >
            View Aries Rashifal
          </button>
        </div>
      </div>
    );
  }

  const handleShareHoroscope = async () => {
    const shareData = {
      title: `${selectedSign.sanskritName} (${selectedSign.englishName}) Daily Rashifal`,
      text: `Daily Rashifal for ${selectedSign.sanskritName} (${selectedSign.englishName}): ${selectedSign.todayPrediction.general} Lucky Number: ${selectedSign.todayPrediction.luckyNumber}, Lucky Color: ${selectedSign.todayPrediction.luckyColor}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          await navigator.clipboard.writeText(window.location.href);
          setCopiedShare(true);
          setTimeout(() => setCopiedShare(false), 2000);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2000);
      } catch {
        // ignore
      }
    }
  };

  const getElementBg = (element: string) => {
    switch (element) {
      case 'Fire': return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30';
      case 'Earth': return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
      case 'Air': return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/30';
      case 'Water': return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30';
      default: return 'bg-[#FF9933]/10 text-[#8B4513] dark:text-[#FF9933] border-[#FF9933]/30';
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Breadcrumbs
          items={
            initialSignId
              ? [
                  { label: t('home'), screen: 'home' },
                  { label: t('rashifal'), screen: 'horoscope' },
                  { label: `${selectedSign.sanskritName} (${selectedSign.englishName})` }
                ]
              : [
                  { label: t('home'), screen: 'home' },
                  { label: t('rashifal') }
                ]
          }
          onNavigate={onNavigate}
        />

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <a
            href={getURLForRoute('calendar')}
            onClick={(e) => { e.preventDefault(); onNavigate('calendar'); }}
            className="px-3 py-1.5 rounded-lg border border-[#E5E1DA] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#1A1A1A] text-[#8B4513] dark:text-[#FF9933] text-xs font-bold flex items-center gap-1.5 hover:border-[#FF9933] transition-all"
          >
            <Calendar className="size-3.5" />
            <span>Today's Panchang</span>
          </a>

          <button
            onClick={handleShareHoroscope}
            className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              copiedShare
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-[#FFFFFF] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933]'
            }`}
            title="Share Daily Horoscope"
          >
            {copiedShare ? <Check className="size-3.5" /> : <Share2 className="size-3.5 text-[#FF9933]" />}
            <span>{copiedShare ? 'Copied!' : 'Share Rashifal'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-sm relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FF9933]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block mb-2">
              VEDIC ASTROLOGY (JYOTISH)
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Daily Rashifal & Planetary Insights
            </h1>
            <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] mt-1 max-w-2xl leading-relaxed">
              Astrological guidance based on Moon sign (Rasi) alignments, planetary transit energies, and traditional Vedic remedies (Upaya).
            </p>
          </div>
          <div className="flex items-center gap-2 p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-lg border border-[#E5E1DA] dark:border-[#333333] shrink-0 self-start sm:self-auto">
            <Compass className="size-5 text-[#FF9933]" />
            <div className="text-left">
              <span className="text-[10px] font-bold text-[#6B7280] block uppercase tracking-wider">12 RASIS</span>
              <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F5F2EF]">Moon Sign Guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Zodiac Sign Selector Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
            Select Your Rasi (Zodiac Sign)
          </h2>
          <span className="text-xs text-[#8B4513] dark:text-[#FF9933] font-semibold">
            {selectedSign.sanskritName} Selected
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          {horoscopes.map((sign) => {
            const isSelected = sign.id === selectedSignId;
            return (
              <button
                key={sign.id}
                onClick={() => handleSelectSign(sign.id)}
                className={`p-3 rounded-lg border text-left transition-all flex flex-col items-center text-center gap-1 group ${
                  isSelected
                    ? 'bg-[#FF9933]/10 border-[#FF9933] shadow-sm text-[#8B4513] dark:text-[#FF9933]'
                    : 'bg-[#FFFFFF] dark:bg-[#1A1A1A] border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933] text-[#1A1A1A] dark:text-[#F5F2EF]'
                }`}
              >
                <span className="text-2xl font-serif leading-none group-hover:scale-110 transition-transform">{sign.symbol}</span>
                <span className="text-xs font-bold font-serif line-clamp-1">{sign.englishName}</span>
                <span className="text-[10px] text-[#6B7280] dark:text-[#9A8F85] line-clamp-1">{sign.sanskritName.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Horoscope Card */}
      <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 md:p-8 border-b border-[#E5E1DA] dark:border-[#2A2A2A] bg-[#FDFCFB] dark:bg-[#141414] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-xl bg-[#FF9933] text-white flex items-center justify-center font-serif text-3xl font-bold shadow-sm shrink-0">
              {selectedSign.symbol}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A] dark:text-[#F5F2EF]">
                  {selectedSign.sanskritName}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getElementBg(selectedSign.element)}`}>
                  {selectedSign.element} Element
                </span>
              </div>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] mt-1">
                Ruling Planet: <strong className="text-[#1A1A1A] dark:text-[#F5F2EF] font-semibold">{selectedSign.rulingPlanet}</strong> • {selectedSign.dateRange}
              </p>
            </div>
          </div>

          {/* Traits Pills & Share Button */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {selectedSign.traits.map((trait, idx) => (
                <span key={idx} className="text-[10px] font-semibold px-2 py-1 rounded bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] text-[#1A1A1A] dark:text-[#F5F2EF]">
                  #{trait}
                </span>
              ))}
            </div>

            <button
              onClick={handleShareHoroscope}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                copiedShare
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-[#FF9933]/10 text-[#8B4513] dark:text-[#FF9933] border-[#FF9933]/30 hover:bg-[#FF9933] hover:text-white'
              }`}
            >
              {copiedShare ? <Check className="size-3.5" /> : <Share2 className="size-3.5" />}
              <span>{copiedShare ? 'Copied Link!' : `Share ${selectedSign.englishName} Rashifal`}</span>
            </button>
          </div>
        </div>

        {/* Quick Astrological Indicators Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E1DA] dark:divide-[#2A2A2A] bg-[#F5F2EF]/50 dark:bg-[#222222]/50 border-b border-[#E5E1DA] dark:border-[#2A2A2A]">
          <div className="p-4 text-center space-y-0.5">
            <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">LUCKY NUMBER</span>
            <span className="font-serif font-bold text-lg text-[#FF9933]">{selectedSign.todayPrediction.luckyNumber}</span>
          </div>
          <div className="p-4 text-center space-y-0.5">
            <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">LUCKY COLOR</span>
            <span className="font-bold text-xs text-[#1A1A1A] dark:text-[#F5F2EF]">{selectedSign.todayPrediction.luckyColor}</span>
          </div>
          <div className="p-4 text-center space-y-0.5">
            <span className="text-[10px] font-bold text-[#6B7280] dark:text-[#9A8F85] uppercase tracking-wider block">FAVORABLE TIMING</span>
            <span className="font-bold text-xs text-[#1A1A1A] dark:text-[#F5F2EF] flex items-center justify-center gap-1">
              <Clock className="size-3 text-[#FF9933]" />
              {selectedSign.todayPrediction.favorableTiming}
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="px-6 pt-4 border-b border-[#E5E1DA] dark:border-[#2A2A2A] flex gap-2 overflow-x-auto">
          {[
            { id: 'all', label: 'Full Overview' },
            { id: 'career', label: 'Career & Finance' },
            { id: 'health', label: 'Health & Energy' },
            { id: 'love', label: 'Love & Family' },
            { id: 'remedy', label: 'Vedic Remedy (Upaya)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-2 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#FF9933] text-[#8B4513] dark:text-[#FF9933]'
                  : 'border-transparent text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-[#F5F2EF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Details */}
        <div className="p-6 md:p-8 space-y-6">
          {(activeTab === 'all' || activeTab === 'career') && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Briefcase className="size-4 text-[#FF9933]" />
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
                  General & Career Outlook
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {selectedSign.todayPrediction.general}
              </p>
              <div className="p-3 bg-[#F5F2EF] dark:bg-[#222222] rounded-lg border border-[#E5E1DA] dark:border-[#333333] text-xs text-[#6B7280] dark:text-[#9A8F85]">
                <strong className="text-[#1A1A1A] dark:text-[#F5F2EF]">Work Focus:</strong> {selectedSign.todayPrediction.career}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'career') && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <DollarSign className="size-4 text-[#FF9933]" />
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
                  Financial Guidance
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {selectedSign.todayPrediction.finance}
              </p>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'health') && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Activity className="size-4 text-[#FF9933]" />
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
                  Health & Vitality
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {selectedSign.todayPrediction.health}
              </p>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'love') && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Heart className="size-4 text-[#FF9933]" />
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
                  Love, Relationships & Family
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {selectedSign.todayPrediction.love}
              </p>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'remedy') && (
            <div className="space-y-4 pt-4 border-t border-[#E5E1DA] dark:border-[#2A2A2A]">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-[#FF9933]" />
                <h3 className="font-serif font-bold text-base text-[#8B4513] dark:text-[#FF9933]">
                  Recommended Vedic Remedy & Mantra (Upaya)
                </h3>
              </div>

              <div className="p-4 bg-[#FF9933]/10 border border-[#FF9933]/30 rounded-lg space-y-3">
                <div className="text-xs text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                  <strong>Daily Remedy:</strong> {selectedSign.todayPrediction.remedy}
                </div>

                <div className="p-3 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded border border-[#E5E1DA] dark:border-[#333333] space-y-1">
                  <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase block">
                    PLANETARY BEEJA MANTRA
                  </span>
                  <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF]">
                    "{selectedSign.todayPrediction.mantraSuggestion}"
                  </p>
                </div>

                {selectedSign.todayPrediction.recommendedMantraId && (
                  <button
                    onClick={() => onNavigate('mantra-detail', selectedSign.todayPrediction.recommendedMantraId)}
                    className="mt-2 w-full sm:w-auto px-4 py-2 bg-[#FF9933] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#E08520] transition-colors shadow-sm"
                  >
                    <BookOpen className="size-4" />
                    <span>Read Full Stotra / Mantra for {selectedSign.englishName}</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Philosophy Box */}
      <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 space-y-2">
        <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
          Vedic Astrological Perspective (Karma & Free Will)
        </h3>
        <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
          In Vedic Jyotisha, planetary positions (Graha Sthiti) reflect the momentum of past karma (Prarabdha Karma). Astrological insights serve as a guiding compass to channel positive intention, practice noble deeds (Sat Karma), and maintain mental peace through prayer and meditation.
        </p>
      </section>
    </div>
  );
};
