'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

export default function HomeContactSection() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-[#103b39] py-14 text-white sm:py-16 lg:py-20"
      data-theme="contact"
      data-section="contact-form"
      data-category="conversion"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
          <div className="pt-1 lg:pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b9ddd5]">
              {language === 'zh' ? '准备看看 Climate Seal？' : 'Ready to see Climate Seal?'}
            </p>
            <h2 className="mt-6 max-w-xl font-lora text-balance text-[2.35rem] font-semibold leading-[1.04] text-white sm:text-[2.9rem] lg:text-[3.25rem]">
              {language === 'zh' ? '看看 AI 如何推进你的评估与报告工作' : 'See how AI supports your assessment and reporting workflow'}
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72 sm:text-[18px]">
              {language === 'zh'
                ? '告诉我们你的项目、已有数据与交付要求。我们会联系你，确认适合的工作流并讨论演示安排。'
                : 'Tell us about your project, available data, and delivery requirements. We will contact you to identify the relevant workflow and discuss a demonstration.'}
            </p>

            <div className="mt-9 grid gap-4 border-t border-white/12 pt-6 text-sm text-white/72 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Email</p>
                <p className="mt-2 break-words font-medium text-white">xuguang.ma@climate-seal.net</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Phone</p>
                <p className="mt-2 font-medium text-white">+86 15652618365</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Locations</p>
                <p className="mt-2 font-medium text-white">Beijing, Germany, Dubai, Singapore</p>
              </div>
            </div>
          </div>

          <ContactForm source="homepage_contact" />
        </div>
      </div>
    </section>
  );
}
