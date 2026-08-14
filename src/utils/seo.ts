import { ScreenType } from '../types';
import { MANTRAS_DATA } from '../data/mantras';
import { DEITIES_DATA } from '../data/deities';
import { STORIES_DATA } from '../data/stories';
import { PALMISTRY_DATA } from '../data/palmistry';
import { HOROSCOPE_DATA } from '../data/horoscope';
import { PRACTICES_DATA } from '../data/practices';
import { getURLForRoute } from './router';

const DOMAIN = 'https://nirvana-app.org';

export interface SEOData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs: { name: string; url: string }[];
  jsonLd: object[];
}

export function getSEOData(screen: ScreenType, targetId?: string): SEOData {
  const currentPath = getURLForRoute(screen, targetId);
  const canonicalUrl = `${DOMAIN}${currentPath}`;
  const baseBreadcrumb = { name: 'Home', url: `${DOMAIN}/` };

  let title = 'NIRVANA — The Abstract Mind | Mantras, Deities, Raashifal & Panchang';
  let description = 'Explore authentic Sanskrit mantras, Hanuman Chalisa, deity biographies, daily Raashifal predictions, Hastarekha Palmistry guide, and Hindu Panchang timings at NIRVANA — The Abstract Mind.';
  let ogType = 'website';
  let ogImage = `${DOMAIN}/images/hanuman.jpg`;
  let noindex = false;
  const breadcrumbs: { name: string; url: string }[] = [baseBreadcrumb];
  const jsonLd: object[] = [];

  switch (screen) {
    case 'home': {
      title = 'NIRVANA — The Abstract Mind | Mantras, Deities, Raashifal & Panchang';
      description = 'NIRVANA — The Abstract Mind: Authentic Sanskrit mantras, Hanuman Chalisa, deity lore, daily Raashifal horoscope, Hastarekha Palmistry, and regional Panchang.';
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'NIRVANA — The Abstract Mind',
        'url': DOMAIN,
        'description': description,
        'publisher': {
          '@type': 'Organization',
          'name': 'NIRVANA — The Abstract Mind'
        }
      });
      break;
    }

    case 'mantras': {
      title = 'Sanskrit Mantras, Chalisas & Stotrams — Lyrics & Chanting | NIRVANA';
      description = 'Discover sacred Sanskrit mantras, Hanuman Chalisa, Bajrang Baan, Mahamrityunjaya Mantra, and stotrams with Devanagari text, English transliterations, audio chanting, and line-by-line meanings.';
      breadcrumbs.push({ name: 'Mantras & Stotras', url: `${DOMAIN}/mantras` });
      break;
    }

    case 'mantra-detail': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const mantra = MANTRAS_DATA.find(m => m.slug.toLowerCase() === cleanTarget || m.id.toLowerCase() === cleanTarget);
      if (!mantra) {
        noindex = true;
        title = 'Mantra Not Found | NIRVANA';
        description = 'The requested Sanskrit mantra or stotra could not be found. Browse our authentic mantra collection.';
        breadcrumbs.push({ name: 'Mantras & Stotras', url: `${DOMAIN}/mantras` });
        breadcrumbs.push({ name: 'Not Found', url: canonicalUrl });
      } else {
        title = `${mantra.title} — Lyrics, Meaning, Audio & Benefits | NIRVANA`;
        description = `${mantra.subtitle} Recite complete verses of ${mantra.title} in Devanagari with English transliteration, Hindi & English meanings, audio chanting, benefits, and traditional context.`;
        ogType = 'article';
        breadcrumbs.push({ name: 'Mantras & Stotras', url: `${DOMAIN}/mantras` });
        breadcrumbs.push({ name: mantra.title, url: `${DOMAIN}/mantras/${mantra.slug}` });

        jsonLd.push({
          '@context': 'https://schema.org',
          '@type': 'MusicComposition',
          'name': mantra.title,
          'alternateName': mantra.devanagariTitle || mantra.title,
          'description': mantra.description,
          'inLanguage': ['sa', 'hi', 'en'],
          'url': canonicalUrl
        });

        if (mantra.benefits && mantra.benefits.length > 0) {
          jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': `What are the spiritual benefits of reciting ${mantra.title}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': mantra.benefits.join(' ')
                }
              },
              {
                '@type': 'Question',
                'name': `When and how should ${mantra.title} be recited traditionally?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': mantra.traditionalContext
                }
              }
            ]
          });
        }
      }
      break;
    }

    case 'deities': {
      title = 'Hindu Deities — Sacred Lore, Iconography & Temples | NIRVANA';
      description = 'Explore the divine attributes, iconography, scriptural stories, 108 names, and holy temple shrines of Lord Shiva, Hanuman, Ganesha, Vishnu, and Parvati.';
      breadcrumbs.push({ name: 'Deities', url: `${DOMAIN}/deities` });
      break;
    }

    case 'deity-detail': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const deity = DEITIES_DATA.find(d => d.slug.toLowerCase() === cleanTarget || d.id.toLowerCase() === cleanTarget);
      if (!deity) {
        noindex = true;
        title = 'Deity Not Found | NIRVANA';
        description = 'The requested deity profile could not be found. Explore our Hindu deity collection.';
        breadcrumbs.push({ name: 'Deities', url: `${DOMAIN}/deities` });
        breadcrumbs.push({ name: 'Not Found', url: canonicalUrl });
      } else {
        title = `Lord ${deity.name} — Biography, Stotrams, Stories & Temples | NIRVANA`;
        description = `${deity.title}. Learn about ${deity.name} (${deity.devanagariName}): full biography, 108 names, associated mantras, sacred symbols, festivals, and temples.`;
        ogType = 'article';
        if (deity.image && !deity.image.startsWith('/')) ogImage = deity.image;
        breadcrumbs.push({ name: 'Deities', url: `${DOMAIN}/deities` });
        breadcrumbs.push({ name: `Lord ${deity.name}`, url: `${DOMAIN}/deities/${deity.slug}` });

        jsonLd.push({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': `Lord ${deity.name} — ${deity.title}`,
          'description': deity.description,
          'url': canonicalUrl,
          'publisher': {
            '@type': 'Organization',
            'name': 'NIRVANA — The Abstract Mind'
          }
        });
      }
      break;
    }

    case 'stories': {
      title = 'Spiritual Stories & Vedic Q&A — Scriptural Insights | NIRVANA';
      description = 'Read insightful answers to traditional spiritual questions with references from Purana and Itihasa scriptures.';
      breadcrumbs.push({ name: 'Stories & Q&A', url: `${DOMAIN}/stories` });
      break;
    }

    case 'story-detail': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const story = STORIES_DATA.find(s => s.slug.toLowerCase() === cleanTarget || s.id.toLowerCase() === cleanTarget);
      if (!story) {
        noindex = true;
        title = 'Story Not Found | NIRVANA';
        description = 'The requested spiritual story could not be found. Browse our Vedic stories and scriptural Q&A.';
        breadcrumbs.push({ name: 'Stories & Q&A', url: `${DOMAIN}/stories` });
        breadcrumbs.push({ name: 'Not Found', url: canonicalUrl });
      } else {
        title = `${story.title} — Meaning & Legend | NIRVANA`;
        description = `${story.question} ${story.summary} Scriptural sources: ${story.sources.join(', ')}.`;
        ogType = 'article';
        if (story.image && !story.image.startsWith('/')) ogImage = story.image;
        breadcrumbs.push({ name: 'Stories & Q&A', url: `${DOMAIN}/stories` });
        breadcrumbs.push({ name: story.title, url: `${DOMAIN}/stories/${story.slug}` });

        jsonLd.push({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': story.title,
          'description': story.summary,
          'url': canonicalUrl,
          'publisher': {
            '@type': 'Organization',
            'name': 'NIRVANA — The Abstract Mind'
          }
        });
      }
      break;
    }

    case 'palmistry': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const topic = cleanTarget ? PALMISTRY_DATA.find(p => p.id.toLowerCase() === cleanTarget) : undefined;
      if (topic) {
        title = `${topic.title} (${topic.sanskritTerm}) — Hastarekha Palmistry | NIRVANA`;
        description = `${topic.summary} ${topic.significance} Learn hand reading variations and tips in Vedic Hastarekha Shastra.`;
        breadcrumbs.push({ name: 'Palmistry Guide', url: `${DOMAIN}/palmistry` });
        breadcrumbs.push({ name: topic.title, url: `${DOMAIN}/palmistry/${topic.id}` });
      } else {
        title = 'Hastarekha Palmistry Guide — Lines, Mounts & Markings | NIRVANA';
        description = 'Comprehensive Hastarekha Shastra guide to hand reading: Life Line, Heart Line, Head Line, Fate Line, planetary mounts (Graha Parvats), and sacred markings.';
        breadcrumbs.push({ name: 'Palmistry Guide', url: `${DOMAIN}/palmistry` });
      }
      break;
    }

    case 'practices': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const practice = cleanTarget ? PRACTICES_DATA.find(p => p.id.toLowerCase() === cleanTarget) : undefined;
      if (practice) {
        title = `${practice.title} — Traditional Rituals & Chanting | NIRVANA`;
        description = `${practice.summary} ${practice.traditionalBeliefs} Step-by-step daily spiritual practices at NIRVANA.`;
        breadcrumbs.push({ name: 'Daily Practices', url: `${DOMAIN}/practices` });
        breadcrumbs.push({ name: practice.title, url: `${DOMAIN}/practices/${practice.id}` });
      } else {
        title = 'Daily Spiritual Practices — Routines, Vrats & Chanting | NIRVANA';
        description = 'Discover daily devotional practices, Tuesday Mangalvar rituals, Monday Somvar worship, and morning smarami routines.';
        breadcrumbs.push({ name: 'Daily Practices', url: `${DOMAIN}/practices` });
      }
      break;
    }

    case 'horoscope': {
      const cleanTarget = targetId?.toLowerCase().trim();
      const sign = cleanTarget ? HOROSCOPE_DATA.find(h => h.id.toLowerCase() === cleanTarget || h.englishName.toLowerCase() === cleanTarget) : undefined;
      if (sign) {
        title = `${sign.sanskritName} (${sign.englishName}) Daily Raashifal — Today's Prediction | NIRVANA`;
        description = `Today's Daily Raashifal prediction for ${sign.englishName} (${sign.sanskritName}): ${sign.todayPrediction.general} Ruling Planet: ${sign.rulingPlanet}. Lucky Number: ${sign.todayPrediction.luckyNumber}, Lucky Color: ${sign.todayPrediction.luckyColor}.`;
        breadcrumbs.push({ name: 'Daily Raashifal', url: `${DOMAIN}/raashifal` });
        breadcrumbs.push({ name: `${sign.sanskritName} (${sign.englishName})`, url: `${DOMAIN}/raashifal/${sign.id}` });
      } else {
        title = "Daily Raashifal — Today's Zodiac Predictions & Remedies | NIRVANA";
        description = "Today's Daily Raashifal predictions for all 12 zodiac signs in Vedic Astrology. Career, health, love, finance, and mantra remedies for Aries, Taurus, Gemini, Cancer, and more.";
        breadcrumbs.push({ name: 'Daily Raashifal', url: `${DOMAIN}/raashifal` });
      }
      break;
    }

    case 'calendar': {
      title = 'Hindu Panchang — Tithi, Nakshatra, Rahukaal & Auspicious Timings | NIRVANA';
      description = 'Authentic regional Panchang timings: Tithi, Paksha, Nakshatra, Yoga, Karana, Abhijit Muhurat, Rahukaal, Sunrise, Sunset, and regional festival calendar.';
      breadcrumbs.push({ name: 'Hindu Panchang', url: `${DOMAIN}/panchang` });
      break;
    }

    case 'bookmarks': {
      title = 'Saved Mantras & Daily Bookmarks | NIRVANA';
      description = 'Access your saved Sanskrit mantras and daily chants for quick offline practice.';
      breadcrumbs.push({ name: 'Bookmarks', url: `${DOMAIN}/bookmarks` });
      noindex = true;
      break;
    }
  }

  // Generate BreadcrumbList JSON-LD if more than 1 item
  if (breadcrumbs.length > 1) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': b.url
      }))
    });
  }

  return {
    title,
    description,
    canonicalUrl,
    ogType,
    ogImage,
    noindex,
    breadcrumbs,
    jsonLd
  };
}

export function updateDocumentHead(screen: ScreenType, targetId?: string): void {
  if (typeof document === 'undefined') return;

  const seo = getSEOData(screen, targetId);

  // Title
  document.title = seo.title;

  // Robots Meta Tag
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    document.head.appendChild(robotsMeta);
  }
  robotsMeta.setAttribute('content', seo.noindex ? 'noindex, follow' : 'index, follow');

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonicalUrl);

  // Open Graph Tags
  const setMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('og:title', seo.title);
  setMeta('og:description', seo.description);
  setMeta('og:url', seo.canonicalUrl);
  setMeta('og:type', seo.ogType);
  setMeta('og:site_name', 'NIRVANA — The Abstract Mind');
  if (seo.ogImage) setMeta('og:image', seo.ogImage);

  // Twitter Tags
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
  setTwitterMeta('twitter:title', seo.title);
  setTwitterMeta('twitter:description', seo.description);
  if (seo.ogImage) setTwitterMeta('twitter:image', seo.ogImage);

  // JSON-LD Structured Data
  let scriptLd = document.getElementById('json-ld-structured-data');
  if (!scriptLd) {
    scriptLd = document.createElement('script');
    scriptLd.setAttribute('type', 'application/ld+json');
    scriptLd.setAttribute('id', 'json-ld-structured-data');
    document.head.appendChild(scriptLd);
  }
  scriptLd.textContent = JSON.stringify(seo.jsonLd);
}
