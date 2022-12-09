/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
    {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
        appear:{
          '0%': { opacity: '0', scale:'0'},
          '50%': { opacity: '0.5', scale:'0.5' },
          '100%': { opacity: '1', scale:'1' },
        },
        slideRight:{
          '0%':{opacity:0, transform:'translateX(100px)'},
          '100%':{opacity:1, transform:'translateX(0)'},
        }
      },
      
      animation:{
      'slideDown':'slideDown 1s linear',
      'appear':'appear 1s linear forwards',
      'slideRight':'slideRight 2s ease-in-out forwards'
      },
    },
  },
  plugins: [
  
  ],
}