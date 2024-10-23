/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFAE0",
        green: "#798645",
        orange: "#DA8359",
        beige: "#ECDFCC",
        greeen: "#10231F",
        brown: "#654520",
        cyan: "#81DAE3",
        biege: "#F8EDE3",
        gray: "#E4E0E1",
        red: "#F95454",
        purple: "#D4BEE4",
        blue: "#536493",
        gren: "#4C4B16",
        


      },
      boxShadow: {
        'xl': '0px 10px 60px 0px rgba(0,0,0,0.15)',
      },
      animation: {
        bounceArrow: 'bounceArrow 1s infinite',
      },
      keyframes: {
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateX(-4px)' }, // Adjust this value for bounce height
        },
      },
    },
  },
  plugins: [],
};
