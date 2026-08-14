import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { ScreenType } from '../types';
import { getSEOData, SEOData } from '../utils/seo';

interface SEOContextType {
  seoData: SEOData;
  setCustomSEO: (custom: Partial<SEOData>) => void;
  screen: ScreenType;
  targetId?: string;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

interface SEOProviderProps {
  children: React.ReactNode;
  screen: ScreenType;
  targetId?: string;
}

export const SEOProvider: React.FC<SEOProviderProps> = ({ children, screen, targetId }) => {
  const [customSEO, setCustomSEOState] = useState<Partial<SEOData> | null>(null);

  // Reset custom SEO overrides when route screen or targetId changes
  useEffect(() => {
    setCustomSEOState(null);
  }, [screen, targetId]);

  const baseSEOData = useMemo(() => {
    return getSEOData(screen, targetId);
  }, [screen, targetId]);

  const finalSEOData = useMemo(() => {
    if (!customSEO) return baseSEOData;
    return {
      ...baseSEOData,
      ...customSEO,
      breadcrumbs: customSEO.breadcrumbs || baseSEOData.breadcrumbs,
      jsonLd: customSEO.jsonLd || baseSEOData.jsonLd
    };
  }, [baseSEOData, customSEO]);

  // Sync document head dynamically whenever finalSEOData changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Document Title
    document.title = finalSEOData.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalSEOData.description);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalSEOData.canonicalUrl);

    // Open Graph Meta Tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', finalSEOData.title);
    setMeta('og:description', finalSEOData.description);
    setMeta('og:url', finalSEOData.canonicalUrl);
    setMeta('og:type', finalSEOData.ogType);
    setMeta('og:site_name', 'NIRVANA — The Abstract Mind');
    if (finalSEOData.ogImage) setMeta('og:image', finalSEOData.ogImage);

    // Twitter Card Meta Tags
    const setTwitterMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setTwitterMeta('twitter:card', 'summary_large_image');
    setTwitterMeta('twitter:title', finalSEOData.title);
    setTwitterMeta('twitter:description', finalSEOData.description);
    if (finalSEOData.ogImage) setTwitterMeta('twitter:image', finalSEOData.ogImage);

    // JSON-LD Structured Data
    let scriptLd = document.getElementById('json-ld-structured-data');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.setAttribute('type', 'application/ld+json');
      scriptLd.setAttribute('id', 'json-ld-structured-data');
      document.head.appendChild(scriptLd);
    }
    scriptLd.textContent = JSON.stringify(finalSEOData.jsonLd);
  }, [finalSEOData]);

  const setCustomSEO = (custom: Partial<SEOData>) => {
    setCustomSEOState(prev => ({ ...prev, ...custom }));
  };

  return (
    <SEOContext.Provider value={{ seoData: finalSEOData, setCustomSEO, screen, targetId }}>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within an SEOProvider');
  }
  return context;
};
