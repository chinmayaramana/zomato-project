module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors :{
        zomato_red : '#e23744',
        zomato_font : '#F57082',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
