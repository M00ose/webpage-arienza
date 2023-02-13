/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        dark: "#361500",
        medium: "#603601",
        light: "CC9544", 
        offWhite: "#EEEDDE",
        offBlack: "#1C0A00",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        karla: ["Karla", "helvetica"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};