module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#050038",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
