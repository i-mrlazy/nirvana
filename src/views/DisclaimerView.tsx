import React from 'react';
import { ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldAlert, Info, Sparkles, BookOpen, Compass, 
  Hand, HeartPulse, DollarSign, Scale, UserX, 
  CheckCircle2, GitBranch, RefreshCw, ExternalLink, 
  Megaphone, Shield, Mail
} from 'lucide-react';

interface DisclaimerViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const DisclaimerView: React.FC<DisclaimerViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: t('home'), screen: 'home' },
          { label: 'Disclaimer' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header */}
      <article className="space-y-8">
        <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block">
              INFORMATIONAL &amp; TRADITIONAL CONTEXT
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Disclaimer
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
              NIRVANA — The Abstract Mind is an independent digital reference and publishing platform.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              The website provides informational, educational and cultural material relating to spiritual traditions, religious subjects, mantras, deities, traditional stories, Raashifal, astrology, palmistry, Panchang and related practices.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              The information on this website should be understood in that context.
            </p>
          </div>
        </header>

        {/* 1. General Information */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Info className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              1. General Information
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              The content published on NIRVANA is intended primarily for general informational, educational and cultural purposes.
            </p>
            <p>
              While reasonable efforts may be made to present useful and accurate information, NIRVANA does not guarantee that every page is complete, error-free, current or universally accepted.
            </p>
            <p>
              Religious, cultural and traditional subjects can contain different versions, interpretations and regional practices.
            </p>
          </div>
        </section>

        {/* 2. Traditional and Religious Beliefs */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Sparkles className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              2. Traditional and Religious Beliefs
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Some content on NIRVANA describes beliefs, traditions, practices, stories, symbolism and interpretations that have been passed down through religious or cultural traditions.
            </p>
            <p>
              Such material is presented as traditional or cultural information.
            </p>
            <p>
              A statement that a particular tradition associates a practice with a particular benefit does not mean that NIRVANA is scientifically establishing or guaranteeing that benefit.
            </p>
            <p>
              Readers may encounter different interpretations of the same subject in different texts, communities or traditions.
            </p>
          </div>
        </section>

        {/* 3. Mantras, Stotras and Devotional Practices */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <BookOpen className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              3. Mantras, Stotras and Devotional Practices
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may describe mantras, stotras, prayers, devotional practices and traditional beliefs about their significance or benefits.
            </p>
            <p>
              Descriptions of traditional benefits should not be interpreted as guarantees of a particular physical, psychological, spiritual, financial or personal outcome.
            </p>
            <p>
              People may engage with religious or devotional practices according to their own beliefs and judgment.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              NIRVANA does not guarantee supernatural results from any mantra, prayer, ritual or practice described on the website.
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
              Raashifal and astrology content on NIRVANA represents general information based on traditional astrological concepts and interpretations.
            </p>
            <p>
              It is not personalized astrological advice.
            </p>
            <p>
              Raashifal content should not be interpreted as a guaranteed prediction that a particular event will happen to a particular individual.
            </p>
            <p>
              Astrological interpretations can differ according to systems, traditions and practitioners.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              NIRVANA does not guarantee the accuracy or occurrence of any astrological prediction.
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
              NIRVANA provides informational material about traditional palmistry, including subjects such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Life Line</li>
              <li>Heart Line</li>
              <li>Head Line</li>
              <li>Fate Line</li>
              <li>Sun Line</li>
              <li>Mounts</li>
              <li>Hand Types</li>
              <li>Symbols and markings</li>
            </ul>
            <p>
              These descriptions represent traditional palmistry interpretations.
            </p>
            <p>
              Palmistry is not presented by NIRVANA as a scientifically validated method for predicting an individual&apos;s future, health, financial circumstances, relationships or personality.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              NIRVANA does not provide personalized palm readings.
            </p>
          </div>
        </section>

        {/* 6. No Medical Advice */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <HeartPulse className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              6. No Medical Advice
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Nothing on NIRVANA should be considered medical advice, diagnosis, treatment or a substitute for consultation with a qualified healthcare professional.
            </p>
            <p>
              This applies particularly to spiritual, devotional, astrological or traditional claims that may mention health or wellbeing.
            </p>
            <p>
              Do not use information from NIRVANA as a substitute for appropriate medical care.
            </p>
          </div>
        </section>

        {/* 7. No Financial or Investment Advice */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <DollarSign className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              7. No Financial or Investment Advice
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA does not provide financial or investment advice.
            </p>
            <p>
              Raashifal, astrology, spiritual practices or other traditional content should not be used as the sole basis for financial or investment decisions.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              No financial outcome is guaranteed by any content published on NIRVANA.
            </p>
          </div>
        </section>

        {/* 8. No Legal or Professional Advice */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Scale className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              8. No Legal or Professional Advice
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA does not provide legal, psychological, financial, medical, professional or other specialized advice.
            </p>
            <p>
              Where professional guidance is necessary, readers should consult an appropriately qualified professional.
            </p>
          </div>
        </section>

        {/* 9. No Personalized Predictions or Consultations */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <UserX className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              9. No Personalized Predictions or Consultations
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is an informational publishing platform.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              It does not currently provide:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>personalized horoscope readings</li>
              <li>personalized Raashifal consultations</li>
              <li>personalized palm readings</li>
              <li>spiritual consultations</li>
              <li>personalized predictions</li>
              <li>paid spiritual guidance</li>
            </ul>
            <p>
              Content should therefore not be interpreted as a personalized assessment of an individual.
            </p>
          </div>
        </section>

        {/* 10. No Guaranteed Results */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ShieldAlert className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              10. No Guaranteed Results
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA does not guarantee any particular result from:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
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
            <p>
              References to traditional beliefs about benefits should be understood as descriptions of those traditions, not promises or guarantees from NIRVANA.
            </p>
          </div>
        </section>

        {/* 11. Different Traditions and Interpretations */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <GitBranch className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              11. Different Traditions and Interpretations
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Religious and cultural subjects may have multiple versions.
            </p>
            <p>
              Different scriptures, schools, communities, regions and traditions may describe the same deity, story, practice or belief differently.
            </p>
            <p>
              NIRVANA may present one or more commonly encountered interpretations, but this should not be understood as declaring one interpretation to be the only valid religious position.
            </p>
          </div>
        </section>

        {/* 12. Accuracy and Updates */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <RefreshCw className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              12. Accuracy and Updates
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA aims to improve and update its content over time.
            </p>
            <p>
              However, historical, religious, cultural and traditional information can be complex and may contain differing sources or interpretations.
            </p>
            <p>
              NIRVANA does not guarantee that all information will remain current or that every statement will be free from error.
            </p>
            <p>
              If an error is identified, NIRVANA may correct or update the relevant material.
            </p>
          </div>
        </section>

        {/* 13. External Sources and Links */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ExternalLink className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              13. External Sources and Links
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may link to external websites or resources for additional information or reference.
            </p>
            <p>
              NIRVANA does not control those websites and does not guarantee their accuracy, availability, content or policies.
            </p>
            <p>
              Readers should evaluate external information independently.
            </p>
          </div>
        </section>

        {/* 14. Advertising and Third-Party Content */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Megaphone className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              14. Advertising and Third-Party Content
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may display third-party advertising in the future.
            </p>
            <p>
              Advertisements or third-party content appearing on the website do not necessarily represent an endorsement or recommendation by NIRVANA.
            </p>
            <p>
              Users should independently evaluate any product, service or offer presented through third-party advertising.
            </p>
          </div>
        </section>

        {/* 15. Independent Publishing Platform */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Shield className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              15. Independent Publishing Platform
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is independently operated as a digital reference and publishing project.
            </p>
            <p>
              It is not presented as an official representative of any particular temple, religious organization, spiritual institution, astrological school or palmistry organization unless explicitly stated otherwise.
            </p>
          </div>
        </section>

        {/* 16. Contact */}
        <section className="bg-[#FDFCFB] dark:bg-[#181818] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Mail className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              16. Contact
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              If you have questions regarding this Disclaimer or believe that content on NIRVANA requires clarification or correction, you can contact us at:
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
      </article>
    </div>
  );
};
