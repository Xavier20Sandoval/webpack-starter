const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                sources: false
            }

        }, {
            test: /\.css$/,
            exclude: /style.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /style.css$/,
            use: [MiniCssExtract.loader, 'css-loader']

        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'
        }]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App xavier',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css', //Crea un nuevo hash(lo ayuda a no mantener al cache al cliente)
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ],
}