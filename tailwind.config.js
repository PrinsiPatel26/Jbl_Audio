export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0c',
        charcoal: '#17181a',
        graphite: '#2a2c30',
        accent: {
          DEFAULT: '#ff6a00',
          soft: '#fff1e6',
          dark: '#e35c00',
        },
        gold: '#ffb800',
        surface: '#f5f5f6',
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,11,12,0.04), 0 8px 24px -12px rgba(11,11,12,0.18)',
        lift: '0 18px 40px -18px rgba(11,11,12,0.35)',
      },
    },
  },
}
