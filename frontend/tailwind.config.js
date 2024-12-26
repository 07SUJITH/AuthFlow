/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 1.5s linear infinite",
        "spin-reverse": "spin 1s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
