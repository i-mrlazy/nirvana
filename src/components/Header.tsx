import React, { useState } from 'react';
import { Search, MapPin, Bookmark, Sun, Moon, Flame, Menu, X } from 'lucide-react';
import { ScreenType, LocationInfo } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType, targetId?: string) => void;
  selectedLocation: LocationInfo;
  onOpenLocationModal: () => void;
  onOpenSearchModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  bookmarkCount: number;
}

import { getURLForRoute } from '../utils/router';

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  selectedLocation,
  onOpenLocationModal,
  onOpenSearchModal,
  isDarkMode,
  onToggleDarkMode,
  bookmarkCount
}) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (screen: ScreenType, targetId?: string) => {
    onNavigate(screen, targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 dark:bg-[#141414]/95 backdrop-blur-md border-b border-[#E5E1DA] dark:border-[#2A2A2A] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name (Serves as Home Button) */}
        <a 
          href={getURLForRoute('home')}
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0"
          title="NIRVANA - Home"
        >
          <div className="size-9 rounded-lg bg-[#FF9933] text-white flex items-center justify-center font-serif font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
            <Flame className="size-5 fill-white/20" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif font-extrabold text-xl leading-none tracking-wider text-[#1A1A1A] dark:text-[#F5F2EF] group-hover:text-[#8B4513] dark:group-hover:text-[#FF9933] transition-colors">
              {t('appTitle')}
            </h1>
            <span className="text-[10px] tracking-[0.2em] font-serif italic text-[#8B4513] dark:text-[#FF9933] font-semibold block mt-0.5">
              {t('appSubtitle')}
            </span>
          </div>
        </a>

        {/* Navigation Links - Desktop (Simplified & Cleaned) */}
        <nav className="hidden lg:flex items-center gap-6 h-full shrink-0">
          <a
            href={getURLForRoute('mantras')}
            onClick={(e) => { e.preventDefault(); onNavigate('mantras'); }}
            className={`h-full flex items-center border-b-2 px-1 text-xs uppercase tracking-[0.1em] font-semibold transition-all ${
              currentScreen === 'mantras' || currentScreen === 'mantra-detail'
                ? 'border-[#FF9933] text-[#1A1A1A] dark:text-white font-bold'
                : 'border-transparent text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            {t('mantras')}
          </a>
          <a
            href={getURLForRoute('deities')}
            onClick={(e) => { e.preventDefault(); onNavigate('deities'); }}
            className={`h-full flex items-center border-b-2 px-1 text-xs uppercase tracking-[0.1em] font-semibold transition-all ${
              currentScreen === 'deities' || currentScreen === 'deity-detail'
                ? 'border-[#FF9933] text-[#1A1A1A] dark:text-white font-bold'
                : 'border-transparent text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            {t('deities')}
          </a>
          <a
            href={getURLForRoute('palmistry')}
            onClick={(e) => { e.preventDefault(); onNavigate('palmistry'); }}
            className={`h-full flex items-center border-b-2 px-1 text-xs uppercase tracking-[0.1em] font-semibold transition-all ${
              currentScreen === 'palmistry'
                ? 'border-[#FF9933] text-[#1A1A1A] dark:text-white font-bold'
                : 'border-transparent text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            {t('palmistry')}
          </a>
          <a
            href={getURLForRoute('stories')}
            onClick={(e) => { e.preventDefault(); onNavigate('stories'); }}
            className={`h-full flex items-center border-b-2 px-1 text-xs uppercase tracking-[0.1em] font-semibold transition-all ${
              currentScreen === 'stories' || currentScreen === 'story-detail'
                ? 'border-[#FF9933] text-[#1A1A1A] dark:text-white font-bold'
                : 'border-transparent text-[#6B7280] dark:text-[#9A8F85] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            {t('stories')}
          </a>
        </nav>

        {/* Long Form Field Search Bar */}
        <div 
          onClick={onOpenSearchModal}
          className="relative flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-2 cursor-pointer group"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-3 size-4 text-[#8B8B8B] group-hover:text-[#FF9933] transition-colors" />
            <input
              type="text"
              readOnly
              placeholder={t('searchPlaceholder') || "Search mantras, deities, scriptures..."}
              className="w-full pl-9 pr-12 py-2 text-xs bg-[#F5F2EF] dark:bg-[#222222] border border-[#E5E1DA] dark:border-[#333333] rounded-full text-[#1A1A1A] dark:text-[#F5F2EF] cursor-pointer group-hover:border-[#FF9933] transition-colors focus:outline-none shadow-2xs"
            />
            <span className="absolute right-3 text-[10px] font-mono bg-[#FFFFFF] dark:bg-[#1A1A1A] text-[#8B8B8B] border border-[#E5E1DA] dark:border-[#333333] px-1.5 py-0.5 rounded shadow-2xs hidden sm:inline-block">
              ⌘K
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Selector */}
          <LanguageSelector />

          {/* Location button */}
          <button
            onClick={onOpenLocationModal}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F5F2EF] dark:bg-[#222222] hover:bg-[#E5E1DA] dark:hover:bg-[#2D2D2D] text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333] transition-colors"
            title="Change Location for Panchang calculations"
          >
            <MapPin className="size-3.5 text-[#FF9933]" />
            <span className="hidden sm:inline">{selectedLocation.city}</span>
          </button>

          {/* Saved Bookmarks */}
          <button
            onClick={() => onNavigate('bookmarks')}
            className="p-2 rounded-lg bg-[#F5F2EF] dark:bg-[#222222] hover:bg-[#E5E1DA] dark:hover:bg-[#2D2D2D] text-[#1A1A1A] dark:text-[#F5F2EF] transition-colors border border-[#E5E1DA] dark:border-[#333333] relative"
            title="View Saved Prayers & Bookmarks"
          >
            <Bookmark className="size-4" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 size-4 bg-[#FF9933] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-[#F5F2EF] dark:bg-[#222222] hover:bg-[#E5E1DA] dark:hover:bg-[#2D2D2D] text-[#FF9933] transition-colors border border-[#E5E1DA] dark:border-[#333333]"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F5F2EF] dark:bg-[#222222] hover:bg-[#E5E1DA] dark:hover:bg-[#2D2D2D] text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333] transition-colors"
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E1DA] dark:border-[#2A2A2A] bg-[#FDFCFB] dark:bg-[#141414] p-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => handleMobileNav('mantras')}
              className={`p-3 rounded-xl border text-left transition-colors ${
                currentScreen === 'mantras' || currentScreen === 'mantra-detail'
                  ? 'bg-[#FF9933] text-white border-[#FF9933]'
                  : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333]'
              }`}
            >
              {t('mantras')}
            </button>
            <button
              onClick={() => handleMobileNav('deities')}
              className={`p-3 rounded-xl border text-left transition-colors ${
                currentScreen === 'deities' || currentScreen === 'deity-detail'
                  ? 'bg-[#FF9933] text-white border-[#FF9933]'
                  : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333]'
              }`}
            >
              {t('deities')}
            </button>
            <button
              onClick={() => handleMobileNav('palmistry')}
              className={`p-3 rounded-xl border text-left transition-colors ${
                currentScreen === 'palmistry'
                  ? 'bg-[#FF9933] text-white border-[#FF9933]'
                  : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333]'
              }`}
            >
              {t('palmistry')}
            </button>
            <button
              onClick={() => handleMobileNav('stories')}
              className={`p-3 rounded-xl border text-left transition-colors ${
                currentScreen === 'stories' || currentScreen === 'story-detail'
                  ? 'bg-[#FF9933] text-white border-[#FF9933]'
                  : 'bg-[#F5F2EF] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#F5F2EF] border-[#E5E1DA] dark:border-[#333333]'
              }`}
            >
              {t('stories')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
