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
      <Section className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-text-primary mb-6">
            Professional. Humanism. Global.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            A creative agency specializing in management, production, and global entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      {/* Vision & Mission Section */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light text-text-primary mb-6">Vision</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              To become a global leader in creative content and talent management, connecting cultures and creating opportunities across borders.
            </p>
            <h2 className="text-3xl font-light text-text-primary mb-6">Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              We strive to discover and nurture exceptional talent, produce innovative content, and build bridges between different cultures through entertainment.
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/neos-full-width-logo.png"
              alt="neos vision"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* neos Philosophy Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">neos Philosophy</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our core values drive everything we do, from talent management to global production
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-text-primary mb-3">Professional</h3>
            <p className="text-text-secondary leading-relaxed">
              Excellence in every aspect of our work, from management to production
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-text-primary mb-3">Humanism</h3>
            <p className="text-text-secondary leading-relaxed">
              Putting people first in everything we do, fostering growth and creativity
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-text-primary mb-3">Global</h3>
            <p className="text-text-secondary leading-relaxed">
              Connecting cultures and creating opportunities across borders
            </p>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">Our Journey</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Key milestones in our growth and evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-32 flex-shrink-0 text-right">
                <span className="text-primary font-medium">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Global Expansion</h3>
                <p className="text-text-secondary">Expanding our presence in key markets worldwide</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-32 flex-shrink-0 text-right">
                <span className="text-primary font-medium">2023</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Launch of neostory</h3>
                <p className="text-text-secondary">Established content creation division focusing on webtoons and drama production</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-32 flex-shrink-0 text-right">
                <span className="text-primary font-medium">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Foundation of neos</h3>
                <p className="text-text-secondary">Established with a vision to revolutionize creative management and production</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* neos INFRA Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">neos Infrastructure</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our comprehensive ecosystem supporting talent and content creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image src="/window.svg" alt="Management" width={24} height={24} />
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">Talent Management</h3>
            <p className="text-text-secondary">Comprehensive artist and talent management services</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image src="/file.svg" alt="Production" width={24} height={24} />
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">Content Production</h3>
            <p className="text-text-secondary">State-of-the-art production facilities and expertise</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image src="/globe.svg" alt="Global Network" width={24} height={24} />
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">Global Network</h3>
            <p className="text-text-secondary">Extensive international partnerships and connections</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">Innovation Hub</h3>
            <p className="text-text-secondary">Research and development in entertainment technology</p>
          </div>
        </div>
      </Section>

      {/* Works Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">Featured Works</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our latest achievements in entertainment and content creation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/p1.png"
              alt="Project 1"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium mb-2">Global Entertainment</h3>
              <p className="text-sm text-gray-200">International content production and distribution</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/p1.png"
              alt="Project 2"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium mb-2">Talent Development</h3>
              <p className="text-sm text-gray-200">Nurturing the next generation of stars</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/p1.png"
              alt="Project 3"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium mb-2">Creative Production</h3>
              <p className="text-sm text-gray-200">Innovative content creation and storytelling</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Partners Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">Our Partners</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Collaborating with industry leaders to create exceptional value
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="p-6">
            <Image
              src="/neostory-full-width-logo.png"
              alt="neostory"
              width={200}
              height={60}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="p-6">
            <Image
              src="/neosent-full-width-logo.png"
              alt="neosent"
              width={200}
              height={60}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="p-6">
            <Image
              src="/neos-full-width-logo.png"
              alt="neos"
              width={200}
              height={60}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="p-6">
            <Image
              src="/neos-logo-with-text.png"
              alt="neos brand"
              width={200}
              height={60}
              className="mx-auto filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
