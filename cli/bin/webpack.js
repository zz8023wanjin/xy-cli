const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const { devConfig } = require('./webpack.config')

function devWebpack(entry) {
    const config = devConfig(entry);
    const compiler = webpack(config);
    const devServerOptions = { ...config.devServer, open: true };
    const server = new WebpackDevServer(devServerOptions, compiler);

    server.startCallback(() => {
        console.log('Successfully started server on http://localhost:8080');
    });
}

module.exports = {
    devWebpack
}