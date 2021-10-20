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
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],

    options: {
      whitelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12']
    }
  },
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