'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden bg-primary">
        <div className="text-center relative z-10">
          <div className="mb-12">
            <Image
              src="/neos-logo-text-white.png"
              alt="neos logo"
              width={400}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Vision</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our core values that drive everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Professional</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Excellence in every aspect of our work, from management to production
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Humanism</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Putting people first in everything we do, fostering growth and creativity
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Global</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Connecting cultures and creating opportunities across borders
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-32 bg-gray-50">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Mission</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our commitment to delivering exceptional value through innovative approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Trend</h3>
            <p className="text-text-secondary leading-relaxed">
              Staying ahead of industry trends and market dynamics
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Efficiency</h3>
            <p className="text-text-secondary leading-relaxed">
              Optimizing processes and maximizing productivity
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Integration</h3>
            <p className="text-text-secondary leading-relaxed">
              Seamlessly connecting diverse elements and systems
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Progressive</h3>
            <p className="text-text-secondary leading-relaxed">
              Embracing innovation and forward-thinking approaches
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">High Quality</h3>
            <p className="text-text-secondary leading-relaxed">
              Maintaining the highest standards in all deliverables
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-text-primary mb-3">Completeness</h3>
            <p className="text-text-secondary leading-relaxed">
              Delivering comprehensive and thorough solutions
            </p>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Our Journey</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Key milestones in our growth and evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-24">
            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2024</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">Global Expansion</h3>
                <p className="text-lg text-text-secondary">Expanding our presence in key markets worldwide</p>
              </div>
            </div>
            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2023</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">Launch of neostory</h3>
                <p className="text-lg text-text-secondary">Established content creation division focusing on webtoons and drama production</p>
              </div>
            </div>
            <div className="flex gap-12 items-start">
              <div className="w-48 flex-shrink-0 text-right">
                <span className="text-3xl text-primary font-light">2022</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-text-primary mb-4">Foundation of neos</h3>
                <p className="text-lg text-text-secondary">Established with a vision to revolutionize creative management and production</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* neos INFRA Section */}
      <Section className="py-32 bg-gray-50">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">neos Infrastructure</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our comprehensive ecosystem supporting talent and content creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Image src="/window.svg" alt="Management" width={32} height={32} />
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Talent Management</h3>
            <p className="text-lg text-text-secondary">Comprehensive artist and talent management services</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Image src="/file.svg" alt="Production" width={32} height={32} />
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Content Production</h3>
            <p className="text-lg text-text-secondary">State-of-the-art production facilities and expertise</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Image src="/globe.svg" alt="Global Network" width={32} height={32} />
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Global Network</h3>
            <p className="text-lg text-text-secondary">Extensive international partnerships and connections</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-text-primary mb-4">Innovation Hub</h3>
            <p className="text-lg text-text-secondary">Research and development in entertainment technology</p>
          </div>
        </div>
      </Section>

      {/* Works Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Featured Works</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our latest achievements in entertainment and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Global Entertainment</h3>
              <p className="text-gray-200">International content production and distribution</p>
            </div>
          </div>

          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Talent Development</h3>
              <p className="text-gray-200">Nurturing the next generation of stars</p>
            </div>
          </div>

          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/p1.png"
              alt="Project 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-light mb-3">Creative Production</h3>
              <p className="text-gray-200">Innovative content creation and storytelling</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button href="/portfolio" variant="outline" size="lg" className="min-w-[200px]">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-8">Our Partners</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Collaborating with industry leaders to create exceptional value
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center">
          <div className="p-8">
            <Image
              src="/neostory-full-width-logo.png"
              alt="neostory"
              width={240}
              height={80}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-8">
            <Image
              src="/neosent-full-width-logo.png"
              alt="neosent"
              width={240}
              height={80}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-8">
            <Image
              src="/neos-full-width-logo.png"
              alt="neos"
              width={240}
              height={80}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-8">
            <Image
              src="/neos-logo-with-text.png"
              alt="neos brand"
              width={240}
              height={80}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
