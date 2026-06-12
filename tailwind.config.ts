import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: deep navy, white, light gray, electric blue/teal accent, gold
        navy: {
          50: "#eef2f7",
          100: "#d3dded",
          200: "#a7badd",
          300: "#7090c4",
          400: "#3f63a4",
          500: "#2b4a85",
          600: "#1f3768",
          700: "#172a52",
          800: "#0f1d3a",
          900: "#0a1429",
          950: "#060c1a",
        },
        accent: {
          DEFAULT: "#1ec8c8",
          50: "#e6fbfb",
          100: "#c2f4f4",
          200: "#8be9e9",
          300: "#4ed8d8",
          400: "#1ec8c8",
          500: "#13a3a3",
          600: "#0f8282",
          700: "#106868",
          800: "#125353",
          900: "#134545",
        },
        electric: {
          DEFAULT: "#2f6bff",
          400: "#5a8aff",
          500: "#2f6bff",
          600: "#1f53e0",
        },
        gold: {
          DEFAULT: "#c9a14a",
          400: "#d8b76e",
          500: "#c9a14a",
          600: "#a9853a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
