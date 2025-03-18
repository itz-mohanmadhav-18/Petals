/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        white: '#fff',
        beige: '#d8a48f',
        brown: '#885053',
        maroon: '#16001e',
        'dark-brown': '#2b1e1a',
        'maroon-text': '#450000',
        'light-white': '#f4f3ee',
        'light-brown': '#c08552',
        peach: '#fff9E3',
        gray: '#5f7470',
        black: '#333',
        hover: 'rgba(216, 164, 143,0.5)',
        'light-black': 'rgb(76, 76, 76)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgb(22, 0, 30) 0%, rgb(117, 80, 85) 49%, rgb(22, 0, 30) 100%)',
        'vision1': "url('./src/assets/vision1.jpeg')",
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        enter: 'enter 1s ease-in-out',
        heading_appear: 'heading_appear 2s infinite',
        typing: 'typing 2s steps(22) forwards',
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-x': 'rotateX 10s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        rotateX: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%': { transform: 'translateY(30px)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(30px)' },
        },
        enter: {
          '0%': { transform: 'translateX(400px)'},
          '80%': { transform: 'translateX(-60px)'},
          '100%': { opacity: 'translateX(0px)' },
        },
        heading_appear: {
          "0%": { backgroundSize: "0% 100%" },
          "100%": { backgroundSize: "100% 100%" },
        }, 
        typing: {
          "0%" : { width: "0" },
          "100%" : { width: "100%" },
        },
        blink: {
          "50%": { borderColor: 'transparent' },
        },
      },
    },
  },
};
