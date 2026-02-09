import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#e0e0e0",
        cyan: {
          DEFAULT: "#00e5ff",
          50: "#e0fbff",
          100: "#b3f5ff",
          200: "#80eeff",
          300: "#4de7ff",
          400: "#26e2ff",
          500: "#00e5ff",
          600: "#00b8cc",
          700: "#008a99",
          800: "#005c66",
          900: "#002e33",
        },
        dark: {
          DEFAULT: "#0a0a0f",
          50: "#1a1a2e",
          100: "#16162a",
          200: "#121225",
          300: "#0e0e1f",
          400: "#0a0a1a",
          500: "#0a0a0f",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
    },
  },
  plugins: [],
};
export default config;
