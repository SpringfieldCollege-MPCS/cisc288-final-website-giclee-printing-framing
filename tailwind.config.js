/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {
      colors: {
        'primary': '#650505',
        'background': '#FFF8E4',
        'ribbon': '#D68C8C',
        'darkRibbon': '#BE1F3C',
        'tan': '#D4C0AD',
        'textcolor': '#2E180F',
        'storebg': '#D68C8C'
      },
      fontFamily: {
        'navtext': ['Inter', 'sans-serif'],
        'bodytext': ['Faustina', 'serif'],
        'secheader': ['Merriweather','serif'],
        'buttontext': ['IBM Plex Sans','serif']
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px'
      },
      rotate: {
        '67.5': '67.5deg',
        '135' : '135deg',
        '225': '225deg'
      }
    }

  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};