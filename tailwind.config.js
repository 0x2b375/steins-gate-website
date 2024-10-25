export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020102", // A dark background color
        accent: "#A3A3FF", // Neon-blue accents
      },
      background: {
        primary: "#020102",
      },
      fontFamily: {
        steins: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
