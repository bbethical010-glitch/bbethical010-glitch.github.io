import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#131313',
        surface: '#1c1b1b',
        surfaceHigh: '#2a2a2a',
        purple: '#9b30ff',
        purpleLight: '#dcb8ff',
        gold: '#f4c300',
        goldLight: '#ffe399',
        pink: '#dd0061',
        pinkLight: '#ffb1c0',
        text: '#e5e2e1',
        muted: '#988ca1',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-kage': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'ease-out-kage': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      animation: {
        'grain': 'grain-drift 8s steps(4) infinite',
        'scroll-cue': 'scroll-cue 2.8s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config
