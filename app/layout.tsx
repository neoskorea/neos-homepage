import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import "./globals.css";

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
  fallback: ['Noto Sans KR', 'system-ui', 'sans-serif'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'neos - Creative Management & Production',
  description: 'neos is a global creative agency specializing in professional management, creative direction, and global production coordination.',
  keywords: ['creative agency', 'management', 'production', 'global', 'korea', 'entertainment'],
  openGraph: {
    title: 'neos - Creative Management & Production',
    description: 'neos is a global creative agency specializing in professional management, creative direction, and global production coordination.',
    url: 'https://neoskorea.com',
    siteName: 'neos',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'neos Creative Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'neos - Creative Management & Production',
    description: 'neos is a global creative agency specializing in professional management, creative direction, and global production coordination.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}
