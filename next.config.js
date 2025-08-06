/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // 번들 최적화
  experimental: {
    optimizePackageImports: ['@tailwindcss/forms', '@tailwindcss/typography'],
  },
  // 번들 분석 활성화
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // 프로덕션 빌드에서 번들 분석
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-report.html',
        })
      );
    }
    return config;
  },
  // 압축 최적화
  compress: true,
  // 정적 최적화
  swcMinify: true,
  // 성능 최적화
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig; 