/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lexend, sans-serif',
        mono: 'Poppins, sans-serif',
        serif: 'Inter, sans-serif'
      },
      colors: {
        green: {
          600: '#00FF57'
        },
        gray: {
          700: '#262626',
          800: '#6C6C6C',
          900: '#1D1D1D'
        }
      }
    }
  },
  plugins: []
}
