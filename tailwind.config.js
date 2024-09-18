// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-l': 'linear-gradient(to left, #51e0c8, #6ca7f8)',
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      colors: {
        gradient: {
          start: "#8ad4ec",
          mid1: "#ef96ff",
          mid2: "#ff56a9",
          end: "#ffaa6c",
        },
        "text-blue": "#5dd5e0",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        start: "#8ad4ec",
        mid1: "#ef96ff",
        mid2: "#ff56a9",
        end: "#ffaa6c",
      }),
      backgroundClip: {
        text: "text",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
