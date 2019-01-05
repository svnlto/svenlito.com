const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/work', '/contact'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    };
  }
};
