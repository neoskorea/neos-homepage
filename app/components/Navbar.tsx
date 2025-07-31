'use client';

import { useState, useEffect } from 'react';
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section height (100vh)

      // If not on homepage, always show scrolled state
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }

      // On homepage, check if scrolled past hero section
      setIsScrolled(scrollY > heroHeight * 0.8); // Start transition at 80% of hero height
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm'
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
                  className={`-mb-2 h-10 w-auto transition-all duration-500 ${!isScrolled && isHomePage ? 'opacity-0' : 'opacity-100'}`}
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
                  className={`text-sm font-medium transition-colors duration-300 ${isScrolled
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
                className={`relative z-[70] transition-colors duration-300 ${isScrolled || mobileMenuOpen
                  ? 'text-text-secondary hover:text-primary'
                  : 'text-white/90 hover:text-white'
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
      className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible'
        }`}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu content */}
      <div className={`absolute inset-0 bg-white flex flex-col justify-center items-center transform transition-all duration-500 ${isOpen
        ? 'translate-x-0'
        : 'translate-x-full'
        }`}>
        {/* Logo */}
        <div className="absolute top-8 left-4">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/neos-logo-text-crob.png"
              alt="neos-logo"
              width={2362}
              height={429}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Close Button */}
        <div className="absolute top-8 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-primary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-2xl md:text-3xl font-light text-text-secondary hover:text-primary transition-all duration-300 transform ${isOpen
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
        </nav>

        {/* Language Switcher and Close text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">

          {/* Close text */}
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Close</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 