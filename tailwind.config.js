/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        graso: {
          extend: "light",
          colors: {
            secondary: "#0000EE",
            background: "#FFEC97",
            foreground: "#000000",
            primary: {
              100: "#FFFCEA",
              200: "#FFF9D5",
              300: "#FFF5C0",
              400: "#FFF2B1",
              500: "#FFEC97",
              600: "#DBC56E",
              700: "#B79F4C",
              800: "#937B30",
              900: "#7A621C",
              DEFAULT: "#FFEC97",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
