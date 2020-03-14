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
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
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