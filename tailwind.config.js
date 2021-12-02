module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
