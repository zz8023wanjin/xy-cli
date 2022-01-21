#!/usr/bin/env node

console.log('##### xunyou-cli start #####');
const webpack = require('webpack');
const path = require('path');

const builtInWebpackConfig = require('../webpack.config');

// 打包
const runWebpackBuild = () => {
    webpack(builtInWebpackConfig, (err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            console.error(info.errors);
            return;
        }

        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        // 打包成功
        console.log('build success!');
    })
}

runWebpackBuild();