const path = require("path");
const PATHS = {
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/public'),
    assets: 'assets/'
};
const PAGES_DIR = `${PATHS.src}/pug`;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app:`${PATHS.src}/main.js`
    },
    output: {
        path: PATHS.dist,
        filename: "[name].js",
    },
    module: {
        rules:[
        {
            test: /\.pug$/,
            use: ['@webdiscus/pug-loader']
        },
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/'
        },
        {
            test: /\.(png|jpe?g|svg|gif)$/i,
            use: 'file-loader',
            exclude: /node_modules/
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
        //overlay: true,
        port:7123,
        static: "./",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/footer.pug`,
            filename: './footer.html',
            inject: true
        }),        
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/index.pug`,
            filename: './index.html',
            inject: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/img' },
            ]
        }),
    ]
};