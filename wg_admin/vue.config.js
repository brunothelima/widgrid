const path = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_core': path.resolve(__dirname, '../wg_core/src'),
        'wg_vendors': path.resolve(__dirname, '../wg_vendors'),
        'wg_admin': path.resolve(__dirname, './src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: ` 
          @import "wg_core/assets/scss/_utils.scss"; 
        `},
        postcss: { config: { path: path.resolve(__dirname) } 
      },
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt',
      fallbackLocale: 'pt',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
