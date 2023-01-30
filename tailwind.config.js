/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    fontFamily:{  
      Roboto: ["'Roboto', sans-serif;"]
    },
    backgroundColor:{
      lightWhite: '#F2F4EA',
      darkGreen: '#1F4D36' ,
      transparent: 'transparent',
      wheatColor: '#F1EABA',
    },
    colors:{
      darkGreen: '#1F4D36' ,
    },
  },
  plugins: [],
}
