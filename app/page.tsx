import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

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

      {/* Philosophy Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">NEOS Philosophy</h2>
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

      {/* Recent Projects */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-primary mb-6">Recent Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our latest work in entertainment, management, and global production
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/p1.png"
              alt="Project 1"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium mb-2">Project Title</h3>
              <p className="text-sm text-gray-200">Brief project description</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
