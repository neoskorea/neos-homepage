import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
            About NEOS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A creative agency dedicated to fostering talent and creating global entertainment experiences
          </p>
        </div>
      </Section>

      {/* CEO Message */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light text-primary mb-6">CEO Message</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                At NEOS, we believe in the power of creativity to transform lives and connect cultures. Our journey began with a simple vision: to create a platform where talent can thrive and stories can reach global audiences.
              </p>
              <p className="text-gray-600">
                Through our commitment to professional excellence, human-centered approach, and global perspective, we continue to push boundaries and create meaningful entertainment experiences.
              </p>
              <div className="mt-8">
                <p className="text-primary font-medium">John Doe</p>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/ceo-portrait.jpg"
              alt="CEO Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Company History */}
      <Section>
        <h2 className="text-3xl font-light text-primary mb-12 text-center">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-gold">
              <div className="absolute w-4 h-4 bg-gold rounded-full -left-[9px] top-0" />
              <div>
                <p className="text-gold font-medium mb-2">2024</p>
                <h3 className="text-xl font-medium text-primary mb-2">Global Expansion</h3>
                <p className="text-gray-600">
                  Expanded operations to major entertainment markets worldwide
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-gold">
              <div className="absolute w-4 h-4 bg-gold rounded-full -left-[9px] top-0" />
              <div>
                <p className="text-gold font-medium mb-2">2023</p>
                <h3 className="text-xl font-medium text-primary mb-2">Launch of NEOSTORY</h3>
                <p className="text-gray-600">
                  Established content creation division focusing on webtoons and drama production
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-gold">
              <div className="absolute w-4 h-4 bg-gold rounded-full -left-[9px] top-0" />
              <div>
                <p className="text-gold font-medium mb-2">2022</p>
                <h3 className="text-xl font-medium text-primary mb-2">Foundation of NEOS</h3>
                <p className="text-gray-600">
                  Established NEOS with a vision to revolutionize creative management and production
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-primary mb-6">Vision & Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our vision is to be a global leader in creative management and production, connecting talent with opportunities worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Pioneering new approaches in entertainment and media
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Building strong partnerships across the industry
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-primary mb-3">Global Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating entertainment that resonates across cultures
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 