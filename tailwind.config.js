/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#d8eaff",
        midnightblue: "#000a41",
        gray: "#1e1928",
      },
      fontFamily: {
        lato: "Lato",
        poppins: "Poppins",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
