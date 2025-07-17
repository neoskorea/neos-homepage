import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-light text-gray-900">neos</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a>
                <a href="#companies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Companies</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8">
            neos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creative management & production for exceptional entertainment experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">About</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              neos is an entertainment group that empowers creative companies to innovate and excel in their respective fields.
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
      <section id="companies" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Companies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our specialized companies bring unique value to the entertainment industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">            {/* Neos Entertainment */}
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">neos entertainment</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                A professional management group fostering talent, humanism, and global reach in the entertainment industry.
              </p>
              <a
                href="http://www.neosentertainment.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Visit website →
              </a>
            </div>

            {/* Neostory */}
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">neostory</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">           Premier content creation company focused on webtoons and drama production.
              </p>
              <span className="text-gray-400 text-sm font-medium">            Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Contact</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">            Get in touch to learn more about our companies and opportunities
          </p>

          <div className="space-y-4">
            <p className="text-gray-900">info@neoskorea.com</p>
            <p className="text-gray-600 text-sm">Seoul, South Korea</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 neos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
