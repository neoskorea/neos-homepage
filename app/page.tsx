'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer 설정
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

    // 관찰할 요소들 선택
    const animateElements = document.querySelectorAll('.fade-in-on-scroll');
    animateElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden bg-primary">
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

            {/* 실제 로고 (나중에 나타남) */}
            <div className="logo-container" style={{ visibility: 'hidden', opacity: 0 }}>
              {/* 글로우 효과 배경 */}
              <div className="logo-glow"></div>
              <Image
                src="/images/neos-logo-text-white-nopd.png"
                alt="neos logo"
                width={600}
                height={180}
                className="mx-auto px-4 sm:px-8 md:px-12 hero-logo max-w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Vision
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              주식회사 네오스는 내일의 비전을 오늘의 현실로 바꿔나갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 md:mb-8 tracking-tight">Professional</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium">
                  주식회사 네오스는<br />
                  풍부한 노하우를 보유한 전문가 그룹입니다.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  각계 전문 인력의 영입으로<br />
                  업계 최고의 맨파워 조직을 구성했습니다.<br />
                  또한, 독립적인 파트 구성을 통하여<br />
                  전문성을 강화한<br />
                  프로페셔널한 비즈니스를 지향합니다.
                </p>
              </div>
            </div>

            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 md:mb-8 tracking-tight">Humanism</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium">
                  주식회사 네오스의<br />
                  핵심 분야는 바로 사람입니다.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  비즈니스에만 치중하는 기업이 아닌<br />
                  사람과 사람 사이의 따뜻한 정이 흐르는<br />
                  휴머니즘을  바탕으로<br />
                  모두 함께 상생 할 수 있는<br />
                  기업 문화를 추구합니다.
                </p>
              </div>
            </div>

            <div className="text-center md:text-left fade-in-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <div className="flex items-start mb-8 md:mb-10 justify-center md:justify-start">
                <div className="w-3 h-8 bg-primary mr-4 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 md:mb-8 tracking-tight">Global</h3>
                </div>
              </div>
              <div className="md:pl-7">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-medium">
                  주식회사 네오스의<br />
                  경쟁력은 글로벌 네트워크입니다.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  다년간의 글로벌 기업들과의 업무 제휴와<br />
                  미디어 제작을 통하여 이미 검증된 바<br />
                  있습니다. 압도적인 글로벌 네트워크를<br />
                  기반으로 한 치밀한 전략과 협업을 통하여<br />
                  해외 진출을 적극적으로 지원합니다.
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
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Mission
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              주식회사 네오스는 클라이언트의 성공 스토리를 위하여 항상 매진합니다
            </p>
          </div>

          {/* Mission Flow Container */}
          <div className="relative max-w-7xl mx-auto">

            {/* Mission Items Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 z-10">
              {[
                {
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  title: "Trend",
                  description: "흐름을 앞선 새로움",
                  delay: "0ms"
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Efficiency",
                  description: "효율적인 제안",
                  delay: "200ms"
                },
                {
                  icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                  title: "Integration",
                  description: "통합적인 솔루션",
                  delay: "400ms"
                },
                {
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  title: "Progressive",
                  description: "크리에이티브의 혁신적 진보",
                  delay: "600ms"
                },
                {
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  title: "High Quality",
                  description: "크리에이티브의 질적 향상",
                  delay: "800ms"
                },
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Completeness",
                  description: "그리고 완성도",
                  delay: "1000ms"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="fade-in-on-scroll group relative"
                  style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="text-center relative">
                    {/* Icon container with enhanced styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-white border-2 border-primary/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="relative w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-text-primary mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Our Journey
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              우리의 성장과 발전의 주요 이정표
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">1999</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">광고·영상제작사 NEOS(네오스) 설립</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">광고 및 영상 제작 전문 회사로 시작</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2003</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">법인 전환 주식회사 네오스 설립</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">기업의 체계적 성장을 위한 법인 전환</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2004</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">광고 캐스팅 사업팀 신설</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">광고 캐스팅 전문 부문 확장</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2006</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">Nintendo KOREA LAUNCHING</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">광고 제작 캐스팅 총괄 담당</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2009</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">UNIQLO KOREA LAUNCHING & 연예 매니지먼트팀 신설</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">UNIQLO 한국 런칭 광고 제작 캐스팅 총괄 및 연예 매니지먼트 사업 확장</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2012</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">(전)소속배우 정유미 SBS 연기대상 여자 최우수연기상 수상</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">소속 배우의 성과로 매니지먼트 역량 입증</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.7s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2013</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">자회사 주식회사 네오스 엔터테인먼트 설립</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">엔터테인먼트 전문 자회사 설립으로 사업 영역 확장</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.8s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2015</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">캐스팅 사업팀 중국 진출</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">글로벌 시장 진출의 첫 걸음</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '0.9s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2016</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">colopl KOREA LAUNCHING</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">광고 제작 총괄 담당</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.0s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2018</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">(전)소속배우 장승조 MBC연기대상 최우수연기상 수상 & 판권(IP) 비즈니스팀 신설</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">소속 배우의 지속적인 성과와 지적재산권 사업으로 콘텐츠 가치 창출 확장</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.1s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2019</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">레이블 네오스토리 설립</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">웹툰과 드라마 제작에 특화된 콘텐츠 레이블 출범</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.2s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2020</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">레이블 네오스토리 - 히가시무라 아키코 웹툰 「나를 기억하나요」</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">카카오페이지/픽코마 한일동시연재</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.3s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2021</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">주식회사 네오스토리 설립</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">주식회사 네오스토리 - 히가시무라 아키코 웹툰 「나를 기억하나요」 카카오웹툰 연재</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.4s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2022</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">주식회사 네오스토리 - 수오•아비디 이노우에 웹툰 「26번째 살인」 한일동시연재</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">카카오웹툰과 픽코마를 통한 글로벌 웹툰 사업 확장</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start fade-in-on-scroll" style={{ transitionDelay: '1.5s' }}>
              <div className="w-full sm:w-32 md:w-48 flex-shrink-0 text-left sm:text-right">
                <span className="text-2xl md:text-3xl text-primary font-light tracking-tight">2023</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-3 md:mb-4 tracking-tight">지속적인 글로벌 확장</h3>
                <p className="text-base md:text-lg text-gray-600 font-light">엔터테인먼트와 콘텐츠 제작 분야의 지속적 성장</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Works Section */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50 fade-in-on-scroll overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Featured Works
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              엔터테인먼트와 콘텐츠 제작 분야의 최신 성과를 확인하세요
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
                    Featured Campaign
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 sm:mb-3 md:mb-4">MISAMO x Google</h3>
                  <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                    TWICE 유닛 MISAMO와 Google의 글로벌 캠페인 제작 및 크리에이티브 디렉션
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">Global Campaign</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">K-Pop</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">Tech Partnership</span>
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
                alt="SBC Broadcasting Project"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 md:p-8 w-full">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-primary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 sm:mb-3 md:mb-4">
                    Broadcasting
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 sm:mb-3">SBC Media Production</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    방송 콘텐츠 제작 및 미디어 솔루션 제공
                  </p>
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl fade-in-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <Image
                src="/images/works/delete.jpg"
                alt="DELETE Webtoon Project"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 sm:p-6 md:p-8 w-full">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-primary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 sm:mb-3 md:mb-4">
                    Webtoon Planning
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 sm:mb-3">DELETE 웹툰</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    네오스토리 단독 기획, 글: 우주 / 그림: 이시카와 세이코<br className="hidden sm:block" />
                    <span className="block sm:inline">카카오웹툰 · 픽코마 한일미 동시연재</span>
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
              모든 프로젝트 보기
            </Button>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <section className="py-20 md:py-32 lg:py-40 bg-gray-50 fade-in-on-scroll overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Our Clients
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              글로벌 리딩 브랜드들과 함께 성공 스토리를 만들어갑니다
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
      <Section className="py-20 md:py-32 lg:py-40 fade-in-on-scroll overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Our Partners
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              업계 리더들과 협력하여 탁월한 가치를 창출합니다
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
          opacity: 0;
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
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.1);
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
      `}</style>
    </div>
  );
}
