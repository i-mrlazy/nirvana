import React, { useState, useMemo } from 'react';
import { PalmistryTopic, ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPalmistry } from '../i18n/localizedData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Sparkles, BookOpen, Hand, Search,
  CheckCircle2, Compass, Shield, Eye, HelpCircle
} from 'lucide-react';

interface PalmistryViewProps {
  onNavigate: (screen: ScreenType, id?: string) => void;
  initialTopicId?: string;
}

export const PalmistryView: React.FC<PalmistryViewProps> = ({ onNavigate, initialTopicId }) => {
  const { language, t } = useLanguage();
  const palmistryData = useMemo(() => getLocalizedPalmistry(language), [language]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTopicId, setActiveTopicId] = useState<string>(initialTopicId || 'life-line');

  React.useEffect(() => {
    if (initialTopicId && palmistryData.some(p => p.id === initialTopicId)) {
      setActiveTopicId(initialTopicId);
    }
  }, [initialTopicId, palmistryData]);

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId(topicId);
    onNavigate('palmistry', topicId);
  };
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Major Lines', 'Mounts (Grahas)', 'Hand Shapes', 'Sacred Markings'];

  if (initialTopicId && !palmistryData.some(p => p.id === initialTopicId)) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto py-16 text-center">
        <Breadcrumbs
          items={[
            { label: t('home'), screen: 'home' },
            { label: t('palmistry'), screen: 'palmistry' },
            { label: 'Not Found' }
          ]}
          onNavigate={onNavigate}
        />
        <div className="p-8 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 shadow-xs">
          <h1 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">Palmistry Topic Not Found</h1>
          <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
            The requested Hastarekha palmistry topic could not be found. Browse our complete guide below.
          </p>
          <button
            onClick={() => onNavigate('palmistry', 'life-line')}
            className="px-5 py-2.5 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors"
          >
            View Life Line Guide
          </button>
        </div>
      </div>
    );
  }

  const filteredTopics = palmistryData.filter(topic => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.sanskritTerm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeTopic = palmistryData.find(t => t.id === activeTopicId) || filteredTopics[0] || palmistryData[0];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={
          initialTopicId && activeTopic
            ? [
                { label: t('home'), screen: 'home' },
                { label: t('palmistry'), screen: 'palmistry' },
                { label: `${activeTopic.title} (${activeTopic.sanskritTerm})` }
              ]
            : [
                { label: t('home'), screen: 'home' },
                { label: t('palmistry') }
              ]
        }
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block mb-2">
              SAMUDRIKA SHASTRA
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Hastarekha Shastra (Palmistry Guide)
            </h1>
            <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] mt-1 max-w-2xl leading-relaxed">
              Explore the classical science of hand reading: major lines, planetary mounts (Graha Parvats), hand archetypes, and auspicious sacred markings.
            </p>
          </div>
          <div className="p-3 bg-[#FF9933]/10 border border-[#FF9933]/30 rounded-xl text-[#FF9933] shrink-0 self-start sm:self-auto flex items-center justify-center">
            <Hand className="size-8" />
          </div>
        </div>
      </div>

      {/* Basic Guidelines Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-2">
          <span className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
            <Compass className="size-4" /> Active vs. Passive Hand Rule
          </span>
          <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <strong>Passive Hand</strong> (non-dominant): Shows inherent potential, karmic gifts from birth, and subconscious mind.<br />
            <strong>Active Hand</strong> (dominant): Shows conscious effort, choices made, lifestyle impact, and actualized energy.
          </p>
        </div>
        <div className="p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-2">
          <span className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
            <Eye className="size-4" /> Lines Change with Conscious Effort
          </span>
          <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            In Samudrika Shastra, hand lines are dynamic reflections of thought, daily habits, and spiritual practice. Righteous living, meditation, and healthy routine can enhance clarity of major lines over time.
          </p>
        </div>
      </div>

      {/* Visual Interactive Diagram / Palm Map */}
      <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
            Interactive Palm Map
          </h2>
          <span className="text-xs text-[#6B7280] dark:text-[#9A8F85]">
            Click any line or mount below
          </span>
        </div>

        {/* Interactive Anatomy Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {palmistryData.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTopicId(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                activeTopic.id === item.id
                  ? 'bg-[#FF9933] text-white border-[#FF9933] shadow-sm'
                  : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933]'
              }`}
            >
              <span>{item.title}</span>
              <span className="text-[10px] opacity-80">({item.category})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Category Tabs Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#FF9933] text-white border-[#FF9933]'
                    : 'bg-[#FFFFFF] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Local Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="size-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lines or mounts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] rounded-lg text-xs text-[#1A1A1A] dark:text-[#F5F2EF] focus:outline-none focus:border-[#FF9933]"
            />
          </div>
        </div>
      </div>

      {/* Focused Detail Display Area */}
      <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] shadow-sm p-6 md:p-8 space-y-6">
        {/* Topic Title Header */}
        <div className="border-b border-[#E5E1DA] dark:border-[#2A2A2A] pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933]">
              {activeTopic.category}
            </span>
            <span className="text-xs font-serif text-[#8B4513] dark:text-[#FF9933] font-bold">
              {activeTopic.sanskritTerm}
            </span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] dark:text-[#F5F2EF]">
            {activeTopic.title}
          </h2>
          <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            {activeTopic.summary}
          </p>
        </div>

        {/* Location & Significance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F5F2EF] dark:bg-[#222222] rounded-lg border border-[#E5E1DA] dark:border-[#333333] space-y-1">
            <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-wider block">
              LOCATION ON THE PALM
            </span>
            <p className="text-xs text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
              {activeTopic.locationDescription}
            </p>
          </div>
          <div className="p-4 bg-[#F5F2EF] dark:bg-[#222222] rounded-lg border border-[#E5E1DA] dark:border-[#333333] space-y-1">
            <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-wider block">
              SPIRITUAL & PHYSICAL SIGNIFICANCE
            </span>
            <p className="text-xs text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
              {activeTopic.significance}
            </p>
          </div>
        </div>

        {/* Variations & Interpretations */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] flex items-center gap-2">
            <BookOpen className="size-4 text-[#FF9933]" />
            Variations & Meanings
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {activeTopic.variations.map((v, idx) => (
              <div key={idx} className="p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-lg border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-1">
                <span className="font-bold text-xs text-[#8B4513] dark:text-[#FF9933] block">
                  • {v.type}
                </span>
                <p className="text-xs text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                  {v.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Classical Tips & Upaya */}
        <div className="p-4 bg-[#FF9933]/10 border border-[#FF9933]/30 rounded-lg space-y-2">
          <span className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] flex items-center gap-1.5">
            <Sparkles className="size-4" /> Hastarekha Wisdom & Observational Tips
          </span>
          <ul className="space-y-1 text-xs text-[#1A1A1A] dark:text-[#F5F2EF]">
            {activeTopic.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-[#FF9933] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grid List of All Topics */}
      <div className="space-y-4 pt-4">
        <h3 className="font-serif font-bold text-xl text-[#1A1A1A] dark:text-[#F5F2EF]">
          Explore All Hastarekha Topics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => {
                handleSelectTopic(topic.id);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2 group ${
                activeTopic.id === topic.id
                  ? 'bg-[#FF9933]/10 border-[#FF9933]'
                  : 'bg-[#FFFFFF] dark:bg-[#1A1A1A] border-[#E5E1DA] dark:border-[#2A2A2A] hover:border-[#FF9933]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">
                  {topic.category}
                </span>
                <span className="text-xs font-serif text-[#6B7280]">
                  {topic.sanskritTerm}
                </span>
              </div>
              <h4 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933] transition-colors">
                {topic.title}
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] line-clamp-2">
                {topic.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
