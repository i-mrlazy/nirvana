import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, User, Calendar, FileText, Sparkles, ChevronRight, Compass, Hand } from 'lucide-react';
import { SearchResult, ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  getLocalizedMantras, 
  getLocalizedDeities, 
  getLocalizedStories, 
  getLocalizedPractices, 
  getLocalizedHoroscopes, 
  getLocalizedPalmistry 
} from '../i18n/localizedData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');

  const mantras = useMemo(() => getLocalizedMantras(language), [language]);
  const deities = useMemo(() => getLocalizedDeities(language), [language]);
  const stories = useMemo(() => getLocalizedStories(language), [language]);
  const practices = useMemo(() => getLocalizedPractices(language), [language]);
  const horoscopes = useMemo(() => getLocalizedHoroscopes(language), [language]);
  const palmistry = useMemo(() => getLocalizedPalmistry(language), [language]);

  const searchResults = useMemo<SearchResult[]>(() => {
    if (!query.trim()) {
      return [
        { id: 'hanuman-chalisa', type: 'mantra', title: mantras[0]?.title || 'Hanuman Chalisa', subtitle: mantras[0]?.subtitle || '40 verses', badge: 'Stotra', targetScreen: 'mantra-detail', targetId: 'hanuman-chalisa' },
        { id: 'shiva', type: 'deity', title: deities[0]?.name || 'Shiva', subtitle: deities[0]?.title || 'Mahadev', badge: 'Deity', targetScreen: 'deity-detail', targetId: 'shiva' },
        { id: 'today-ekadashi', type: 'calendar', title: t('todayPanchang'), subtitle: t('auspiciousTiming'), badge: 'Panchang', targetScreen: 'calendar', targetId: '' },
        { id: 'why-shiva-third-eye', type: 'story', title: stories[0]?.title || 'Shiva Third Eye', subtitle: stories[0]?.summary || '', badge: 'Story', targetScreen: 'story-detail', targetId: 'why-shiva-third-eye' },
        { id: 'tuesday-practice', type: 'practice', title: practices[0]?.title || 'Tuesday Practice', subtitle: practices[0]?.summary || '', badge: 'Practice', targetScreen: 'practices', targetId: 'tuesday-practice' }
      ];
    }

    const q = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search Mantras
    mantras.forEach(m => {
      if (
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: m.id,
          type: 'mantra',
          title: m.title,
          subtitle: m.subtitle,
          badge: m.category,
          targetScreen: 'mantra-detail',
          targetId: m.id
        });
      }
    });

    // Search Deities
    deities.forEach(d => {
      if (
        d.name.toLowerCase().includes(q) ||
        d.title.toLowerCase().includes(q) ||
        d.epithet.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      ) {
        results.push({
          id: d.id,
          type: 'deity',
          title: d.name,
          subtitle: d.title + ' • ' + d.epithet,
          badge: 'Deity',
          targetScreen: 'deity-detail',
          targetId: d.id
        });
      }
    });

    // Search Stories
    stories.forEach(s => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.question.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: s.id,
          type: 'story',
          title: s.title,
          subtitle: s.summary,
          badge: s.category,
          targetScreen: 'story-detail',
          targetId: s.id
        });
      }
    });

    // Search Practices
    practices.forEach(p => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.dayOrOccasion.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          type: 'practice',
          title: p.title,
          subtitle: p.summary,
          badge: 'Practice',
          targetScreen: 'practices',
          targetId: p.id
        });
      }
    });

    // Search Horoscope
    horoscopes.forEach(h => {
      if (
        h.sanskritName.toLowerCase().includes(q) ||
        h.englishName.toLowerCase().includes(q) ||
        h.element.toLowerCase().includes(q) ||
        h.rulingPlanet.toLowerCase().includes(q) ||
        h.traits.some(t => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: h.id,
          type: 'horoscope',
          title: `${h.sanskritName} (${h.symbol})`,
          subtitle: `Rasi Daily Horoscope • Ruling Planet: ${h.rulingPlanet}`,
          badge: 'Rashifal',
          targetScreen: 'horoscope',
          targetId: h.id
        });
      }
    });

    // Search Palmistry
    palmistry.forEach(pal => {
      if (
        pal.title.toLowerCase().includes(q) ||
        pal.sanskritTerm.toLowerCase().includes(q) ||
        pal.summary.toLowerCase().includes(q) ||
        pal.category.toLowerCase().includes(q)
      ) {
        results.push({
          id: pal.id,
          type: 'palmistry',
          title: `${pal.title} (${pal.sanskritTerm})`,
          subtitle: pal.summary,
          badge: 'Palmistry',
          targetScreen: 'palmistry',
          targetId: pal.id
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResult) => {
    onNavigate(item.targetScreen, item.targetId);
    onClose();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'mantra': return <BookOpen className="size-4 text-[#FF9933]" />;
      case 'deity': return <User className="size-4 text-[#8B4513] dark:text-[#FF9933]" />;
      case 'calendar': return <Calendar className="size-4 text-[#FF9933]" />;
      case 'story': return <FileText className="size-4 text-[#8B4513] dark:text-[#FF9933]" />;
      case 'practice': return <Sparkles className="size-4 text-[#FF9933]" />;
      case 'horoscope': return <Compass className="size-4 text-[#FF9933]" />;
      case 'palmistry': return <Hand className="size-4 text-[#FF9933]" />;
      default: return <Search className="size-4 text-[#6B7280]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 md:pt-24 px-4 animate-in fade-in duration-200">
      <div className="bg-[#FDFCFB] dark:bg-[#1A1A1A] w-full max-w-2xl rounded-xl shadow-2xl border border-[#E5E1DA] dark:border-[#2A2A2A] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E5E1DA] dark:border-[#2A2A2A] flex items-center gap-3 bg-[#FFFFFF] dark:bg-[#141414]">
          <Search className="size-5 text-[#FF9933] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search mantras, deities, calendar, stories, or practices..."
            className="w-full bg-transparent text-sm md:text-base text-[#1A1A1A] dark:text-[#F5F2EF] placeholder-[#9A8F85] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#6B7280] hover:text-[#1A1A1A] rounded-full"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333] rounded shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1 divide-y divide-[#E5E1DA]/50 dark:divide-[#2A2A2A]">
          <div className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em] px-3 pt-2 pb-1">
            {!query ? 'Popular Searches & Quick Navigation' : `Found ${searchResults.length} results`}
          </div>

          {searchResults.length === 0 ? (
            <div className="p-8 text-center text-[#6B7280]">
              <p className="text-sm font-medium">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for "Hanuman", "Shiva", "Gayatri", or "Ekadashi".</p>
            </div>
          ) : (
            searchResults.map((item) => (
              <button
                key={item.id + item.type}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-lg hover:bg-[#F5F2EF] dark:hover:bg-[#222222] transition-colors flex items-center justify-between group gap-3"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] shrink-0">
                    {getIcon(item.type)}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933] transition-colors truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#E5E1DA] dark:border-[#333333] bg-[#FDFCFB] dark:bg-[#141414] text-[#8B4513] dark:text-[#FF9933] shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-4 text-[#9A8F85] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

