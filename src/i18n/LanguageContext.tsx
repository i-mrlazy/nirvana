import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, SUPPORTED_LANGUAGES, TRANSLATIONS, getTranslation, isUserInIndia } from './translations';
import { LocationInfo } from '../types';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  isIndiaDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isIndiaDetected: false,
});

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  selectedLocation?: LocationInfo;
}> = ({ children, selectedLocation }) => {
  const [isIndiaDetected, setIsIndiaDetected] = useState<boolean>(false);
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    // 1. Check if user already manually selected a language
    const savedLang = localStorage.getItem('dharma_app_lang') as LanguageCode | null;
    
    // 2. Detect location
    const inIndia = isUserInIndia(selectedLocation?.country);
    setIsIndiaDetected(inIndia);

    if (savedLang && SUPPORTED_LANGUAGES.some(l => l.code === savedLang)) {
      setLanguageState(savedLang);
    } else {
      // Rule: If location is in India, default language should be Hindi ('hi').
      // If location cannot be detected or is outside India, default language should be English ('en').
      if (inIndia) {
        setLanguageState('hi');
      } else {
        setLanguageState('en');
      }
    }
  }, [selectedLocation?.country]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('dharma_app_lang', lang);
  };

  const t = (key: string) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isIndiaDetected }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
