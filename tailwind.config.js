function gridCols() {
  let base = "grid-cols-";
  var list = [];
  for (i = 1; i <= 12; i ++) {
    list.push(base + i);
  }

  return list;
}

module.exports = {
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],

    options: {
      safelist: gridCols(),
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333'
      }
    },
  },
  variants: {},
  plugins: [],
}