import React from 'react';
import { ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  FileText, Info, AlertTriangle, Compass, Hand, 
  Sparkles, CheckCircle2, Activity, Copyright, 
  ShieldAlert, ExternalLink, Server, Megaphone, 
  Scale, RefreshCw, Mail, BookOpen
} from 'lucide-react';

interface TermsViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: t('home'), screen: 'home' },
          { label: 'Terms of Use' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header */}
      <article className="space-y-8">
        <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block">
              WEBSITE TERMS &amp; CONDITIONS
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Terms of Use
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6B7280] dark:text-[#9A8F85]">
              <span className="font-semibold text-[#8B4513] dark:text-[#FF9933]">
                NIRVANA — The Abstract Mind
              </span>
              <span>•</span>
              <span>Last updated: August 15, 2026</span>
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed border-t border-[#E5E1DA] dark:border-[#2A2A2A] pt-6">
            <p className="font-semibold text-base text-[#1A1A1A] dark:text-[#F5F2EF]">
              Welcome to NIRVANA — The Abstract Mind.
            </p>
            <p>
              By accessing or using this website, you agree to these Terms of Use. If you do not agree with these terms, please discontinue use of the website.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              NIRVANA is an independent digital reference and publishing platform covering spiritual, religious, cultural and traditional subjects.
            </p>
          </div>
        </header>

        {/* 1. About NIRVANA */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Info className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              1. About NIRVANA
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA provides informational and reference content relating to subjects such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Mantras and Stotras</li>
              <li>Hindu deities</li>
              <li>Religious and cultural stories</li>
              <li>Raashifal and traditional astrology</li>
              <li>Traditional palmistry</li>
              <li>Panchang</li>
              <li>Devotional and traditional practices</li>
              <li>Related cultural and informational subjects</li>
            </ul>
            <p>
              The website is intended primarily for general informational, educational and cultural exploration.
            </p>
          </div>
        </section>

        {/* 2. Informational Nature of Content */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <FileText className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              2. Informational Nature of Content
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              The content published on NIRVANA is provided for general informational and educational purposes.
            </p>
            <p>
              Some subjects covered by the website involve religious traditions, cultural beliefs, astrology, palmistry or spiritual practices.
            </p>
            <p>
              These subjects may involve different interpretations, traditions and schools of thought.
            </p>
            <p>
              NIRVANA does not represent that every traditional belief, interpretation or practice described on the website is scientifically established or universally accepted.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Readers should use their own judgment when interpreting informational material.
            </p>
          </div>
        </section>

        {/* 3. No Professional Advice */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <AlertTriangle className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              3. No Professional Advice
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Information provided on NIRVANA should not be treated as a substitute for professional advice.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              NIRVANA does not provide:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>medical advice</li>
              <li>diagnosis or treatment</li>
              <li>financial or investment advice</li>
              <li>legal advice</li>
              <li>personalized psychological advice</li>
              <li>personalized astrological consultation</li>
              <li>personalized palmistry consultation</li>
              <li>personalized spiritual counselling</li>
            </ul>
            <p>
              If you require professional advice, consult an appropriately qualified professional.
            </p>
          </div>
        </section>

        {/* 4. Raashifal and Astrology */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Compass className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              4. Raashifal and Astrology
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Raashifal content on NIRVANA is general and intended for informational, cultural and entertainment purposes.
            </p>
            <p>
              It is based on traditional astrological concepts and interpretations.
            </p>
            <p>
              Raashifal content should not be interpreted as a guaranteed prediction of events in an individual&apos;s life.
            </p>
            <p>
              NIRVANA does not guarantee that any prediction, interpretation or guidance will occur or apply to a particular person.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Readers should not make significant medical, financial, legal or other important decisions solely on the basis of Raashifal or astrological content.
            </p>
          </div>
        </section>

        {/* 5. Palmistry */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Hand className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              5. Palmistry
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Palmistry content on NIRVANA describes traditional concepts relating to palm lines, mounts, hand types, symbols and interpretations.
            </p>
            <p>
              This material is presented as traditional informational content.
            </p>
            <p>
              NIRVANA does not provide personalized palm readings or guarantee predictions about an individual&apos;s future, personality, health, finances or relationships.
            </p>
          </div>
        </section>

        {/* 6. Religious and Traditional Content */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Sparkles className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              6. Religious and Traditional Content
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may describe religious stories, devotional practices, beliefs, traditions, symbolism and cultural interpretations.
            </p>
            <p>
              Different communities, texts, regions and traditions may describe the same subject differently.
            </p>
            <p>
              Where appropriate, NIRVANA aims to distinguish traditional beliefs and interpretations from established factual or scientific claims.
            </p>
            <p>
              Readers are encouraged to consider the cultural and traditional context of the material.
            </p>
          </div>
        </section>

        {/* 7. Accuracy of Information */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <CheckCircle2 className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              7. Accuracy of Information
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA aims to provide useful, accurate and well-organized reference material.
            </p>
            <p>
              However, historical, religious, cultural and traditional subjects can contain differing versions and interpretations.
            </p>
            <p>
              NIRVANA does not guarantee that every piece of information on the website will always be complete, current, error-free or universally accepted.
            </p>
            <p>
              Information may be corrected, updated, expanded or removed as the website develops.
            </p>
          </div>
        </section>

        {/* 8. Website Availability */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Activity className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              8. Website Availability
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA aims to keep the website available and functional, but continuous or uninterrupted availability cannot be guaranteed.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              The website may occasionally be unavailable because of:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>maintenance</li>
              <li>technical issues</li>
              <li>hosting or infrastructure problems</li>
              <li>network failures</li>
              <li>security incidents</li>
              <li>circumstances beyond reasonable control</li>
            </ul>
            <p>
              NIRVANA may modify, suspend or discontinue parts of the website when necessary.
            </p>
          </div>
        </section>

        {/* 9. Intellectual Property */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Copyright className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              9. Intellectual Property
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Unless otherwise indicated, the original text, written material, website design, branding, layout and other original materials created for NIRVANA are protected by applicable intellectual property laws.
            </p>
            <p>
              You may access and use the website for personal, non-commercial informational purposes.
            </p>
            <p>
              You may not reproduce, republish, distribute, modify or commercially exploit substantial portions of NIRVANA&apos;s original content without appropriate permission, except where permitted by applicable law.
            </p>
            <p>
              Third-party names, trademarks, religious texts, images or other materials may belong to their respective owners.
            </p>
            <p>
              Where third-party material is used, applicable rights and licenses may apply.
            </p>
          </div>
        </section>

        {/* 10. Permitted Use */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ShieldAlert className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              10. Permitted Use
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              You may use NIRVANA for lawful purposes and in accordance with these Terms.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              You must not knowingly use the website to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>violate applicable laws</li>
              <li>interfere with website operation</li>
              <li>attempt unauthorized access to systems</li>
              <li>introduce malicious software</li>
              <li>scrape or reproduce substantial portions of the website for unauthorized commercial purposes</li>
              <li>misuse the website or its infrastructure</li>
              <li>interfere with other visitors&apos; access to the website</li>
            </ul>
          </div>
        </section>

        {/* 11. External Links */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ExternalLink className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              11. External Links
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may contain links to third-party websites or resources.
            </p>
            <p>
              These links may be provided for reference or convenience.
            </p>
            <p>
              NIRVANA does not control third-party websites and does not necessarily endorse their content, products, services or policies.
            </p>
            <p>
              Your use of third-party websites is subject to their own terms and policies.
            </p>
          </div>
        </section>

        {/* 12. Third-Party Services */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Server className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              12. Third-Party Services
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may use third-party services for hosting, analytics, advertising, security, performance, email or other website functionality.
            </p>
            <p>
              The use of such services may be governed by their own terms and policies.
            </p>
            <p>
              NIRVANA is not responsible for the independent terms, content, availability or practices of third-party services.
            </p>
          </div>
        </section>

        {/* 13. Advertising */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Megaphone className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              13. Advertising
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may display advertising in the future.
            </p>
            <p>
              Advertising providers may have their own terms, policies and privacy practices.
            </p>
            <p>
              The appearance of an advertisement on NIRVANA does not necessarily constitute an endorsement or recommendation by NIRVANA.
            </p>
            <p>
              Users should evaluate products and services advertised on the website independently.
            </p>
          </div>
        </section>

        {/* 14. Limitation of Liability */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Scale className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              14. Limitation of Liability
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              To the extent permitted by applicable law, NIRVANA and its operators shall not be responsible for losses or damages arising from reliance on information provided through the website.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              This includes, where applicable, decisions made on the basis of:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>religious or spiritual information</li>
              <li>traditional practices</li>
              <li>Raashifal</li>
              <li>astrology</li>
              <li>palmistry</li>
              <li>cultural interpretations</li>
              <li>general informational content</li>
            </ul>
            <p>
              Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is not permitted by applicable law.
            </p>
          </div>
        </section>

        {/* 15. Changes to These Terms */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <RefreshCw className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              15. Changes to These Terms
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              These Terms of Use may be updated from time to time as NIRVANA develops.
            </p>
            <p>
              When changes are made, the &quot;Last updated&quot; date at the beginning of this page may be updated.
            </p>
            <p>
              Continued use of the website after changes are published constitutes acceptance of the updated Terms to the extent permitted by applicable law.
            </p>
          </div>
        </section>

        {/* 16. Contact */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Mail className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              16. Contact
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              If you have questions regarding these Terms of Use, you can contact NIRVANA at:
            </p>
            <p>
              <a 
                href="mailto:theabstractlens.official@gmail.com"
                className="text-[#FF9933] hover:underline font-semibold text-sm"
              >
                theabstractlens.official@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* 17. Independent Publishing Platform */}
        <section className="bg-[#FDFCFB] dark:bg-[#181818] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <BookOpen className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              17. Independent Publishing Platform
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is an independent digital reference and publishing platform.
            </p>
            <p>
              Nothing on the website should be interpreted as establishing a professional advisory, consultation, religious authority or fiduciary relationship between NIRVANA and a visitor.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
