/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        "charcoal-light": "#1A1A1A",
        "charcoal-lighter": "#2A2A2A",
        gold: "#D4AF37",
        "gold-light": "#E8C547",
        "gold-dark": "#B8960F",
        bronze: "#A67C00",
        ivory: "#F5F5F0",
        "ivory-light": "#FAFAF8",
        "ivory-dark": "#E8E8E0",
      },
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        magazine: ".15em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, #D4AF37 0%, #E8C547 50%, #D4AF37 100%)",
        "gradient-dark": "linear-gradient(135deg, #121212 0%, #1A1A1A 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.15)",
        "gold-glow-lg": "0 0 50px rgba(212, 175, 55, 0.2)",
        "elevation-1": "0 2px 8px rgba(0, 0, 0, 0.3)",
        "elevation-2": "0 8px 24px rgba(0, 0, 0, 0.4)",
        "elevation-3": "0 12px 48px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      opacity: {
        2: "0.02",
        5: "0.05",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        blob: "blob 7s infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)" },
          "50%": { boxShadow: "0 0 50px rgba(212, 175, 55, 0.3)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
