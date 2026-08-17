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

const DOMAIN = 'https://nirvana-flax.vercel.app';
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

  // About Page
  routes.push({
    path: '/about',
    screen: 'about',
    changefreq: 'monthly',
    priority: '0.7',
    heading: 'About NIRVANA — The Abstract Mind',
    bodyHtml: `
      <article>
        <h1>About NIRVANA</h1>
        <p><strong>NIRVANA — The Abstract Mind</strong> is an independent digital reference and publishing platform exploring spiritual, religious, cultural and traditional knowledge.</p>
        <p>The aim is simple: to make information about Indian traditions, devotional practices, mantras, deities, stories, traditional astrology, palmistry and related subjects easier to discover, understand and explore online.</p>
        <p>NIRVANA is designed as a reference space rather than a personal advisory or consultation service.</p>

        <section>
          <h2>What You'll Find on NIRVANA</h2>
          
          <h3>Mantras &amp; Stotras</h3>
          <p>Explore well-known mantras, chalisa, stotras and devotional texts, with useful information such as original text, transliteration, meanings, context and related material where available.</p>

          <h3>Deities</h3>
          <p>Discover reference material about Hindu deities, their traditional stories, symbolism, associations and cultural significance.</p>

          <h3>Stories</h3>
          <p>Explore stories and explanations connected with Indian religious and cultural traditions, including questions about familiar figures, events and beliefs.</p>

          <h3>Palmistry</h3>
          <p>NIRVANA includes informational material about traditional palmistry, including lines, mounts, hand types and symbols.</p>
          <p>This section presents palmistry as a traditional system of interpretation and cultural knowledge. It is not intended to provide personalized palm readings or professional consultation.</p>

          <h3>Raashifal</h3>
          <p>NIRVANA publishes general daily Raashifal content for the twelve zodiac signs.</p>
          <p>This material reflects traditional astrological interpretations and is provided for general informational and cultural interest. It is not personalized astrological advice.</p>

          <h3>Panchang &amp; Practices</h3>
          <p>The platform also explores traditional calendars, Panchang-related information, devotional practices, festival-related practices and other subjects connected with Indian traditions.</p>
        </section>

        <section>
          <h2>Our Approach</h2>
          <p>NIRVANA aims to present traditional subjects in a clear, accessible and organized way.</p>
          <p>Where content relates to traditional beliefs, astrology, palmistry or spiritual practices, those subjects are presented as traditions, interpretations or beliefs rather than as scientifically established facts.</p>
          <p>The goal is not to tell readers what they must believe.</p>
          <p>The goal is to provide useful reference material that allows people to learn, explore and make their own informed decisions.</p>
        </section>

        <section>
          <h2>An Independent Platform</h2>
          <p>NIRVANA is an independent digital publishing project.</p>
          <p>It is not affiliated with, endorsed by, or operated by any particular religious organization, temple, spiritual institution or astrological authority unless explicitly stated on a specific page.</p>
          <p>The platform may evolve over time as new subjects, reference material and useful resources are added.</p>
        </section>

        <section>
          <h2>Explore NIRVANA</h2>
          <p>Browse the different sections of NIRVANA to discover mantras, deities, traditional stories, Raashifal, palmistry, Panchang and practices.</p>
          <p><strong>NIRVANA — The Abstract Mind</strong></p>
          <p>A digital space to read, explore and understand.</p>
          <ul>
            <li><a href="/mantras">Sanskrit Mantras &amp; Stotras</a></li>
            <li><a href="/deities">Hindu Deities &amp; Sacred Lore</a></li>
            <li><a href="/stories">Spiritual Stories &amp; Vedic Q&amp;A</a></li>
            <li><a href="/palmistry">Hastarekha Palmistry Guide</a></li>
            <li><a href="/raashifal">Daily Raashifal Predictions</a></li>
            <li><a href="/panchang">Hindu Panchang Timings</a></li>
            <li><a href="/practices">Daily Spiritual Practices</a></li>
          </ul>
        </section>
      </article>
    `
  });

  // Privacy Policy Page
  routes.push({
    path: '/privacy',
    screen: 'privacy',
    changefreq: 'monthly',
    priority: '0.7',
    heading: 'Privacy Policy — NIRVANA',
    bodyHtml: `
      <article>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: August 15, 2026</strong></p>
        <p>NIRVANA — The Abstract Mind (&quot;NIRVANA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and aims to be transparent about how information may be collected and used when you visit and interact with this website.</p>
        <p>NIRVANA is an independent digital reference and publishing platform covering spiritual, religious, cultural and traditional subjects.</p>
        <p>This Privacy Policy explains the general ways information may be collected, used and protected when you use: <a href="https://nirvana-flax.vercel.app/">https://nirvana-flax.vercel.app/</a></p>

        <section>
          <h2>1. Information We May Collect</h2>
          <p>NIRVANA does not require visitors to create an account, provide a profile, or submit personal information simply to browse the website.</p>
          <p>Depending on how the website is used, certain information may nevertheless be collected automatically through normal website operation or through third-party services.</p>
          <p>This may include:</p>
          <ul>
            <li>IP address or approximate location information</li>
            <li>browser type and version</li>
            <li>device type</li>
            <li>operating system</li>
            <li>referring pages or websites</li>
            <li>pages visited</li>
            <li>approximate time spent on pages</li>
            <li>date and time of visits</li>
            <li>general usage and interaction information</li>
            <li>technical information necessary to maintain website security and reliability</li>
          </ul>
          <p>We do not intentionally request sensitive personal information from visitors as part of ordinary website browsing.</p>
        </section>

        <section>
          <h2>2. Information You Provide Voluntarily</h2>
          <p>If you contact NIRVANA by email, you may voluntarily provide information such as:</p>
          <ul>
            <li>your name</li>
            <li>email address</li>
            <li>the contents of your message</li>
            <li>any other information you choose to include</li>
          </ul>
          <p>The information you provide will be used primarily to respond to your communication and address your request.</p>
          <p>You should avoid sending sensitive personal information unless it is genuinely necessary for your request.</p>
        </section>

        <section>
          <h2>3. Cookies and Similar Technologies</h2>
          <p>NIRVANA may use cookies and similar technologies to support website functionality, understand how visitors use the website, improve performance and, where applicable, support advertising.</p>
          <p>Some cookies may be placed by third-party services used by the website.</p>
          <p>You can generally control or delete cookies through your browser settings. Disabling certain cookies may affect some website functionality.</p>
        </section>

        <section>
          <h2>4. Analytics</h2>
          <p>NIRVANA may use analytics services such as <strong>Google Analytics</strong> to understand general website usage and improve the platform.</p>
          <p>Analytics information may include things such as:</p>
          <ul>
            <li>number of visitors</li>
            <li>traffic sources</li>
            <li>pages viewed</li>
            <li>device categories</li>
            <li>geographic information at an approximate level</li>
            <li>engagement and interaction information</li>
          </ul>
          <p>Analytics services may use cookies or similar technologies to collect this information.</p>
          <p>NIRVANA uses analytics information primarily in aggregate form to understand how the website is being discovered and used.</p>
          <p>If analytics services are enabled on the website, their own privacy policies and terms may also apply.</p>
        </section>

        <section>
          <h2>5. Advertising</h2>
          <p>NIRVANA may introduce display advertising in the future, including services such as <strong>Google AdSense</strong> or other advertising providers.</p>
          <p>If advertising is enabled, advertising providers may use cookies or similar technologies to deliver, measure or personalize advertisements in accordance with their applicable policies and settings.</p>
          <p>NIRVANA does not currently represent that advertising services are active simply because they are described in this Privacy Policy.</p>
          <p>This section exists so that the policy can cover potential advertising functionality as the website develops.</p>
          <p>If advertising practices materially change, this Privacy Policy may be updated accordingly.</p>
        </section>

        <section>
          <h2>6. Third-Party Services</h2>
          <p>NIRVANA may use third-party services to operate, analyze, secure, host or improve the website.</p>
          <p>Examples may include:</p>
          <ul>
            <li>website hosting and infrastructure providers</li>
            <li>analytics providers</li>
            <li>advertising providers</li>
            <li>email services</li>
            <li>security and performance services</li>
          </ul>
          <p>These third parties may process information according to their own privacy policies and applicable terms.</p>
          <p>NIRVANA does not control the privacy practices of independent third-party services.</p>
        </section>

        <section>
          <h2>7. External Links</h2>
          <p>NIRVANA may contain links to external websites, resources or services.</p>
          <p>Once you leave NIRVANA and visit an external website, that website's own privacy policy and terms apply.</p>
          <p>NIRVANA is not responsible for the privacy practices, security or content of third-party websites.</p>
        </section>

        <section>
          <h2>8. How Information May Be Used</h2>
          <p>Information collected through the website may be used to:</p>
          <ul>
            <li>operate and maintain NIRVANA</li>
            <li>improve website performance</li>
            <li>understand website traffic and usage</li>
            <li>identify technical problems</li>
            <li>maintain website security</li>
            <li>improve content and navigation</li>
            <li>respond to communications</li>
            <li>measure the effectiveness of content</li>
            <li>support advertising and monetization where advertising is enabled</li>
            <li>comply with applicable legal obligations</li>
          </ul>
          <p>NIRVANA does not intend to sell visitors' personal information.</p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <p>Information may be retained only for as long as reasonably necessary for the purpose for which it was collected, to maintain legitimate business or operational records, to resolve disputes, to enforce applicable agreements, or to comply with legal obligations.</p>
          <p>Retention periods may vary depending on the type of information and the service involved.</p>
          <p>Third-party services may retain information according to their own policies.</p>
        </section>

        <section>
          <h2>10. Data Security</h2>
          <p>NIRVANA takes reasonable measures to help protect information associated with the website.</p>
          <p>However, no internet transmission, website or electronic storage system can be guaranteed to be completely secure.</p>
          <p>Visitors should therefore avoid sending highly sensitive information through ordinary website communications.</p>
        </section>

        <section>
          <h2>11. Children's Privacy</h2>
          <p>NIRVANA is a general informational website and is not specifically directed toward collecting personal information from children.</p>
          <p>We do not knowingly request or intentionally collect personal information from children through account registration or similar mechanisms.</p>
          <p>If you believe that a child has provided personal information to us unnecessarily, please contact us so that the situation can be reviewed.</p>
        </section>

        <section>
          <h2>12. Your Choices</h2>
          <p>Depending on your browser, device and location, you may have choices relating to:</p>
          <ul>
            <li>cookies</li>
            <li>analytics</li>
            <li>personalized advertising</li>
            <li>browser storage</li>
            <li>communications you voluntarily initiate</li>
          </ul>
          <p>You can manage many of these choices through your browser or device settings.</p>
          <p>Where applicable, third-party services may provide their own controls for managing privacy and advertising preferences.</p>
        </section>

        <section>
          <h2>13. Changes to This Privacy Policy</h2>
          <p>This Privacy Policy may be updated from time to time as NIRVANA introduces new features, analytics tools, advertising services or other functionality.</p>
          <p>When significant changes are made, the &quot;Last updated&quot; date at the beginning of this page may be updated.</p>
          <p>Visitors are encouraged to review this page periodically.</p>
        </section>

        <section>
          <h2>14. Contact</h2>
          <p>If you have questions, concerns or requests regarding this Privacy Policy or the privacy practices of NIRVANA, you can contact us at:</p>
          <p><a href="mailto:theabstractlens.official@gmail.com">theabstractlens.official@gmail.com</a></p>
        </section>

        <section>
          <h2>15. Independent Publishing Platform</h2>
          <p>NIRVANA is an independent digital reference and publishing platform.</p>
          <p>It is not intended to provide personalized medical, financial, legal, spiritual, astrological or other professional advice.</p>
          <p>For information about the nature and purpose of NIRVANA's content, please also refer to the site's Disclaimer.</p>
        </section>
      </article>
    `
  });

  // Terms of Use Page
  routes.push({
    path: '/terms',
    screen: 'terms',
    changefreq: 'monthly',
    priority: '0.7',
    heading: 'Terms of Use — NIRVANA',
    bodyHtml: `
      <article>
        <h1>Terms of Use</h1>
        <p><strong>Last updated: August 15, 2026</strong></p>
        <p>Welcome to NIRVANA — The Abstract Mind.</p>
        <p>By accessing or using this website, you agree to these Terms of Use. If you do not agree with these terms, please discontinue use of the website.</p>
        <p>NIRVANA is an independent digital reference and publishing platform covering spiritual, religious, cultural and traditional subjects.</p>

        <section>
          <h2>1. About NIRVANA</h2>
          <p>NIRVANA provides informational and reference content relating to subjects such as:</p>
          <ul>
            <li>Mantras and Stotras</li>
            <li>Hindu deities</li>
            <li>Religious and cultural stories</li>
            <li>Raashifal and traditional astrology</li>
            <li>Traditional palmistry</li>
            <li>Panchang</li>
            <li>Devotional and traditional practices</li>
            <li>Related cultural and informational subjects</li>
          </ul>
          <p>The website is intended primarily for general informational, educational and cultural exploration.</p>
        </section>

        <section>
          <h2>2. Informational Nature of Content</h2>
          <p>The content published on NIRVANA is provided for general informational and educational purposes.</p>
          <p>Some subjects covered by the website involve religious traditions, cultural beliefs, astrology, palmistry or spiritual practices.</p>
          <p>These subjects may involve different interpretations, traditions and schools of thought.</p>
          <p>NIRVANA does not represent that every traditional belief, interpretation or practice described on the website is scientifically established or universally accepted.</p>
          <p>Readers should use their own judgment when interpreting informational material.</p>
        </section>

        <section>
          <h2>3. No Professional Advice</h2>
          <p>Information provided on NIRVANA should not be treated as a substitute for professional advice.</p>
          <p>NIRVANA does not provide:</p>
          <ul>
            <li>medical advice</li>
            <li>diagnosis or treatment</li>
            <li>financial or investment advice</li>
            <li>legal advice</li>
            <li>personalized psychological advice</li>
            <li>personalized astrological consultation</li>
            <li>personalized palmistry consultation</li>
            <li>personalized spiritual counselling</li>
          </ul>
          <p>If you require professional advice, consult an appropriately qualified professional.</p>
        </section>

        <section>
          <h2>4. Raashifal and Astrology</h2>
          <p>Raashifal content on NIRVANA is general and intended for informational, cultural and entertainment purposes.</p>
          <p>It is based on traditional astrological concepts and interpretations.</p>
          <p>Raashifal content should not be interpreted as a guaranteed prediction of events in an individual's life.</p>
          <p>NIRVANA does not guarantee that any prediction, interpretation or guidance will occur or apply to a particular person.</p>
          <p>Readers should not make significant medical, financial, legal or other important decisions solely on the basis of Raashifal or astrological content.</p>
        </section>

        <section>
          <h2>5. Palmistry</h2>
          <p>Palmistry content on NIRVANA describes traditional concepts relating to palm lines, mounts, hand types, symbols and interpretations.</p>
          <p>This material is presented as traditional informational content.</p>
          <p>NIRVANA does not provide personalized palm readings or guarantee predictions about an individual's future, personality, health, finances or relationships.</p>
        </section>

        <section>
          <h2>6. Religious and Traditional Content</h2>
          <p>NIRVANA may describe religious stories, devotional practices, beliefs, traditions, symbolism and cultural interpretations.</p>
          <p>Different communities, texts, regions and traditions may describe the same subject differently.</p>
          <p>Where appropriate, NIRVANA aims to distinguish traditional beliefs and interpretations from established factual or scientific claims.</p>
          <p>Readers are encouraged to consider the cultural and traditional context of the material.</p>
        </section>

        <section>
          <h2>7. Accuracy of Information</h2>
          <p>NIRVANA aims to provide useful, accurate and well-organized reference material.</p>
          <p>However, historical, religious, cultural and traditional subjects can contain differing versions and interpretations.</p>
          <p>NIRVANA does not guarantee that every piece of information on the website will always be complete, current, error-free or universally accepted.</p>
          <p>Information may be corrected, updated, expanded or removed as the website develops.</p>
        </section>

        <section>
          <h2>8. Website Availability</h2>
          <p>NIRVANA aims to keep the website available and functional, but continuous or uninterrupted availability cannot be guaranteed.</p>
          <p>The website may occasionally be unavailable because of:</p>
          <ul>
            <li>maintenance</li>
            <li>technical issues</li>
            <li>hosting or infrastructure problems</li>
            <li>network failures</li>
            <li>security incidents</li>
            <li>circumstances beyond reasonable control</li>
          </ul>
          <p>NIRVANA may modify, suspend or discontinue parts of the website when necessary.</p>
        </section>

        <section>
          <h2>9. Intellectual Property</h2>
          <p>Unless otherwise indicated, the original text, written material, website design, branding, layout and other original materials created for NIRVANA are protected by applicable intellectual property laws.</p>
          <p>You may access and use the website for personal, non-commercial informational purposes.</p>
          <p>You may not reproduce, republish, distribute, modify or commercially exploit substantial portions of NIRVANA's original content without appropriate permission, except where permitted by applicable law.</p>
          <p>Third-party names, trademarks, religious texts, images or other materials may belong to their respective owners.</p>
          <p>Where third-party material is used, applicable rights and licenses may apply.</p>
        </section>

        <section>
          <h2>10. Permitted Use</h2>
          <p>You may use NIRVANA for lawful purposes and in accordance with these Terms.</p>
          <p>You must not knowingly use the website to:</p>
          <ul>
            <li>violate applicable laws</li>
            <li>interfere with website operation</li>
            <li>attempt unauthorized access to systems</li>
            <li>introduce malicious software</li>
            <li>scrape or reproduce substantial portions of the website for unauthorized commercial purposes</li>
            <li>misuse the website or its infrastructure</li>
            <li>interfere with other visitors' access to the website</li>
          </ul>
        </section>

        <section>
          <h2>11. External Links</h2>
          <p>NIRVANA may contain links to third-party websites or resources.</p>
          <p>These links may be provided for reference or convenience.</p>
          <p>NIRVANA does not control third-party websites and does not necessarily endorse their content, products, services or policies.</p>
          <p>Your use of third-party websites is subject to their own terms and policies.</p>
        </section>

        <section>
          <h2>12. Third-Party Services</h2>
          <p>NIRVANA may use third-party services for hosting, analytics, advertising, security, performance, email or other website functionality.</p>
          <p>The use of such services may be governed by their own terms and policies.</p>
          <p>NIRVANA is not responsible for the independent terms, content, availability or practices of third-party services.</p>
        </section>

        <section>
          <h2>13. Advertising</h2>
          <p>NIRVANA may display advertising in the future.</p>
          <p>Advertising providers may have their own terms, policies and privacy practices.</p>
          <p>The appearance of an advertisement on NIRVANA does not necessarily constitute an endorsement or recommendation by NIRVANA.</p>
          <p>Users should evaluate products and services advertised on the website independently.</p>
        </section>

        <section>
          <h2>14. Limitation of Liability</h2>
          <p>To the extent permitted by applicable law, NIRVANA and its operators shall not be responsible for losses or damages arising from reliance on information provided through the website.</p>
          <p>This includes, where applicable, decisions made on the basis of:</p>
          <ul>
            <li>religious or spiritual information</li>
            <li>traditional practices</li>
            <li>Raashifal</li>
            <li>astrology</li>
            <li>palmistry</li>
            <li>cultural interpretations</li>
            <li>general informational content</li>
          </ul>
          <p>Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is not permitted by applicable law.</p>
        </section>

        <section>
          <h2>15. Changes to These Terms</h2>
          <p>These Terms of Use may be updated from time to time as NIRVANA develops.</p>
          <p>When changes are made, the &quot;Last updated&quot; date at the beginning of this page may be updated.</p>
          <p>Continued use of the website after changes are published constitutes acceptance of the updated Terms to the extent permitted by applicable law.</p>
        </section>

        <section>
          <h2>16. Contact</h2>
          <p>If you have questions regarding these Terms of Use, you can contact NIRVANA at:</p>
          <p><a href="mailto:theabstractlens.official@gmail.com">theabstractlens.official@gmail.com</a></p>
        </section>

        <section>
          <h2>17. Independent Publishing Platform</h2>
          <p>NIRVANA is an independent digital reference and publishing platform.</p>
          <p>Nothing on the website should be interpreted as establishing a professional advisory, consultation, religious authority or fiduciary relationship between NIRVANA and a visitor.</p>
        </section>
      </article>
    `
  });

  // Disclaimer Page
  routes.push({
    path: '/disclaimer',
    screen: 'disclaimer',
    changefreq: 'monthly',
    priority: '0.7',
    heading: 'Disclaimer — NIRVANA',
    bodyHtml: `
      <article>
        <h1>Disclaimer</h1>
        <p><strong>Last updated: August 15, 2026</strong></p>
        <p>NIRVANA — The Abstract Mind is an independent digital reference and publishing platform.</p>
        <p>The website provides informational, educational and cultural material relating to spiritual traditions, religious subjects, mantras, deities, traditional stories, Raashifal, astrology, palmistry, Panchang and related practices.</p>
        <p>The information on this website should be understood in that context.</p>

        <section>
          <h2>1. General Information</h2>
          <p>The content published on NIRVANA is intended primarily for general informational, educational and cultural purposes.</p>
          <p>While reasonable efforts may be made to present useful and accurate information, NIRVANA does not guarantee that every page is complete, error-free, current or universally accepted.</p>
          <p>Religious, cultural and traditional subjects can contain different versions, interpretations and regional practices.</p>
        </section>

        <section>
          <h2>2. Traditional and Religious Beliefs</h2>
          <p>Some content on NIRVANA describes beliefs, traditions, practices, stories, symbolism and interpretations that have been passed down through religious or cultural traditions.</p>
          <p>Such material is presented as traditional or cultural information.</p>
          <p>A statement that a particular tradition associates a practice with a particular benefit does not mean that NIRVANA is scientifically establishing or guaranteeing that benefit.</p>
          <p>Readers may encounter different interpretations of the same subject in different texts, communities or traditions.</p>
        </section>

        <section>
          <h2>3. Mantras, Stotras and Devotional Practices</h2>
          <p>NIRVANA may describe mantras, stotras, prayers, devotional practices and traditional beliefs about their significance or benefits.</p>
          <p>Descriptions of traditional benefits should not be interpreted as guarantees of a particular physical, psychological, spiritual, financial or personal outcome.</p>
          <p>People may engage with religious or devotional practices according to their own beliefs and judgment.</p>
          <p>NIRVANA does not guarantee supernatural results from any mantra, prayer, ritual or practice described on the website.</p>
        </section>

        <section>
          <h2>4. Raashifal and Astrology</h2>
          <p>Raashifal and astrology content on NIRVANA represents general information based on traditional astrological concepts and interpretations.</p>
          <p>It is not personalized astrological advice.</p>
          <p>Raashifal content should not be interpreted as a guaranteed prediction that a particular event will happen to a particular individual.</p>
          <p>Astrological interpretations can differ according to systems, traditions and practitioners.</p>
          <p>NIRVANA does not guarantee the accuracy or occurrence of any astrological prediction.</p>
        </section>

        <section>
          <h2>5. Palmistry</h2>
          <p>NIRVANA provides informational material about traditional palmistry, including subjects such as:</p>
          <ul>
            <li>Life Line</li>
            <li>Heart Line</li>
            <li>Head Line</li>
            <li>Fate Line</li>
            <li>Sun Line</li>
            <li>Mounts</li>
            <li>Hand Types</li>
            <li>Symbols and markings</li>
          </ul>
          <p>These descriptions represent traditional palmistry interpretations.</p>
          <p>Palmistry is not presented by NIRVANA as a scientifically validated method for predicting an individual's future, health, financial circumstances, relationships or personality.</p>
          <p>NIRVANA does not provide personalized palm readings.</p>
        </section>

        <section>
          <h2>6. No Medical Advice</h2>
          <p>Nothing on NIRVANA should be considered medical advice, diagnosis, treatment or a substitute for consultation with a qualified healthcare professional.</p>
          <p>This applies particularly to spiritual, devotional, astrological or traditional claims that may mention health or wellbeing.</p>
          <p>Do not use information from NIRVANA as a substitute for appropriate medical care.</p>
        </section>

        <section>
          <h2>7. No Financial or Investment Advice</h2>
          <p>NIRVANA does not provide financial or investment advice.</p>
          <p>Raashifal, astrology, spiritual practices or other traditional content should not be used as the sole basis for financial or investment decisions.</p>
          <p>No financial outcome is guaranteed by any content published on NIRVANA.</p>
        </section>

        <section>
          <h2>8. No Legal or Professional Advice</h2>
          <p>NIRVANA does not provide legal, psychological, financial, medical, professional or other specialized advice.</p>
          <p>Where professional guidance is necessary, readers should consult an appropriately qualified professional.</p>
        </section>

        <section>
          <h2>9. No Personalized Predictions or Consultations</h2>
          <p>NIRVANA is an informational publishing platform.</p>
          <p>It does not currently provide:</p>
          <ul>
            <li>personalized horoscope readings</li>
            <li>personalized Raashifal consultations</li>
            <li>personalized palm readings</li>
            <li>spiritual consultations</li>
            <li>personalized predictions</li>
            <li>paid spiritual guidance</li>
          </ul>
          <p>Content should therefore not be interpreted as a personalized assessment of an individual.</p>
        </section>

        <section>
          <h2>10. No Guaranteed Results</h2>
          <p>NIRVANA does not guarantee any particular result from:</p>
          <ul>
            <li>mantras</li>
            <li>prayers</li>
            <li>devotional practices</li>
            <li>meditation practices</li>
            <li>spiritual practices</li>
            <li>astrology</li>
            <li>Raashifal</li>
            <li>palmistry</li>
            <li>traditional remedies</li>
            <li>cultural practices</li>
          </ul>
          <p>References to traditional beliefs about benefits should be understood as descriptions of those traditions, not promises or guarantees from NIRVANA.</p>
        </section>

        <section>
          <h2>11. Different Traditions and Interpretations</h2>
          <p>Religious and cultural subjects may have multiple versions.</p>
          <p>Different scriptures, schools, communities, regions and traditions may describe the same deity, story, practice or belief differently.</p>
          <p>NIRVANA may present one or more commonly encountered interpretations, but this should not be understood as declaring one interpretation to be the only valid religious position.</p>
        </section>

        <section>
          <h2>12. Accuracy and Updates</h2>
          <p>NIRVANA aims to improve and update its content over time.</p>
          <p>However, historical, religious, cultural and traditional information can be complex and may contain differing sources or interpretations.</p>
          <p>NIRVANA does not guarantee that all information will remain current or that every statement will be free from error.</p>
          <p>If an error is identified, NIRVANA may correct or update the relevant material.</p>
        </section>

        <section>
          <h2>13. External Sources and Links</h2>
          <p>NIRVANA may link to external websites or resources for additional information or reference.</p>
          <p>NIRVANA does not control those websites and does not guarantee their accuracy, availability, content or policies.</p>
          <p>Readers should evaluate external information independently.</p>
        </section>

        <section>
          <h2>14. Advertising and Third-Party Content</h2>
          <p>NIRVANA may display third-party advertising in the future.</p>
          <p>Advertisements or third-party content appearing on the website do not necessarily represent an endorsement or recommendation by NIRVANA.</p>
          <p>Users should independently evaluate any product, service or offer presented through third-party advertising.</p>
        </section>

        <section>
          <h2>15. Independent Publishing Platform</h2>
          <p>NIRVANA is independently operated as a digital reference and publishing project.</p>
          <p>It is not presented as an official representative of any particular temple, religious organization, spiritual institution, astrological school or palmistry organization unless explicitly stated otherwise.</p>
        </section>

        <section>
          <h2>16. Contact</h2>
          <p>If you have questions regarding this Disclaimer or believe that content on NIRVANA requires clarification or correction, you can contact us at:</p>
          <p><a href="mailto:theabstractlens.official@gmail.com">theabstractlens.official@gmail.com</a></p>
        </section>
      </article>
    `
  });

  // Contact Page
  routes.push({
    path: '/contact',
    screen: 'contact',
    changefreq: 'monthly',
    priority: '0.7',
    heading: 'Contact NIRVANA — The Abstract Mind',
    bodyHtml: `
      <article>
        <h1>Contact NIRVANA</h1>
        <p><strong>We'd like to hear from you.</strong></p>
        <p>NIRVANA — The Abstract Mind is an independent digital reference and publishing platform exploring spiritual, religious, cultural and traditional subjects.</p>
        <p>If you have a question about the website, want to report an error, have feedback about published content, or need to contact us regarding an issue with the site, you can reach us by email.</p>

        <section>
          <h2>Email</h2>
          <p><a href="mailto:theabstractlens.official@gmail.com">theabstractlens.official@gmail.com</a></p>
        </section>

        <section>
          <h2>What You Can Contact Us About</h2>
          <p>You can contact NIRVANA regarding:</p>
          <ul>
            <li>questions about website content</li>
            <li>corrections or factual issues</li>
            <li>broken links or technical problems</li>
            <li>feedback about the website</li>
            <li>concerns regarding published material</li>
            <li>questions about this site's Privacy Policy, Terms of Use or Disclaimer</li>
            <li>general website-related inquiries</li>
          </ul>
        </section>

        <section>
          <h2>Content Corrections</h2>
          <p>NIRVANA aims to provide useful and accurate reference material.</p>
          <p>Religious, cultural and traditional subjects can sometimes have multiple versions, interpretations or regional variations.</p>
          <p>If you believe that a page contains an error, misleading statement or information that requires clarification, you are welcome to contact us by email with the relevant page and details.</p>
          <p>Where appropriate, published content may be reviewed and corrected.</p>
        </section>

        <section>
          <h2>Important Note</h2>
          <p>NIRVANA is an informational publishing platform.</p>
          <p>The contact address is not intended for:</p>
          <ul>
            <li>personalized astrology consultations</li>
            <li>personalized palm readings</li>
            <li>spiritual counselling</li>
            <li>medical advice</li>
            <li>financial advice</li>
            <li>legal advice</li>
            <li>personalized predictions</li>
          </ul>
          <p>Please do not send sensitive personal information unless it is genuinely necessary for your inquiry.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p><a href="mailto:theabstractlens.official@gmail.com">theabstractlens.official@gmail.com</a></p>
        </section>
      </article>
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
