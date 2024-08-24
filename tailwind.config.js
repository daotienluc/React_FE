/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AFFF",
        laptopgaming: "#3885E9",
        sale: "rgb(255, 213, 145);",
        title: "rgb(130, 134, 158);",
        content: "rgb(67, 70, 87);",
        accessory: "#F97A90",
        houseware: "#394D9B",
        footer: "#E9EDF2",
      },
      backgroundImage: {
        "bg-sale": "url('/src/assets/img/bg_sale.svg')",
      },
      container: {
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "9rem",
        },
      },
    },
  },
  plugins: [nextui()],
};
