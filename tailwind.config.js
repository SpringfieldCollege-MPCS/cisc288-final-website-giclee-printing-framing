/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {
      colors: {
        primary: '#650505',
        background: '#FFF8E4',
        ribbon: '#D68C8C',
        darkRibbon: '#BE1F3C',
        tan: '#DBCDC5'
      },
      fontFamily: {
      navtext: ['Inter', 'sans-serif'],
      bodytext: 'Faustina',
      secheader: 'Merriweather',
      buttontext: 'IBM Plex Sans Thai Looped'
      }
    }

  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};