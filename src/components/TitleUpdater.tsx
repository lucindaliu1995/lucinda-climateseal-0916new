'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';

const EN_TITLE = 'AI-Powered Sustainability Compliance Workspace | Climate Seal';
const ZH_TITLE = 'Climate Seal - AI 可持续合规工作台';

const EN_RESOURCES_TITLE = 'Resources | Climate Seal';
const ZH_RESOURCES_TITLE = '解决方案资源中心 | Climate Seal';

export default function TitleUpdater() {
  const { language } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = language;

    if (pathname === '/') {
      document.title = language === 'zh' ? ZH_TITLE : EN_TITLE;
      return;
    }

    if (pathname === '/resources') {
      document.title = language === 'zh' ? ZH_RESOURCES_TITLE : EN_RESOURCES_TITLE;
    }
  }, [language, pathname]);

  return null;
}
