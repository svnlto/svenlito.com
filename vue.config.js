const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  lintOnSave: true,
  baseUrl: process.env.NODE_ENV === 'production' ? process.env.URL : '/',
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/', '/contact'],
          {}
        )
      ]
    };
  }
};
