'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    // 뷰포트 높이 동적 조정 함수
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 초기 설정
    setViewportHeight();

    // 리사이즈/회전 시 재계산
    const handleResize = () => {
      setViewportHeight();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // iOS Safari 주소창 변화 감지를 위한 추가 이벤트
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setViewportHeight();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    // 기본 Intersection Observer 설정
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Our Journey 섹션을 위한 더 관대한 Observer 설정
    const journeyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.05, // 더 낮은 threshold
        rootMargin: '0px 0px 100px 0px' // 더 일찍 트리거되도록 설정
      }
    );

    // 기본 관찰할 요소들 선택
    const animateElements = document.querySelectorAll('.fade-in-on-scroll:not(.journey-fade-in)');
    animateElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Our Journey 섹션 요소들 선택
    const journeyElements = document.querySelectorAll('.journey-fade-in');
    journeyElements.forEach((el) => {
      journeyObserver.observe(el);
    });

    // cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      journeyObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero-section"
        className="flex items-center justify-center relative overflow-hidden bg-primary hero-section"
      >
        <div className="text-center relative z-10 px-4">
          <div className="hero-content">
            {/* 로딩 애니메이션 (처음에만 표시) */}
            <div className="loading-container">
              <div className="loading-dots">
                <div className="loading-dot dot1"></div>
                <div className="loading-dot dot2"></div>
                <div className="loading-dot dot3"></div>
              </div>
            </div>

            {/* 타이핑 텍스트 */}
            <div className="typing-container">
              <div className="typing-line line1">
                <span className="typing-text text1" style={{ color: 'transparent' }}>CREATIVE MANAGEMENT</span>
              </div>
              <div className="typing-line line2">
                <span className="typing-text text2" style={{ color: 'transparent' }}>&amp; PRODUCTION</span>
              </div>
            </div>

            {/* 디자인적 배경 요소로 크게 들어가는 텍스트 */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <h1 className="text-white font-heading text-9xl sm:text-9xl font-bold opacity-5 select-none tracking-widest">
                CREATIVE MANAGEMENT &PRODUCTION
              </h1>
            </div>

            {/* 실제 로고 (나중에 나타남) */}
            <div className="logo-container" style={{ visibility: 'hidden', opacity: 0 }}>
              {/* 글로우 효과 배경 */}
              <div className="logo-glow"></div>
              <Image
                src="/images/neos-logo-white-trans.png"
                alt="neos logo"
                width={280}
                height={90}
                className="mx-auto px-4 sm:px-8 md:px-12 hero-logo w-48 sm:w-56 md:w-64 lg:w-72 h-auto relative z-10"
              />
              {/* <Image
                src="/images/neos-logo-text-white-nopd.png"
                alt="neos logo"
                width={600}
                height={180}
                className="mx-auto px-4 sm:px-8 md:px-12 hero-logo max-w-full h-auto relative z-10"
              /> */}
            </div>
          </div>
        </div>
        {/* 스크롤 유도 버튼 */}
        <div className="absolute inset-x-0 z-20 animate-bounce flex flex-col items-center justify-center scroll-indicator">
          <span className="text-white text-sm tracking-wide opacity-80 text-center">Scroll</span>
          <svg className="mt-1 w-5 h-5 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Vision Section */}
      <Section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('vision.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('vision.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide">{t('vision.professional.title')}</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium whitespace-pre-line">
                  {t('vision.professional.heading')}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  {t('vision.professional.description')}
                </p>
              </div>
            </div>

            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide">{t('vision.humanism.title')}</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium whitespace-pre-line">
                  {t('vision.humanism.heading')}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  {t('vision.humanism.description')}
                </p>
              </div>
            </div>

            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide">{t('vision.global.title')}</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium whitespace-pre-line">
                  {t('vision.global.heading')}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  {t('vision.global.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50 fade-in-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('mission.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('mission.subtitle')}
            </p>
          </div>

          {/* Mission Flow Container */}
          <div className="relative max-w-7xl mx-auto">

            {/* Mission Items Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 z-10">
              {[
                {
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  titleKey: "mission.trend.title",
                  descriptionKey: "mission.trend.description",
                  delay: "0ms"
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  titleKey: "mission.efficiency.title",
                  descriptionKey: "mission.efficiency.description",
                  delay: "200ms"
                },
                {
                  icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                  titleKey: "mission.integration.title",
                  descriptionKey: "mission.integration.description",
                  delay: "400ms"
                },
                {
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  titleKey: "mission.progressive.title",
                  descriptionKey: "mission.progressive.description",
                  delay: "600ms"
                },
                {
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  titleKey: "mission.highQuality.title",
                  descriptionKey: "mission.highQuality.description",
                  delay: "800ms"
                },
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  titleKey: "mission.completeness.title",
                  descriptionKey: "mission.completeness.description",
                  delay: "1000ms"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="fade-in-on-scroll group relative text-center py-4"
                  style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="relative">
                    {/* Icon container with clean styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-white border-2 border-primary/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="relative w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-text-primary mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                      {t(item.descriptionKey)}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section className="py-20 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('history.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('history.subtitle')}
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16" key={`history-${language}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">1999</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.1999.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.1999.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2003</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2003.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2003.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2004</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2004.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2004.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2006</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2006.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2006.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2009</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2009.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2009.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2012</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2012.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2012.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2013</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2013.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2013.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2015</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2015.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2015.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2016</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2016.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2016.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2018</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2018.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2018.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2019</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2019.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2019.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2020</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2020.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2020.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2021</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2021.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2021.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2022</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2022.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2022.description')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start">
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2023</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">{t('history.events.2023.title')}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">{t('history.events.2023.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Works Section */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50 fade-in-on-scroll overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('works.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('works.subtitle')}
            </p>
          </div>

          {/* Featured Work - Large Hero */}
          <div className="mb-8 sm:mb-12 md:mb-16 fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
              <Image
                src="/images/works/misamo-google.jpeg"
                alt="MISAMO x Google Campaign"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                    {t('labels.featuredCampaign')}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-normal text-white mb-2 sm:mb-3 md:mb-4 tracking-wide">{t('works.misamoGoogle.title')}</h3>
                  <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                    {t('works.misamoGoogle.description')}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">{t('works.misamoGoogle.tags.globalCampaign')}</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">{t('works.misamoGoogle.tags.kpop')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <Image
                src="/images/works/sbc.jpg"
                alt="SBC Project"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 md:p-8 w-full">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-primary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 sm:mb-3 md:mb-4">
                    {t('labels.campaign')}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-normal text-white mb-2 sm:mb-3 tracking-wide">{t('works.sbc.title')}</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {t('works.sbc.description')}
                  </p>
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl fade-in-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <Image
                src="/images/works/neos-momo-MediQttO.jpg"
                alt="Medi QttO TWICE MOMO Campaign"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 md:p-8 w-full">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-primary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 sm:mb-3 md:mb-4">
                    {t('labels.campaign')}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-normal text-white mb-2 sm:mb-3 tracking-wide">{t('works.mediQtto.title')}</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed whitespace-pre-line">
                    {t('works.mediQtto.description')}
                  </p>
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 fade-in-on-scroll" style={{ transitionDelay: '0.8s' }}>
            <Button href="/portfolio" variant="outline" size="lg" className="min-w-[180px] sm:min-w-[200px] text-sm sm:text-base">
              {t('works.viewAll')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('clients.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </div>
        </div>

        <div className="space-y-8 overflow-hidden">
          {/* First row - moving left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {[
                'nintendo.svg', 'uniqlo.svg', 'toyota.svg', 'sony.svg', 'google.svg',
                'mcdonald.svg', 'lotte.svg', 'suntory.svg', 'shiseido.svg', 'nissan.svg',
                'nhk.svg', 'otsuka.svg', 'secom.svg'
              ].concat([
                'nintendo.svg', 'uniqlo.svg', 'toyota.svg', 'sony.svg', 'google.svg',
                'mcdonald.svg', 'lotte.svg', 'suntory.svg', 'shiseido.svg', 'nissan.svg',
                'nhk.svg', 'otsuka.svg', 'secom.svg'
              ]).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 flex items-center justify-center">
                  <Image
                    src={`/images/client-logos/${logo}`}
                    alt={logo.replace('.svg', '').replace('.png', '')}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-right">
              {[
                'colopl.svg', 'daihatsu.svg', 'ms.svg', 'rohto.svg', 'perfetti.svg',
                'tbc.svg', 'wowow.svg', 'ggd.svg', 'aeon.svg', 'missha.png',
                'logo-asahi-super-dry.png', 'daiichikosho.png'
              ].concat([
                'colopl.svg', 'daihatsu.svg', 'ms.svg', 'rohto.svg', 'perfetti.svg',
                'tbc.svg', 'wowow.svg', 'ggd.svg', 'aeon.svg', 'missha.png',
                'logo-asahi-super-dry.png', 'daiichikosho.png'
              ]).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 flex items-center justify-center">
                  <Image
                    src={`/images/client-logos/${logo}`}
                    alt={logo.replace('.svg', '').replace('.png', '')}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-normal text-primary mb-6 md:mb-8 tracking-wide uppercase">
              {t('partners.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            {Array.from({ length: 31 }, (_, i) => {
              const partnerLogos = [
                { file: '1_jtbc.png', name: 'JTBC Co., Ltd.' },
                { file: '2_tvn.png', name: 'CJ ENM Co., Ltd.' },
                { file: '3_sbs.png', name: 'Seoul Broadcasting System Co., Ltd.' },
                { file: '4_mbc.png', name: 'Munhwa Broadcasting Corporation' },
                { file: '5_kbs.png', name: 'Korean Broadcasting System' },
                { file: '6_sm.svg', name: 'SM Entertainment Co., Ltd.' },
                { file: '7_jyp.svg', name: 'JYP Entertainment Corporation' },
                { file: '8_yg.png', name: 'YG Entertainment Inc.' },
                { file: '29.hybe.png', name: 'HYBE Co., Ltd.' },
                { file: '9_pledis.png', name: 'Pledis Entertainment Co., Ltd.' },
                { file: '10_cube.svg', name: 'Cube Entertainment Inc.' },
                { file: '11_esteem_fashion.png', name: 'Esteem Group' },
                { file: '12_esteem_ent.png', name: 'Esteem Entertainment Co., Ltd.' },
                { file: '13_blossom.png', name: 'Blossom Entertainment Co., Ltd.' },
                { file: '14_keyeast.png', name: 'KEYEAST Co., Ltd.' },
                { file: '15_adk.png', name: 'ADK Holdings Inc.' },
                { file: '16_dentsu.svg', name: 'Dentsu Inc.' },
                { file: '17_hakuhodo.png', name: 'Hakuhodo Inc.' },
                { file: '18_mccann.png', name: 'McCann Worldgroup' },
                { file: '19_innocean.svg', name: 'Innocean Worldwide Inc.' },
                { file: '20_tfc.webp', name: 'TOHOKUSHINSHA FILM CORPORATION' },
                { file: '21_nhk.svg', name: 'Japan Broadcasting Corporation' },
                { file: '22_aoipro.svg', name: 'AOI Pro. Inc.' },
                { file: '23_monster.svg', name: 'MONSTER' },
                { file: '24_tyo.png', name: 'TYO Inc.' },
                { file: '25_robot.webp', name: 'Robot Communications Inc.' },
                { file: '26_sonymusic.svg', name: 'Sony Music Entertainment (Japan) Inc.' },
                { file: '27_universal.svg', name: 'Universal Music Group' },
                { file: '28.tbs.svg', name: 'Tokyo Broadcasting System Television, Inc.' },
                { file: '30.fuji-television.png', name: 'Fuji Television Network, Inc.' },
                { file: '31.kansai-television.svg', name: 'Kansai Television Co. Ltd.' },
              ];

              const partner = partnerLogos[i];
              return (
                <div
                  key={i}
                  className="group relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex-shrink-0 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <Image
                    src={`/images/partners-logos/${partner.file}`}
                    alt={partner.name}
                    width={100}
                    height={60}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {partner.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Footer />

      <style jsx>{`
        .hero-content {
          position: relative;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          animation: fadeOutLoading 0.3s ease-in-out 0.5s forwards;
        }

        .loading-dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }

        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          animation: dotPulse 1.2s ease-in-out infinite;
        }

        .loading-dot.dot2 {
          animation-delay: 0.2s;
        }

        .loading-dot.dot3 {
          animation-delay: 0.4s;
        }

        .typing-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: fadeInTyping 0.5s ease-out 0.8s forwards, fadeOutTyping 0.6s ease-in-out 5.8s forwards;
        }

        .typing-line {
          display: flex;
          justify-content: center;
          margin: 0.3rem 0;
        }

        .line1 {
          margin-bottom: 0.6rem;
        }

        .typing-text {
          color: transparent;
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
        }

        .text1 {
          animation: showText1 0.1s ease-out 1.2s forwards, typing1 1.5s steps(18, end) 1.2s forwards;
        }

        .text2 {
          animation: showText2 0.1s ease-out 3.5s forwards, typing2 1.3s steps(12, end) 3.5s forwards;
        }

        .logo-container {
          visibility: hidden;
          opacity: 0;
          transform: scale(0.95);
          animation: fadeInLogo 0.8s ease-out 6.2s forwards;
          z-index: 10;
          position: relative;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 70%);
          border-radius: 50%;
          opacity: 0.5;
          z-index: 1;
          animation: breathingGlow 3s ease-in-out 7.2s infinite;
        }

        .hero-logo {
          display: block;
        }

        @keyframes fadeOutLoading {
          0% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.9);
          }
        }

        @keyframes dotPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes fadeInTyping {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes showText1 {
          0% { color: transparent; }
          100% { color: rgba(255, 255, 255, 0.95); }
        }

        @keyframes showText2 {
          0% { color: transparent; }
          100% { color: rgba(255, 255, 255, 0.95); }
        }

        @keyframes typing1 {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes typing2 {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes fadeOutTyping {
          0% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes fadeInLogo {
          0% { 
            visibility: hidden;
            opacity: 0; 
            transform: scale(0.95);
          }
          1% {
            visibility: visible;
          }
          100% { 
            visibility: visible;
            opacity: 1; 
            transform: scale(1);
          }
        }

        @keyframes breathingGlow {
          0%, 100% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        /* Scroll-triggered fade-in animations */
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mission Flow Animations - 기존에 스크롤 애니메이션으로 대체됨 */

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-content {
            min-height: 100px;
          }

          .loading-dots {
            gap: 0.4rem;
          }

          .loading-dot {
            width: 6px;
            height: 6px;
          }

          .logo-glow {
            width: 130%;
            height: 130%;
          }
          
          .typing-text {
            font-size: 1.1rem;
            letter-spacing: 0.06em;
          }
          
          .line1 {
            margin-bottom: 0.4rem;
          }
          

        }

        @media (max-width: 480px) {
          .hero-content {
            min-height: 80px;
          }

          .loading-dots {
            gap: 0.3rem;
          }

          .loading-dot {
            width: 5px;
            height: 5px;
          }

          .logo-glow {
            width: 140%;
            height: 140%;
          }
            
          .typing-text {
            font-size: 0.9rem;
            letter-spacing: 0.04em;
          }
          
          .typing-line {
            margin: 0.2rem 0;
          }
          
          .line1 {
            margin-bottom: 0.3rem;
          }
        }

        /* 동적 뷰포트 높이 설정 */
        .hero-section {
          height: 100vh; /* 폴백 */
          height: calc(var(--vh, 1vh) * 100);
        }

        /* 스크롤 버튼 위치 - 실제 보이는 영역 기준 */
        .scroll-indicator {
          /* 실제 뷰포트 하단에서 2rem 위 */
          bottom: 2rem;
          /* 동적 높이 기준으로 위치 조정 */
          bottom: max(2rem, calc(env(safe-area-inset-bottom, 0px) + 1rem));
        }

        /* 모든 모바일 기기 통일 대응 */
        @media (max-width: 768px) {
          .scroll-indicator {
            /* 모바일에서는 Safe Area + 1.5rem */
            bottom: calc(env(safe-area-inset-bottom, 0px) + 1.5rem);
            /* 최소 1.5rem은 확보 */
            bottom: max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem));
          }
        }

        /* 태블릿 대응 */
        @media (min-width: 768px) and (max-width: 1024px) {
          .scroll-indicator {
            bottom: calc(env(safe-area-inset-bottom, 0px) + 2rem);
            bottom: max(2rem, calc(env(safe-area-inset-bottom, 0px) + 2rem));
          }
        }
      `}</style>
    </div>
  );
}
