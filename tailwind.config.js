/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glitch': 'matrixFlicker 1.3s infinite step-end, matrixGlow 10s infinite step-end, glitchSkew 2s infinite linear',
      },
      keyframes: {
        matrixFlicker: {
          '0%, 95%': { opacity: '1' },
          '96%': { opacity: '.3' },
          '97%': { opacity: '0.2' },
          '98%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        },
        matrixGlow: {
          '0%': {
            textShadow: '0 199px 5px #ff6f00, 0 0 10px #1e8881'
          },
          '50%': {
            textShadow: '0 0 20px #a55e2e, 0 0 10px #6cc7a8, 0 0 20px #1db529'
          },
          '95%': { opacity: '1' },
          '96%': { opacity: '0' },
          '97%': { opacity: '0.2' },
          '98%': { opacity: '0.1' },
          '100%': {
            opacity: '1',
            textShadow: '0 0 50px #5500ff, 0 0 100px #e157de'
          },
        },
        glitchSkew: {
          '19%': { transform: 'translate(-50%, -50%) skew(0deg)' },
          '20%': { transform: 'translate(-50%, -50%) skew(60deg)' },
          '21%': { transform: 'translate(-50%, -50%) skew(-1.5deg)' },
          '25%, 80%': { transform: 'translate(-50%, -50%) skew(0deg)' },
          '83%': { transform: 'translate(-50%, -50%) skew(-30deg)' },
          '84%, 100%': { transform: 'translate(-50%, -50%) skew(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
