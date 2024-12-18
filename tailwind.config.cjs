/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "chrysler-blue": "#0607E1",
        "chrysler-blue-light": "rgba(6, 7, 225, 0.05)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(6, 7, 225, 0.05), rgba(0, 0, 0, 0.9))",
      },
    },
  },
  plugins: [],
};
