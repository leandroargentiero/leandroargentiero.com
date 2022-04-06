module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        "pastel-pink": "#F2E3EE",
        "pastel-indigo": "#9FB0EA",
        "pastel-blue": "#B0CDEB",
      },
    },
  },
  plugins: [],
};
