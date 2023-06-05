const { cyan } = require("tailwindcss/colors");

module.exports = {
  content: ["./resources/scripts/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        storeone:
          "url('https://i.imgur.com/xBTeAWe.jpg')",
        storetwo:
          "url('https://i2.wp.com/ucgosu.pl/wp-content/uploads/2017/07/RAM.jpg')",
        storethree:
          "url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg')",
      },
      colors: {
        black: "#000",
        primary: {
          50: "#f0e6fc",
          100: "#E9D8FD",
          200: "#D6BCFA",
          300: "#B794F4",
          400: "#9F7AEA",
          500: "#805AD5",
          600: "#6B46C1",
          700: "#553C9A",
          800: "#44337A",
          900: "#322659",
        },
        green: {
          50: "#f0e6fc",
          100: "#E9D8FD",
          200: "#D6BCFA",
          300: "#B794F4",
          400: "#9F7AEA",
          500: "#805AD5",
          600: "#6B46C1",
          700: "#553C9A",
          800: "#44337A",
          900: "#322659",
        },
        neutral: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        cyan: cyan,
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      transitionDuration: {
        250: "250ms",
      },
      borderColor: (theme) => ({
        default: theme("colors.neutral.400", "currentColor"),
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
