/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blueFonce: "#0a192f",
      greenClaire: "#64ffda",
      blueClaire: "#ccd6f6",
      greyBleu: "#8892b0",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        openSans: ["OpenSans", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [],
};
