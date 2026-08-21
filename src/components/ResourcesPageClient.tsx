'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, BookOpen, Clock, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SafeImage from '@/components/SafeImage';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ArticleCategory, ArticleItem, WhitepaperItem } from '@/lib/content';

type ResourcesPageClientProps = {
  categories: ArticleCategory[];
  articles: ArticleItem[];
  whitepapers: WhitepaperItem[];
};

export default function ResourcesPageClient({ categories, articles, whitepapers }: ResourcesPageClientProps) {
  const { language, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredArticles, setFilteredArticles] = useState<ArticleItem[]>(articles);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const categoryHasArticles = (id: string) => articles.some((article) => article.category === id);

    if (category && (category === 'all' || (categories.some((item) => item.id === category) && categoryHasArticles(category)))) {
      setSelectedCategory(category);
    } else if (category) {
      setSelectedCategory('all');
    }
  }, [articles, categories]);

  useEffect(() => {
    setFilteredArticles(selectedCategory === 'all' ? articles : articles.filter((article) => article.category === selectedCategory));
  }, [selectedCategory, articles]);

  const categoryDescriptions: Record<string, { en: string; zh: string }> = {
    'supply-chain-scope-3': {
      en: 'Practical guides for supplier data collection, value-chain modeling, and Scope 3 reporting.',
      zh: '聚焦供应商数据采集、价值链建模与范围 3 披露的实操指南。',
    },
    'cbam-csrd-pef-compliance': {
      en: 'How to prepare evidence and carbon data for CBAM, CSRD, PEF, and DPP workflows.',
      zh: '为 CBAM、CSRD、PEF 和 DPP 工作流程准备证据与碳数据。',
    },
    'pcf-lca-methods': {
      en: 'Functional units, boundaries, allocation, data quality, and uncertainty for credible PCFs.',
      zh: '功能单位、系统边界、分配、数据质量与不确定性，支撑可信 PCF。',
    },
    'data-factors-baselines': {
      en: 'Emission factors, provenance, baselines, and data-quality management for defensible calculations.',
      zh: '排放因子来源、基线与数据质量管理，使核算结果更可解释。',
    },
    'industry-playbooks': {
      en: 'Sector playbooks for food, textiles, manufacturing, logistics, and construction.',
      zh: '面向食品、纺织、制造、物流与建材的行业方法指南。',
    },
    'case-studies': {
      en: 'Implementation examples, delivery lessons, and workflow improvements.',
      zh: '实际落地案例、交付经验与工作流程改进。',
    },
    'research-insights': {
      en: 'Policy trends, methodology updates, and market insights for carbon accounting and assurance.',
      zh: '政策趋势、方法学更新与碳核算和鉴证市场洞察。',
    },
    'getting-started': {
      en: 'Foundational guides, checklists, and FAQs for teams beginning carbon accounting work.',
      zh: '面向初次开展碳核算工作的基础指南、清单与常见问题。',
    },
    technology: {
      en: 'Technology topics and implementation notes for AI-assisted carbon workflows.',
      zh: 'AI 辅助碳核算工作流程的技术主题与实施要点。',
    },
  };

  const displayArticles = filteredArticles.length ? filteredArticles : articles;
  const leadArticle = displayArticles[0];
  const latestArticles = displayArticles.slice(1);

  const getArticleTitle = (article: ArticleItem) => (language === 'zh' ? article.titleZh : article.title);
  const getArticleExcerpt = (article: ArticleItem) => (language === 'zh' ? article.excerptZh : article.excerpt);
  const getCategoryName = (category: ArticleCategory) => (language === 'zh' ? category.nameZh : category.name);
  const getArticleCategoryName = (article: ArticleItem) => {
    const category = categories.find((item) => item.id === article.category);
    return language === 'zh' ? article.categoryZh || category?.nameZh || article.category : category?.name || article.category;
  };
  const getWhitepaperTitle = (whitepaper: WhitepaperItem) => (language === 'zh' ? whitepaper.titleZh : whitepaper.title);
  const getWhitepaperIntro = (whitepaper: WhitepaperItem) => (language === 'zh' ? whitepaper.introZh : whitepaper.intro);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'zh'
      ? date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getReadingTime = (article: ArticleItem) => {
    const content = language === 'zh' ? article.contentZh || article.content : article.content;
    const units = language === 'zh' ? (content.match(/[\u3400-\u9fff]/g) || []).length : content.trim().split(/\s+/).length;
    const minutes = Math.max(3, Math.ceil(units / (language === 'zh' ? 450 : 220)));
    return language === 'zh' ? `${minutes} 分钟阅读` : `${minutes} min read`;
  };

  const revealProps = reduceMotion
    ? { initial: false as const }
    : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <div className="min-h-screen bg-white text-[#123f3d]">
      <Script id="jsonld-breadcrumb-sr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: language === 'zh' ? '首页' : 'Home', item: `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/` },
            { '@type': 'ListItem', position: 2, name: language === 'zh' ? '资源中心' : 'Resource Center', item: `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/resources` },
          ],
        })}
      </Script>

      <Script id="jsonld-itemlist-sr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: displayArticles.slice(0, 50).map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/resources/${article.id}`,
            name: getArticleTitle(article),
            image: article.coverImage || `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/climate-seal-logo-green.png`,
            datePublished: article.publishDate,
            description: getArticleExcerpt(article),
          })),
        })}
      </Script>

      <section className="border-b border-[#d7ddd6] bg-[#f8faf8] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-4xl">
            <p className="cs-section-eyebrow">{language === 'zh' ? '资源中心' : 'Resource center'}</p>
            <h1 className="mt-5 max-w-[19ch] font-lora text-[2.55rem] font-bold leading-[1.04] text-[#123f3d] sm:text-[3.35rem]">
              {language === 'zh' ? '关注碳与气候变化中的新闻、洞察与实践指南' : 'News, Insights, and Guidance for a Changing Carbon Landscape'}
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#5e706d]">
              {language === 'zh'
                ? '了解最新新闻、法规动态、方法学解读，以及碳核算、可持续发展和合规方面的实用观点。'
                : 'Explore regulatory updates, market developments, methodology explainers, and practical perspectives on carbon accounting, sustainability, and compliance.'}
            </p>
          </div>
          <div className="grid grid-cols-2 border-y border-[#c8d7cf] py-5 lg:grid-cols-1 lg:gap-5 lg:border-y-0 lg:border-l lg:py-0 lg:pl-8">
            <div>
              <p className="text-[2rem] font-semibold text-[#123f3d]">{articles.length}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#58716d]">{language === 'zh' ? '实用指南' : 'Practical guides'}</p>
            </div>
            <div>
              <p className="text-[2rem] font-semibold text-[#123f3d]">{whitepapers.length}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#58716d]">{language === 'zh' ? '白皮书' : 'Whitepapers'}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-[#d7ddd6] bg-white/95 px-4 backdrop-blur-md sm:top-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-3">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`shrink-0 border px-4 py-2 text-sm font-semibold transition-colors ${selectedCategory === 'all' ? 'border-[#123f3d] bg-[#123f3d] text-white' : 'border-[#d7ddd6] bg-white text-[#456864] hover:border-[#9fb8ad]'}`}
          >
            {language === 'zh' ? '全部内容' : 'All resources'}
          </button>
          {categories.filter((category) => articles.some((article) => article.category === category.id)).map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`shrink-0 border px-4 py-2 text-sm font-semibold transition-colors ${selectedCategory === category.id ? 'border-[#123f3d] bg-[#123f3d] text-white' : 'border-[#d7ddd6] bg-white text-[#456864] hover:border-[#9fb8ad]'}`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-16">
          <main className="min-w-0">
            <div className="flex flex-col gap-4 border-b border-[#d7ddd6] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="cs-section-eyebrow">{selectedCategory === 'all' ? (language === 'zh' ? '精选与最新' : 'Featured and latest') : getCategoryName(categories.find((category) => category.id === selectedCategory) || categories[0])}</p>
                <h2 className="mt-3 font-lora text-[2rem] font-bold text-[#123f3d] sm:text-[2.35rem]">{t.resourcesPage.articles.title}</h2>
              </div>
              <p className="max-w-lg text-sm leading-6 text-[#5e706d] sm:text-right">
                {selectedCategory === 'all'
                  ? t.resourcesPage.articles.subtitle
                  : categoryDescriptions[selectedCategory]?.[language === 'zh' ? 'zh' : 'en'] || ''}
              </p>
            </div>

            {leadArticle ? (
              <motion.div {...revealProps} transition={{ duration: reduceMotion ? 0 : 0.5 }}>
                <Link href={`/resources/${leadArticle.id}`} className="group grid gap-0 border-b border-[#d7ddd6] py-9 md:grid-cols-[1.02fr_0.98fr] md:items-stretch">
                  <div className="relative min-h-[280px] overflow-hidden bg-[#eef4f0] md:order-2 md:min-h-[380px]">
                    {leadArticle.coverImage ? (
                      <Image src={leadArticle.coverImage} alt={`${getArticleTitle(leadArticle)} cover`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                    ) : null}
                  </div>
                  <div className="flex flex-col py-7 md:order-1 md:py-8 md:pr-10">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#58716d]">
                      <span className="text-[#215b57]">{getArticleCategoryName(leadArticle)}</span>
                      <span>{formatDate(leadArticle.publishDate)}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{getReadingTime(leadArticle)}</span>
                    </div>
                    <h3 className="mt-6 max-w-[18ch] font-lora text-[2rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.45rem]">{getArticleTitle(leadArticle)}</h3>
                    <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#5e706d]">{getArticleExcerpt(leadArticle)}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#215b57]">
                      {language === 'zh' ? '阅读文章' : 'Read article'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ) : null}

            {latestArticles.length ? (
              <div className="pt-10">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-lora text-[1.75rem] font-bold text-[#123f3d]">{language === 'zh' ? '更多资源' : 'More resources'}</h2>
                  <span className="text-sm text-[#6a817d]">{latestArticles.length} {language === 'zh' ? '篇' : 'articles'}</span>
                </div>
                <div className="mt-5 grid gap-x-8 md:grid-cols-2">
                  {latestArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      {...revealProps}
                      transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.2) }}
                      className="border-t border-[#d7ddd6] py-6"
                    >
                      <Link href={`/resources/${article.id}`} className="group grid grid-cols-[112px_minmax(0,1fr)] gap-5">
                        <div className="relative min-h-[138px] overflow-hidden bg-[#eef4f0]">
                          {article.coverImage ? (
                            <Image src={article.coverImage} alt={`${getArticleTitle(article)} cover`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                          ) : null}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#58716d]">{getArticleCategoryName(article)}</p>
                          <h3 className="mt-2 line-clamp-3 text-[1.08rem] font-semibold leading-snug text-[#123f3d]">{getArticleTitle(article)}</h3>
                          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-[#6a817d]">
                            <span>{formatDate(article.publishDate)}</span>
                            <span>·</span>
                            <span>{getReadingTime(article)}</span>
                          </div>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#215b57]">
                            {language === 'zh' ? '查看' : 'Open'}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            ) : null}
          </main>

          {whitepapers.length ? (
            <aside className="xl:sticky xl:top-40 xl:self-start">
              <div className="border-y border-[#d7ddd6] py-6">
                <div className="flex items-center gap-3 text-[#215b57]">
                  <BookOpen className="h-5 w-5" strokeWidth={1.7} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">{language === 'zh' ? '精选白皮书' : 'Featured whitepaper'}</p>
                </div>
                {whitepapers.slice(0, 1).map((whitepaper) => (
                  <div key={whitepaper.id} className="mt-6">
                    <Link href={`/resources/whitepapers/${whitepaper.id}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4f0]">
                        <SafeImage
                          src={whitepaper.thumbnail}
                          alt={`${getWhitepaperTitle(whitepaper)} thumbnail`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                          fallbackSrc="/climate-seal-logo-green.png"
                        />
                      </div>
                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#58716d]">{formatDate(whitepaper.publishDate)}</p>
                      <h2 className="mt-3 font-lora text-[1.45rem] font-bold leading-tight text-[#123f3d]">{getWhitepaperTitle(whitepaper)}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#5e706d] line-clamp-4">{getWhitepaperIntro(whitepaper)}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#215b57]">
                        {language === 'zh' ? '查看白皮书' : 'View whitepaper'}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="mt-7 flex items-start gap-3 border border-[#c8d7cf] bg-[#eef4f0] p-5">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#215b57]" strokeWidth={1.7} />
                <div>
                  <p className="text-sm font-semibold text-[#123f3d]">{language === 'zh' ? '有具体项目问题？' : 'Have a project-specific question?'}</p>
                  <p className="mt-2 text-xs leading-5 text-[#5e706d]">{language === 'zh' ? '与我们讨论适用标准、数据需求和工作流程。' : 'Discuss applicable standards, data requirements, and workflow options with our team.'}</p>
                </div>
              </Link>
            </aside>
          ) : null}
        </div>
      </section>
    </div>
  );
}
