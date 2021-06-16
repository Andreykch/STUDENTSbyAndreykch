const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /.(woff|woff2|ttf)$/,
                type: 'asset/inline'
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'STUDENTS by Andreykch',
            template: path.resolve(__dirname, './assets/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        })],
}
