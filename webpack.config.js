const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app:"./src/main.js"
    },
    output: {
        path: path.join(__dirname, "/public"),
        filename: "[name].js"
    },
    module: {
        rules:[
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
        }, 
        {
            test: /\.css$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader'
              }
            ]
        }]
    },
    devServer:{
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),        
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'src/img' }
        ])
    ]
};