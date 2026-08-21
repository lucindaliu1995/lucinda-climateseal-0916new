'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type PainPoint = string | { title: string; description: string };

export type SolutionFeature = {
  title: string;
  summary: string;
  videoSrc: string;
  posterSrc?: string;
};

export type SolutionOutcome = {
  title: string;
  description: string;
};

type Accent = 'green' | 'amber' | 'blue';

type PartnerProgram = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

type SolutionPageRefreshProps = {
  accent: Accent;
  eyebrow: string;
  title: string;
  description: string;
  heroVideo: string;
  heroMediaLabel: string;
  heroHighlights: string[];
  primaryCta: string;
  secondaryCta: string;
  challengeTitle: string;
  painPoints: PainPoint[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowIntro: string;
  features: SolutionFeature[];
  outcomes: SolutionOutcome[];
  ctaTitle: string;
  ctaBody: string;
  contactLabel: string;
  homeLabel: string;
  partnerProgram?: PartnerProgram;
};

const themes = {
  green: {
    accentText: 'text-[#2f7770]',
    accentBg: 'bg-[#2f7770]',
    accentHover: 'hover:bg-[#215b57]',
    soft: 'bg-[#edf4f0]',
    pale: 'bg-[#f7faf8]',
    border: 'border-[#bfd3c9]',
    media: 'bg-[#edf4f0]',
  },
  amber: {
    accentText: 'text-[#8a672d]',
    accentBg: 'bg-[#8a672d]',
    accentHover: 'hover:bg-[#735424]',
    soft: 'bg-[#f7f3ea]',
    pale: 'bg-[#fbfaf7]',
    border: 'border-[#ddcfb6]',
    media: 'bg-[#f7f3ea]',
  },
  blue: {
    accentText: 'text-[#416979]',
    accentBg: 'bg-[#416979]',
    accentHover: 'hover:bg-[#345766]',
    soft: 'bg-[#edf3f6]',
    pale: 'bg-[#f7f9fa]',
    border: 'border-[#c8d7de]',
    media: 'bg-[#edf3f6]',
  },
} as const;

const sectionClass = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function WorkflowVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion || hasError) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasError, reduceMotion]);

  if (hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-6 text-center text-[#45605c]">
        <Play className="h-5 w-5" fill="currentColor" strokeWidth={1.5} />
        <span className="text-sm font-semibold">{title}</span>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="h-full w-full object-contain"
      aria-label={title}
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setHasError(true)}
    />
  );
}

export default function SolutionPageRefresh({
  accent,
  eyebrow,
  title,
  description,
  heroVideo,
  heroMediaLabel,
  heroHighlights,
  primaryCta,
  secondaryCta,
  challengeTitle,
  painPoints,
  workflowEyebrow,
  workflowTitle,
  workflowIntro,
  features,
  outcomes,
  ctaTitle,
  ctaBody,
  contactLabel,
  homeLabel,
  partnerProgram,
}: SolutionPageRefreshProps) {
  const theme = themes[accent];

  return (
    <main className="min-h-screen bg-white text-[#123f3d]">
      <section className={`${theme.pale} overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24`}>
        <div className={sectionClass}>
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>
              {eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-[19ch] font-lora text-[2.6rem] font-semibold leading-[1.02] text-[#123f3d] sm:text-[3.45rem] lg:text-[4rem]">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-[#506a66] sm:text-[19px]">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                data-analytics-event="book_demo_click"
                className={`inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white transition sm:text-base ${theme.accentBg} ${theme.accentHover}`}
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#workflow"
                className={`inline-flex min-h-12 items-center justify-center gap-2 border-b px-2 py-3 text-sm font-semibold transition sm:text-base ${theme.accentText} ${theme.border}`}
              >
                {secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-6xl" delay={0.08}>
            <div className={`border p-2 shadow-[0_28px_70px_rgba(18,63,61,0.11)] sm:p-4 ${theme.border} ${theme.soft}`}>
              <div className="flex h-9 items-center gap-1.5 border-b border-[#dce4df] bg-white px-4">
                <span className="h-2 w-2 rounded-full bg-[#d6ddd8]" />
                <span className="h-2 w-2 rounded-full bg-[#d6ddd8]" />
                <span className="h-2 w-2 rounded-full bg-[#d6ddd8]" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-white">
                <WorkflowVideo src={heroVideo} title={heroMediaLabel} />
              </div>
              <div className="grid border-t border-[#dce4df] bg-white sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[74px] items-center gap-3 border-b border-[#e1e7e3] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center ${theme.soft} ${theme.accentText}`}>
                      <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-semibold leading-5 text-[#45605c] sm:text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#123f3d] py-14 text-white sm:py-16">
        <div className={sectionClass}>
          <div className="grid gap-9 md:grid-cols-3 md:gap-0">
            {outcomes.map((outcome, index) => (
              <Reveal
                key={`${outcome.title}-${index}`}
                delay={index * 0.06}
                className="md:border-r md:border-white/12 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="text-[1.25rem] font-semibold leading-tight text-white">{outcome.title}</p>
                <p className="mt-3 text-[14px] leading-7 text-white/66">{outcome.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="challenges" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20`}>
          <Reveal>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-[13ch] font-lora text-[2.3rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">
              {challengeTitle}
            </h2>
          </Reveal>

          <div className="border-t border-[#d7e0da]">
            {painPoints.map((painPoint, index) => {
              const item = typeof painPoint === 'string'
                ? { title: '', description: painPoint }
                : painPoint;

              return (
                <Reveal key={`${item.title}-${index}`} delay={index * 0.04}>
                  <article className="grid gap-4 border-b border-[#d7e0da] py-7 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6 sm:py-8">
                    <span className={`text-[12px] font-semibold tabular-nums ${theme.accentText}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      {item.title && <h3 className="text-[1.25rem] font-semibold leading-tight text-[#123f3d]">{item.title}</h3>}
                      <p className={`${item.title ? 'mt-3' : ''} max-w-3xl text-[15px] leading-7 text-[#5e706d] sm:text-[16px]`}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className={`${theme.soft} py-20 sm:py-24 lg:py-28`}>
        <div className={sectionClass}>
          <Reveal className="max-w-4xl">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>
              {workflowEyebrow}
            </p>
            <h2 className="mt-4 max-w-[20ch] font-lora text-[2.3rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">
              {workflowTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#5e706d] sm:text-[18px]">
              {workflowIntro}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label={workflowTitle}>
        {features.map((feature, index) => {
          const mediaFirst = index % 2 === 0;

          return (
            <div key={`${feature.title}-${index}`} className={`${index % 2 === 0 ? 'bg-white' : theme.pale} py-16 sm:py-20 lg:py-24`}>
              <div className={`${sectionClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
                <Reveal className={mediaFirst ? 'lg:order-1' : 'lg:order-2'}>
                  <div className={`border p-2 shadow-[0_22px_48px_rgba(18,63,61,0.08)] sm:p-3 ${theme.border} ${theme.media}`}>
                    <div className="flex h-8 items-center gap-1.5 border-b border-[#dce4df] bg-white px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d6ddd8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d6ddd8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d6ddd8]" />
                    </div>
                    <div className="relative aspect-video overflow-hidden bg-white">
                      <WorkflowVideo
                        src={feature.videoSrc}
                        poster={feature.posterSrc}
                        title={feature.title}
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className={mediaFirst ? 'lg:order-2' : 'lg:order-1'} delay={0.05}>
                  <div className="max-w-xl">
                    <div className={`flex h-10 w-10 items-center justify-center ${theme.soft} ${theme.accentText}`}>
                      <Play className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
                    </div>
                    <p className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-lora text-[1.9rem] font-bold leading-[1.08] text-[#123f3d] sm:text-[2.25rem]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-8 text-[#5e706d] sm:text-[17px]">
                      {feature.summary}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {partnerProgram && (
        <section className="bg-[#0f3433] py-16 text-white sm:py-20">
          <div className={sectionClass}>
            <Link href={partnerProgram.href} className="group grid gap-8 border-y border-white/14 py-8 sm:grid-cols-[1fr_auto] sm:items-end sm:py-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9fd5c1]">{partnerProgram.eyebrow}</p>
                <h2 className="mt-4 max-w-3xl font-lora text-[2rem] font-bold leading-[1.08] text-white sm:text-[2.5rem]">
                  {partnerProgram.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/68">{partnerProgram.body}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#b9e2d2]">
                {partnerProgram.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className={`${theme.soft} py-20 sm:py-24 lg:py-28`}>
        <div className={`${sectionClass} text-center`}>
          <Reveal className="mx-auto max-w-4xl">
            <h2 className="font-lora text-[2.35rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.9rem]">
              {ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-[#5e706d] sm:text-[18px]">
              {ctaBody}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                data-analytics-event="book_demo_click"
                className={`inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white transition sm:text-base ${theme.accentBg} ${theme.accentHover}`}
              >
                {contactLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/" className={`inline-flex min-h-12 items-center justify-center border-b px-2 py-3 text-sm font-semibold sm:text-base ${theme.accentText} ${theme.border}`}>
                {homeLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
