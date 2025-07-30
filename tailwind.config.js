/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#86cfcf',
        // primary: '#88D1D1',
        primary: '#93d1d3',
        'primary-dark': '#6bb8b8',
        'primary-light': '#a3dada',
        secondary: '#1E1E1E',
        text: {
          primary: '#1E1E1E',
          secondary: '#4B5563',
        },
        gold: '#CFAE4D',
        blue: '#2151A1',
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Noto Sans KR', 'sans-serif'],
        heading: ['Bebas Neue', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.16' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.gold'),
              },
            },
            h1: {
              color: theme('colors.primary'),
              fontWeight: '300',
            },
            h2: {
              color: theme('colors.primary'),
              fontWeight: '300',
            },
            h3: {
              color: theme('colors.primary'),
              fontWeight: '500',
            },
            h4: {
              color: theme('colors.primary'),
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 