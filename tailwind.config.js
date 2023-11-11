/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        guinda: {
          50: "#fff0f0",
          100: "#ffdede",
          200: "#ffc3c3",
          300: "#ff9999",
          400: "#ff5e5e",
          500: "#ff2c2c",
          600: "#f60c0c",
          700: "#cf0606",
          800: "#ab0909",
          900: "#8d0f0f",
          950: "#5a0202",
        },
      },
    },
  },
  plugins: [],
};
