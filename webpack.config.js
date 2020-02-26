const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app:"./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath:'/dist',
        filename: "[name].js"
    },
    module: {
        rules:[
        {
            test: /\.pug$/,
            use: ['pug-loader']
        },
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
        new HtmlWebpackPlugin({
            template: "./src/pug/index.pug"            
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),
        new CopyWebpackPlugin([
            { from: 'src/img' }
        ])
    ]
};