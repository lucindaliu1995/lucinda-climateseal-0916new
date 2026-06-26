'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ArticleCategory, ArticleItem, WhitepaperItem } from '@/lib/content';

type ResourcesPageClientProps = {
  categories: ArticleCategory[];
  articles: ArticleItem[];
  whitepapers: WhitepaperItem[];
};

export default function ResourcesPageClient({
  categories,
  articles,
  whitepapers,
}: ResourcesPageClientProps) {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredArticles, setFilteredArticles] = useState<ArticleItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      const hasArticles = (id: string) => articles.some((article) => article.category === id);

      if (cat && (cat === 'all' || (categories.some((category) => category.id === cat) && hasArticles(cat)))) {
        setSelectedCategory(cat);
      } else if (cat) {
        setSelectedCategory('all');
      }
    }
  }, [articles, categories]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter((article) => article.category === selectedCategory));
    }
  }, [selectedCategory, articles]);

  const categoryDescriptions: Record<string, { en: string; zh: string }> = {
    'supply-chain-scope-3': {
      en: 'Practical guides for supplier data collection, value-chain modeling, and Scope 3 reporting.',
      zh: '聚焦供应商数据采集、价值链建模与范围3披露的实操指南。',
    },
    'cbam-csrd-pef-compliance': {
      en: 'How to meet CBAM, CSRD and PEF/DPP evidence requirements with ISO-aligned PCFs.',
      zh: '以符合 ISO 的方法、证据链与版本化披露满足 CBAM、CSRD 与 PEF/DPP 要求。',
    },
    'pcf-lca-methods': {
      en: 'Functional units, boundaries, allocation, data quality and uncertainty for credible PCFs.',
      zh: '功能单位、系统边界、分配、数据质量与不确定性，支撑可信 PCF。',
    },
    'data-factors-baselines': {
      en: 'Emission factors, provenance, baselines and data-quality management for defensible numbers.',
      zh: '排放因子来源、基线与数据质量管理，确保口径可辩护。',
    },
    'industry-playbooks': {
      en: 'Sector playbooks for food, textiles, manufacturing, logistics and construction.',
      zh: '面向食品、纺织、制造、物流与建材的行业方案。',
    },
    'case-studies': {
      en: 'Real implementations with before-after results and cycle-time reductions.',
      zh: '真实落地案例与前后对比，包含周期缩短效果。',
    },
    'research-insights': {
      en: 'Policy trends, methodology updates and market insights for carbon accounting and assurance.',
      zh: '政策趋势、方法更新与市场洞察，服务于碳核算与鉴证。',
    },
    'getting-started': {
      en: 'Foundational guides, checklists and FAQs to get started quickly with product carbon footprints.',
      zh: 'PCF 入门概念、清单与常见问题，帮助快速起步。',
    },
    technology: {
      en: 'Technology topics and implementation notes for building automation into carbon workflows.',
      zh: '碳核算自动化相关的技术主题与实现要点。',
    },
  };

  const getArticleTitle = (article: ArticleItem) => (language === 'zh' ? article.titleZh : article.title);
  const getArticleExcerpt = (article: ArticleItem) => (language === 'zh' ? article.excerptZh : article.excerpt);
  const getCategoryName = (category: ArticleCategory) => (language === 'zh' ? category.nameZh : category.name);
  const getArticleCategoryName = (article: ArticleItem) => {
    const category = categories.find((item) => item.id === article.category);

    return language === 'zh'
      ? article.categoryZh || category?.nameZh || article.category
      : category?.name || article.category;
  };
  const getWhitepaperTitle = (whitepaper: WhitepaperItem) => (language === 'zh' ? whitepaper.titleZh : whitepaper.title);
  const getWhitepaperIntro = (whitepaper: WhitepaperItem) => (language === 'zh' ? whitepaper.introZh : whitepaper.intro);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'zh'
      ? date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const displayArticles = filteredArticles.length ? filteredArticles : articles;

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#123F3D]">
      <Script id="jsonld-breadcrumb-sr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: language === 'zh' ? '首页' : 'Home', item: `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/` },
            { '@type': 'ListItem', position: 2, name: language === 'zh' ? '解决方案资源中心' : 'Solution Resources', item: `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/resources` },
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
            name: language === 'zh' ? article.titleZh : article.title,
            image: article.coverImage || `${process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com'}/logo.jpg`,
            datePublished: article.publishDate,
            description: language === 'zh' ? article.excerptZh : article.excerpt,
          })),
        })}
      </Script>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8] px-4 pt-28 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="cs-section-eyebrow">
              {language === 'zh' ? '资源中心' : 'Resource Center'}
            </p>
            <h1 className="mt-6 font-lora text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#123F3D] sm:text-5xl lg:text-[3.5rem]">
              {language === 'zh' ? '碳核算与合规资源中心' : 'Carbon Accounting Resource Center'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f7672]">
              {language === 'zh'
                ? '围绕产品碳足迹、Scope 3、LCA、法规方法学、供应链协同与审计交付，持续整理更适合业务团队使用的资料。'
                : 'Explore practical guidance on Product Carbon Footprint, Scope 3, LCA methods, supplier collaboration, and verification-ready carbon delivery.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f3] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-8">
            <div className="border-b border-[#d7ddd6] pb-7">
              <p className="cs-section-eyebrow">{t.resourcesPage.articles.title}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f7672]">{t.resourcesPage.articles.subtitle}</p>
              <div className="mt-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`flex-none whitespace-nowrap rounded-[0.5rem] border px-4 py-2 text-sm font-medium transition ${selectedCategory === 'all' ? 'border-[#123F3D] bg-[#123F3D] text-white' : 'border-[#d7ddd6] bg-[#F8F6F1] text-[#123F3D] hover:border-[#b7c5bc]'}`}
                >
                  {language === 'zh' ? '全部内容' : 'All resources'}
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex-none whitespace-nowrap rounded-[0.5rem] border px-4 py-2 text-sm font-medium transition ${selectedCategory === category.id ? 'border-[#123F3D] bg-[#123F3D] text-white' : 'border-[#d7ddd6] bg-[#F8F6F1] text-[#123F3D] hover:border-[#b7c5bc]'}`}
                  >
                    {getCategoryName(category)}
                  </button>
                ))}
              </div>

              {selectedCategory !== 'all' ? (
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f7672]">
                  {(categoryDescriptions[selectedCategory]?.[language === 'zh' ? 'zh' : 'en']) || ''}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {displayArticles.map((article) => (
                <div
                  key={article.id}
                  className="group cs-glass-panel overflow-hidden transition-colors duration-200 hover:border-[#b7c5bc]"
                >
                  <div className="relative h-44 border-b border-[#d7ddd6] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(239,236,229,0.92))]">
                    {article.coverImage ? (
                      <Image
                        src={article.coverImage}
                        alt={`${getArticleTitle(article)} - cover image`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
                      />
                    ) : null}

                    <div className="absolute top-4 left-4">
                      <span className="rounded-[0.4rem] border border-[#b7c5bc] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#456864]">
                        {getArticleCategoryName(article)}
                      </span>
                    </div>

                    {article.featured ? (
                      <div className="absolute top-4 right-4">
                        <span className="rounded-[0.4rem] border border-[#d6c47a] bg-[#fff7d8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f5c1b]">
                          {language === 'zh' ? '推荐' : 'Featured'}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-6">
                    <p className="mb-3 text-sm text-[#6a817d]">{formatDate(article.publishDate)}</p>
                    <h3 className="mb-2 font-lora text-[1.45rem] font-bold leading-tight tracking-[-0.02em] text-[#123F3D]">{getArticleTitle(article)}</h3>
                    <p className="mb-5 text-[15px] leading-7 text-[#5f7672] line-clamp-3 sm:text-[16px]">{getArticleExcerpt(article)}</p>
                    <Link
                      href={`/resources/${article.id}`}
                      className="inline-flex items-center rounded-[0.5rem] border border-[#123F3D] px-4 py-2 text-sm font-semibold text-[#123F3D] transition hover:bg-[#123F3D] hover:text-white"
                    >
                      {language === 'zh' ? '查看文章' : 'Open article'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {displayArticles.length === 0 ? (
              <p className="py-10 text-center text-[#6a817d]">
                {language === 'zh' ? '当前分类下暂无文章。' : 'No articles are available for this category yet.'}
              </p>
            ) : null}
          </div>

          {whitepapers.length > 0 && (
            <aside className="space-y-4 xl:sticky xl:top-28 xl:self-start">
              <div className="border-b border-[#d7ddd6] pb-4">
                <p className="cs-section-eyebrow">
                  {language === 'zh' ? '重点白皮书' : 'Featured documents'}
                </p>
                <h2 className="mt-3 font-lora text-2xl font-bold tracking-[-0.02em] text-[#123F3D]">
                  {t.resourcesPage.whitepapers.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f7672]">{t.resourcesPage.whitepapers.subtitle}</p>
              </div>

              <div className="space-y-3">
                {whitepapers.map((whitepaper) => (
                  <div
                    key={whitepaper.id}
                    className="group cs-glass-panel grid grid-cols-[72px_minmax(0,1fr)] gap-3 p-4 transition-colors duration-200 hover:border-[#b7c5bc]"
                  >
                    <div className="relative h-24 overflow-hidden rounded-[0.45rem] border border-[#d7ddd6] bg-[#F8F6F1]">
                      <SafeImage
                        src={whitepaper.thumbnail}
                        alt={`${getWhitepaperTitle(whitepaper)} thumbnail`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        fallbackSrc="/logo.jpg"
                      />
                    </div>

                    <div className="min-w-0 space-y-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6a817d]">
                          {language === 'zh' ? '白皮书' : 'Whitepaper'} · {formatDate(whitepaper.publishDate)}
                        </p>
                        <h3 className="mt-1 font-lora text-base font-bold leading-tight text-[#123F3D] line-clamp-2">{getWhitepaperTitle(whitepaper)}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#5f7672] line-clamp-2">{getWhitepaperIntro(whitepaper)}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {whitepaper.topics.slice(0, 2).map((topic) => (
                          <span key={topic} className="rounded-[0.35rem] border border-[#d7ddd6] bg-[#F8F6F1] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[#5f7672]">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/resources/whitepapers/${whitepaper.id}`}
                        className="inline-flex items-center rounded-[0.45rem] border border-[#123F3D] px-3 py-1.5 text-xs font-semibold text-[#123F3D] transition hover:bg-[#123F3D] hover:text-white"
                      >
                        {language === 'zh' ? '查看文档' : 'Open document'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </div>
  );
}
