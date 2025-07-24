'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden bg-primary">
        <div className="text-center relative z-10">
          <div className="hero-content">
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
            <div className="logo-container">
              <Image
                src="/images/neos-logo-text-white-nopd.png"
                alt="neos logo"
                width={600}
                height={180}
                className="mx-auto px-12 hero-logo"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Vision</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            주식회사 네오스는 내일의 비전을 오늘의 현실로 바꿔나갑니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Professional</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              주식회사 네오스는 풍부한 노하우를 보유한 전문가 그룹입니다.
              각계 전문 인력의 영입으로 업계 최고의 맨파워 조직을 구성했습니다.
              또한, 독립적인 파트 구성을 통하여 전문성을 강화한
              프로페셔널한 비즈니스를 지향합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Humanism</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              주식회사 네오스의 핵심 분야는 바로 사람입니다.
              비즈니스에만 치중한 기업이 아닌 사람과 사람 사이의 따뜻한 정이 흐르는
              휴머니즘을 바탕으로 모두 함께 상생 할 수 있는 기업 문화를 추구합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Global</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              주식회사 네오스의 경쟁력은 글로벌 네트워크입니다.
              다년간의 글로벌 기업들과의 업무 제휴와 미디어 제작을 통하여 이미 검증된 바 있습니다.
              압도적인 글로벌 네트워크를 기반으로 한 치밀한 전략과 협업을 통하여 해외 진출을 적극적으로 지원합니다.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-32 bg-gray-50">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Mission</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            주식회사 네오스는 클라이언트의 성공 스토리를 위하여 항상 매진합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Trend</h3>
            <p className="text-text-secondary leading-relaxed">
              흐름을 앞선 새로움
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Efficiency</h3>
            <p className="text-text-secondary leading-relaxed">
              효율적인 제안
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Integration</h3>
            <p className="text-text-secondary leading-relaxed">
              통합적인 솔루션
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Progressive</h3>
            <p className="text-text-secondary leading-relaxed">
              크리에이티브의 혁신적 진보
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">High Quality</h3>
            <p className="text-text-secondary leading-relaxed">
              크리에이티브의 질적 향상
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Completeness</h3>
            <p className="text-text-secondary leading-relaxed">
              그리고 완성도
            </p>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Our Journey</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            우리의 성장과 발전의 주요 이정표
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">1999</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">광고·영상제작사 NEOS(네오스) 설립</h3>
                <p className="text-lg text-text-secondary">광고 및 영상 제작 전문 회사로 시작</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2003</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">법인 전환 주식회사 네오스 설립</h3>
                <p className="text-lg text-text-secondary">기업의 체계적 성장을 위한 법인 전환</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2004</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">광고 캐스팅 사업팀 신설</h3>
                <p className="text-lg text-text-secondary">광고 캐스팅 전문 부문 확장</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2006</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">Nintendo KOREA LAUNCHING</h3>
                <p className="text-lg text-text-secondary">광고 제작 캐스팅 총괄 담당</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2009</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">UNIQLO KOREA LAUNCHING & 연예 매니지먼트팀 신설</h3>
                <p className="text-lg text-text-secondary">UNIQLO 한국 런칭 광고 제작 캐스팅 총괄 및 연예 매니지먼트 사업 확장</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2012</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">(전)소속배우 정유미 SBS 연기대상 여자 최우수연기상 수상</h3>
                <p className="text-lg text-text-secondary">소속 배우의 성과로 매니지먼트 역량 입증</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2013</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">자회사 주식회사 네오스 엔터테인먼트 설립</h3>
                <p className="text-lg text-text-secondary">엔터테인먼트 전문 자회사 설립으로 사업 영역 확장</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2015</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">캐스팅 사업팀 중국 진출</h3>
                <p className="text-lg text-text-secondary">글로벌 시장 진출의 첫 걸음</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2016</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">colopl KOREA LAUNCHING</h3>
                <p className="text-lg text-text-secondary">광고 제작 총괄 담당</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2018</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">(전)소속배우 장승조 MBC연기대상 최우수연기상 수상</h3>
                <p className="text-lg text-text-secondary">소속 배우의 지속적인 성과</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2019</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">판권(IP) 비지니스팀 신설</h3>
                <p className="text-lg text-text-secondary">지적재산권 사업으로 콘텐츠 가치 창출 확장</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2020</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">레이블 네오스토리 설립</h3>
                <p className="text-lg text-text-secondary">웹툰과 드라마 제작에 특화된 콘텐츠 레이블 출범</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2021</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">주식회사 네오스토리 설립 & 웹툰 사업 확장</h3>
                <p className="text-lg text-text-secondary">히가시무라 아키코 웹툰 「나를 기억하나요」 카카오웹툰/카카오페이지/픽코마 한일동시연재</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2022</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">주식회사 네오스토리 - 수오•아비디 이노우에 웹툰 「26번째 살인」 한일동시연재</h3>
                <p className="text-lg text-text-secondary">카카오웹툰과 픽코마를 통한 글로벌 웹툰 사업 확장</p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2023</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">지속적인 글로벌 확장</h3>
                <p className="text-lg text-text-secondary">엔터테인먼트와 콘텐츠 제작 분야의 지속적 성장</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Works Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Featured Works</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            엔터테인먼트와 콘텐츠 제작 분야의 최신 성과를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Global Entertainment</h3>
              <p className="text-gray-200">국제 콘텐츠 제작 및 유통</p>
            </div>
          </div>

          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Talent Development</h3>
              <p className="text-gray-200">차세대 스타 육성</p>
            </div>
          </div>

          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Creative Production</h3>
              <p className="text-gray-200">혁신적인 콘텐츠 제작과 스토리텔링</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button href="/portfolio" variant="outline" size="lg" className="min-w-[200px]">
            모든 프로젝트 보기
          </Button>
        </div>
      </Section>

      {/* Clients Section */}
      <section className="py-32 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Our Clients</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              글로벌 리딩 브랜드들과 함께 성공 스토리를 만들어갑니다
            </p>
          </div>
        </Container>

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
                <div key={index} className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center">
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
                <div key={index} className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center">
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
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Our Partners</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            업계 리더들과 협력하여 탁월한 가치를 창출합니다
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
          {Array.from({ length: 27 }, (_, i) => {
            const partnerLogos = [
              { file: '1_jtbc.png', name: 'JTBC' },
              { file: '2_tvn.png', name: 'tvN' },
              { file: '3_sbs.png', name: 'SBS' },
              { file: '4_mbc.png', name: 'MBC' },
              { file: '5_kbs.png', name: 'KBS' },
              { file: '6_sm.svg', name: 'SM Entertainment' },
              { file: '7_jyp.svg', name: 'JYP Entertainment' },
              { file: '8_yg.png', name: 'YG Entertainment' },
              { file: '9_pledis.png', name: 'Pledis Entertainment' },
              { file: '10_cube.svg', name: 'Cube Entertainment' },
              { file: '11_esteem_fashion.png', name: 'Esteem Fashion' },
              { file: '12_esteem_ent.png', name: 'Esteem Entertainment' },
              { file: '13_blossom.png', name: 'Blossom Entertainment' },
              { file: '14_keyeast.png', name: 'KeyEast' },
              { file: '15_adk.png', name: 'ADK' },
              { file: '16_dentsu.svg', name: 'Dentsu' },
              { file: '17_hakuhodo.png', name: 'Hakuhodo' },
              { file: '18_mccann.png', name: 'McCann' },
              { file: '19_innocean.svg', name: 'Innocean' },
              { file: '20_tfc.webp', name: 'TFC' },
              { file: '21_nhk.svg', name: 'NHK' },
              { file: '22_aoipro.svg', name: 'AOI Pro' },
              { file: '23_monster.svg', name: 'Monster' },
              { file: '24_tyo.png', name: 'TYO' },
              { file: '25_robot.webp', name: 'Robot' },
              { file: '26_sonymusic.svg', name: 'Sony Music' },
              { file: '27_universal.svg', name: 'Universal' }
            ];

            const partner = partnerLogos[i];
            return (
              <div
                key={i}
                className="group relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
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
      </Section>

      <Footer />

      <style jsx>{`
        .hero-content {
          position: relative;
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typing-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: fadeInTyping 0.5s ease-out 0.8s forwards, fadeOutTyping 0.8s ease-in-out 4.2s forwards;
        }

        .typing-line {
          display: flex;
          justify-content: center;
          margin: 0.5rem 0;
        }

        .line1 {
          margin-bottom: 0.8rem;
        }

        .typing-text {
          color: transparent;
          font-size: 2.2rem;
          font-weight: 200;
          letter-spacing: 0.12em;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
        }

        .text1 {
          animation: showText1 0.1s ease-out 1.2s forwards, typing1 2s steps(18, end) 1.2s forwards;
        }

        .text2 {
          animation: showText2 0.1s ease-out 3.5s forwards, typing2 1.5s steps(12, end) 3.5s forwards;
        }

        .logo-container {
          opacity: 0;
          transform: scale(0.95);
          animation: fadeInLogo 1s ease-out 5.5s forwards;
        }

        .hero-logo {
          display: block;
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
            opacity: 0; 
            transform: scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .typing-text {
            font-size: 1.6rem;
            letter-spacing: 0.08em;
          }
          
          .line1 {
            margin-bottom: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .typing-text {
            font-size: 1.2rem;
            letter-spacing: 0.06em;
          }
          
          .typing-line {
            margin: 0.3rem 0;
          }
          
          .line1 {
            margin-bottom: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
}
