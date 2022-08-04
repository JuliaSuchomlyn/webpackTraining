const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const WebpackDevServer = require('webpack-dev-server');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',        
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: '5555',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //             {
        //                 from: pach.resolve(__dirname, 'src/favicon.ico'),
        //                 to: path.resolve(__dirname, 'dist')
        //             }
        //     }
        // ])
    ], 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test:/\.xml$/,
                use: ['xml-loader']
            },
            {
                test:/\.csv$/,
                use: ['csv-loader']
            }
        ]
    },
};