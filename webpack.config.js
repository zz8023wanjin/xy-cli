const path = require('path');

console.log('__dirname', __dirname);
console.log(process.cwd());

// 入口 出口，可以配置式的
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: path.resolve(__dirname, './node_modules/babel-loader')
      },
      exclude: /node_modules/
    }]
  }
}