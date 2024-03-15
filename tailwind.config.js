/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
         sm: '640px',
         md: '768px',
         lg: '960px',
         xl: '1330px',
    },
    extend: {
      colors: {
        primary : '#739072',
        secondary: '#808080',
        accent: {
          DEFAULT: '#739072',
          secondary: '#4F6F52',
          tertiary: '#A7B375'
        },
        grey: 'e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(../img/BG.png)',
        testimonials: 'url(../assets/img/testimonials/bg.svg)',
        departemens: 'url(../assets/img/departments/bg.svg)',
        quoteRight: 'url(../assets/icons/testimonials/quote-right.svg)',
        quoteLeft: 'url(../assets/icons/testimonials/quote-left.svg)'
        
      }
    },
  },
  plugins: [],
}
