/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 22,
      "2xl": 30,
    },

    colors: {
      transparent: 'transparent',

      black: "#000000",

      gray: {
        100: "#E1E1E6",
        200: "#C4C4CC",
        400: "#7C7C8A",
        800: "#202024",
        900: "#121214",
  
      },

      "cyan-500": "#81D8F7",
      "cyan-500": "#81D8F7",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
