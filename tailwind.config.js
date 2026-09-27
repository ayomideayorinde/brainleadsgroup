/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: "#FFB000",
          accent: "#FFC734",
          dark: "#111111",
          charcoal: "#1f1f1f",
          surface: "#18181b",
          light: "#F8F9FC",
          muted: "#9CA3AF",
        },
      },
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 0.65, transform: "scale(1.08)" },
        },
      },
      animation: {
        floatGradient: "floatGradient 10s ease-in-out infinite",
        floatGradientSlow: "floatGradientSlow 16s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
