'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const getFilterOptions = (t: (key: string) => string) => ({
  year: ['2024', '2023', '2022'],
  brand: ['Nike', 'UNIQLO', 'Google', 'Samsung'],
  region: [t('portfolio.regions.global'), t('portfolio.regions.asia'), t('portfolio.regions.northAmerica'), t('portfolio.regions.europe')],
  category: [t('portfolio.categories.advertising'), t('portfolio.categories.production'), t('portfolio.categories.creative'), t('portfolio.categories.ip')],
});

const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    title: t('portfolio.projects.misamoGoogle.title'),
    description: t('portfolio.projects.misamoGoogle.description'),
    image: '/images/works/misamo-google.jpeg',
    year: '2024',
    brand: 'Google',
    region: t('portfolio.regions.global'),
    category: t('portfolio.categories.advertising'),
  },
  {
    id: 2,
    title: t('portfolio.projects.sbc.title'),
    description: t('portfolio.projects.sbc.description'),
    image: '/images/works/sbc.jpg',
    year: '2024',
    brand: 'Samsung',
    region: t('portfolio.regions.asia'),
    category: t('portfolio.categories.production'),
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
        <div className="text-center max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-primary mb-8 md:mb-12 tracking-tight">
            {t('portfolio.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light whitespace-pre-line">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </Section>

      {/* Project Filters */}
      <Section className="py-20 md:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
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
      </Section>

      {/* Projects Grid */}
      <Section className="py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wider uppercase">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg md:text-xl font-medium mb-3 leading-tight">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {project.category}
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {project.brand}
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
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