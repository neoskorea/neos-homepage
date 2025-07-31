'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'nav.about', href: '/about' },
  // { name: 'Services', href: '/services' },
  { name: 'nav.portfolio', href: '/portfolio' },
  // { name: 'Clients', href: '/clients' },
  // { name: 'News', href: '/news' },
  { name: 'nav.contact', href: '/contact' },
];

interface NavbarProps {
  isScrolled?: boolean;
}

export default function Navbar({ isScrolled: propIsScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { t } = useLanguage();

  // 홈페이지가 아닌 경우 항상 스크롤된 상태, 홈페이지인 경우 자체 상태 사용
  const isScrolled = isHomePage ? internalIsScrolled : true;

  // 홈페이지에서만 IntersectionObserver를 사용한 스크롤 상태 관리
  useEffect(() => {
    if (!isHomePage) return;

    // 메타 태그 생성 또는 업데이트 함수
    const createOrUpdateMetaTag = (name: string, content: string, id: string) => {
      let metaTag = document.getElementById(id) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('id', id);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    };

    // Theme color 변경 함수
    const updateThemeColor = (color: string, statusBarStyle: string = 'default') => {
      createOrUpdateMetaTag('theme-color', color, 'theme-color');
      createOrUpdateMetaTag('apple-mobile-web-app-status-bar-style', statusBarStyle, 'apple-status-bar');
    };

    // 네비게이션 바와 노치 색상을 완전히 동시에 변경
    const updateNavbarAndNotch = (isScrolled: boolean) => {
      if (isScrolled) {
        updateThemeColor('#ffffff', 'default');
        setInternalIsScrolled(true);
      } else {
        updateThemeColor('#93d1d3', 'light-content');
        setInternalIsScrolled(false);
      }
    };

    // IntersectionObserver를 사용한 Hero 섹션 감시
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isScrolled = !entry.isIntersecting;
          updateNavbarAndNotch(isScrolled);
        });
      },
      {
        rootMargin: '-80px 0px 0px 0px',
        threshold: [0, 1]
      }
    );

    // Hero 섹션 찾아서 관찰 시작
    const heroSection = document.getElementById('hero-section');
    if (heroSection && observerRef.current) {
      observerRef.current.observe(heroSection);
    }

    // 초기 상태 설정
    updateThemeColor('#93d1d3', 'light-content');
    setInternalIsScrolled(false);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isHomePage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';

      // Prevent touch scrolling on mobile
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };

      document.addEventListener('touchmove', preventTouchMove, { passive: false });

      return () => {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.documentElement.style.overflow = '';
        document.removeEventListener('touchmove', preventTouchMove);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-[70] transition-all duration-200 ${isScrolled || mobileMenuOpen
          ? 'bg-white backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/images/neos-logo-text-crob.png"}
                  alt="neos-logo"
                  width={2362}
                  height={429}
                  className={`-mb-2 h-10 w-auto transition-all duration-200 ${!isScrolled && isHomePage ? 'opacity-0' : 'opacity-100'}`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isScrolled
                    ? 'text-text-secondary hover:text-primary'
                    : 'text-white/90 hover:text-white'
                    }`}
                >
                  {t(item.name)}
                </Link>
              ))}

              {/* Language Switcher */}
              <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} mobileMenuOpen={mobileMenuOpen} />
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Mobile Language Switcher */}
              <div className="relative z-[70]">
                <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} mobileMenuOpen={mobileMenuOpen} />
              </div>

              <button
                type="button"
                className={`relative z-[70] transition-colors duration-200 ${isScrolled || mobileMenuOpen
                  ? 'text-text-secondary'
                  : 'text-white/90'
                  }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${mobileMenuOpen ? 'opacity-0' : ''
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu - rendered outside of navbar */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        t={t}
      />
    </>
  );
}

// Mobile Menu Component (rendered outside of navbar)
function MobileMenu({
  isOpen,
  onClose,
  navigation,
  t
}: {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  t: (key: string) => string;
}) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[60] md:hidden transition-all duration-500 ${isOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible'
        }`}
    >
      {/* Background overlay - full screen */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu content */}
      <div className={`absolute inset-0 bg-white flex flex-col justify-center items-center transition-all duration-500 ${isOpen
        ? 'translate-x-0'
        : 'translate-x-full'
        }`}
      >
        {/* Content wrapper with visual centering offset */}
        <div className="transform translate-y-2">

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-3xl md:text-4xl font-heading text-text-secondary hover:text-primary transition-all duration-300 transform ${isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={onClose}
              >
                {t(item.name)}
              </Link>
            ))}

            {/* Divider */}
            <div className={`w-20 h-px bg-gray-300 transform transition-all duration-300 ${isOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${navigation.length * 100 + 50}ms` : '0ms'
              }}
            />

            {/* Subsidiary Companies */}
            <div className="flex flex-col items-center space-y-6">
              {/* neos Entertainment */}
              <a
                href="http://www.neosentertainment.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 transform hover:scale-105 ${isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${navigation.length * 100 + 150}ms` : '0ms'
                }}
                onClick={onClose}
              >
                <Image
                  src="/images/neos-ent-mint-text-logo.png"
                  alt="neos Entertainment"
                  width={150}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              {/* neostory */}
              <a
                href="https://neostory.kr"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 transform hover:scale-105 ${isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${navigation.length * 100 + 250}ms` : '0ms'
                }}
                onClick={onClose}
              >
                <Image
                  src="/images/neostory-mint-text-logo.png"
                  alt="neostory"
                  width={150}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </nav>
        </div> {/* Close content wrapper */}
      </div>
    </div>
  );
} 