/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        featherBold: ['FeatherBold', 'sans-serif']
      },
      colors: {
        'custom_white': '#F9FCFF',
        'custom_gray': '#DEE4EA'
      }
    },
  },
  plugins: [],
}