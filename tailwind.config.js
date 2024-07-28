/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode:"class",

  theme: {
    fontFamily:{
      'vazir' : 'vazir' ,
      'vazir-light' : 'vazir-light',
      'vazir-bold' : 'vazir-bold',
      'vazir-medium' : 'vazir-medium'
    },

    container:{
      center : true,
      
      padding: {
        DEFAULT: '1rem',
        sm : '2rem',
        lg : '4rem',
        xl : '5rem',
        '2xl' : '6rem',
      },
    },
    maxWidth : {
      "maxWidth" : "1300px"
    },
    
    extend: {},
  },

  plugins: [],
}