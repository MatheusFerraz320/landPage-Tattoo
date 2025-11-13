/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        vibes: ["'Great Vibes'", "cursive"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": {
            color: "#e91e63",
            textShadow: "0 0 10px #e91e63, 0 0 20px #e91e63",
          },
          "50%": {
            color: "#fff",
            textShadow: "0 0 5px #fff, 0 0 10px #fff",
          },
        },
      },
    },
  },
  plugins: [],
};
