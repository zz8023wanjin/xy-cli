const path = require('path')

const babelConfig = require('./babel.config');

function devConfig(entry = 'index.js') {
    return {
        entry: path.resolve(process.cwd(), entry),
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            filename: 'bundle.js'
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: path.resolve(__dirname, '../node_modules/babel-loader'),
                    options: babelConfig
                }
            ]
        },
        devServer: {
            static: {
                directory: path.join(process.cwd(), '')
            },
            port: 8080,
            compress: true,
        }
    }
}

module.exports = {
    devConfig
}