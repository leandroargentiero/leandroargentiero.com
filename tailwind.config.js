module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        grain: "grain .5s steps(6) infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "30%": { transform: "translate(3%,-15%)" },
          "50%": { transform: "translate(12%,9%)" },
          "70%": { transform: "translate(9%,4%)" },
          "90%": { transform: "translate(-1%,7%)" },
        },
      },
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
