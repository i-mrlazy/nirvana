import React from 'react';
import { ScreenType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Mail, MessageSquare, CheckCircle2, AlertCircle, 
  HelpCircle, ExternalLink, ArrowRight
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (screen: ScreenType, targetId?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: t('home'), screen: 'home' },
          { label: 'Contact NIRVANA' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header */}
      <article className="space-y-8">
        <header className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-10 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-[0.2em] bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#8B4513] dark:text-[#FF9933] inline-block">
              OFFICIAL CONTACT CHANNEL
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Contact NIRVANA
            </h1>
            <p className="text-sm font-semibold text-[#8B4513] dark:text-[#FF9933]">
              We&apos;d like to hear from you.
            </p>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-[#1A1A1A] dark:text-[#F5F2EF] leading-relaxed border-t border-[#E5E1DA] dark:border-[#2A2A2A] pt-6">
            <p>
              <strong>NIRVANA — The Abstract Mind</strong> is an independent digital reference and publishing platform exploring spiritual, religious, cultural and traditional subjects.
            </p>
            <p className="text-[#6B7280] dark:text-[#9A8F85]">
              If you have a question about the website, want to report an error, have feedback about published content, or need to contact us regarding an issue with the site, you can reach us by email.
            </p>
          </div>
        </header>

        {/* Primary Email Card */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#FF9933]/40 p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2.5 text-[#8B4513] dark:text-[#FF9933]">
            <Mail className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Email Us Directly
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            Click the email address below to open your default email application and send us a message:
          </p>
          <div className="pt-2">
            <a
              href="mailto:theabstractlens.official@gmail.com"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#FF9933]/10 dark:bg-[#FF9933]/15 border border-[#FF9933]/40 text-[#8B4513] dark:text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition-all text-sm md:text-base font-bold shadow-2xs group"
            >
              <Mail className="size-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>theabstractlens.official@gmail.com</span>
              <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 shrink-0" />
            </a>
          </div>
        </section>

        {/* What You Can Contact Us About */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <MessageSquare className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              What You Can Contact Us About
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              You can contact NIRVANA regarding:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>questions about website content</li>
              <li>corrections or factual issues</li>
              <li>broken links or technical problems</li>
              <li>feedback about the website</li>
              <li>concerns regarding published material</li>
              <li>questions about this site&apos;s Privacy Policy, Terms of Use or Disclaimer</li>
              <li>general website-related inquiries</li>
            </ul>
          </div>
        </section>

        {/* Content Corrections */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <CheckCircle2 className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Content Corrections
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p>
              NIRVANA aims to provide useful and accurate reference material.
            </p>
            <p>
              Religious, cultural and traditional subjects can sometimes have multiple versions, interpretations or regional variations.
            </p>
            <p>
              If you believe that a page contains an error, misleading statement or information that requires clarification, you are welcome to contact us by email with the relevant page and details.
            </p>
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              Where appropriate, published content may be reviewed and corrected.
            </p>
          </div>
        </section>

        {/* Important Note */}
        <section className="bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#8B4513] dark:text-[#FF9933]">
            <AlertCircle className="size-5 shrink-0" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Important Note
            </h2>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            <p className="font-medium text-[#1A1A1A] dark:text-[#F5F2EF]">
              NIRVANA is an informational publishing platform. The contact address is not intended for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>personalized astrology consultations</li>
              <li>personalized palm readings</li>
              <li>spiritual counselling</li>
              <li>medical advice</li>
              <li>financial advice</li>
              <li>legal advice</li>
              <li>personalized predictions</li>
            </ul>
            <p className="pt-2">
              Please do not send sensitive personal information unless it is genuinely necessary for your inquiry.
            </p>
          </div>
        </section>

        {/* Closing Contact Card */}
        <section className="bg-[#FDFCFB] dark:bg-[#181818] rounded-xl border border-[#E5E1DA] dark:border-[#2A2A2A] p-6 md:p-8 space-y-4 text-center shadow-xs">
          <div className="max-w-xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1A1A1A] dark:text-[#F5F2EF]">
              Reach Out Anytime
            </h2>
            <p className="text-xs md:text-sm text-[#6B7280] dark:text-[#9A8F85]">
              We welcome your constructive feedback and suggestions as NIRVANA continues to grow.
            </p>
            <div className="pt-3">
              <a
                href="mailto:theabstractlens.official@gmail.com"
                className="text-sm md:text-base font-bold text-[#FF9933] hover:text-[#E08520] hover:underline"
              >
                theabstractlens.official@gmail.com
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
