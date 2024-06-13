/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#fbe8a6',
        'orange': '#f4976c',
        'blue-navy': '#303c6c',
        'blue-light1': '#b4dfe5',
        'blue-light2': 'd2fdff',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

