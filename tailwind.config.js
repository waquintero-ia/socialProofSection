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
      spacing:{
        1110: '69.375rem',
        540: '33.75rem',
        445: '27.8125rem',
        248: '15.5rem',
        234: '14.625rem',
        116.5: '7.28125rem',
        82: '5.125rem',
        99: '6.1875rem',
        78: '4.875rem',
        50: '3.125rem',
        49: '3.0625rem',
        39: '2.4375rem',
        35: '2.1875rem',
        30: '1.875rem',
        23: '1.4375rem',
        15: '0.9375rem',

      },
      fontSize: {
        56: '3.5rem',
        48: '3rem',
        40: '2.5rem',
        32: '2rem',
        18: '1.125rem',
        17: '1.0625rem',
        14: '0.875rem',
        12: '0.75rem',
      },
      lineHeight: {
        200: '200%',
        155: '155%',
        150: '150%',
        140: '140%',
        125: '125%',
        120: '120%',
        100: '100%',
        85: '85%',
        80: '80%',
      },
    },
  },
  plugins: [],
}

