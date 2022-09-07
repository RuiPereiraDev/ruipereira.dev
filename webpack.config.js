const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/css/main.scss',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new RemoveEmptyScriptsPlugin({}),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].min.css'
        }),
        new CopyPlugin({
            patterns: [
                {from: './src/img/favicon.ico', to: ''},
                {from: './src/archive', to: 'archive'},
                {from: './src/img', to: 'assets/img'}
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Rui Pereira',
            template: './src/index.pug',
            filename: 'index.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            title: 'Page Not Found',
            template: './src/404.pug',
            filename: '404.html',
            chunks: []
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), '...'
        ],
        minimize: true
    },
    output: {
        clean: true
    }
}
