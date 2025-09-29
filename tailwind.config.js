/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatGradient: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-18px, -12px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        floatGradientSlow: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, 14px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      animation: {
        floatGradient: "floatGradient 10s ease-in-out infinite",
        floatGradientSlow: "floatGradientSlow 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

