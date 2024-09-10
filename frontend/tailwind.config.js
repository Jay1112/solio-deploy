/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#e11d48",
        "subprimary" : "#2563EB",
        "secondary" : "#b5b2b2",
        "subsecondary" : "#414146",
        "subsecondary2nd" : '#89898d',
        "dark": "#19191c",
        "darker": "#000000",
        "light" : "#ffffff"
      },
      fontFamily : {
        "monster" : '"Montserrat", sans-serif',
        "poppins" : '"Poppins", sans-serif',
        "roboto"  : '"Roboto", sans-serif',
      }
    },
  },
  plugins: [],
}

