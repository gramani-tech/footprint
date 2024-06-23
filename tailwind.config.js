/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:' #EECE12',
        text:  '#210124',
        border:'#AEACAB',
        purple:'#482D49',
        lightPurple:'#695769',
        gray:'#BDBBBE'
      }
    },
  },
  plugins: [],
}