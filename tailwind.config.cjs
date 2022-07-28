/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'shopify': ['ShopifySans', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'shopify-black': 'rgb(33, 35, 38)',
      }
    },
  },
  plugins: [],
}
