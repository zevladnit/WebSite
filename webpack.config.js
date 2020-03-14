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
            template: `${PAGES_DIR}/footer.pug`,
            filename: './footer.html',
            inject: true
        }),        
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/index.pug`,
            filename: './index.html',
            inject: false
        }),
        new CopyWebpackPlugin([
            { from: 'src/img' }
        ])
    ]
};