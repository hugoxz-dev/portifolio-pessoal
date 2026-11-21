import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#12a878",
          dark: "#0d855f",
          soft: "#e1f6ed",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 48px -26px rgb(17 24 39 / 0.22)",
      },
    },
  },
  plugins: [forms],
};

export default config;
