import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-44 pb-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
            About neos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            한국과 일본을 잇는 광고·영상 시장의 선두주자로서 새로운 미래를 만들어갑니다
          </p>
        </div>
      </Section>

      {/* CEO Message Section */}
      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">CEO Message</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* CEO Message Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  주식회사 네오스는 빠르게 변화하는 광고 영상 시장 속 가장 가까운 나라인 일본의 광고 시장을 국내로 눈을 돌리게 한 첫 선두주자로서, 한국과 일본을 잇는 교두보로서의 역할을 성공적으로 이끈 바 있습니다.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  이에 그치지 않고, 지속적인 모니터링과 커뮤니케이션을 통해 한국과 일본, 상호간의 긴밀한 네트워크 및 폭넓은 비즈니스 포지셔닝으로 광고 영상 제작 시장에서 영향력 있는 위치에 이르렀습니다.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  주식회사 네오스는 2010년 매니지먼트 사업부를 신설, 2013년에 네오스 엔터테인먼트를 자회사로 발족하였습니다. 영향력 있는 배우 군단이라는 양질의 인프라를 구축하고 새로운 비즈니스를 활용·접목 시키는 형태로 광고주에게 최상의 서비스를 제공하고 있습니다.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  또한 역량 있는 배우를 육성할 수 있는 환경을 조성하여 업계 내에서의 인지도를 높여 나가고 있습니다.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  주식회사 네오스는 2018년 "한류"와 "콘텐츠"라는 시대적 흐름에 발맞추어 일본 및 아시아 굴지의 크리에이터들과의 파트너십을 통한 새로운 콘텐츠 비즈니스를 사업부인 neostory를 신설. 2021년에는 주식회사 neostory를 설립하였습니다.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
                  웹툰이라고 불리는 인터넷 만화나 소설 등의 콘텐츠를 제작해 이것을 영상화 하는 것으로 다양한 사람들과 협업하여 세계에 펼쳐 보이겠습니다.
                </p>

                <div className="border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg">
                  <p className="text-primary font-medium text-lg md:text-xl leading-relaxed italic">
                    "네오스 그룹은 앞으로도 지금껏 경험하지 못한 새로운 시장의 선두자적 역할을 다할 것입니다."
                  </p>
                </div>
              </div>

              {/* CEO Info */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-medium text-primary mb-1">남현지</p>
                    <p className="text-gray-600">대표이사 / CEO</p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    <Image
                      src="/images/ceo-signature.png"
                      alt="CEO Signature"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Portrait Side */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-2xl -z-10"></div>

                {/* Main image container */}
                <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">CEO Portrait</p>
                    </div>
                  </div>
                </div>

                {/* Floating quote */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-start space-x-3">
                    <div className="text-primary">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">
                        새로운 시장의 선두자적 역할
                      </p>
                      <p className="text-xs text-gray-500 mt-2">- 남현지 CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Highlights */}
              <div className="mt-12 space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-medium text-primary mb-4">Key Milestones</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">2010</p>
                      <p className="text-sm text-gray-600">매니지먼트 사업부 신설</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">2013</p>
                      <p className="text-sm text-gray-600">네오스 엔터테인먼트 자회사 발족</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">2018</p>
                      <p className="text-sm text-gray-600">neostory 사업부 신설</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">2021</p>
                      <p className="text-sm text-gray-600">주식회사 neostory 설립</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Business Areas */}
      <Section className="py-16 md:py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Business Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            다양한 사업 영역을 통해 창의적이고 혁신적인 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">광고·영상 제작</h3>
            <p className="text-gray-600 leading-relaxed">
              한일 양국을 아우르는 광고 영상 제작의 선두주자로서 글로벌 브랜드들과 협업
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">매니지먼트</h3>
            <p className="text-gray-600 leading-relaxed">
              영향력 있는 배우들의 체계적 관리를 통한 최상의 엔터테인먼트 서비스 제공
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">콘텐츠 제작</h3>
            <p className="text-gray-600 leading-relaxed">
              웹툰과 소설 등 다양한 콘텐츠를 글로벌 시장에 선보이는 neostory 사업
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 