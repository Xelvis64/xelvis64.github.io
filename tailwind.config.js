/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#2E3192",
      secondary: "#F1592A",
      gray: "#D9D9D9",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      keyframes: {
        l_join: {
          "0%": {transform: "translateX(-80px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        r_join: {
          "0%": {transform: "translateX(80px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        b_join: {
          "0%": {transform: "translateY(80px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
        t_join: {
          "0%": {transform: "translateY(-80px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
        appear: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
      },
      animation: {
        l_join: "l_join 1.7s ease-in-out",
        r_join: "r_join 1.7s ease-in-out",
        b_join: "b_join 1.7s ease-in-out",
        t_join: "t_join 1.7s ease-in-out",
        appear: "appear 1.7s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
