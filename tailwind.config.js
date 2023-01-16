/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sawarabi': ["'Sawarabi Mincho'", 'serif'],
        'karla': ["'Karla'", 'sans-serif'],
        'Montserrat': ["'Montserrat'", 'sans-serif']
      },
      colors:{
        'off-white': 'F5F5F5',
        'my-grey': 'EEF0F2',
      }
    },
  },
  plugins: [],
}