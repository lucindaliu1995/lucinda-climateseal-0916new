import type { Metadata } from "next";
import { headers } from "next/headers";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from 'next/script';
import TitleUpdater from "@/components/TitleUpdater";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { ANALYTICS_MEASUREMENT_ID } from '@/lib/analytics';
import { buildLanguageAlternates, buildLocalizedCanonical, isChineseLanguage, resolveLanguage } from "@/lib/language";

const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const googleVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION as string | undefined;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION as string | undefined;

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const language = resolveLanguage(headerList.get('x-language'));
  const isZh = isChineseLanguage(language);

  const title = isZh
    ? 'Climate Seal | 可信碳核算的 AI 工作台'
    : 'AI Carbon Accounting Workspace | Climate Seal';
  const description = isZh
    ? 'Climate Seal 用专业级 AI 支持产品碳、企业碳、Scope 3 与项目碳工作流，帮助团队完成可信、透明、可复核的碳报告交付。'
    : 'Automate carbon accounting from BOM and supplier data into verification-ready PCF, Scope 3, CBAM and EPD reports with AI agents.';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://climate-seal.com"),
    title: {
      default: title,
      template: "%s | Climate Seal"
    },
    description,
    robots: {
      index: process.env.NODE_ENV === 'production',
      follow: process.env.NODE_ENV === 'production'
    },
    alternates: {
      canonical: buildLocalizedCanonical("/", language),
      languages: buildLanguageAlternates("/")
    },
    keywords: [
      "碳排放管理平台",
      "企业碳盘查工具",
      "供应链碳足迹核算",
      "Scope 3 排放核算",
      "CBAM 报告",
      "制造业碳足迹计算",
      "物流业碳排放管理",
      "AI碳管理",
      "GHG Protocol碳盘查",
      "carbon footprint",
      "PCF software",
      "产品碳足迹",
      "供应链碳管理",
      "气候合规",
      "ESG",
      "LCA",
      "SBTi",
      "GHG Protocol",
      "product carbon footprint software",
      "carbon accounting software",
      "AI carbon accounting software",
      "enterprise carbon management",
      "supply chain carbon footprint",
      "scope 3 emissions calculation",
      "AI carbon management platform"
    ],
    openGraph: {
      type: "website",
      siteName: "Climate Seal",
      title,
      description,
      url: buildLocalizedCanonical("/", language),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Climate Seal - Credibility Drives Better Climate."
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
      site: "@ClimateSeal",
      creator: "@ClimateSeal"
    },
    verification: {
      ...(googleVerification ? { google: googleVerification } : {}),
      ...(bingVerification ? { other: { bing: bingVerification } } : {}),
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png"
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const initialLanguage = resolveLanguage(headerList.get('x-language'));

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        {/* Preconnect/DNS-Prefetch for critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preload hero assets if needed (keep minimal to avoid over-preload) */}
        <link rel="preload" as="image" href="/climate-seal-logo-white.png" />
        {/* RSS link for content discovery */}
        <link rel="alternate" type="application/rss+xml" title="Climate Seal RSS" href="/rss.xml" />
        {/* Organization JSON-LD（仅注入元信息，不影响视觉） */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Climate Seal",
            legalName: "Climate Seal (Beijing) Technology Co., Ltd.",
            url: (process.env.NEXT_PUBLIC_APP_URL || "https://climate-seal.com"),
            logo: new URL("/climate-seal-logo-green.png", process.env.NEXT_PUBLIC_APP_URL || "https://climate-seal.com").toString(),
            description: "Automate carbon accounting from BOM and supplier data into verification-ready PCF, Scope 3, CBAM and EPD reports with AI agents.",
            foundingDate: "2024",
            sameAs: [
              "https://twitter.com/ClimateSeal",
              "https://linkedin.com/company/climate-seal"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contact@climate-seal.net"
            }
          })}
        </Script>
        {/* SoftwareApplication JSON-LD */}
        <Script id="software-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Climate Seal AI Platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: "Automate carbon accounting from BOM and supplier data into verification-ready PCF, Scope 3, CBAM and EPD reports with AI agents.",
            url: (process.env.NEXT_PUBLIC_APP_URL || "https://climate-seal.com"),
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free one report to start your decarbonization journey"
            },
            featureList: [
              "AI-powered carbon footprint calculation",
              "Automated LCA generation",
              "ISO 14067 compliance",
              "GHG Protocol alignment",
              "Audit-ready reporting",
              "BOM parsing",
              "Evidence pre-verification"
            ]
          })}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${ANALYTICS_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
            window.__climateSealAnalyticsInitialized = true;
          `}
        </Script>
      </head>
      <body
        className={`${sourceSansPro.variable} antialiased bg-[var(--brand-bg)] text-[var(--brand-ink)]`}
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          <TitleUpdater />
          <AnalyticsTracker />
          <Navbar />
          <main className="min-h-screen bg-[var(--brand-bg)]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
