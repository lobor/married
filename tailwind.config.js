const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: "width",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}