import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../i18n/translations';

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage, isIndiaDetected } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-lg border text-xs font-semibold transition-all ${
          compact
            ? 'px-2 py-1 bg-[#F5F2EF] dark:bg-[#222222] border-[#E5E1DA] dark:border-[#333333] text-[#1A1A1A] dark:text-[#F5F2EF]'
            : 'px-3 py-1.5 bg-[#F5F2EF] dark:bg-[#222222] hover:bg-[#E5E1DA] dark:hover:bg-[#2D2D2D] text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333]'
        }`}
        title="Change Language"
      >
        <Globe className="size-3.5 text-[#FF9933]" />
        <span>{currentLangObj.nativeName}</span>
        <ChevronDown className="size-3 text-[#6B7280]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E1DA] dark:border-[#2A2A2A] shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-2.5 border-b border-[#E5E1DA] dark:border-[#2A2A2A] bg-[#F5F2EF]/50 dark:bg-[#222222]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4513] dark:text-[#FF9933] block">
              Select Language / भाषा चुनें
            </span>
            {isIndiaDetected && (
              <span className="text-[9px] text-[#6B7280] dark:text-[#9A8F85] block mt-0.5">
                🇮🇳 Default set to Hindi for India
              </span>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto p-1 space-y-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as LanguageCode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all ${
                    isSelected
                      ? 'bg-[#FF9933]/15 text-[#8B4513] dark:text-[#FF9933] font-bold'
                      : 'text-[#1A1A1A] dark:text-[#F5F2EF] hover:bg-[#F5F2EF] dark:hover:bg-[#222222]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-[10px] opacity-60">({lang.name})</span>
                  </div>
                  {isSelected && <Check className="size-3.5 text-[#FF9933]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
