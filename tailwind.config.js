/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(114, 134, 211, 1)",
        borders: "rgba(217, 217, 217, 1)",
        secondary: "rgba(142, 167, 233, 1)",
        tertiary: "rgba(255, 242, 242, 1)",
      },
    },
  },
  plugins: [],
};
