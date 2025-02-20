/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        plum: {
          300: '#D8BFD8',
          600: '#8B4B8B',
          700: '#6A376A',
          800: '#4A254A',
          900: '#2B142B',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
