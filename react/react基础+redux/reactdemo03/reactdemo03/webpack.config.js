//创建webpack.config.js
var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:'./src/index.js', //入口文件
    output:{
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        path:  path.resolve(__dirname, 'dist'), //输出位置
        filename:'build.js' //输入文件
    },
    module:{
        rules: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.jsx$/, loader: "jsx-loader"},
            {test: /.css$/, loader: 'style!css'},
            {test: /\.svg/, use: ['file-loader']},
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
}
