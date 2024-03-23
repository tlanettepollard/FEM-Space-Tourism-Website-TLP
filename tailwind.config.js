/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.index.html',
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      '3xl': '1.75rem',
      '4xl': '2rem',
      '6xl': '3.5rem',
      '8xl': '6.25rem',
      '9xl': '9.375rem',
    },
    colors: {
      'ebony': '#0B0D17',
      'bluegray': '#D0D6F9',
      'clrwhite': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sans: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
      },

    },
    plugins: [],
  }
}
