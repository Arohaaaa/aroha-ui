const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('examples')
      }
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')

    // 设置svg-icon
    config.module
      .rule('svg')
      .exclude.add(resolve('examples/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('examples/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  }
}