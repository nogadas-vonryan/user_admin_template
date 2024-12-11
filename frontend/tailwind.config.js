/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(51 65 85)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}