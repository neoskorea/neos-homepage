'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const getFilterOptions = (t: (key: string) => string) => ({
  year: ['2024', '2023', '2022', '2021', '2020', '2019'],
  brand: ['Nike', 'UNIQLO', 'Google', 'SBC', 'MediQttO', 'SENKA', 'KARA', 'Paradise City', 'Bibigo', 'ENHYPEN', 'GLIDiC', 'TXT', 'T1419', 'Edel House', 'LOONA', 'NU\'EST', 'IZ*ONE', 'Jeju Air', 'TVXQ'],
  region: [t('portfolio.regions.global'), t('portfolio.regions.asia'), t('portfolio.regions.northAmerica'), t('portfolio.regions.europe')],
  category: [t('portfolio.categories.advertising'), t('portfolio.categories.production'), t('portfolio.categories.creative'), t('portfolio.categories.ip')],
});

const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    title: t('portfolio.projects.misamoGoogle.title'),
    description: t('portfolio.projects.misamoGoogle.description'),
    image: '/images/works/misamo-google.jpeg',
    year: '2023',
    brand: 'Google',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 2,
    title: t('portfolio.projects.sbc.title'),
    description: t('portfolio.projects.sbc.description'),
    image: '/images/works/sbc.jpg',
    year: '2023',
    brand: 'SBC',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 3,
    title: t('portfolio.projects.momoMediQttO.title'),
    description: t('portfolio.projects.momoMediQttO.description'),
    image: '/images/works/neos-momo-MediQttO.jpg',
    year: '2023',
    brand: 'MediQttO',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 4,
    title: t('portfolio.projects.senka.title'),
    description: t('portfolio.projects.senka.description'),
    image: '/images/works/neos-senka.png',
    year: '2023',
    brand: 'SENKA',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.creative'),
  },
  {
    id: 5,
    title: t('portfolio.projects.kara.title'),
    description: t('portfolio.projects.kara.description'),
    image: '/images/works/neos-kara.png',
    year: '2023',
    brand: 'KARA',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 6,
    title: t('portfolio.projects.paradiseCityParkSeojun.title'),
    description: t('portfolio.projects.paradiseCityParkSeojun.description'),
    image: '/images/works/6-paradise-city-parkseojun.png',
    year: '2023',
    brand: 'Paradise City',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 7,
    title: t('portfolio.projects.paradiseCityCasino.title'),
    description: t('portfolio.projects.paradiseCityCasino.description'),
    image: '/images/works/7-paradise-city-casino-parkseojun.png',
    year: '2023',
    brand: 'Paradise City',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 8,
    title: t('portfolio.projects.bibigoParkSeojun.title'),
    description: t('portfolio.projects.bibigoParkSeojun.description'),
    image: '/images/works/8-bibigo-parkseojun.png',
    year: '2022',
    brand: 'Bibigo',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 9,
    title: t('portfolio.projects.nikeAbcmartEnhypen.title'),
    description: t('portfolio.projects.nikeAbcmartEnhypen.description'),
    image: '/images/works/9-nike-abcmart-enhypen.jpg',
    year: '2022',
    brand: 'Nike',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 10,
    title: t('portfolio.projects.glidicTxt.title'),
    description: t('portfolio.projects.glidicTxt.description'),
    image: '/images/works/10-GLIDiC-TOMORROWxTOGETHER.jpg',
    year: '2022',
    brand: 'GLIDiC',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 11,
    title: t('portfolio.projects.t1419Debut.title'),
    description: t('portfolio.projects.t1419Debut.description'),
    image: '/images/works/11-t1419-debut-pv-runup.png',
    year: '2021',
    brand: 'T1419',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.production'),
  },
  {
    id: 12,
    title: t('portfolio.projects.t1419EdelHouse.title'),
    description: t('portfolio.projects.t1419EdelHouse.description'),
    image: '/images/works/12-t1419-edel-house.png',
    year: '2021',
    brand: 'T1419',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.creative'),
  },
  {
    id: 13,
    title: t('portfolio.projects.orbitUniverse.title'),
    description: t('portfolio.projects.orbitUniverse.description'),
    image: '/images/works/13-orbit-japan-pv-universe.png',
    year: '2021',
    brand: 'LOONA',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.production'),
  },
  {
    id: 14,
    title: t('portfolio.projects.nuestDrive.title'),
    description: t('portfolio.projects.nuestDrive.description'),
    image: '/images/works/14-nu\'est-japn-pv-drive.png',
    year: '2020',
    brand: 'NU\'EST',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.production'),
  },
  {
    id: 15,
    title: t('portfolio.projects.izoneVampire.title'),
    description: t('portfolio.projects.izoneVampire.description'),
    image: '/images/works/15-izone-japan-pv-vampire.png',
    year: '2019',
    brand: 'IZ*ONE',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.production'),
  },
  {
    id: 16,
    title: t('portfolio.projects.jejuAirTvxq.title'),
    description: t('portfolio.projects.jejuAirTvxq.description'),
    image: '/images/works/16-jeju-air-tvxq.png',
    year: '2020',
    brand: 'Jeju Air',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 17,
    title: t('portfolio.projects.nikeAbcmart2019.title'),
    description: t('portfolio.projects.nikeAbcmart2019.description'),
    image: '/images/works/17-2019-abcmart-nike-ab6.png',
    year: '2019',
    brand: 'Nike',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.advertising'),
  },
];

export default function PortfolioPage() {
  const { t } = useLanguage();
  const filters = getFilterOptions(t);
  const projects = getProjects(t);

  const [activeFilters, setActiveFilters] = useState({
    year: '',
    brand: '',
    region: '',
    category: '',
  });

  const filteredProjects = projects.filter((project) => {
    return Object.entries(activeFilters).every(
      ([key, value]) => !value || project[key as keyof typeof project] === value
    );
  });

  const getFilterLabel = (category: string) => {
    switch (category) {
      case 'year': return t('portfolio.filters.year');
      case 'brand': return t('portfolio.filters.brand');
      case 'region': return t('portfolio.filters.region');
      case 'category': return t('portfolio.filters.category');
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-primary mb-8 md:mb-12 tracking-wide">
            {t('portfolio.title')}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </Section>

      {/* Project Filters */}
      {/* <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 md:px-2">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-lg md:text-xl font-heading font-normal text-primary mb-6 tracking-wide uppercase">
              {t('portfolio.filters.title')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(filters).map(([category, options]) => (
              <div key={category}>
                <label className="block text-sm font-medium text-gray-700 mb-3 capitalize">
                  {getFilterLabel(category)}
                </label>
                <select
                  value={activeFilters[category as keyof typeof activeFilters]}
                  onChange={(e) =>
                    setActiveFilters((prev) => ({
                      ...prev,
                      [category]: e.target.value,
                    }))
                  }
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-colors"
                >
                  <option value="">{t('portfolio.filters.all')}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* Projects Grid */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 md:px-2">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-heading font-normal text-primary mb-6 tracking-wide uppercase">
              {t('portfolio.featuredWorks')}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text overlay that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight drop-shadow-lg">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 drop-shadow-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 drop-shadow-sm font-medium">
                      {project.brand}
                    </span>
                    <span className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 drop-shadow-sm font-medium">
                      {project.region}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-2">{t('portfolio.noResults.title')}</p>
              <p className="text-sm text-gray-500">{t('portfolio.noResults.subtitle')}</p>
            </div>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
} 