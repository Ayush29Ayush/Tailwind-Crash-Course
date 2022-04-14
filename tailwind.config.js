//! here we can add any customisation
// ./ means current directory and *.html means any html file. So this config file will look and watch for any html file in thr root and it is gonna compile anything thats present in the static style sheet.

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
