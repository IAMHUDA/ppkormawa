/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dancingscript: ['Dancingscript', 'sans-serif'],
        Updock: ['Updock', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      dropShadow: {
        '3xl': '0 5px 30px rgb(255, 207, 179)',
        '4xl': [
            '0 35px 35px rgb(255, 245, 205)',
            '0 45px 65px rgb(255, 245, 205)'
        ]
      },
    },
  },
  plugins: [],
}