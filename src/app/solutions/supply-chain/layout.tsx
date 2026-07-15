import type { Metadata } from 'next';
import { createLocalizedPageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedPageMetadata({
    canonical: '/solutions/supply-chain',
    title: {
      en: 'Supply Chain Solution',
      zh: '供应链解决方案',
    },
    description: {
      en: 'Climate Seal for suppliers and exporters: structured PCF preparation, quality checks, and traceable submission packages for buyers and reviewers.',
      zh: '面向供应商与出口团队的结构化 PCF 准备、质量检查和可追溯买方提交材料。',
    },
    image: '/supply-chain-assessment.png',
    imageAlt: 'Climate Seal supply chain solution',
  });
}

export default function SupplyChainLayout({ children }: { children: React.ReactNode }) {
  return children;
}
