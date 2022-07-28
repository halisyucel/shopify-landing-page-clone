/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'input': 'rgba(107, 113, 119, 0.2) 0px 0px 0px 1px',
        'button': '0 0 0.1875em 0.1875em rgb(33 35 38 / 50%)',
      }
    },
  },
  plugins: [],
}
