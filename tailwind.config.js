/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f486f",
        secondary: "#1f6bc9",
        accent: "#23aec0",
        dark: "#000000",
        light: "#ffffff",
        navy: "#26496b",
        darkblue: "#163454",
        teal: "#16455b",
        slate: "#173a47",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
