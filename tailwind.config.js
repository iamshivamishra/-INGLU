/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        inglu: {
          blue: '#1d5fff',
          'blue-dark': '#0a3fd6',
          purple: '#7b3ff2',
          teal: '#1bc9a8',
          ink: '#0d1330',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
