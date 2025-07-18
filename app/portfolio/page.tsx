'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';

const filters = {
  year: ['2024', '2023', '2022'],
  brand: ['Nike', 'UNIQLO', 'Google', 'Samsung'],
  region: ['Global', 'Asia', 'North America', 'Europe'],
  category: ['Advertising', 'Production', 'Creative Direction', 'IP'],
};

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'Brief project description goes here',
    image: '/p1.png',
    year: '2024',
    brand: 'Nike',
    region: 'Global',
    category: 'Advertising',
  },
  // Add more projects here
];

export default function PortfolioPage() {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore our work across different industries and regions
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(filters).map(([category, options]) => (
            <div key={category}>
              <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                {category}
              </label>
              <select
                value={activeFilters[category as keyof typeof activeFilters]}
                onChange={(e) =>
                  setActiveFilters((prev) => ({
                    ...prev,
                    [category]: e.target.value,
                  }))
                }
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="">All</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {project.brand}
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {project.region}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found with the selected filters.</p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl font-light text-primary mb-6">Let's Create Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
          <Button href="/contact" size="lg">
            Start a Project
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 