/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Bright-orange': '#E38826',
        'Dark-cyan': '#006970',
        'Very-dark-cyan': '#004241',
        'Light-gray': '#F2F2F2',
        'Transparent-white': '#FFFFFF',
        'Light-withe': '#F2F2F2'
      },
      fontFamily: {
        BigShoulders: ['Big Shoulders Display', 'sans-serif'],
        Lexend: ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}

