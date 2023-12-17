/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        '0': '0',
        '-full': '-100%',
      },
      backdropBlur: {
        '3xl': '60px', // This is a custom value for a very strong blur effect
      },
      fontFamily:{
        'karla': ["'Karla'", 'sans-serif'],
        'Montserrat': ["'Montserrat'", 'sans-serif'],
        'Inter': ["'Inter'", 'sans-serif'],
        'DMSans': ["'DM Sans'", 'sans-serif'],
        'DMMono': ["'DM Mono'", 'monospace'],
        'Spectral': ["'Spectral'", 'serif']

      },
      colors:{
        'off-white': 'F5F5F5',
        'my-grey': 'EEF0F2',
        'snow': 'fffbfe',
        'cream': 'fffcf4'
      },
    },
  },
  plugins: [],
}