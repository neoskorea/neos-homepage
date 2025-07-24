import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="text-center max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-primary mb-8 md:mb-12 tracking-tight">
            About neos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
            한국과 일본을 잇는 광고·영상 시장의 선두주자로서<br className="hidden sm:block" />
            새로운 미래를 만들어갑니다
          </p>
        </div>
      </Section>

      {/* CEO Message */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              CEO Message
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="relative">
            {/* CEO Message Content - Left aligned */}
            <div className="text-left space-y-6 md:space-y-8 mb-12 md:mb-20">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                주식회사 네오스는 빠르게 변화하는 광고 영상 시장 속 가장 가까운 나라인 일본의 광고 시장을 국내로 눈을 돌리게 한 첫 선두주자로서, 한국과 일본을 잇는 교두보로서의 역할을 성공적으로 이끈 바 있습니다. 이에 그치지 않고, 지속적인 모니터링과 커뮤니케이션을 통해 한국과 일본, 상호간의 긴밀한 네트워크 및 폭넓은 비즈니스 포지셔닝으로 광고 영상 제작 시장에서 영향력 있는 위치에 이르렀습니다.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                주식회사 네오스는 2010년 매니지먼트 사업부를 신설, 2013년에 네오스 엔터테인먼트를 자회사로 발족하였습니다. 영향력 있는 배우 군단이라는 양질의 인프라를 구축하고 새로운 비즈니스를 활용 · 접목 시키는 형태로 광고주에게 최상의 서비스를 제공하고 있습니다. 또한 역량 있는 배우를 육성할 수 있는 환경을 조성하여 업계 내에서의 인지도를 높여 나가고 있습니다.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                주식회사 네오스는 2018년 "한류"와 "콘텐츠"라는 시대적 흐름에 발맞추어 일본 및 아시아 굴지의 크리에이터들과의 파트너십을 통한 새로운 콘텐츠 비즈니스를 사업부인 neostory를 신설. 2021년에는 주식회사 neostory를 설립하였습니다.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                웹툰이라고 불리는 인터넷 만화나 소설 등의 콘텐츠를 제작해 이것을 영상화 하는 것으로 다양한 사람들과 협업하여 세계에 펼쳐 보이겠습니다.
              </p>

              <p className="text-base md:text-lg font-semibold text-primary leading-relaxed">
                네오스 그룹은 앞으로도 지금껏 경험하지 못한 새로운 시장의 선두자적 역할을 다할 것입니다.
              </p>
            </div>

            {/* CEO Signature - Bottom Right (responsive) */}
            <div className="flex justify-center sm:justify-end">
              <div className="flex flex-col items-center sm:items-end">
                <div className="mb-4 md:mb-6">
                  <Image
                    src="/images/ceo-signature-removebg.png"
                    alt="CEO Signature"
                    width={180}
                    height={108}
                    className="object-contain w-[150px] md:w-[180px] lg:w-[200px]"
                  />
                </div>
                <div className="text-center sm:text-right">
                  {/* Mobile: Vertical layout */}
                  <div className="block sm:hidden">
                    <p className="text-lg md:text-xl font-medium text-primary mb-2">남현지</p>
                    <p className="text-sm md:text-base text-gray-600">대표이사 / CEO</p>
                  </div>
                  {/* Desktop: Horizontal layout */}
                  <div className="hidden sm:block">
                    <p className="text-base md:text-lg text-gray-600">
                      대표이사 / CEO &nbsp;&nbsp;&nbsp; <span className="font-medium text-primary text-lg md:text-xl">남현지</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Group Companies */}
      <Section className="py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
              Group Companies
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-16 md:space-y-20 lg:space-y-32">
            {/* NEOS Entertainment */}
            <div className="text-center lg:text-left">
              {/* Mobile: Description first */}
              <div className="block lg:hidden mb-6">
                <div className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider mb-3">
                  Founded 2013
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-sm mx-auto px-2">
                  네오스의 자회사로서 영향력 있는 배우 군단을 통한 양질의 인프라를 구축하고, 체계적인 배우 육성 및 매니지먼트 서비스를 제공하는 엔터테인먼트 전문 회사입니다.
                </p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex lg:items-start lg:gap-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a
                    href="http://www.neosentertainment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <Image
                      src="/neosent-full-width-logo.png"
                      alt="neos Entertainment Logo"
                      width={400}
                      height={120}
                      className="object-contain max-w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
                      priority
                    />
                  </a>
                </div>

                {/* Company Info */}
                <div className="flex-1 pt-4">
                  <a
                    href="http://www.neosentertainment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-2xl font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">neos Entertainment</h3>
                      <svg className="w-6 h-6 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                      Founded 2013
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      네오스의 자회사로서 영향력 있는 배우 군단을 통한 양질의 인프라를 구축하고, 체계적인 배우 육성 및 매니지먼트 서비스를 제공하는 엔터테인먼트 전문 회사입니다.
                    </p>
                  </a>
                </div>
              </div>

              {/* Mobile: Logo */}
              <div className="block lg:hidden mb-6">
                <a
                  href="http://www.neosentertainment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <Image
                    src="/neosent-full-width-logo.png"
                    alt="neos Entertainment Logo"
                    width={320}
                    height={96}
                    className="mx-auto object-contain max-w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* NEOS Story */}
            <div className="text-center lg:text-left">
              {/* Mobile: Description first */}
              <div className="block lg:hidden mb-6">
                <div className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider mb-3">
                  Founded 2021
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-sm mx-auto px-2">
                  웹툰, 소설 등 다양한 콘텐츠를 기획 및 제작하며, 한일 동시 연재를 통한 글로벌 콘텐츠 사업을 전개하는 콘텐츠 제작 전문 회사입니다.
                </p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex lg:items-start lg:gap-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a
                    href="https://neostory.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <Image
                      src="/neostory-full-width-logo.png"
                      alt="neostory Logo"
                      width={400}
                      height={120}
                      className="object-contain max-w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
                      priority
                    />
                  </a>
                </div>

                {/* Company Info */}
                <div className="flex-1 pt-4">
                  <a
                    href="https://neostory.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-2xl font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">neostory</h3>
                      <svg className="w-6 h-6 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                      Founded 2021
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      웹툰, 소설 등 다양한 콘텐츠를 기획 및 제작하며, 한일 동시 연재를 통한 글로벌 콘텐츠 사업을 전개하는 콘텐츠 제작 전문 회사입니다.
                    </p>
                  </a>
                </div>
              </div>

              {/* Mobile: Logo */}
              <div className="block lg:hidden mb-6">
                <a
                  href="https://neostory.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <Image
                    src="/neostory-full-width-logo.png"
                    alt="neostory Logo"
                    width={320}
                    height={96}
                    className="mx-auto object-contain max-w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
            Our Expertise
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12 md:mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            <div className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary">Creative Production</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                광고·영상 제작 분야의<br />
                선도적 역할
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary">Talent Management</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                전문적이고 체계적인<br />
                아티스트 매니지먼트
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary">Content Creation</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                글로벌 시장을 향한<br />
                혁신적 콘텐츠 제작
              </p>
            </div>
          </div>

          {/* Enhanced Final Statement */}
          <div className="mt-16 md:mt-24 relative">
            {/* Clean background with stronger gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/25 to-primary/15 rounded-2xl md:rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl md:rounded-3xl"></div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-primary/20 ring-inset"></div>

            <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon with enhanced styling */}
                {/* <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full mb-6 md:mb-8 shadow-lg border border-primary/20">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div> */}

                {/* Enhanced text with better contrast */}
                <div className="relative">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-relaxed">
                    세 개의 전문 영역이 유기적으로 연결되어<br className="hidden sm:block" />
                    <span className="relative inline-block text-primary">
                      통합적이고 혁신적인 엔터테인먼트 솔루션을 제공합니다
                    </span>
                  </p>

                  {/* Strong underline effect */}
                  {/* <div className="flex justify-center mt-6">
                    <div className="w-32 md:w-40 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full shadow-md"></div>
                  </div> */}
                </div>

                {/* Simplified connection indicator */}
                <div className="flex justify-center items-center mt-8 md:mt-10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/80 rounded-full"></div>
                    <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 