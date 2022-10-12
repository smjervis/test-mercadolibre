/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ml-yellow": "#FFE600",
        "ml-black": "#333333",
        "ml-dark-gray": "#666666",
        "ml-gray": "#999999",
        "ml-light-gray": "#EEEEEE",
        "ml-blue": "#3483FA",
      },
    },
  },
  plugins: [],
}
