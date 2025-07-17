import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/neos-logo-text-crob.png"
                alt="neos"
                width={148}
                height={27}
                className="h-8 w-auto"
                priority
                quality={100}
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">About</a>
                <a href="#companies" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Companies</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Creative Management<br />& Production
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering exceptional entertainment experiences through innovation and collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#companies"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Discover our companies
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are an entertainment group that empowers creative companies to innovate and excel in their respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pioneering new approaches in entertainment and media</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Building strong partnerships across the industry</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Maintaining the highest standards in all we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Companies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized companies bringing unique value to the entertainment industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Neos Entertainment */}
            <div className="group">
              <div className="aspect-[3/1] relative mb-6 bg-[#E5F5F5] rounded-lg overflow-hidden flex items-center justify-center p-8">
                <Image
                  src="/neosent-full-width-logo.png"
                  alt="neos entertainment"
                  width={300}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                A professional management group fostering talent, humanism, and global reach in the entertainment industry.
              </p>
              <div className="text-center">
                <a
                  href="http://www.neosentertainment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
                >
                  Visit website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Neostory */}
            <div className="group">
              <div className="aspect-[3/1] relative mb-6 bg-[#E5F5F5] rounded-lg overflow-hidden flex items-center justify-center p-8">
                <Image
                  src="/neostory-full-width-logo.png"
                  alt="neostory"
                  width={300}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                Premier content creation company focused on webtoons and drama production.
              </p>
              <div className="text-center">
                <span className="inline-flex items-center text-gray-400 text-sm">
                  Coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Contact</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch to learn more about our companies and opportunities
          </p>

          <div className="inline-flex flex-col items-center">
            <a
              href="mailto:info@neoskorea.com"
              className="text-gray-900 hover:text-gray-600 transition-colors mb-2"
            >
              info@neoskorea.com
            </a>
            <p className="text-gray-600 text-sm">Seoul, South Korea</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="/neos-logo-text-crob.png"
              alt="neos"
              width={120}
              height={22}
              className="h-6 w-auto mx-auto opacity-50"
              quality={100}
            />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 neos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
