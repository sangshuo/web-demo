const webpack = require('webpack')
const { resolve, join } = require('path')
const HTmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: resolve(__dirname,'dist'),
         filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /(node_modules|bower_components)/, // 千万别忘记添加exclude选项,不然运行可能会报错
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {test: /\.svg$/, use: ['file-loader']},
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HTmlWebpackPlugin(
            {
                filename: "index.html",
                template: "./public/index.html"
            }
        ),
        // new AddAssetHtmlPlugin({
        //     filepath: resolve('./dist/bundle.js'), // 这个路径是你的dll文件路径
        //     includeSourcemap: false  // 这里是因为我开启了sourcemap。 不这么写会报错。
        // })
    ],
    mode: "production" //production  development
}
