/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["MinionPro", "serif"],
        raleway: ["Raleway", "sans-serif"], // Keeping for backward compatibility
        minion: ["MinionPro-Regular", "serif"],
      },
      colors: {
        primary: "#0C233F",
        secondary: "#1C3F94",
      },
      fontSize: {
        h2: ["36px", { lineHeight: "1.2" }],
        h4: ["21px", { lineHeight: "1.3" }],
        p: ["16px", { lineHeight: "1.3" }],
      },
    },
  },
  plugins: [],
};
