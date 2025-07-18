import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const newsCategories = [
  'All',
  'Press Releases',
  'Company News',
  'Industry Insights',
  'IP Expansion',
];

const newsItems = [
  {
    id: 1,
    title: 'neos Expands Global Operations with New Partnerships',
    excerpt: 'Strategic partnerships in key markets strengthen our global presence and creative capabilities.',
    category: 'Press Releases',
    date: '2024-03-15',
    image: '/news/expansion.jpg',
    author: {
      name: 'Sarah Chen',
      role: 'Communications Director',
    },
  },
  {
    id: 2,
    title: 'Introducing New IP Development Division',
    excerpt: 'neos launches dedicated division for webtoon and drama production, focusing on global content creation.',
    category: 'Company News',
    date: '2024-03-10',
    image: '/news/ip-development.jpg',
    author: {
      name: 'Michael Park',
      role: 'Head of IP Development',
    },
  },
  {
    id: 3,
    title: 'The Future of Global Entertainment: Trends to Watch',
    excerpt: 'Industry analysis on emerging trends in global entertainment and content production.',
    category: 'Industry Insights',
    date: '2024-03-05',
    image: '/news/trends.jpg',
    author: {
      name: 'Emily Wong',
      role: 'Market Research Analyst',
    },
  },
  // Add more news items
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
            Latest News
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stay updated with neos's latest announcements, insights, and achievements
          </p>
        </div>
      </Section>

      {/* Category Filter */}
      <Section background="gray">
        <div className="flex flex-wrap justify-center gap-4">
          {newsCategories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-primary hover:bg-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured News */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gold text-sm font-medium mb-2">
              {newsItems[0].category}
            </span>
            <h2 className="text-3xl font-light text-primary mb-4">
              {newsItems[0].title}
            </h2>
            <p className="text-gray-600 mb-6">
              {newsItems[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{formatDate(newsItems[0].date)}</span>
              <span>•</span>
              <span>{newsItems[0].author.name}</span>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item) => (
            <article key={item.id} className="group">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-gold text-sm font-medium mb-2 block">
                {item.category}
              </span>
              <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{formatDate(item.date)}</span>
                <span>•</span>
                <span>{item.author.name}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="text-primary hover:text-gold transition-colors">
            Load More News
          </button>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest news and updates from neos
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 