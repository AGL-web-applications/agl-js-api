const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        AGLJS: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyPlugin([
            {
                from: 'package.json',
                flatten: true
            }
        ])
    ],
    module: {
        rules: []
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}; 