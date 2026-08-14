import React, { useState } from 'react';
import { Copy, Share2, Play, Sparkles, Check, Bookmark, ArrowRight, User, BookOpen } from 'lucide-react';
import { ScriptMode, ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedMantra, getLocalizedDeity, getLocalizedMantras, getLocalizedStories } from '../i18n/localizedData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getURLForRoute } from '../utils/router';

interface MantraDetailViewProps {
  mantraId: string;
  onNavigate: (screen: ScreenType, targetId?: string) => void;
  onToggleBookmark: (id: string) => void;
  isBookmarked: boolean;
  onPlayAudio: (title: string) => void;
}

export const MantraDetailView: React.FC<MantraDetailViewProps> = ({
  mantraId,
  onNavigate,
  onToggleBookmark,
  isBookmarked,
  onPlayAudio
}) => {
  const { language, t } = useLanguage();
  const allMantras = getLocalizedMantras(language);
  const cleanTarget = mantraId?.toLowerCase().trim();
  const mantra = allMantras.find(m => m.id.toLowerCase() === cleanTarget || m.slug.toLowerCase() === cleanTarget);

  const [scriptMode, setScriptMode] = useState<ScriptMode>('all');
  const [copiedVerseId, setCopiedVerseId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  if (!mantra) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto py-16 text-center">
        <Breadcrumbs
          items={[
            { label: t('home'), screen: 'home' },
            { label: t('mantras'), screen: 'mantras' },
            { label: 'Not Found' }
          ]}
          onNavigate={onNavigate}
        />
        <div className="p-8 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 shadow-sm">
          <h1 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">Mantra Not Found</h1>
          <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
            The requested Sanskrit mantra or stotra could not be found. Browse our complete collection of sacred texts.
          </p>
          <button
            onClick={() => onNavigate('mantras')}
            className="px-5 py-2.5 bg-[#FF9933] text-white text-xs font-bold rounded-lg hover:bg-[#E08520] transition-colors"
          >
            Browse All Mantras
          </button>
        </div>
      </div>
    );
  }

  const deity = getLocalizedDeity(mantra.deityId, language);
  const allStories = getLocalizedStories(language);
  const relatedStories = allStories.filter(s => (mantra.relatedStoryIds || []).includes(s.id));
  const otherMantras = allMantras.filter(m => m.id !== mantra.id);

  const handleCopyVerse = (verseId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVerseId(verseId);
    setTimeout(() => setCopiedVerseId(null), 2000);
  };

  const handleShareMantra = async () => {
    const shareData = {
      title: `${mantra.title} - NIRVANA | The Abstract Mind`,
      text: `Read and listen to ${mantra.title} (${mantra.devanagariTitle || ''}): ${mantra.subtitle}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          await navigator.clipboard.writeText(window.location.href);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Navigation Header & Reusable Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6B7280] dark:text-[#9A8F85]">
        <Breadcrumbs
          items={[
            { label: t('home'), screen: 'home' },
            { label: t('mantras'), screen: 'mantras' },
            { label: deity.name, screen: 'deity-detail', targetId: deity.slug },
            { label: mantra.title }
          ]}
          onNavigate={onNavigate}
        />

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={handleShareMantra}
            className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              copiedLink
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-[#FFFFFF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933]'
            }`}
            title="Share Mantra Link"
          >
            {copiedLink ? <Check className="size-4" /> : <Share2 className="size-4" />}
            <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(mantra.id)}
            className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              isBookmarked
                ? 'bg-[#FF9933] text-white border-[#FF9933]'
                : 'bg-[#FFFFFF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933]'
            }`}
            title="Save for offline daily practice"
          >
            <Bookmark className={`size-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isBookmarked ? t('saved') : t('save')}</span>
          </button>
        </div>
      </div>

      {/* Main Mantra Hero Card */}
      <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl p-6 md:p-10 border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933]">
                {mantra.category}
              </span>
              
              {/* Internal Link to Associated Deity */}
              <a
                href={getURLForRoute('deity-detail', deity.slug)}
                onClick={(e) => { e.preventDefault(); onNavigate('deity-detail', deity.slug); }}
                className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] text-[#8B4513] dark:text-[#FF9933] hover:border-[#FF9933] flex items-center gap-1 transition-colors"
              >
                <User className="size-3" />
                <span>Lord {deity.name}</span>
              </a>
            </div>

            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              {mantra.title}
            </h1>
            {mantra.devanagariTitle && (
              <p className="font-serif text-2xl text-[#8B4513] dark:text-[#FF9933]">
                {mantra.devanagariTitle}
              </p>
            )}
            <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] max-w-2xl leading-relaxed">
              {mantra.subtitle}
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <button
              onClick={() => onPlayAudio(mantra.title)}
              className="px-6 py-3.5 bg-[#FF9933] hover:bg-[#E08520] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <Play className="size-4 fill-current group-hover:scale-110 transition-transform" />
              <span>{t('listen')} ({mantra.durationMinutes})</span>
            </button>
          </div>
        </div>

        {/* View Script Controls */}
        <div className="pt-6 border-t border-[#E5E1DA] dark:border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-bold text-[#8B4513] dark:text-[#FF9933] uppercase text-[10px] tracking-wider">
            Script & Translation Mode:
          </span>
          <div className="flex rounded-lg border border-[#E5E1DA] dark:border-[#333333] overflow-hidden p-0.5 bg-[#F5F2EF] dark:bg-[#222222]">
            {(['all', 'devanagari', 'transliteration', 'english', 'meaning'] as ScriptMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setScriptMode(mode)}
                className={`px-3 py-1.5 rounded text-[11px] font-semibold capitalize transition-all ${
                  scriptMode === mode
                    ? 'bg-[#FF9933] text-white shadow-xs'
                    : 'text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-[#F5F2EF]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Verses Container */}
      <section className="space-y-6" aria-label="Verses">
        {mantra.verses.map((verse) => (
          <article
            key={verse.id}
            className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl p-6 md:p-8 border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4 hover:border-[#FF9933]/50 transition-colors shadow-2xs"
          >
            <div className="flex items-center justify-between gap-2 border-b border-[#E5E1DA] dark:border-[#2A2A2A] pb-3 text-xs">
              <span className="font-bold text-[#8B4513] dark:text-[#FF9933] uppercase text-[10px] tracking-widest">
                Verse {verse.number} • {verse.verseType}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyVerse(verse.id, `${verse.devanagari}\n${verse.transliteration}\n${verse.englishTranslation}`)}
                  className="p-1.5 rounded hover:bg-[#F5F2EF] dark:hover:bg-[#222222] text-[#6B7280]"
                  title="Copy Verse Text"
                >
                  {copiedVerseId === verse.id ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
                </button>
                <button
                  onClick={handleShareMantra}
                  className="p-1.5 rounded hover:bg-[#F5F2EF] dark:hover:bg-[#222222] text-[#6B7280]"
                  title="Share Mantra Link"
                >
                  <Share2 className="size-4" />
                </button>
              </div>
            </div>

            {/* Devanagari */}
            {(scriptMode === 'all' || scriptMode === 'devanagari') && (
              <p className="font-serif text-xl md:text-2xl text-[#8B4513] dark:text-[#FF9933] text-center leading-relaxed whitespace-pre-line font-medium sanskrit-glow">
                {verse.devanagari}
              </p>
            )}

            {/* Transliteration */}
            {(scriptMode === 'all' || scriptMode === 'transliteration') && (
              <p className="text-sm md:text-base text-[#6B7280] dark:text-[#9A8F85] italic text-center leading-relaxed whitespace-pre-line">
                {verse.transliteration}
              </p>
            )}

            {/* English Translation */}
            {(scriptMode === 'all' || scriptMode === 'english') && (
              <div className="pt-3 border-t border-[#E5E1DA] dark:border-[#2A2A2A] text-center text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed">
                {verse.englishTranslation}
              </div>
            )}

            {/* Hindi Meaning */}
            {(scriptMode === 'meaning' || (scriptMode === 'all' && verse.hindiMeaning)) && (
              <details className="group/meaning border-t border-[#E5E1DA] dark:border-[#2A2A2A] pt-3 cursor-pointer">
                <summary className="text-xs font-bold text-[#8B4513] dark:text-[#FF9933] text-center list-none flex items-center justify-center gap-1">
                  <span>View Hindi Meaning & Commentary</span>
                </summary>
                <div className="pt-3 text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] space-y-2 text-center">
                  <p>{verse.hindiMeaning}</p>
                  {verse.explanation && (
                    <p className="text-[#6B7280] dark:text-[#9A8F85] italic text-[11px]">{verse.explanation}</p>
                  )}
                </div>
              </details>
            )}
          </article>
        ))}
      </section>

      {/* Benefits & Spiritual Context */}
      <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl p-6 md:p-8 border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
          Spiritual Significance & Traditional Benefits
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
          {mantra.benefits.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Sparkles className="size-4 text-[#FF9933] shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {mantra.traditionalContext && (
          <div className="pt-3 border-t border-[#E5E1DA] dark:border-[#2A2A2A] text-xs text-[#8B4513] dark:text-[#FF9933]">
            <strong>Traditional Context:</strong> {mantra.traditionalContext}
          </div>
        )}
      </section>

      {/* Related Stories / Scriptural Q&A Links */}
      {relatedStories.length > 0 && (
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl p-6 md:p-8 border border-[#E5E1DA] dark:border-[#2A2A2A] space-y-4">
          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF] flex items-center gap-2">
            <BookOpen className="size-5 text-[#FF9933]" /> Related Scriptural Stories & Lore
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedStories.map((story) => (
              <a
                key={story.id}
                href={getURLForRoute('story-detail', story.slug)}
                onClick={(e) => { e.preventDefault(); onNavigate('story-detail', story.slug); }}
                className="p-4 rounded-lg bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933] transition-all block group"
              >
                <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{story.category}</span>
                <h4 className="font-bold text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933] mt-0.5">
                  {story.title}
                </h4>
                <p className="text-[11px] text-[#6B7280] line-clamp-2 mt-1">{story.summary}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Explore Related Prayers */}
      <section className="border-t border-[#E5E1DA] dark:border-[#2A2A2A] pt-8 space-y-6">
        <h3 className="font-serif font-bold text-xl text-center text-[#1A1A1A] dark:text-[#F5F2EF]">
          Explore Related Sanskrit Mantras & Stotrams
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherMantras.slice(0, 3).map((m) => (
            <a
              key={m.id}
              href={getURLForRoute('mantra-detail', m.slug)}
              onClick={(e) => { e.preventDefault(); onNavigate('mantra-detail', m.slug); }}
              className="p-5 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] text-left hover:border-[#FF9933] transition-all group block"
            >
              <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase">{m.category}</span>
              <h4 className="font-bold text-sm text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#FF9933] transition-colors mt-0.5">
                {m.title}
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] line-clamp-2 mt-1">
                {m.subtitle}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
