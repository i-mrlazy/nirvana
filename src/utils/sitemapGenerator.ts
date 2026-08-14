import { MANTRAS_DATA } from '../data/mantras';
import { DEITIES_DATA } from '../data/deities';
import { STORIES_DATA } from '../data/stories';
import { PALMISTRY_DATA } from '../data/palmistry';
import { HOROSCOPE_DATA } from '../data/horoscope';
import { PRACTICES_DATA } from '../data/practices';

export const DOMAIN = 'https://nirvana-flax.vercel.app';

export interface SitemapUrlEntry {
  path: string;
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  title: string;
}

export function getAllSitemapEntries(): SitemapUrlEntry[] {
  const today = new Date().toISOString().split('T')[0];
  const entries: SitemapUrlEntry[] = [];

  const add = (
    path: string,
    title: string,
    changefreq: SitemapUrlEntry['changefreq'],
    priority: string
  ) => {
    entries.push({
      path,
      loc: `${DOMAIN}${path}`,
      lastmod: today,
      changefreq,
      priority,
      title,
    });
  };

  // 1. Home
  add('/', 'NIRVANA — The Abstract Mind', 'daily', '1.0');

  // 2. Mantras Index & Details
  add('/mantras', 'Sanskrit Mantras, Chalisas & Stotrams', 'weekly', '0.9');
  MANTRAS_DATA.forEach(m => {
    add(`/mantras/${m.slug}`, `${m.title} — ${m.subtitle}`, 'weekly', '0.9');
  });

  // 3. Deities Index & Details
  add('/deities', 'Hindu Deities & Sacred Lore', 'weekly', '0.8');
  DEITIES_DATA.forEach(d => {
    add(`/deities/${d.slug}`, `Lord ${d.name} — ${d.title}`, 'weekly', '0.8');
  });

  // 4. Stories Index & Details
  add('/stories', 'Spiritual Stories & Scriptural Lore', 'weekly', '0.8');
  STORIES_DATA.forEach(s => {
    add(`/stories/${s.slug}`, s.title, 'weekly', '0.8');
  });

  // 5. Palmistry Index & Details
  add('/palmistry', 'Hastarekha Palmistry Guide', 'weekly', '0.8');
  PALMISTRY_DATA.forEach(p => {
    add(`/palmistry/${p.id}`, `${p.title} (${p.sanskritTerm})`, 'weekly', '0.8');
  });

  // 6. Daily Practices Index & Details
  add('/practices', 'Daily Spiritual Practices & Vrats', 'weekly', '0.8');
  PRACTICES_DATA.forEach(pr => {
    add(`/practices/${pr.id}`, pr.title, 'weekly', '0.8');
  });

  // 7. Daily Raashifal Index & Sign Details
  add('/raashifal', "Today's Daily Raashifal Horoscope", 'daily', '0.9');
  HOROSCOPE_DATA.forEach(h => {
    add(`/raashifal/${h.id}`, `${h.sanskritName} (${h.englishName}) Today's Raashifal`, 'daily', '0.9');
  });

  // 8. Panchang Calendar
  add('/panchang', 'Hindu Panchang & Auspicious Timings', 'daily', '0.9');

  return entries;
}

export function generateSitemapXml(): string {
  const entries = getAllSitemapEntries();

  const urlElements = entries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.trim()}
</urlset>`.trim();
}
