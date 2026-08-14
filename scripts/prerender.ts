import fs from 'fs';
import path from 'path';
import { MANTRAS_DATA } from '../src/data/mantras';
import { DEITIES_DATA } from '../src/data/deities';
import { STORIES_DATA } from '../src/data/stories';
import { PALMISTRY_DATA } from '../src/data/palmistry';
import { HOROSCOPE_DATA } from '../src/data/horoscope';
import { PRACTICES_DATA } from '../src/data/practices';
import { getSEOData } from '../src/utils/seo';
import { generateSitemapXml } from '../src/utils/sitemapGenerator';
import { ScreenType } from '../src/types';

const DOMAIN = 'https://nirvana-app.org';
const DIST_DIR = path.resolve(process.cwd(), 'dist');

interface RouteConfig {
  path: string;
  screen: ScreenType;
  targetId?: string;
  changefreq: string;
  priority: string;
  heading: string;
  bodyHtml: string;
}

function getAllRoutes(): RouteConfig[] {
  const routes: RouteConfig[] = [];

  // Home
  routes.push({
    path: '/',
    screen: 'home',
    changefreq: 'daily',
    priority: '1.0',
    heading: 'NIRVANA — The Abstract Mind',
    bodyHtml: `
      <h1>NIRVANA — The Abstract Mind</h1>
      <p>A sacred digital sanctuary for Sanskrit mantras, Hanuman Chalisa, deity lore, daily Raashifal horoscope, Hastarekha Palmistry, and authentic Panchang.</p>
      <nav>
        <ul>
          <li><a href="/mantras">Sanskrit Mantras & Chalisas</a></li>
          <li><a href="/deities">Hindu Deities & Sacred Lore</a></li>
          <li><a href="/raashifal">Daily Raashifal Predictions</a></li>
          <li><a href="/palmistry">Hastarekha Palmistry Guide</a></li>
          <li><a href="/stories">Spiritual Stories & Vedic Q&A</a></li>
          <li><a href="/panchang">Hindu Panchang Timings</a></li>
        </ul>
      </nav>
    `
  });

  // Mantras Index
  routes.push({
    path: '/mantras',
    screen: 'mantras',
    changefreq: 'weekly',
    priority: '0.9',
    heading: 'Sanskrit Mantras, Chalisas & Stotrams',
    bodyHtml: `
      <h1>Sanskrit Mantras, Chalisas & Stotrams</h1>
      <p>Explore complete authentic texts in Devanagari, English transliteration, line-by-line translations, audio chanting, and spiritual benefits.</p>
      <ul>
        ${MANTRAS_DATA.map(m => `
          <li>
            <a href="/mantras/${m.slug}">
              <strong>${m.title}</strong> — ${m.subtitle} (${m.devanagariTitle || m.title})
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  // Mantra Detail Pages
  MANTRAS_DATA.forEach(m => {
    const deity = DEITIES_DATA.find(d => d.id === m.deityId) || DEITIES_DATA[0];
    routes.push({
      path: `/mantras/${m.slug}`,
      screen: 'mantra-detail',
      targetId: m.slug,
      changefreq: 'weekly',
      priority: '0.9',
      heading: `${m.title} (${m.devanagariTitle || m.title})`,
      bodyHtml: `
        <article>
          <h1>${m.title}</h1>
          <h2>${m.subtitle} • ${m.devanagariTitle || m.title}</h2>
          <p>${m.description}</p>
          
          <section>
            <h3>Deity & Traditional Context</h3>
            <p>Associated Deity: <a href="/deities/${deity.slug}">Lord ${deity.name}</a></p>
            <p>${m.traditionalContext}</p>
          </section>

          <section>
            <h3>Verses & Meaning</h3>
            ${m.verses.map(v => `
              <div style="margin-bottom:1.5rem;">
                <p><strong>Devanagari:</strong> ${v.devanagari.replace(/\n/g, '<br/>')}</p>
                <p><strong>English Transliteration:</strong> ${v.transliteration.replace(/\n/g, '<br/>')}</p>
                <p><strong>English Translation:</strong> ${v.englishTranslation}</p>
                ${v.hindiMeaning ? `<p><strong>Hindi Translation:</strong> ${v.hindiMeaning}</p>` : ''}
              </div>
            `).join('')}
          </section>

          <section>
            <h3>Spiritual Benefits</h3>
            <ul>
              ${m.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </section>

          <section>
            <h3>Related Sacred Content</h3>
            <p>Explore <a href="/deities/${deity.slug}">Lord ${deity.name} Biography</a>, <a href="/practices/tuesday-practice">Tuesday Devotional Practice</a>, and <a href="/raashifal">Today's Daily Raashifal</a>.</p>
          </section>
        </article>
      `
    });
  });

  // Deities Index
  routes.push({
    path: '/deities',
    screen: 'deities',
    changefreq: 'weekly',
    priority: '0.8',
    heading: 'Hindu Deities — Lore, Attributes & Temples',
    bodyHtml: `
      <h1>Hindu Deities & Sacred Lore</h1>
      <p>Discover sacred biographies, 108 names, iconography, associated stotrams, and temples of revered Hindu deities.</p>
      <ul>
        ${DEITIES_DATA.map(d => `
          <li>
            <a href="/deities/${d.slug}">
              <strong>Lord ${d.name}</strong> (${d.devanagariName}) — ${d.title}
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  // Deity Detail Pages
  DEITIES_DATA.forEach(d => {
    routes.push({
      path: `/deities/${d.slug}`,
      screen: 'deity-detail',
      targetId: d.slug,
      changefreq: 'weekly',
      priority: '0.8',
      heading: `Lord ${d.name} — ${d.title}`,
      bodyHtml: `
        <article>
          <h1>Lord ${d.name} (${d.devanagariName})</h1>
          <h2>${d.title}</h2>
          <p>${d.description}</p>
          <p>${d.fullBiography}</p>

          <section>
            <h3>Primary Sacred Temples</h3>
            <ul>
              ${d.temples.map(t => `<li><strong>${t.name}</strong> (${t.location}): ${t.importance}</li>`).join('')}
            </ul>
          </section>

          <section>
            <h3>Associated Mantras & Stories</h3>
            <p>Recite <a href="/mantras/hanuman-chalisa">Hanuman Chalisa</a> or explore <a href="/stories">Vedic Stories</a>.</p>
          </section>
        </article>
      `
    });
  });

  // Stories Index
  routes.push({
    path: '/stories',
    screen: 'stories',
    changefreq: 'weekly',
    priority: '0.8',
    heading: 'Spiritual Stories & Scriptural Answers',
    bodyHtml: `
      <h1>Spiritual Stories & Scriptural Answers</h1>
      <p>Deep-dive into traditional Purana and Itihasa lore with authentic scriptural citations.</p>
      <ul>
        ${STORIES_DATA.map(s => `
          <li>
            <a href="/stories/${s.slug}">
              <strong>${s.title}</strong> — ${s.question}
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  // Story Detail Pages
  STORIES_DATA.forEach(s => {
    routes.push({
      path: `/stories/${s.slug}`,
      screen: 'story-detail',
      targetId: s.slug,
      changefreq: 'weekly',
      priority: '0.8',
      heading: s.title,
      bodyHtml: `
        <article>
          <h1>${s.title}</h1>
          <p><strong>Question:</strong> ${s.question}</p>
          <p>${s.summary}</p>
          <div>${s.content.map(paragraph => `<p>${paragraph}</p>`).join('')}</div>
          <p><strong>Scriptural Sources:</strong> ${s.sources.join(', ')}</p>
          <p>Read more <a href="/deities">Deity Biographies</a> or recite <a href="/mantras">Sanskrit Mantras</a>.</p>
        </article>
      `
    });
  });

  // Palmistry Index
  routes.push({
    path: '/palmistry',
    screen: 'palmistry',
    changefreq: 'weekly',
    priority: '0.8',
    heading: 'Hastarekha Palmistry Guide',
    bodyHtml: `
      <h1>Hastarekha Palmistry Guide</h1>
      <p>Learn Vedic hand reading: Life Line (Aayu Rekha), Heart Line (Hrdaya Rekha), Head Line (Masti Rekha), Fate Line (Bhagya Rekha), and planetary mounts.</p>
      <ul>
        ${PALMISTRY_DATA.map(p => `
          <li>
            <a href="/palmistry/${p.id}">
              <strong>${p.title}</strong> (${p.sanskritTerm}) — ${p.category}
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  // Palmistry Topic Detail Pages
  PALMISTRY_DATA.forEach(p => {
    routes.push({
      path: `/palmistry/${p.id}`,
      screen: 'palmistry',
      targetId: p.id,
      changefreq: 'weekly',
      priority: '0.8',
      heading: `${p.title} (${p.sanskritTerm})`,
      bodyHtml: `
        <article>
          <h1>${p.title} (${p.sanskritTerm})</h1>
          <p>Category: ${p.category}</p>
          <p>${p.summary}</p>
          <p><strong>Location on Palm:</strong> ${p.locationDescription}</p>
          <p><strong>Spiritual Significance:</strong> ${p.significance}</p>
          <h3>Key Indications & Interpretations</h3>
          <ul>
            ${p.variations.map(v => `<li><strong>${v.type}:</strong> ${v.meaning}</li>`).join('')}
          </ul>
          <h3>Hastarekha Tips</h3>
          <ul>
            ${p.tips.map(t => `<li>${t}</li>`).join('')}
          </ul>
          <p>Check your <a href="/raashifal">Daily Raashifal</a> or explore <a href="/panchang">Today's Panchang</a>.</p>
        </article>
      `
    });
  });

  // Daily Practices Index & Detail Pages
  routes.push({
    path: '/practices',
    screen: 'practices',
    changefreq: 'weekly',
    priority: '0.8',
    heading: 'Daily Spiritual Practices & Vrats',
    bodyHtml: `
      <h1>Daily Spiritual Practices & Vrats</h1>
      <p>Discover daily devotional routines, Tuesday Mangalvar rituals, Monday Somvar worship, and morning smarami practices.</p>
      <ul>
        ${PRACTICES_DATA.map(pr => `
          <li>
            <a href="/practices/${pr.id}">
              <strong>${pr.title}</strong> — ${pr.dayOrOccasion} (${pr.targetDeity})
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  PRACTICES_DATA.forEach(pr => {
    routes.push({
      path: `/practices/${pr.id}`,
      screen: 'practices',
      targetId: pr.id,
      changefreq: 'weekly',
      priority: '0.8',
      heading: pr.title,
      bodyHtml: `
        <article>
          <h1>${pr.title}</h1>
          <p><strong>Occasion:</strong> ${pr.dayOrOccasion} | <strong>Target Deity:</strong> ${pr.targetDeity}</p>
          <p>${pr.summary}</p>
          <p><strong>Traditional Beliefs:</strong> ${pr.traditionalBeliefs}</p>
          <h3>Recommended Sequence</h3>
          <ol>
            ${pr.practicesList.map(step => `<li>${step}</li>`).join('')}
          </ol>
          <p>Recite <a href="/mantras/hanuman-chalisa">Hanuman Chalisa</a> or check <a href="/panchang">Today's Auspicious Timings</a>.</p>
        </article>
      `
    });
  });

  // Raashifal Index
  routes.push({
    path: '/raashifal',
    screen: 'horoscope',
    changefreq: 'daily',
    priority: '0.9',
    heading: "Today's Daily Raashifal Predictions",
    bodyHtml: `
      <h1>Today's Daily Raashifal Predictions</h1>
      <p>Vedic Astrology Moon sign (Rasi) predictions for all 12 zodiac signs with career, health, finance, love, and mantra remedies.</p>
      <ul>
        ${HOROSCOPE_DATA.map(h => `
          <li>
            <a href="/raashifal/${h.id}">
              <strong>${h.sanskritName}</strong> (${h.englishName}) — ${h.symbol}
            </a>
          </li>
        `).join('')}
      </ul>
    `
  });

  // Raashifal Sign Pages
  HOROSCOPE_DATA.forEach(h => {
    routes.push({
      path: `/raashifal/${h.id}`,
      screen: 'horoscope',
      targetId: h.id,
      changefreq: 'daily',
      priority: '0.9',
      heading: `${h.sanskritName} (${h.englishName}) Daily Raashifal`,
      bodyHtml: `
        <article>
          <h1>${h.sanskritName} (${h.englishName}) Today's Raashifal</h1>
          <p><strong>Ruling Planet:</strong> ${h.rulingPlanet} | <strong>Element:</strong> ${h.element} | <strong>Date Range:</strong> ${h.dateRange}</p>
          <p><strong>General Prediction:</strong> ${h.todayPrediction.general}</p>
          <p><strong>Career & Finances:</strong> ${h.todayPrediction.career}</p>
          <p><strong>Health & Wellbeing:</strong> ${h.todayPrediction.health}</p>
          <p><strong>Love & Relationships:</strong> ${h.todayPrediction.love}</p>
          <p><strong>Vedic Remedy (Upaya):</strong> ${h.todayPrediction.remedy}</p>
          <p><strong>Lucky Number:</strong> ${h.todayPrediction.luckyNumber} | <strong>Lucky Color:</strong> ${h.todayPrediction.luckyColor}</p>
          <p>Recite <a href="/mantras">Remedial Mantras</a> or consult <a href="/palmistry">Hastarekha Guide</a>.</p>
        </article>
      `
    });
  });

  // Panchang Index
  routes.push({
    path: '/panchang',
    screen: 'calendar',
    changefreq: 'daily',
    priority: '0.9',
    heading: 'Hindu Panchang — Tithi, Nakshatra & Rahukaal',
    bodyHtml: `
      <h1>Hindu Panchang & Regional Calendar</h1>
      <p>Authentic Hindu Panchang calculations for Mithila, Varanasi, South India, and Western regional calendars: Tithi, Nakshatra, Yoga, Karana, Abhijit Muhurat, Rahukaal, Sunrise, and Sunset.</p>
      <p>Check <a href="/raashifal">Today's Raashifal</a> and recite <a href="/mantras/hanuman-chalisa">Hanuman Chalisa</a>.</p>
    `
  });

  // Bookmarks
  routes.push({
    path: '/bookmarks',
    screen: 'bookmarks',
    changefreq: 'monthly',
    priority: '0.5',
    heading: 'Saved Mantras & Bookmarks',
    bodyHtml: `
      <h1>Saved Mantras & Bookmarks</h1>
      <p>Access your saved mantras and daily prayers for offline chanting.</p>
      <p>Explore <a href="/mantras">All Sanskrit Mantras</a>.</p>
    `
  });

  return routes;
}

function prerender() {
  console.log('🚀 Starting static pre-rendering for SEO routes...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist/ directory does not exist. Run vite build first.');
    process.exit(1);
  }

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  const routes = getAllRoutes();

  let generatedCount = 0;

  routes.forEach(route => {
    const seo = getSEOData(route.screen, route.targetId);

    // Build head injects
    const headTags = `
      <title>${escapeHtml(seo.title)}</title>
      <meta name="description" content="${escapeHtml(seo.description)}" />
      <link rel="canonical" href="${seo.canonicalUrl}" />
      <meta property="og:title" content="${escapeHtml(seo.title)}" />
      <meta property="og:description" content="${escapeHtml(seo.description)}" />
      <meta property="og:url" content="${seo.canonicalUrl}" />
      <meta property="og:type" content="${seo.ogType}" />
      <meta property="og:site_name" content="NIRVANA — The Abstract Mind" />
      <meta property="og:image" content="${seo.ogImage}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
      <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
      <meta name="twitter:image" content="${seo.ogImage}" />
      <script type="application/ld+json" id="json-ld-structured-data">${JSON.stringify(seo.jsonLd)}</script>
    `;

    // Inject head tags & static HTML body into root div
    let pageHtml = baseHtml;

    // Replace <title>
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, headTags);

    // Inject prerendered body in <div id="root">
    const rootDiv = `<div id="root">${route.bodyHtml}</div>`;
    pageHtml = pageHtml.replace(/<div id="root"><\/div>/i, rootDiv);

    // Determine target directory and file
    const targetPath = route.path === '/' 
      ? path.join(DIST_DIR, 'index.html') 
      : path.join(DIST_DIR, route.path, 'index.html');

    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetPath, pageHtml, 'utf-8');
    generatedCount++;
  });

  // Create 404.html for SPA fallback
  const fallback404 = path.join(DIST_DIR, '404.html');
  fs.copyFileSync(templatePath, fallback404);

  // Generate sitemap.xml
  const sitemapXml = generateSitemapXml();
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml
`;

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt.trim(), 'utf-8');

  console.log(`✅ Pre-rendered ${generatedCount} static HTML pages, sitemap.xml, and robots.txt into dist/!`);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

prerender();
