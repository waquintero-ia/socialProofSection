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
        'purple-200': '#F7F2F7',
        'purple-100': '#EE69A4',
      },
    },
  },
  plugins: [],
}

