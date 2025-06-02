/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Path to your components
  ],
  theme: {
    extend: {
      keyframes: {
        'carousel-animate-vertical': {
          '0%': { transform: 'translateY(100%) scale(0.5)', opacity: '0' },
          '33%': { transform: 'translateY(100%) scale(0.7)', opacity: '0.4' },
          '66%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100%) scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        'carousel-animate': 'carousel-animate-vertical 27s linear infinite',
      },
    },
  },
  plugins: [],
}


