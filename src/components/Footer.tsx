import React, { useState } from 'react';
import { ScreenType } from '../types';
import { Send, CheckCircle2, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../i18n/translations';
import { getURLForRoute } from '../utils/router';

interface FooterProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#F5F2EF] dark:bg-[#181818] border-t border-[#E5E1DA] dark:border-[#2A2A2A] py-16 px-4 sm:px-6 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 space-y-4">
          <div>
            <h2 className="font-serif font-extrabold text-2xl tracking-wider text-[#8B4513] dark:text-[#FF9933]">{t('appTitle')}</h2>
            <span className="text-[11px] font-serif italic tracking-[0.2em] text-[#6B7280] dark:text-[#9A8F85] block mt-0.5">{t('appSubtitle')}</span>
          </div>
          <p className="text-[#6B7280] dark:text-[#9A8F85] text-xs leading-relaxed">
            {t('disclaimer')}
          </p>

          {/* Language Selector Footer */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4513] dark:text-[#FF9933] block mb-2 flex items-center gap-1.5">
              <Globe className="size-3.5" /> Language / भाषा:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as LanguageCode)}
                  className={`px-2 py-1 rounded text-[11px] font-semibold transition-all ${
                    language === lang.code
                      ? 'bg-[#FF9933] text-white shadow-xs'
                      : 'bg-[#FFFFFF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933]'
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-[0.2em] text-[#8B4513] dark:text-[#FF9933]">
            Resources
          </h4>
          <ul className="space-y-2 text-xs text-[#1A1A1A] dark:text-[#F5F2EF]">
            <li>
              <a href={getURLForRoute('calendar')} onClick={(e) => { e.preventDefault(); onNavigate('calendar'); }} className="hover:text-[#FF9933] transition-colors">
                {t('panchang')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('horoscope')} onClick={(e) => { e.preventDefault(); onNavigate('horoscope'); }} className="hover:text-[#FF9933] transition-colors">
                {t('rashifal')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('practices')} onClick={(e) => { e.preventDefault(); onNavigate('practices'); }} className="hover:text-[#FF9933] transition-colors">
                {t('practices')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('palmistry')} onClick={(e) => { e.preventDefault(); onNavigate('palmistry'); }} className="hover:text-[#FF9933] transition-colors">
                {t('palmistry')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('mantras')} onClick={(e) => { e.preventDefault(); onNavigate('mantras'); }} className="hover:text-[#FF9933] transition-colors">
                {t('mantras')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('deities')} onClick={(e) => { e.preventDefault(); onNavigate('deities'); }} className="hover:text-[#FF9933] transition-colors">
                {t('deities')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('stories')} onClick={(e) => { e.preventDefault(); onNavigate('stories'); }} className="hover:text-[#FF9933] transition-colors">
                {t('stories')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-[0.2em] text-[#8B4513] dark:text-[#FF9933]">
            Practice & Bookmarks
          </h4>
          <ul className="space-y-2 text-xs text-[#1A1A1A] dark:text-[#F5F2EF]">
            <li>
              <a href={getURLForRoute('practices')} onClick={(e) => { e.preventDefault(); onNavigate('practices'); }} className="hover:text-[#FF9933] transition-colors">
                {t('startJapa')}
              </a>
            </li>
            <li>
              <a href={getURLForRoute('bookmarks')} onClick={(e) => { e.preventDefault(); onNavigate('bookmarks'); }} className="hover:text-[#FF9933] transition-colors">
                {t('bookmarks')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-[0.2em] text-[#8B4513] dark:text-[#FF9933]">
            Spiritual Digest
          </h4>

          <p className="text-[#6B7280] dark:text-[#9A8F85] text-xs mb-3 leading-relaxed">
            A quiet weekly letter with authentic scripture verses and Panchang highlights.
          </p>
          {subscribed ? (
            <div className="flex items-center gap-2 p-3 bg-[#FF9933]/10 text-[#8B4513] dark:text-[#FF9933] border border-[#FF9933]/30 rounded-lg text-xs font-semibold">
              <CheckCircle2 className="size-4 text-[#FF9933]" />
              <span>Namaste! You are subscribed.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-[#FDFCFB] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] rounded-l-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-[#FF9933]"
              />
              <button
                type="submit"
                className="bg-[#FF9933] text-white px-4 rounded-r-lg hover:bg-[#E08520] transition-colors flex items-center justify-center font-bold"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#E5E1DA] dark:border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <p className="text-[#6B7280] dark:text-[#9A8F85] text-xs">
          © {new Date().getFullYear()} NIRVANA — The Abstract Mind. Satyameva Jayate.
        </p>
        <p className="text-[#6B7280] dark:text-[#9A8F85] text-xs">
          Authentic scriptures • Traditional wisdom • Open reverence
        </p>
      </div>
    </footer>
  );
};
