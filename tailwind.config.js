/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#f8f8f8',
      'dark': '#212121',
      'grey': 'red',
    },
    extend: {
        fontFamily: {
          "rubik": ['rubik', 'sans-serif']
        }
      },
  },
  plugins: [],
}