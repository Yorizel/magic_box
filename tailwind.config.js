module.exports = {
  important: true,

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      palette: {
        light: '#F0F0F0',
        DEFAULT: '#D8D8D8',
        dark: '#A8A8A8',
        red: '#783030',
      },
      text: {
        DEFAULT: '#0B0404',
        lightText: '#988484',
      },
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },

    extend: {},
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
    },
  },
  plugins: [],
}
