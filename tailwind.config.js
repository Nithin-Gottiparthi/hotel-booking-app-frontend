/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vib: {
          purple: "#5B3DF5",
          purpleDark: "#4B2FE3",
          yellow: "#F9B500",
          bg: "#FAFAFF",
          text: "#1B1B1F",
          muted: "#6B7280",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 10px 30px rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
