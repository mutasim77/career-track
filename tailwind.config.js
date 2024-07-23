/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        'primary': '#33b178',
        'primary-dark': '#15593b',
        'neutral': '#a0a0a0',
        'background': '#1c1c1c',
        'surface': '#2a2a2a',
        'error': '#fa3838',
        'surface-light': '#3a3a3a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

