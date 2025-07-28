'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'About', href: '/about' },
  // { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Clients', href: '/clients' },
  // { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
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
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 ${isScrolled
                ? 'text-text-secondary hover:text-primary'
                : 'text-white/90 hover:text-white'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-all duration-500 ${isScrolled
            ? 'bg-white border-primary/10'
            : 'bg-black/20 backdrop-blur-sm border-white/20'
            }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${isScrolled
                  ? 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 