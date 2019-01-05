module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-simple-vars': {
      variables() {
        return require('./src/config');
      }
    }
  }
};
