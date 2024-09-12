/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-900': '#512051',
        'purple-600': '#927B91',
      },
    },
  },
  plugins: [],
}

