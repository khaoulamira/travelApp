/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      colors: {
        white: " #FEFAE0",
        green: "#798645",
        orange: "#DA8359",
        beige: "#ECDFCC",

      }, boxShadow: {
        'xl':'(0px 10px 60px 0px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}


