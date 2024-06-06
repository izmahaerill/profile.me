/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        customFont: "Be Vietnam  Pro, sans-serif",
      },
      colors: {
        primary: "#404040",
        secondary: "#737373",
        tersier: "#DE1D8D",
        "custom-bulltet": "#C7C8CC",
      },
      spacing: {
        6: "1.5rem", // Padding kiri untuk bullet point
      },
      fontSize: {
        bullet: "0.5rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-list-item": {
          position: "relative",
          paddingLeft: "1.5rem",
        },
        ".custom-list-item::before": {
          content: '"•"',
          position: "absolute",
          left: "0",
          fontSize: "1.1rem",
          lineHeight: "1.7rem",
          color: "#C7C8CC",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
