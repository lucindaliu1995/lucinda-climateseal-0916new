import type { Metadata } from 'next';
import { createLocalizedPageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedPageMetadata({
    canonical: '/solutions/brand-owner',
    title: {
      en: 'Brand Owner Solution',
      zh: '品牌方解决方案',
    },
    description: {
      en: 'Climate Seal for brand owners: supplier data collection, Scope 3 tracking, sustainability reporting, target-setting support, and reduction planning.',
      zh: '面向品牌方的供应商数据收集、Scope 3 跟踪、可持续发展报告、目标设定支持与减排规划。',
    },
    image: '/brand-analyzer.png',
    imageAlt: 'Climate Seal brand owner solution',
  });
}

export default function BrandOwnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
