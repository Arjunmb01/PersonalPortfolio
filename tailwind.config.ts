import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#141414',
        },
        paper: {
          DEFAULT: '#f5f0e8',
          50: '#faf8f4',
          100: '#f0ebe0',
        },
        mist: {
          DEFAULT: '#6b6b6b',
          light: '#9a9a9a',
          dark: '#4a4a4a',
        },
        accent: {
          DEFAULT: '#c8a96e',
          light: '#dfc08a',
          dark: '#a88848',
        },
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.65', letterSpacing: '-0.005em' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'circ': 'cubic-bezier(0.7, 0, 0.3, 1)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee 35s linear infinite reverse',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
