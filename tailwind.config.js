/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      minHeight: {
        'nav': '10vh',
      },
      height: {
        'auto': 'auto',
      },
      top: {
        'top-100': '100%',
      }
    },
  },
  plugins: [],
}

