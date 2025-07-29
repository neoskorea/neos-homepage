'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const navigation = {
  main: [
    { nameKey: 'nav.about', href: '/about' },
    { nameKey: 'nav.portfolio', href: '/portfolio' },
    { nameKey: 'nav.contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/neos.inc_official/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/images/neos-logo-text-crob.png"
              alt="neos"
              width={2362}
              height={429}
              className="h-12 w-auto"
            />
            <p className="text-text-secondary text-sm whitespace-pre-line">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase">{t('footer.navigation')}</h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.nameKey}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {t(item.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase">{t('footer.contact')}</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="mailto:contact@neoskorea.com" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    contact@neoskorea.com
                  </a>
                </li>
                <li>
                  <p className="text-sm text-text-secondary whitespace-pre-line">
                    {t('footer.address')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/10 pt-8">
          <p className="text-sm text-text-secondary text-center">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 