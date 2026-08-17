import React from 'react';
import { ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getURLForRoute } from '../utils/router';
import { 
  BookOpen, Sparkles, Hand, Calendar as CalendarIcon, 
  ArrowRight, ShieldCheck, Compass, HeartHandshake, Layers
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const sections = [
    {
      title: 'Mantras & Stotras',
      icon: BookOpen,
      screen: 'mantras' as ScreenType,
      path: getURLForRoute('mantras'),
      description: 'Explore well-known mantras, chalisa, stotras and devotional texts, with useful information such as original text, transliteration, meanings, context and related material where available.'
    },
    {
      title: 'Deities',
      icon: Sparkles,
      screen: 'deities' as ScreenType,
      path: getURLForRoute('deities'),
      description: 'Discover reference material about Hindu deities, their traditional stories, symbolism, associations and cultural significance.'
    },
    {
      title: 'Stories',
      icon: Layers,
      screen: 'stories' as ScreenType,
      path: getURLForRoute('stories'),
      description: 'Explore stories and explanations connected with Indian religious and cultural traditions, including questions about familiar figures, events and beliefs.'
    },
    {
      title: 'Palmistry',
      icon: Hand,
      screen: 'palmistry' as ScreenType,
      path: getURLForRoute('palmistry'),
      description: 'NIRVANA includes informational material about traditional palmistry, including lines, mounts, hand types and symbols. This section presents palmistry as a traditional system of interpretation and cultural knowledge. It is not intended to provide personalized palm readings or professional consultation.'
    },
    {
      title: 'Raashifal',
      icon: Compass,
      screen: 'horoscope' as ScreenType,
      path: getURLForRoute('horoscope'),
      description: 'NIRVANA publishes general daily Raashifal content for the twelve zodiac signs. This material reflects traditional astrological interpretations and is provided for general informational and cultural interest. It is not personalized astrological advice.'
    },
    {
      title: 'Panchang & Practices',
      icon: CalendarIcon,
      screen: 'calendar' as ScreenType,
      path: getURLForRoute('calendar'),
      description: 'The platform also explores traditional calendars, Panchang-related information, devotional practices, festival-related practices and other subjects connected with Indian traditions.'
    }
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: t('home'), screen: 'home' },
          { label: 'About NIRVANA' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header & Introduction */}
      <article className="space-y-10">
        <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block">
              INDEPENDENT DIGITAL REFERENCE &amp; PUBLISHING
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              About NIRVANA
            </h1>
            <p className="text-sm font-semibold text-[#8B4513] dark:text-[#FF9933]">
              NIRVANA — The Abstract Mind
            </p>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed border-t border-[#E5E1DA] dark:border-[#2A2A2A] pt-6">
            <p>
              <strong>NIRVANA — The Abstract Mind</strong> is an independent digital reference and publishing platform exploring spiritual, religious, cultural and traditional knowledge.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              The aim is simple: to make information about Indian traditions, devotional practices, mantras, deities, stories, traditional astrology, palmistry and related subjects easier to discover, understand and explore online.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              NIRVANA is designed as a reference space rather than a personal advisory or consultation service.
            </p>
          </div>
        </header>

        {/* What You'll Find on NIRVANA */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#8B4513] dark:text-[#FF9933] uppercase tracking-[0.2em]">
              KNOWLEDGE REPOSITORY
            </span>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              What You&apos;ll Find on NIRVANA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 space-y-3 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
                      <Icon className="size-4 shrink-0" />
                      <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
                        {sec.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={sec.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(sec.screen);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9933] hover:text-[#E08520] transition-colors"
                    >
                      <span>Explore {sec.title}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <HeartHandshake className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Our Approach
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA aims to present traditional subjects in a clear, accessible and organized way.
            </p>
            <p>
              Where content relates to traditional beliefs, astrology, palmistry or spiritual practices, those subjects are presented as traditions, interpretations or beliefs rather than as scientifically established facts.
            </p>
            <p>
              The goal is not to tell readers what they must believe.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              The goal is to provide useful reference material that allows people to learn, explore and make their own informed decisions.
            </p>
          </div>
        </section>

        {/* An Independent Platform */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ShieldCheck className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              An Independent Platform
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is an independent digital publishing project.
            </p>
            <p>
              It is not affiliated with, endorsed by, or operated by any particular religious organization, temple, spiritual institution or astrological authority unless explicitly stated on a specific page.
            </p>
            <p>
              The platform may evolve over time as new subjects, reference material and useful resources are added.
            </p>
          </div>
        </section>

        {/* Explore NIRVANA */}
        <section className="bg-[#FDFCFB] dark:bg-[#181818] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-6 text-center shadow-xs">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Explore NIRVANA
            </h2>
            <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
              Browse the different sections of NIRVANA to discover mantras, deities, traditional stories, Raashifal, palmistry, Panchang and practices.
            </p>
            <div className="pt-2">
              <span className="font-serif font-bold text-sm md:text-base text-[#8B4513] dark:text-[#FF9933] block">
                NIRVANA — The Abstract Mind
              </span>
              <span className="text-xs text-[#6B7280] dark:text-[#9A8F85] italic">
                A digital space to read, explore and understand.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { label: 'Mantras & Stotras', screen: 'mantras' as ScreenType, path: getURLForRoute('mantras') },
              { label: 'Hindu Deities', screen: 'deities' as ScreenType, path: getURLForRoute('deities') },
              { label: 'Spiritual Stories', screen: 'stories' as ScreenType, path: getURLForRoute('stories') },
              { label: 'Palmistry Guide', screen: 'palmistry' as ScreenType, path: getURLForRoute('palmistry') },
              { label: 'Daily Raashifal', screen: 'horoscope' as ScreenType, path: getURLForRoute('horoscope') },
              { label: 'Hindu Panchang', screen: 'calendar' as ScreenType, path: getURLForRoute('calendar') },
              { label: 'Daily Practices', screen: 'practices' as ScreenType, path: getURLForRoute('practices') },
            ].map((link, i) => (
              <a
                key={i}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.screen);
                }}
                className="px-3.5 py-2 rounded-lg bg-[#FFFFFF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933] text-xs font-semibold text-[#1A1A1A] dark:text-[#F5F2EF] hover:text-[#FF9933] dark:hover:text-[#FF9933] transition-all shadow-2xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
