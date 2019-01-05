module.exports = {
  lintOnSave: true,
  baseUrl: process.env.NODE_ENV === 'production' ? process.env.URL : '/',
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  }
};
