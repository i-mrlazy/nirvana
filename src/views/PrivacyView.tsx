import React from 'react';
import { ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Shield, Lock, Eye, Cookie, BarChart3, 
  Megaphone, Server, ExternalLink, FileText, 
  Database, UserX, Sliders, RefreshCw, Mail, 
  BookOpen
} from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: t('home'), screen: 'home' },
          { label: 'Privacy Policy' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header */}
      <article className="space-y-8">
        <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block">
              PRIVACY &amp; TRANSPARENCY
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Privacy Policy
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
            <p>
              <strong>NIRVANA — The Abstract Mind</strong> (&quot;NIRVANA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and aims to be transparent about how information may be collected and used when you visit and interact with this website.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              NIRVANA is an independent digital reference and publishing platform covering spiritual, religious, cultural and traditional subjects.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              This Privacy Policy explains the general ways information may be collected, used and protected when you use{' '}
              <a 
                href="https://nirvana-flax.vercel.app/" 
                className="text-[#FF9933] hover:underline font-medium"
              >
                https://nirvana-flax.vercel.app/
              </a>.
            </p>
          </div>
        </header>

        {/* 1. Information We May Collect */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Eye className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              1. Information We May Collect
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA does not require visitors to create an account, provide a profile, or submit personal information simply to browse the website.
            </p>
            <p>
              Depending on how the website is used, certain information may nevertheless be collected automatically through normal website operation or through third-party services.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              This may include:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
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
            <p>
              We do not intentionally request sensitive personal information from visitors as part of ordinary website browsing.
            </p>
          </div>
        </section>

        {/* 2. Information You Provide Voluntarily */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Mail className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              2. Information You Provide Voluntarily
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              If you contact NIRVANA by email, you may voluntarily provide information such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>your name</li>
              <li>email address</li>
              <li>the contents of your message</li>
              <li>any other information you choose to include</li>
            </ul>
            <p>
              The information you provide will be used primarily to respond to your communication and address your request.
            </p>
            <p>
              You should avoid sending sensitive personal information unless it is genuinely necessary for your request.
            </p>
          </div>
        </section>

        {/* 3. Cookies and Similar Technologies */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Cookie className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              3. Cookies and Similar Technologies
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may use cookies and similar technologies to support website functionality, understand how visitors use the website, improve performance and, where applicable, support advertising.
            </p>
            <p>
              Some cookies may be placed by third-party services used by the website.
            </p>
            <p>
              You can generally control or delete cookies through your browser settings. Disabling certain cookies may affect some website functionality.
            </p>
          </div>
        </section>

        {/* 4. Analytics */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <BarChart3 className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              4. Analytics
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may use analytics services such as <strong>Google Analytics</strong> to understand general website usage and improve the platform.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Analytics information may include things such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>number of visitors</li>
              <li>traffic sources</li>
              <li>pages viewed</li>
              <li>device categories</li>
              <li>geographic information at an approximate level</li>
              <li>engagement and interaction information</li>
            </ul>
            <p>
              Analytics services may use cookies or similar technologies to collect this information.
            </p>
            <p>
              NIRVANA uses analytics information primarily in aggregate form to understand how the website is being discovered and used.
            </p>
            <p>
              If analytics services are enabled on the website, their own privacy policies and terms may also apply.
            </p>
          </div>
        </section>

        {/* 5. Advertising */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Megaphone className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              5. Advertising
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may introduce display advertising in the future, including services such as <strong>Google AdSense</strong> or other advertising providers.
            </p>
            <p>
              If advertising is enabled, advertising providers may use cookies or similar technologies to deliver, measure or personalize advertisements in accordance with their applicable policies and settings.
            </p>
            <p>
              NIRVANA does not currently represent that advertising services are active simply because they are described in this Privacy Policy.
            </p>
            <p>
              This section exists so that the policy can cover potential advertising functionality as the website develops.
            </p>
            <p>
              If advertising practices materially change, this Privacy Policy may be updated accordingly.
            </p>
          </div>
        </section>

        {/* 6. Third-Party Services */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Server className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              6. Third-Party Services
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may use third-party services to operate, analyze, secure, host or improve the website.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Examples may include:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>website hosting and infrastructure providers</li>
              <li>analytics providers</li>
              <li>advertising providers</li>
              <li>email services</li>
              <li>security and performance services</li>
            </ul>
            <p>
              These third parties may process information according to their own privacy policies and applicable terms.
            </p>
            <p>
              NIRVANA does not control the privacy practices of independent third-party services.
            </p>
          </div>
        </section>

        {/* 7. External Links */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <ExternalLink className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              7. External Links
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA may contain links to external websites, resources or services.
            </p>
            <p>
              Once you leave NIRVANA and visit an external website, that website&apos;s own privacy policy and terms apply.
            </p>
            <p>
              NIRVANA is not responsible for the privacy practices, security or content of third-party websites.
            </p>
          </div>
        </section>

        {/* 8. How Information May Be Used */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <FileText className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              8. How Information May Be Used
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Information collected through the website may be used to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
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
            <p>
              NIRVANA does not intend to sell visitors&apos; personal information.
            </p>
          </div>
        </section>

        {/* 9. Data Retention */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Database className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              9. Data Retention
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Information may be retained only for as long as reasonably necessary for the purpose for which it was collected, to maintain legitimate business or operational records, to resolve disputes, to enforce applicable agreements, or to comply with legal obligations.
            </p>
            <p>
              Retention periods may vary depending on the type of information and the service involved.
            </p>
            <p>
              Third-party services may retain information according to their own policies.
            </p>
          </div>
        </section>

        {/* 10. Data Security */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Lock className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              10. Data Security
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA takes reasonable measures to help protect information associated with the website.
            </p>
            <p>
              However, no internet transmission, website or electronic storage system can be guaranteed to be completely secure.
            </p>
            <p>
              Visitors should therefore avoid sending highly sensitive information through ordinary website communications.
            </p>
          </div>
        </section>

        {/* 11. Children's Privacy */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <UserX className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              11. Children&apos;s Privacy
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is a general informational website and is not specifically directed toward collecting personal information from children.
            </p>
            <p>
              We do not knowingly request or intentionally collect personal information from children through account registration or similar mechanisms.
            </p>
            <p>
              If you believe that a child has provided personal information to us unnecessarily, please contact us so that the situation can be reviewed.
            </p>
          </div>
        </section>

        {/* 12. Your Choices */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Sliders className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              12. Your Choices
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              Depending on your browser, device and location, you may have choices relating to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>cookies</li>
              <li>analytics</li>
              <li>personalized advertising</li>
              <li>browser storage</li>
              <li>communications you voluntarily initiate</li>
            </ul>
            <p>
              You can manage many of these choices through your browser or device settings.
            </p>
            <p>
              Where applicable, third-party services may provide their own controls for managing privacy and advertising preferences.
            </p>
          </div>
        </section>

        {/* 13. Changes to This Privacy Policy */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <RefreshCw className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              13. Changes to This Privacy Policy
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              This Privacy Policy may be updated from time to time as NIRVANA introduces new features, analytics tools, advertising services or other functionality.
            </p>
            <p>
              When significant changes are made, the &quot;Last updated&quot; date at the beginning of this page may be updated.
            </p>
            <p>
              Visitors are encouraged to review this page periodically.
            </p>
          </div>
        </section>

        {/* 14. Contact */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <Mail className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              14. Contact
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              If you have questions, concerns or requests regarding this Privacy Policy or the privacy practices of NIRVANA, you can contact us at:
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

        {/* 15. Independent Publishing Platform */}
        <section className="bg-[#FDFCFB] dark:bg-[#181818] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <BookOpen className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              15. Independent Publishing Platform
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA is an independent digital reference and publishing platform.
            </p>
            <p>
              It is not intended to provide personalized medical, financial, legal, spiritual, astrological or other professional advice.
            </p>
            <p>
              For information about the nature and purpose of NIRVANA&apos;s content, please also refer to the site&apos;s Disclaimer.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
