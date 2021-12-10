const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "sans-cn": ["Noto Sans SC", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "project-overlay-small":
          "linear-gradient(14.83deg, rgba(15, 23, 42, 0.51) 2.1%, rgba(15, 23, 42, 0) 67.27%);",
        "project-overlay-large":
          "linear-gradient(90deg, rgba(15, 23, 42, 0.590984) -0.06%, rgba(15, 23, 42, 0) 58.99%);",
      },
    },
  },
  plugins: [],
};
