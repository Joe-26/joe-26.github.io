/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indianred': '#E05263',
        'honeydew': '#F1FAEE',
        'nonphotoblue': '#A8DADC',
        'cerulean': '#457B9D',
        'berkeleyblue': '#1D3557',
        'buff': '#DFA06E',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wigglemore: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
        spinslow: "spin 7s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        wigglemore: "wigglemore 2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}

