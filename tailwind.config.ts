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
    },
  },
  plugins: [],
} satisfies Config
