import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import {
  getAllCategories,
  getMeaningfulArticleById,
  getMeaningfulArticles,
  hasChineseArticleVersion,
  type ArticleItem,
} from '@/lib/content';
import { extractToc, renderMarkdown } from '@/lib/article-markdown';
import type { Language } from '@/lib/i18n';
import { isChineseLanguage, LANGUAGE_HEADER, resolveLanguage } from '@/lib/language';
import {
  buildResourcePageUrl,
  createMissingResourceMetadata,
  createResourceArticleJsonLd,
  createResourceBreadcrumbJsonLd,
  createResourceDetailMetadata,
  formatResourceDate,
  getAvailableResourceLanguage,
  getLocalizedImageAlt,
  getLocalizedMetaDescription,
  getLocalizedOgDescription,
  getLocalizedOgTitle,
  getLocalizedTitle,
} from '@/lib/resource-detail';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import PcfResponsePackCta from '@/components/PcfResponsePackCta';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

function getArticleContent(article: ArticleItem, language: Language): string {
  return isChineseLanguage(language) ? article.contentZh : article.content;
}

function removeDuplicatedArticleHeading(content: string, title: string): string {
  const normalizedTitle = title.trim();

  if (!normalizedTitle) {
    return content;
  }

  const headingPattern = new RegExp(`^#\\s+${normalizedTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n+`, 'i');

  return content.replace(headingPattern, '');
}

function getArticleCategoryLabel(article: ArticleItem, language: Language): string {
  const category = getAllCategories().find((item) => item.id === article.category);

  return isChineseLanguage(language)
    ? article.categoryZh || category?.nameZh || article.category
    : category?.name || article.category;
}

function splitPcfResponsePackPlacement(content: string, language: Language): { before: string; after: string } | null {
  const bomHeading = language === 'zh' ? '## 只有 BOM，可以先做吗？' : '## Can you start with only a BOM?';
  const sectionStart = content.indexOf(bomHeading);

  if (sectionStart < 0) {
    return null;
  }

  const nextHeading = content.slice(sectionStart + bomHeading.length).search(/\n#{2,3}\s+/);

  if (nextHeading < 0) {
    return null;
  }

  const sectionEnd = sectionStart + bomHeading.length + nextHeading + 1;

  return {
    before: content.slice(0, sectionEnd),
    after: content.slice(sectionEnd),
  };
}

export function generateStaticParams() {
  return getMeaningfulArticles().map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const headerList = await headers();
  const requestedLanguage = resolveLanguage(resolvedSearchParams?.lang || headerList.get(LANGUAGE_HEADER));
  const article = getMeaningfulArticleById(id);

  if (!article) {
    return createMissingResourceMetadata('Article Not Found');
  }

  const hasChineseVersion = hasChineseArticleVersion(article);
  const language = getAvailableResourceLanguage(requestedLanguage, hasChineseVersion);
  const title = getLocalizedTitle(article, language);
  const description = getLocalizedMetaDescription(article, language);
  const ogTitle = getLocalizedOgTitle(article, language);
  const ogDescription = getLocalizedOgDescription(article, language);
  const canonical = `/resources/${id}`;
  const image = article.coverImage || '/climate-seal-logo-green.png';

  return createResourceDetailMetadata({
    canonical,
    language: requestedLanguage,
    hasChineseVersion,
    title,
    description,
    ogTitle,
    ogDescription,
    image,
    missingTitle: 'Article Not Found',
  });
}

export default async function ArticleDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const headerList = await headers();
  const requestedLanguage = resolveLanguage(resolvedSearchParams?.lang || headerList.get(LANGUAGE_HEADER));
  const article = getMeaningfulArticleById(id);

  if (!article) {
    notFound();
  }

  const language = getAvailableResourceLanguage(
    requestedLanguage,
    hasChineseArticleVersion(article)
  );

  const articleTitle = getLocalizedTitle(article, language);
  const articleDescription = getLocalizedMetaDescription(article, language);
  const articleCategoryLabel = getArticleCategoryLabel(article, language);
  const cleanedContent = removeDuplicatedArticleHeading(getArticleContent(article, language), articleTitle)
    .replace(/^CTA:?\s*$/gim, '');
  const toc = extractToc(cleanedContent);
  const pcfResponsePackSections = article.id === 'customer-requested-pcf-three-day-response'
    ? splitPcfResponsePackPlacement(cleanedContent, language)
    : null;
  const editorialFormatting = article.id === 'customer-requested-pcf-three-day-response'
    || article.id === 'bom-ready-for-pcf';
  const html = renderMarkdown(cleanedContent, {
    editorialFormatting,
    indentFirstParagraph: editorialFormatting,
  });
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';
  const pageUrl = buildResourcePageUrl(`/resources/${article.id}`, language, baseUrl);
  const relatedArticles = getMeaningfulArticles()
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  const breadcrumbJsonLd = createResourceBreadcrumbJsonLd(language, baseUrl, pageUrl, articleTitle);

  const articleJsonLd = createResourceArticleJsonLd({
    baseUrl,
    pageUrl,
    language,
    title: articleTitle,
    description: articleDescription,
    publishDate: article.publishDate,
    image: article.coverImage || '/climate-seal-logo-green.png',
  });

  return (
    <div className="min-h-screen bg-white" lang={isChineseLanguage(language) ? 'zh-CN' : 'en'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-white px-4 pb-12 pt-12 sm:pb-14 sm:pt-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link href="/resources" className="text-emerald-600 hover:text-emerald-700 underline text-sm">
              {language === 'zh' ? '← 返回资源中心' : '← Back to Resources'}
            </Link>
          </nav>

          <div className="mb-6">
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                {articleCategoryLabel}
              </span>
              <span className="text-slate-500 text-sm">{formatResourceDate(article.publishDate, language)}</span>
              {article.featured && (
                <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {isChineseLanguage(language) ? '推荐' : 'Featured'}
                </span>
              )}
            </div>
          </div>

          <h1 className="mb-8 max-w-3xl font-lora text-[2.5rem] font-semibold leading-[1.08] text-slate-900 sm:text-[3.15rem]">
            {articleTitle}
          </h1>

          <div className="mb-8">
            <div className="relative aspect-[3/2] max-h-[540px] overflow-hidden bg-slate-100">
              <Image
                src={article.coverImage || '/climate-seal-logo-green.png'}
                alt={getLocalizedImageAlt(article, language)}
                fill
                className="object-cover"
                priority
              />
            </div>
            {article.imageCredit && article.imageSourceUrl && (
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                <a href={article.imageSourceUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-700 hover:underline">
                  {isChineseLanguage(language) ? article.imageCreditZh || article.imageCredit : article.imageCredit}
                </a>
                {article.imageLicense && article.imageLicenseUrl && (
                  <>
                    {' · '}
                    <a href={article.imageLicenseUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-700 hover:underline">
                      {article.imageLicense}
                    </a>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="border-y border-slate-200 py-10 md:py-14">
            {toc.length > 0 && (
              <nav aria-label={isChineseLanguage(language) ? '目录' : 'Table of contents'} className="mb-12 border-l-2 border-[#8eb4a7] bg-[#f6f9f7] px-6 py-6">
                <h2 className="mb-4 text-lg font-semibold text-slate-800">{isChineseLanguage(language) ? '目录' : 'Contents'}</h2>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm leading-6 text-[#356d64] underline decoration-[#b8cec5] underline-offset-4 hover:text-[#174d47]">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="mx-auto max-w-[760px]">
              {pcfResponsePackSections ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(pcfResponsePackSections.before, { editorialFormatting: true, indentFirstParagraph: true }) }} />
                  <PcfResponsePackCta language={language} />
                  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(pcfResponsePackSections.after, { editorialFormatting: true }) }} />
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: html }} />
              )}
              {pcfResponsePackSections && <PcfResponsePackCta language={language} compact />}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {isChineseLanguage(language) ? '分享这篇文章' : 'Share this article'}
                </h2>
                <p className="text-slate-600 text-sm">
                  {isChineseLanguage(language) ? '帮助更多人了解碳核算的最新发展' : 'Help others stay informed about carbon accounting developments'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                  data-analytics-event="linkedin_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#0077B5] hover:bg-[#005885] text-white font-medium transition-all duration-300 flex items-center gap-2"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(articleTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-white font-medium transition-all duration-300 flex items-center gap-2"
                >
                  X
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${articleTitle} ${pageUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white font-medium transition-all duration-300 flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSubscribe language={language} source={`resource_article:${article.id}`} />

      {relatedArticles.length > 0 && (
        <section className="pb-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {isChineseLanguage(language) ? '相关文章' : 'Related Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/resources/${relatedArticle.id}${isChineseLanguage(language) ? '?lang=zh' : ''}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-200 transition-all duration-300 group shadow-sm"
                >
                  <div className="relative h-48 bg-slate-100">
                    <Image
                      src={relatedArticle.coverImage || '/climate-seal-logo-green.png'}
                      alt={`${getLocalizedTitle(relatedArticle, language)} - cover image`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-slate-900 text-lg font-semibold mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {getLocalizedTitle(relatedArticle, language)}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {formatResourceDate(relatedArticle.publishDate, language)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
