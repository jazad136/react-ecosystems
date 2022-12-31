const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        todotest: './src/todotest.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle_[chunkhash].js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public/'),
        },
        port: 3000,
        devMiddleware: {
            publicPath: 'http://localhost:3000/dist/'
        },
        hot: 'only'
    } ,
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        chunks: ['main']
      }),
      new HtmlWebpackPlugin({
        filename: 'todotest.html',
        template: 'public/todotest.html',
        chunks: ['todotest']
      })
    ]
}