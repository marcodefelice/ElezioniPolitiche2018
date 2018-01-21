// https://nodejs.org/api/path.html
const { resolve, join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// Constant with our paths
const paths = {
    DIST: resolve(__dirname, 'dist'),
    SRC: resolve(__dirname, 'src'),
    CLIENT: resolve(__dirname, 'src', 'client'),
    IMAGES: resolve(__dirname, 'src', 'assets', 'images'),
    FONTS: resolve(__dirname, 'src', 'assets', 'fonts'),
};

// Webpack configuration
module.exports = {
    entry: paths.CLIENT,
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: [paths.IMAGES],
                exclude: [paths.FONTS],
                use: [
                    'file-loader',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: [paths.IMAGES],
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    devServer: {
        open: true,
        hot: true,
        stats: {
            colors: true,
            assets: true,
            modules: false
        }
    },
};
