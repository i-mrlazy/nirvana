import { ScreenType } from '../types';

export interface RouteState {
  screen: ScreenType;
  targetId?: string;
  path: string;
}

const STRICT_HUB_SCREENS: ReadonlySet<ScreenType> = new Set([
  'home',
  'mantras',
  'deities',
  'stories',
  'calendar',
  'bookmarks',
  'about',
  'privacy',
  'terms',
  'disclaimer',
  'contact',
]);

export function normalizeRoute(screen: ScreenType, targetId?: string): { screen: ScreenType; targetId?: string } {
  const cleanScreen = screen;
  const cleanId = targetId ? targetId.toLowerCase().trim() : undefined;

  // Strict hub screens can never have a targetId and must never be converted into detail screens
  if (STRICT_HUB_SCREENS.has(cleanScreen)) {
    return { screen: cleanScreen, targetId: undefined };
  }

  return { screen: cleanScreen, targetId: cleanId };
}

export function getURLForRoute(screen: ScreenType, targetId?: string): string {
  const norm = normalizeRoute(screen, targetId);
  const s = norm.screen;
  const id = norm.targetId;

  switch (s) {
    case 'home':
      return '/';
    case 'mantras':
      return '/mantras';
    case 'mantra-detail':
      return id ? `/mantras/${encodeURIComponent(id)}` : '/mantras';
    case 'deities':
      return '/deities';
    case 'deity-detail':
      return id ? `/deities/${encodeURIComponent(id)}` : '/deities';
    case 'stories':
      return '/stories';
    case 'story-detail':
      return id ? `/stories/${encodeURIComponent(id)}` : '/stories';
    case 'palmistry':
      return id ? `/palmistry/${encodeURIComponent(id)}` : '/palmistry';
    case 'practices':
      return id ? `/practices/${encodeURIComponent(id)}` : '/practices';
    case 'horoscope':
      return id ? `/raashifal/${encodeURIComponent(id)}` : '/raashifal';
    case 'calendar':
      return '/panchang';
    case 'bookmarks':
      return '/bookmarks';
    case 'about':
      return '/about';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case 'disclaimer':
      return '/disclaimer';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

export function parseURLToRoute(pathname: string): { screen: ScreenType; targetId?: string } {
  // Normalize pathname: remove trailing slashes except for root
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { screen: 'home' };
  }

  const section = parts[0].toLowerCase();
  const rawSlug = parts[1] ? decodeURIComponent(parts[1]).toLowerCase().trim() : undefined;

  switch (section) {
    case 'about':
      return { screen: 'about' };

    case 'privacy':
      return { screen: 'privacy' };

    case 'terms':
      return { screen: 'terms' };

    case 'disclaimer':
      return { screen: 'disclaimer' };

    case 'contact':
      return { screen: 'contact' };

    case 'mantras':
      if (rawSlug) {
        return { screen: 'mantra-detail', targetId: rawSlug };
      }
      return { screen: 'mantras' };

    case 'deities':
      if (rawSlug) {
        return { screen: 'deity-detail', targetId: rawSlug };
      }
      return { screen: 'deities' };

    case 'stories':
      if (rawSlug) {
        return { screen: 'story-detail', targetId: rawSlug };
      }
      return { screen: 'stories' };

    case 'palmistry':
      return { screen: 'palmistry', targetId: rawSlug };

    case 'practices':
      return { screen: 'practices', targetId: rawSlug };

    case 'raashifal':
    case 'horoscope':
      return { screen: 'horoscope', targetId: rawSlug };

    case 'panchang':
    case 'calendar':
      return { screen: 'calendar' };

    case 'bookmarks':
      return { screen: 'bookmarks' };

    default:
      return { screen: 'home' };
  }
}

