import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import "./globals.css";
import { LanguageProvider } from './contexts/LanguageContext';

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

// 테스트 단계 - 모든 환경에서 크롤링 차단
export const metadata: Metadata = {
  title: 'neos - Creative Management & Production',
  description: 'neos is a global creative agency specializing in professional management, creative direction, and global production coordination.',
  keywords: ['creative agency', 'management', 'production', 'global', 'korea', 'entertainment'],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
