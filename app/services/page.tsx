import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';

const services = [
  {
    title: 'Advertising & Casting',
    description: 'Strategic talent placement and campaign management for global brands',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Talent scouting and management',
      'Brand campaign coordination',
      'Media planning and buying',
      'Performance analytics',
    ],
  },
  {
    title: 'Creative Direction',
    description: 'Comprehensive branding and visual identity development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    features: [
      'Brand strategy development',
      'Visual identity design',
      'Content direction',
      'Style guide creation',
    ],
  },
  {
    title: 'Global Production',
    description: 'End-to-end production management for international projects',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      'Location scouting',
      'Crew coordination',
      'Budget management',
      'Post-production oversight',
    ],
  },
  {
    title: 'IP Collaboration',
    description: 'Strategic development and management of intellectual property',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: [
      'Drama production',
      'Webtoon development',
      'Rights management',
      'Cross-platform adaptation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="text-center max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-primary mb-8 md:mb-12 tracking-wide">
            Our Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
            Comprehensive creative solutions for global entertainment and media
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-gold">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-medium text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 md:mb-8">Ready to Work Together?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 