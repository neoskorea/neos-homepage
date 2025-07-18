import Image from 'next/image';
import { Section } from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const clients = [
  { name: 'Nike', logo: '/clients/nike.svg' },
  { name: 'UNIQLO', logo: '/clients/uniqlo.svg' },
  { name: 'Google', logo: '/clients/google.svg' },
  { name: 'Samsung', logo: '/clients/samsung.svg' },
  // Add more clients here
];

const testimonials = [
  {
    quote: "neos has been instrumental in helping us reach new audiences in Asia. Their understanding of both local and global markets is unparalleled.",
    author: "John Smith",
    title: "Marketing Director",
    company: "Global Brand Co.",
  },
  {
    quote: "The team's creative direction and attention to detail exceeded our expectations. They truly understand how to create impactful campaigns.",
    author: "Sarah Johnson",
    title: "Creative Lead",
    company: "Tech Innovations Inc.",
  },
  {
    quote: "Working with neos has transformed how we approach talent management. Their professional yet personal approach makes all the difference.",
    author: "David Kim",
    title: "CEO",
    company: "Entertainment Plus",
  },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
            Our Clients
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Trusted by leading brands and organizations worldwide
          </p>
        </div>
      </Section>

      {/* Client Logo Wall */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-8 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl font-light text-primary mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <svg
                className="w-8 h-8 text-gold mb-6 opacity-20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-light text-primary mb-2">100+</p>
            <p className="text-gray-600">Global Clients</p>
          </div>
          <div>
            <p className="text-4xl font-light text-primary mb-2">15+</p>
            <p className="text-gray-600">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-light text-primary mb-2">500+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-light text-primary mb-2">95%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
} 